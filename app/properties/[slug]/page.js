import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { markdownToHtml } from "@/lib/markdown";

// Generate static paths
export async function generateStaticParams() {
  const dir = path.join(process.cwd(), "content/properties");
  const files = fs.readdirSync(dir);

  return files.map((name) => ({
    slug: name.replace(".md", ""),
  }));
}

// Load property data from markdown
async function getPropertyData(slug) {
  const filePath = path.join(
    process.cwd(),
    "content/properties",
    `${slug}.md`
  );

  if (!fs.existsSync(filePath)) return null;

  const file = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(file);

  return {
    ...data,
    content: await markdownToHtml(content),
  };
}

/* -------------------------------
   ✅ App Router SEO Metadata
-------------------------------- */
export async function generateMetadata({ params }) {
  const property = await getPropertyData(params.slug);
  if (!property) return {};

  return {
    title: property.title,
    description: property.description || property.location || "",
    openGraph: {
      title: property.title,
      description: property.description || "",
      images: property.image ? [property.image] : [],
    },
  };
}

/* -------------------------------
   ✅ Main Page Component
-------------------------------- */
export default async function PropertyPage({ params }) {
  const property = await getPropertyData(params.slug);

  if (!property) return notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Residence",
    name: property.title,
    description: property.description || "",
    address: property.location || "",
    floorSize: property.sqft
      ? { "@type": "QuantitativeValue", value: property.sqft }
      : undefined,
    numberOfRooms: property.beds || undefined,
    numberOfBathroomsTotal: property.baths || undefined,
    image: property.image || undefined,
    offers: {
      "@type": "Offer",
      price: property.price?.replace(/[^0-9.]/g, ""),
      priceCurrency: "USD",
    },
  };

  return (
    <>
      {/* JSON-LD injected directly */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container mx-auto max-w-4xl py-16">
        <h1 className="text-4xl font-bold mb-6">{property.title}</h1>

        {property.image && (
          <img
            src={property.image}
            alt={property.title}
            className="w-full rounded-xl mb-8 shadow-lg"
          />
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-lg">
          {property.location && <p><strong>Location:</strong> {property.location}</p>}
          {property.price && <p><strong>Price:</strong> {property.price}</p>}
          {property.beds && <p><strong>Beds:</strong> {property.beds}</p>}
          {property.baths && <p><strong>Baths:</strong> {property.baths}</p>}
          {property.sqft && <p><strong>Square Feet:</strong> {property.sqft}</p>}
          {property.status && <p><strong>Status:</strong> {property.status}</p>}
        </div>

        <article
          className="prose prose-lg"
          dangerouslySetInnerHTML={{ __html: property.content }}
        />
      </div>
    </>
  );
}
