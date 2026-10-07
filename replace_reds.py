import os
import re

src_dir = '/home/yash/Obrive/JEFTECHNO.COM/src'
red_pattern = re.compile(r'#(C61F26|c61f26|C0392B|c0392b|A93226|a93226|BD222A|bd222a)\b', re.IGNORECASE)

for root, _, files in os.walk(src_dir):
    for file in files:
        if file.endswith(('.js', '.jsx', '.tsx', '.ts')):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            new_content = red_pattern.sub('#FF0000', content)
            
            if new_content != content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Updated {filepath}")
