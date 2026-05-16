import os

def extract_block(filename, lang):
    with open(filename, 'r') as f:
        content = f.read()
    
    blocks = []
    in_block = False
    current_block = []
    for line in content.split('\n'):
        if line.startswith(f'```{lang}'):
            in_block = True
            continue
        elif in_block and line.startswith('```'):
            in_block = False
            blocks.append('\n'.join(current_block))
            current_block = []
            continue
        if in_block:
            current_block.append(line)
            
    return blocks[0] if blocks else None

# Overwrite complete files
files_to_overwrite = [
    ('SPEC-OFERTA.md', 'src/components/Offer/index.tsx', 'tsx'),
    ('SPEC-OFERTA.md', 'src/components/Offer/Offer.module.css', 'css'),
    ('SPEC-DOR.md', 'src/components/Pain/index.tsx', 'tsx'),
    ('SPEC-DOR.md', 'src/components/Pain/Pain.module.css', 'css'),
    ('SPEC-MOMENTO.md', 'src/components/Moment/index.tsx', 'tsx'),
    ('SPEC-MOMENTO.md', 'src/components/Moment/Moment.module.css', 'css'),
    ('SPEC-NAV.md', 'src/components/Nav/index.tsx', 'tsx'),
]

for spec, dest, lang in files_to_overwrite:
    code = extract_block(spec, lang)
    if code:
        with open(dest, 'w') as f:
            f.write(code)
        print(f"Updated {dest}")
    else:
        print(f"Failed to find {lang} block in {spec}")
