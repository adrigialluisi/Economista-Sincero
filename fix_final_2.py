import re
import glob

files = glob.glob('src/components/**/*.module.css', recursive=True)

for f in files:
    with open(f, 'r') as file:
        content = file.read()
    
    # regex: match `.eyebrow { ... }` that is unclosed.
    # We find .eyebrow, .label, .tag, .tagline followed by no `}` until the next `.something::before` or `.something`
    # Basically we just need to append `\n}` before `\n\n\.eyebrow::before`, `\n\n\.label::before`, `\n\n\.tag::before`, `\n\n\.tagline::before`
    
    # Specifically for `.eyebrow::before`
    content = re.sub(r'(gap:\s*[\w.]+;\n+)(\.eyebrow::before)', r'\1}\n\n\2', content)
    content = re.sub(r'(width:\s*[\w-]+;\n+)(\.eyebrow::before)', r'\1}\n\n\2', content)
    
    content = re.sub(r'(gap:\s*[\w.]+;\n+)(\.label::before)', r'\1}\n\n\2', content)
    content = re.sub(r'(width:\s*[\w-]+;\n+)(\.label::before)', r'\1}\n\n\2', content)
    
    content = re.sub(r'(gap:\s*[\w.]+;\n+)(\.tag::before)', r'\1}\n\n\2', content)
    content = re.sub(r'(width:\s*[\w-]+;\n+)(\.tag::before)', r'\1}\n\n\2', content)
    
    content = re.sub(r'(gap:\s*[\w.]+;\n+)(\.tagline::before)', r'\1}\n\n\2', content)
    content = re.sub(r'(width:\s*[\w-]+;\n+)(\.tagline::before)', r'\1}\n\n\2', content)

    # Some might end with `line-height: var(--lh-body);` like `Footer.module.css` tagline
    content = re.sub(r'(line-height:\s*var\(--lh-body\);\n+)(\.tagline::before)', r'\1}\n\n\2', content)

    # If it's just the end of the block and next is `.links` or something (like in Footer maybe)
    # Let's handle it generally: find `.eyebrow { ...` and if there's NO `}` before the next `.`
    # A safer way: find `.eyebrow {` to the next double newline, and put `}` there.
    # Example: re.sub(r'(\.eyebrow\s*\{[^}]*?[^}])(\n\n\.)', r'\1\n}\2', content)
    # Let's apply this safe regex:
    for cls in ['eyebrow', 'label', 'tag', 'tagline']:
        content = re.sub(r'(\.' + cls + r'\s*\{[^}]*?[^}])(\n\n\.)', r'\1\n}\2', content)

    with open(f, 'w') as file:
        file.write(content)
