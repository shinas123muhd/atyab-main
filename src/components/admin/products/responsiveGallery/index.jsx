import React from "react";

const ResponsiveImageGallery = ({ images }) => {
  return (
    <div className="relative h-20">
      {/* Mobile view - single image */}
      <div className="md:hidden">
        {images.length > 0 && (
          <div className="w-16 h-20 overflow-hidden">
            <img
              src={images[0].FileUrl}
              alt="product"
              className="w-full h-full object-contain"
            />
          </div>
        )}
      </div>

      {/* Desktop view - multiple images */}
      <div className="hidden md:block">
        {images.map((item, index) => (
          <div
            key={index}
            style={{ left: `${index * 50}px` }}
            className={`w-16 h-20 absolute hover:z-50 transition-all duration-300 hover:scale-125 overflow-hidden`}
          >
            <img
              src={item.FileUrl}
              alt={`product ${index + 1}`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResponsiveImageGallery;
