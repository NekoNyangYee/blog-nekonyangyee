const fs = require("fs");
const path = require("path");

const getFileNames = () => {
  const postsDirectory = path.join(process.cwd(), "posts");
  return fs.readdirSync(postsDirectory);
};

const extractFrontmatter = (filecontent) => {
  const frontmatter = {};
  const lines = filecontent.split("\n");
  for (const line of lines) {
    const match = line.match(/^(\w+):\s?(.+)/);
    if (match) {
      const key = match[1].toLowerCase();
      if (!frontmatter.hasOwnProperty(key)) {
        frontmatter[key] = match[2];
      }
    }
  }
  return frontmatter;
};

const main = () => {
  const filenames = getFileNames();

  const urls = filenames.map((filename) => {
    const filePath = path.join(process.cwd(), "posts", filename);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const frontmatter = extractFrontmatter(fileContent);

    const url = `https://blog-nekonyangyee.vercel.app/${filename.replace(".md", "")}`;
    const lastmod = frontmatter.date || "";
    return { url, lastmod };
  });

  const sitemap = `
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
          <loc>https://blog-nekonyangyee.vercel.app/</loc>
        </url>
        ${urls
      .map(({ url, lastmod }) => {
        return `
              <url>
                <loc>${url}</loc>
                <lastmod>${lastmod}</lastmod>
              </url>
            `;
      })
      .join("")}
      </urlset>
    `;

  fs.writeFileSync("public/sitemap.xml", sitemap);
};

main();


