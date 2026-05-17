import re

files = [
    'src/components/Footer/Footer.module.css',
    'src/components/Guarantee/Guarantee.module.css',
    'src/components/Hero/Hero.module.css',
    'src/components/Moment/Moment.module.css',
    'src/components/Offer/Offer.module.css',
    'src/components/Authority/Authority.module.css',
    'src/components/Closing/Closing.module.css',
    'src/components/FAQ/FAQ.module.css',
    'src/components/SocialProof/SocialProof.module.css'
]

for f in files:
    with open(f, 'r') as file:
        content = file.read()
    
    # regex to find `.eyebrow { ... \n\n` missing `}`
    # we replace `\n\n\n\.` with `\n}\n\n\.` but ONLY if the previous rule doesn't have a `}`
    # Safer: just use regex to match .eyebrow { ... } up to the next \n\n
    
    # We will search for all blocks missing }
    # A block starts with .something { and has no } until the next .something { or @media
    content = re.sub(r'(\.(eyebrow|label|tag|tagline)(?!:)[^{]*\{[^}]*?)(?=\n\n\.)', r'\1\n}', content)
    content = re.sub(r'(\.(eyebrow|label|tag|tagline)(?!:)[^{]*\{[^}]*?)(?=\n\n/\*)', r'\1\n}', content)
    content = re.sub(r'(\.(eyebrow|label|tag|tagline)(?!:)[^{]*\{[^}]*?)(?=\n\n@)', r'\1\n}', content)

    with open(f, 'w') as file:
        file.write(content)
