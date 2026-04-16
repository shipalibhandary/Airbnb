import properties from "../data/properties";
import PropertyCard from "./PropertyCard";

function PropertyGrid({ onSelect }) {
  return (
    <div
      className="p-5 grid gap-6
      grid-cols-1
      sm:grid-cols-2
      md:grid-cols-3
      lg:grid-cols-4"
    >
      {properties.length === 0 ? (
        <p className="text-center col-span-full">No properties available</p>
      ) : (
        properties.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
            onClick={onSelect}
          />
        ))
      )}
    </div>
  );
}

export default PropertyGrid;