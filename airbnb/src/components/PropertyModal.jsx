import { useEffect } from "react";

function PropertyModal({ property, onClose }) {

  // Scroll lock + ESC support
  useEffect(() => {
    if (!property) return;

    document.body.style.overflow = "hidden";

    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [property, onClose]);

  if (!property) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4"
      onClick={onClose}
    >
      {/* Modal Box */}
      <div
        className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Close Button */}
        <button
          className="absolute top-4 right-4 z-20 bg-white/80 backdrop-blur-md text-gray-700 hover:text-black text-2xl rounded-full w-10 h-10 flex items-center justify-center shadow"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Image Section */}
        <div className="grid grid-cols-2 gap-2 p-3 pt-10">
          <img
            src={property.images[0]}
            alt={property.title}
            className="col-span-2 h-48 w-full object-cover rounded-xl"
          />

          {property.images.slice(1).map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${property.title}-${i}`}
              className="h-28 w-full object-cover rounded-lg"
            />
          ))}
        </div>

        {/* Content */}
        <div className="px-5 pb-5 space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">
            {property.title}
          </h2>

          <p className="text-gray-500">{property.location}</p>

          <p className="text-sm text-gray-600 leading-relaxed">
            {property.description}
          </p>

          {/* Price + Rating */}
          <div className="flex justify-between items-center pt-3 border-t">
            <span className="text-lg font-bold text-[#c89b8a]">
              ₹{property.price}
              <span className="text-sm text-gray-500 font-normal"></span>
            </span>

            <span className="text-sm font-medium text-gray-700">
              ⭐ {property.rating}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default PropertyModal;