import os
import re
import glob

css_files = glob.glob('src/components/**/*.module.css', recursive=True)

for file in css_files:
    with open(file, 'r') as f:
        content = f.read()

    # We need to find places where we have .eyebrow { ... } missing the closing brace
    # and the next thing is .eyebrow::before {
    # Specifically:
    #   gap: 0.75rem;
    #   width: fit-content;
    # 
    # 
    # .eyebrow::before {
    
    # Let's replace any instance of `fit-content;\n\n\n\.(eyebrow|label|tag)::before` 
    # with `fit-content;\n}\n\n\.\1::before`
    
    content = re.sub(r'(fit-content;\n+)(\.(eyebrow|label|tag)::before)', r'fit-content;\n}\n\n\2', content)
    
    # Wait, some might not have `width: fit-content;`.
    # Let's look at `SocialProof.module.css`.
    # It might have something else at the end.
    with open(file, 'w') as f:
        f.write(content)
