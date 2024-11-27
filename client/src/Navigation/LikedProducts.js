import React, { useEffect, useRef } from "react";

const LikedProducts = ({ likedItems, onClose }) => {
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popupRef, onClose]);

  return (
    <div
      ref={popupRef}
      className="absolute top-16 right-0 bg-white p-4 shadow-lg rounded-lg w-64 h-64 overflow-y-auto"
    >
      <h2 className="text-lg font-semibold mb-2">Liked Products</h2>
      {likedItems.length > 0 ? (
        likedItems.map((item) => (
          <div key={item.id} className="p-2 border-b border-gray-200">
            <h3 className="text-gray-700">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.description || "No description available"}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No liked products yet.</p>
      )}
    </div>
  );
};

export default LikedProducts;
