import re
import json
import os

with open("src/app/blogs/MainBlogPage.js", "r", encoding="utf-8") as f:
    content = f.read()

# Find all blog entries
matches = re.findall(r"'?(blog\d+)'?:\s*{[\s\S]*?canonical:\s*\"[^\"]*\/blogs\/([^\"]+)\"", content)

mapping = {}
for blog_id, slug in matches:
    mapping[blog_id] = slug
    
print(f"Found {len(mapping)} mappings")

# Now replace in MainBlogPage.js
new_content = content
for blog_id, slug in mapping.items():
    # Replace the key
    new_content = re.sub(r"('?)" + blog_id + r"('?):\s*\{", r"\g<1>" + slug + r"\g<2>: {", new_content)

with open("src/app/blogs/MainBlogPage.js", "w", encoding="utf-8") as f:
    f.write(new_content)

print("Updated MainBlogPage.js")

# Now replace in BlogSection.tsx
with open("src/app/HomePageSections/BlogSection.tsx", "r", encoding="utf-8") as f:
    blog_section = f.read()

for blog_id, slug in mapping.items():
    blog_section = blog_section.replace(f"/blogs/{blog_id}", f"/blogs/{slug}")
    blog_section = blog_section.replace(f"blogs/{blog_id}", f"blogs/{slug}")

with open("src/app/HomePageSections/BlogSection.tsx", "w", encoding="utf-8") as f:
    f.write(blog_section)

print("Updated BlogSection.tsx")
