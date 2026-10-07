import fs from "fs";

const content = fs.readFileSync("src/app/blogs/MainBlogPage.js", "utf8");

const startMatch = content.match(/export const blogData = \{/);
if (!startMatch) {
    console.error("Could not find blogData in MainBlogPage.js");
    process.exit(1);
}

const startIndex = startMatch.index;
// We need to find the matching closing brace for blogData.
// It ends right before `const blogPosts = Object.keys(blogData).map(id => ({`
const endMatch = content.match(/};\n\n\nconst blogPosts/);
let endIndex;
if (endMatch) {
    endIndex = endMatch.index + 2; // include `};`
} else {
    // try another match
    const endMatch2 = content.match(/};\n+const blogPosts/);
    if (endMatch2) endIndex = endMatch2.index + 2;
}

if (!endIndex) {
    console.error("Could not find end of blogData");
    process.exit(1);
}

const blogDataString = content.substring(startIndex, endIndex);

fs.writeFileSync("src/app/blogs/blogData.js", blogDataString + "\n");

// Replace blogData in MainBlogPage.js with import
const newContent = content.substring(0, startIndex) + "import { blogData } from './blogData';\n" + content.substring(endIndex);

fs.writeFileSync("src/app/blogs/MainBlogPage.js", newContent);
console.log("Extracted blogData to blogData.js");
