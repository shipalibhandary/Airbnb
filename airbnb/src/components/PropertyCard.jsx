function PropertyCard({ property, onClick }) {
  return (
    <div
      onClick={() => onClick(property)}
      className="cursor-pointer group"
    >
      {/* Image */}
      <div className="overflow-hidden rounded-xl">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-60 object-cover group-hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="mt-2">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-sm">
            {property.location}
          </h3>
          <span className="text-sm">⭐ {property.rating}</span>
        </div>

        <p className="text-gray-500 text-sm truncate">
          {property.title}
        </p>

        <p className="mt-1 font-semibold">
          ₹{property.price}
          <span className="text-gray-500 font-normal"> / night</span>
        </p>
      </div>
    </div>
  );
}

export default PropertyCard;