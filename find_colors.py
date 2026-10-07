import os
import re

src_dir = '/home/yash/Obrive/JEFTECHNO.COM/src'
hex_regex = re.compile(r'#[0-9a-fA-F]{3,6}\b')

colors = set()

for root, _, files in os.walk(src_dir):
    for file in files:
        if file.endswith(('.js', '.jsx', '.tsx', '.ts', '.css')):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
                matches = hex_regex.findall(content)
                for m in matches:
                    colors.add(m.upper())

for c in sorted(colors):
    # check if it's reddish
    if len(c) == 7:
        r = int(c[1:3], 16)
        g = int(c[3:5], 16)
        b = int(c[5:7], 16)
        if r > 150 and g < 100 and b < 100:
            print(f"Reddish: {c}")
    elif len(c) == 4:
        r = int(c[1]*2, 16)
        g = int(c[2]*2, 16)
        b = int(c[3]*2, 16)
        if r > 150 and g < 100 and b < 100:
            print(f"Reddish: {c}")
