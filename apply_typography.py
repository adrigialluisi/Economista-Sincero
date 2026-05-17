import os
import re
import glob

# Typography rules from user request
RULES = {
    'EYEBROW': [
        'font-family: var(--font-body);',
        'font-weight: var(--fw-semibold);',
        'font-size: var(--text-eyebrow);',
        'text-transform: uppercase;',
        'letter-spacing: var(--ls-eyebrow);',
        'color: var(--accent);'
    ],
    'H1': [
        'font-family: var(--font-headline);',
        'font-weight: var(--fw-headline);',
        'font-size: var(--text-hero);',
        'line-height: var(--lh-hero);',
        'text-transform: uppercase;'
    ],
    'H2': [
        'font-family: var(--font-headline);',
        'font-weight: var(--fw-headline);',
        'font-size: var(--text-h2);',
        'line-height: var(--lh-h2);',
        'text-transform: uppercase;'
    ],
    'H3': [
        'font-family: var(--font-headline);',
        'font-weight: var(--fw-headline);',
        'font-size: var(--text-h3);',
        'line-height: var(--lh-h2);',
        'text-transform: uppercase;'
    ],
    'BODY': [
        'font-family: var(--font-body);',
        'font-weight: var(--fw-body);',
        'font-size: var(--text-body);',
        'line-height: var(--lh-body);'
    ],
    'BUTTON': [
        'font-family: var(--font-body);',
        'font-weight: var(--fw-semibold);',
        'font-size: var(--text-button);',
        'text-transform: uppercase;',
        'letter-spacing: var(--ls-button);'
    ],
    'CAPTION': [
        'font-family: var(--font-body);',
        'font-weight: var(--fw-body);',
        'font-size: var(--text-caption);'
    ]
}

# Mapping specific class names or substrings to roles
CLASS_MAPPINGS = {
    'eyebrow': 'EYEBROW',
    'tag': 'EYEBROW',
    'label': 'EYEBROW',
    
    'headline': 'H2', # default to H2
    'title': 'H2',
    'quote': 'H2',
    'revealPre': 'H2',
    'revealLine': 'H2',
    'revealGreen': 'H2',
    'priceCurrent': 'H2',
    'statValue': 'H2',
    'days': 'H2',
    
    'pillarTitle': 'H3',
    'question': 'H3',
    'name': 'H3',
    
    'subheadline': 'BODY',
    'context': 'BODY',
    'narrative': 'BODY',
    'closing': 'BODY',
    'description': 'BODY',
    'pillarText': 'BODY',
    'bio': 'BODY',
    'testimonialText': 'BODY',
    'anchor': 'BODY',
    'priceList': 'BODY',
    'text': 'BODY',
    'answer': 'BODY',
    'path': 'BODY',
    'summary': 'BODY',
    'link': 'BODY',
    
    'ctaBtn': 'BUTTON',
    'cta': 'BUTTON',
    
    'microcopy': 'CAPTION',
    'trustItem': 'CAPTION',
    'fcTop': 'CAPTION',
    'fcBottom': 'CAPTION',
    'credential': 'CAPTION',
    'role': 'CAPTION',
    'statLabel': 'CAPTION',
    'priceNote': 'CAPTION',
    'priceComparison': 'CAPTION',
    'priceMonthly': 'CAPTION',
    'copyright': 'CAPTION'
}

def get_role(css_class, filename):
    css_class = css_class.replace('.', '').split(':')[0].strip()
    if filename == 'Hero.module.css' and css_class == 'headline':
        return 'H1'
    if filename == 'Nav.module.css' and css_class == 'link':
        return 'BUTTON'
    return CLASS_MAPPINGS.get(css_class, None)

css_files = glob.glob('src/components/**/*.module.css', recursive=True)

for file in css_files:
    filename = os.path.basename(file)
    with open(file, 'r') as f:
        content = f.read()

    blocks = re.findall(r'(\.[a-zA-Z0-9_-]+.*?\{)([^}]+)(\})', content, re.DOTALL)
    
    new_content = content
    for prefix, body, suffix in blocks:
        # Check if this class has a mapped role
        class_name = re.match(r'\.([a-zA-Z0-9_-]+)', prefix).group(1)
        role = get_role(class_name, filename)
        
        if not role:
            continue
            
        # We need to replace typography lines in body
        # properties to remove:
        props_to_remove = ['font-family', 'font-weight', 'font-size', 'line-height', 'text-transform', 'letter-spacing']
        if role == 'EYEBROW':
            props_to_remove.append('color') # Eyebrow overrides color
            
        lines = body.split('\n')
        new_lines = []
        for line in lines:
            stripped = line.strip()
            should_remove = False
            for p in props_to_remove:
                if stripped.startswith(p + ':'):
                    should_remove = True
                    break
            if not should_remove:
                new_lines.append(line)
        
        # Now add the new rules at the top of the block
        rules = RULES[role]
        indent = "  "
        rules_str = "\n".join([indent + r for r in rules])
        
        # reconstruct body
        # find where to insert (after first {)
        
        # We'll just put rules_str at the beginning of new_lines (which has empty line at pos 0 usually)
        if len(new_lines) > 0 and new_lines[0].strip() == '':
            new_lines.insert(1, rules_str)
        else:
            new_lines.insert(0, rules_str)
            
        new_body = "\n".join(new_lines)
        
        # Replace in content
        # Be careful with replace(), it might match multiple if blocks are identical, but bodies are usually unique.
        old_block = prefix + body + suffix
        new_block = prefix + new_body + suffix
        new_content = new_content.replace(old_block, new_block, 1)

    with open(file, 'w') as f:
        f.write(new_content)

print("Typography applied successfully.")
