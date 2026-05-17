import os
import re
import glob

css_files = glob.glob('src/components/**/*.module.css', recursive=True)

for file in css_files:
    with open(file, 'r') as f:
        content = f.read()

    # We look for \.eyebrow { ... display: inline-flex; ... } and replace inline-flex with flex and add flex-direction
    # Actually, simpler: replace `display: inline-flex;` inside .eyebrow, .label, .tag with the correct flex properties
    # Let's just find the blocks for .eyebrow, .label, .tag
    
    def replacer(match):
        block_content = match.group(2)
        # remove existing display, align-items, flex-direction
        block_content = re.sub(r'\s*display:\s*[^;]+;', '', block_content)
        block_content = re.sub(r'\s*flex-direction:\s*[^;]+;', '', block_content)
        block_content = re.sub(r'\s*align-items:\s*[^;]+;', '', block_content)
        
        # add the responsive properties by doing it mobile-first
        # Actually it's easier to just add the base mobile properties
        new_block = "\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;" + block_content
        return match.group(1) + new_block + match.group(3)
        
    content = re.sub(r'(\.(eyebrow|label|tag)(?!:)[^{]*\{)([^}]+)(\})', replacer, content)
    
    # Check if we need to add a media query
    if '.eyebrow' in content or '.label' in content or '.tag' in content:
        # Check if media query already exists
        classes = []
        if '.eyebrow' in content and 'flex-direction: column' in content: classes.append('.eyebrow')
        if '.label' in content and 'flex-direction: column' in content: classes.append('.label')
        if '.tag' in content and 'flex-direction: column' in content: classes.append('.tag')
        
        if classes:
            mq = "\n@media (min-width: 768px) {\n  " + ", ".join(classes) + " {\n    flex-direction: row;\n    align-items: center;\n  }\n}\n"
            if mq.strip() not in content:
                content += "\n" + mq

    with open(file, 'w') as f:
        f.write(content)

print("Eyebrows updated for mobile.")
