export default function PropertyPage({ property }) {
  if (!property) {
    return <div>No property found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">{property.title}</h1>

      {property.image && (
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-auto rounded-xl mb-6"
        />
      )}

      <div className="text-lg mb-2">
        <strong>Location:</strong> {property.location}
      </div>

      <div className="text-lg mb-6">
        <strong>Price:</strong> {property.price}
      </div>

      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: property.bodyHtml }}
      />
    </div>
  );
}
