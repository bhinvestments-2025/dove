import Link from "next/link";

export default function PropertyCard({ property }) {
  return (
    <Link
      href={`/properties/${property.slug}`}
      className="block rounded-2xl shadow-md bg-white overflow-hidden hover:shadow-xl transition"
    >
      {property.image && (
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-56 object-cover"
        />
      )}

      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">{property.title}</h3>

        {property.location && (
          <p className="text-gray-600 mb-1">{property.location}</p>
        )}

        {property.price && (
          <p className="font-semibold text-green-700 text-lg">
            {property.price}
          </p>
        )}

        <div className="mt-3 text-sm text-gray-500">
          {property.beds && <span>{property.beds} beds • </span>}
          {property.baths && <span>{property.baths} baths • </span>}
          {property.sqft && <span>{property.sqft} sqft</span>}
        </div>
      </div>
    </Link>
  );
}
