import os

def replace_in_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    new_content = content
    
    # Replace URLs and paths
    replacements = [
        ('"/blog"', '"/blogs"'),
        ("'/blog'", "'/blogs'"),
        ("`/blog`", "`/blogs`"),
        ('"/blog/', '"/blogs/'),
        ("'/blog/", "'/blogs/"),
        ("`/blog/", "`/blogs/"),
        ('https://www.jeftechno.com/blog', 'https://www.jeftechno.com/blogs'),
        ('https://www.jefuae.com/blog', 'https://www.jefuae.com/blogs')
    ]

    for old, new in replacements:
        new_content = new_content.replace(old, new)

    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filepath}")

def walk_and_replace(dirpath):
    for root, _, files in os.walk(dirpath):
        for file in files:
            if file.endswith(('.js', '.jsx', '.ts', '.tsx')):
                replace_in_file(os.path.join(root, file))

if __name__ == '__main__':
    walk_and_replace('src')
