import { useEffect } from "react";

function PropertyModal({ property, onClose }) {

  // 🔒 Disable background scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!property) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 transition-opacity duration-300"
      onClick={onClose}
    >
      {/* Modal box */}
      <div
        className="bg-white w-full max-w-2xl rounded-2xl p-4 relative max-h-[90vh] overflow-auto transform transition-all duration-300 scale-95 opacity-0 animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          className="absolute top-3 right-3 text-xl"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Image */}
        <div className="grid grid-cols-2 gap-2">
  {property.images.map((img, index) => (
    <img
      key={index}
      src={img}
      className="w-full h-40 object-cover rounded-lg"
    />
  ))}
</div>

        {/* Content */}
        <h2 className="text-xl font-bold mt-4">
          {property.title}
        </h2>

        <p className="text-gray-500">
          {property.location}
        </p>

        <p className="mt-2 text-sm">
          {property.description}
        </p>

        <div className="mt-3 flex justify-between items-center">
          <span className="font-semibold text-lg">
            ₹{property.price} / night
          </span>
          <span>⭐ {property.rating}</span>
        </div>
      </div>
    </div>
  );
}

export default PropertyModal;