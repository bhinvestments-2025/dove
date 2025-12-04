import fs from "fs";
import path from "path";
import matter from "gray-matter";
import PortfolioGrid from "@/components/PortfolioGrid";

export default function PortfolioPage() {
  const propertiesDir = path.join(process.cwd(), "content/properties");
  const files = fs.readdirSync(propertiesDir);

  const properties = files.map((fileName) => {
    const filePath = path.join(propertiesDir, fileName);
    const file = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(file);

    return {
      slug: fileName.replace(".md", ""),
      ...data,
    };
  });

  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold mb-10">Our Portfolio</h1>
      <PortfolioGrid properties={properties} />
    </div>
  );
}
