import { useEffect } from "react";

function PropertyModal({ property, onClose }) {
  // Scroll lock + ESC key support
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
      {/* Modal Box */}
<div
  className="relative bg-white w-full max-w-3xl rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto"
  onClick={(e) => e.stopPropagation()}
>

  {/* Header (safe area for close button) */}
  <div className="sticky top-0 bg-white/90 backdrop-blur-md z-10 flex justify-end p-4 border-b">
    <button
      className="text-gray-600 hover:text-black text-2xl leading-none"
      onClick={onClose}
    >
      ✕
    </button>
  </div>
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Image Section */}
        <div className="grid grid-cols-2 gap-2 p-4">
          <img
            src={property.images[0]}
            alt={property.title}
            className="col-span-2 h-64 w-full object-cover rounded-xl"
          />

          {property.images.slice(1).map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${property.title}-${i}`}
              className="h-32 w-full object-cover rounded-lg"
            />
          ))}
        </div>

        {/* Content */}
        <div className="px-6 pb-6 space-y-3">
          <h2 className="text-2xl font-semibold text-gray-900">
            {property.title}
          </h2>

          <p className="text-gray-500">{property.location}</p>

          <p className="text-sm text-gray-600 leading-relaxed">
            {property.description}
          </p>

          {/* Price + Rating */}
          <div className="flex justify-between items-center pt-4 border-t">
            <span className="text-xl font-bold text-[#c89b8a]">
              ₹{property.price}
              <span className="text-sm text-gray-500 font-normal"> / night</span>
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