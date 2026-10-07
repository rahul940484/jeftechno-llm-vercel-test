import re

with open("src/app/HomeClient.js", "r") as f:
    content = f.read()

# 1. Add imports
import_str = """import BlogsSection from "./HomePageSections/BlogSection";
import OurIndustriesSection from "./HomePageSections/Industry";
import SEOContent from "./HomePageSections/SEOContent";
import HomeFAQ from "./HomePageSections/HomeFAQ";
"""
content = content.replace('import BlogsSection from "./HomePageSections/BlogSection";\nimport OurIndustriesSection from "./HomePageSections/Industry";', import_str)

# 2. Fix the H1 and AEO text in the banner
old_h1_block = """            <div className="inset-y-2/3 xl:mt-[2%] section-container flex relative flex-col self-center max-md:mt-10 max-md:max-w-full ">
              <h1 className="2xl:text-6xl lg:text-4xl md:text-3xl text-3xl font-bold h-32 md:h-20 2xl:h-36 my-auto tracking-wider text-white">
                THINK ELECTRICAL, <br />
                THINK JEF
              </h1>
            </div>"""

new_h1_block = """            <div className="inset-y-[45%] xl:mt-[2%] section-container flex relative flex-col self-center max-md:mt-10 max-md:max-w-full ">
              <h1 className="2xl:text-5xl lg:text-4xl md:text-3xl text-3xl font-bold h-auto my-auto tracking-wider text-white uppercase">
                Electrical Engineering Consulting Company In India & The Middle East | JEF Techno
              </h1>
              <p className="text-white mt-6 max-w-4xl text-sm lg:text-base hidden md:block opacity-90 leading-relaxed">
                JEF Techno provides electrical engineering consulting company for industrial, commercial and utility facilities across India, the Middle East (UAE, Saudi Arabia, Qatar, Oman, Kuwait, Bahrain) and Southeast Asia (Singapore, Malaysia), designed and installed in compliance with IS/IEC 62305 and IS 3043. Founded in 1994 and headquartered in Bengaluru, the company has delivered projects for clients including Amazon, L&T and Syngenta, combining site risk assessment, engineering design, installation and a patented AI-based automated safety audit tool for ongoing compliance monitoring.
              </p>
            </div>"""

content = content.replace(old_h1_block, new_h1_block)

# 3. Inject SEOContent and HomeFAQ before the closing tag
old_footer = """      <BlogsSection />
    </>
  );
}"""

new_footer = """      <BlogsSection />
      <SEOContent />
      <HomeFAQ />
    </>
  );
}"""

content = content.replace(old_footer, new_footer)

with open("src/app/HomeClient.js", "w") as f:
    f.write(content)
