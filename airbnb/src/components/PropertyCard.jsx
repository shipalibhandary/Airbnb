function PropertyCard({ property, onClick }) {
  return (
    <div
      onClick={() => onClick(property)}
      className="cursor-pointer group transition duration-300"
    >
      {/* Image */}
      <div className="overflow-hidden rounded-xl relative">
        {/* Badge */}
        <span className="absolute top-2 left-2 bg-white text-xs px-2 py-1 rounded-md shadow">
          Guest favorite
        </span>

        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="mt-3 px-1">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-sm">
            {property.location}
          </h3>
          <span className="text-sm font-medium">⭐ {property.rating}</span>
        </div>

        <p className="text-gray-500 text-sm truncate">{property.title}</p>

        <p className="mt-1 font-semibold">
          ₹{property.price}
          <span className="text-gray-500 font-normal"> </span>
        </p>
      </div>
    </div>
  );
}

export default PropertyCard;