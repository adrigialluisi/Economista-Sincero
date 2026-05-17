import os
import re
import glob

def get_font_size_var(val_str):
    if 'var' in val_str:
        return val_str
    
    nums = re.findall(r'[0-9]+(?:\.[0-9]+)?', val_str)
    if not nums:
        return 'var(--text-body)'
        
    val = float(nums[0])
    
    if 'clamp' in val_str or val >= 2.5:
        return 'var(--text-hero)' if val >= 3 else 'var(--text-h2)'
    elif val >= 1.5:
        return 'var(--text-h3)'
    elif val >= 1.0625:
        return 'var(--text-body-lg)'
    elif val >= 0.9375:
        return 'var(--text-body)'
    elif val >= 0.8125:
        return 'var(--text-small)'
    else:
        return 'var(--text-caption)'

def get_line_height_var(val_str):
    if 'var' in val_str:
        return val_str
    
    nums = re.findall(r'[0-9]+(?:\.[0-9]+)?', val_str)
    if not nums:
        return 'var(--lh-body)'
        
    val = float(nums[0])
    
    if val <= 3:
        return 'var(--lh-body)'
    elif val > 50:
        return 'var(--lh-hero)' if val > 60 else 'var(--lh-h2)'
    else:
        return 'var(--lh-body)'

css_files = glob.glob('src/components/**/*.module.css', recursive=True)

for file in css_files:
    with open(file, 'r') as f:
        lines = f.readlines()
        
    new_lines = []
    for line in lines:
        if 'font-size:' in line and 'var(' not in line:
            m = re.search(r'font-size:\s*([^;]+);', line)
            if m:
                val_str = m.group(1)
                new_val = get_font_size_var(val_str)
                line = re.sub(r'font-size:\s*[^;]+;', f'font-size: {new_val};', line)
        
        if 'line-height:' in line and 'var(' not in line:
            m = re.search(r'line-height:\s*([^;]+);', line)
            if m:
                val_str = m.group(1)
                new_val = get_line_height_var(val_str)
                line = re.sub(r'line-height:\s*[^;]+;', f'line-height: {new_val};', line)
            
        new_lines.append(line)
        
    with open(file, 'w') as f:
        f.writelines(new_lines)

print("Hardcoded typography replaced successfully.")
