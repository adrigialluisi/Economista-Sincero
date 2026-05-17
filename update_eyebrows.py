import re
import glob

files = glob.glob('src/components/**/*.module.css', recursive=True)

for f in files:
    with open(f, 'r') as file:
        content = file.read()

    # We need to change the color of the text to var(--brand-primary)
    # and update the ::before background.

    def replace_main(match):
        block = match.group(0)
        # Update color if exists, else add it
        if 'color:' in block:
            block = re.sub(r'color:\s*[^;]+;', 'color: var(--brand-primary);', block)
        else:
            block = block.replace('{', '{\n  color: var(--brand-primary);')
        return block

    content = re.sub(r'\.(eyebrow|label|tag|tagline)\s*\{[^}]*\}', replace_main, content)

    def replace_before(match):
        block = match.group(0)
        # We replace width, height, and background
        block = re.sub(r'width:\s*[^;]+;', 'width: 48px;', block)
        block = re.sub(r'height:\s*[^;]+;', 'height: 1px;', block)
        block = re.sub(r'background:\s*[^;]+;', 'background: linear-gradient(90deg, rgba(42, 147, 69, 0) 0%, var(--brand-primary) 100%);', block)
        
        # If it didn't have background, add it
        if 'background:' not in block:
             block = block.replace('{', '{\n  width: 48px;\n  height: 1px;\n  background: linear-gradient(90deg, rgba(42, 147, 69, 0) 0%, var(--brand-primary) 100%);')

        return block

    content = re.sub(r'\.(eyebrow|label|tag|tagline)::before\s*\{[^}]*\}', replace_before, content)

    with open(f, 'w') as file:
        file.write(content)
