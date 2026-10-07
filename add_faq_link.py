import os
import glob
import re

files = [
    "src/app/Products/clps-products/sections/FAQ.tsx",
    "src/app/Products/earthing-studies/sections/FAQ.tsx",
    "src/app/Products/ese-lightning-protection/sections/FAQ.tsx",
    "src/app/Products/surge-protective-devices/sections/FAQ.tsx",
    "src/app/audit-services/earthing-health-assessment/sections/FAQ.tsx",
    "src/app/audit-services/electrical-and-fire-safety-audit/sections/FAQ.tsx",
    "src/app/audit-services/instrumentation-system/sections/FAQ.tsx",
    "src/app/audit-services/lightning-protection-system-adequacy-audit/sections/FAQ.tsx",
    "src/app/audit-services/power-quality-studies-and-analysis-services/sections/FAQ.tsx",
    "src/app/power-system-studies/sections/FAQ.tsx"
]

base_dir = "/home/yash/Obrive/JEFTECHNO.COM/"

button_html = """            })}
          </div>
          <div className="flex justify-center mt-8">
            <a href="/faq" className="bg-[#FF0000] text-white px-8 py-3 rounded-md font-bold uppercase tracking-wider hover:bg-red-700 transition-colors">
              Read More FAQs
            </a>
          </div>"""

for f in files:
    filepath = os.path.join(base_dir, f)
    if os.path.exists(filepath):
        with open(filepath, "r") as file:
            content = file.read()
        
        # Check if already added
        if "Read More FAQs" in content:
            print(f"Skipping {f}, already added.")
            continue
            
        # Try to replace the exact pattern
        # The pattern is usually `            })}\n          </div>`
        pattern = re.compile(r'            \}\)\}\n          </div>')
        if pattern.search(content):
            new_content = pattern.sub(button_html, content)
            with open(filepath, "w") as file:
                file.write(new_content)
            print(f"Updated {f}")
        else:
            print(f"Could not find exact pattern in {f}. Trying more flexible regex...")
            # More flexible regex that ignores indentation
            pattern2 = re.compile(r'\}\)\}\s*<\/div>')
            if pattern2.search(content):
                def replace_func(match):
                    return match.group(0) + """\n          <div className="flex justify-center mt-8">\n            <a href="/faq" className="bg-[#FF0000] text-white px-8 py-3 rounded-md font-bold uppercase tracking-wider hover:bg-red-700 transition-colors">\n              Read More FAQs\n            </a>\n          </div>"""
                
                new_content = pattern2.sub(replace_func, content, count=1)
                with open(filepath, "w") as file:
                    file.write(new_content)
                print(f"Updated {f} using flexible regex")
            else:
                print(f"FAILED to update {f}")
    else:
        print(f"File not found: {f}")

