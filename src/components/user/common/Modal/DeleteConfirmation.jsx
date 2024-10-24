import React from "react";
import CloseIcon from "@mui/icons-material/Close";

const DeleteConfirmationModal = ({ isOpen, onClose, onDelete }) => {
  return (
    <>
      {/* Background overlay */}
      <div
        className={`
          fixed inset-0 bg-black bg-opacity-50
          z-50
          transition-opacity duration-300 ease-in-out
          ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
        onClick={onClose}
      />

      {/* Modal content */}
      <div
        className={`
          fixed inset-0 z-[1000] flex items-center justify-center pointer-events-none
        `}
      >
        <div
          className={`
           w-[95%] sm:w-[80%] md:w-[60%] xl:w-1/3 bg-white rounded-lg shadow-xl p-7 flex flex-col
            transition-all duration-300 ease-in-out
            ${
              isOpen
                ? "scale-100 opacity-100 pointer-events-auto"
                : "scale-0 opacity-0"
            }
          `}
        >
          <div className="flex justify-between items-center">
            <h3 className=" md:text-xl font-semibold text-gray-800">
              Confirm Deletion
            </h3>
            <button
              onClick={onClose}
              className="text-gray-700 hover:text-gray-900 cursor-pointer"
            >
              <CloseIcon fontSize="inherit" />
            </button>
          </div>
          <p className="text-gray-500  text-xs md:text-sm my-3 leading-5 md:leading-6">
            Are you sure you would like to delete this category from the
            database? This action cannot be undone.
          </p>
          <div className="grid grid-cols-2 gap-3 mt-2 text-xs md:text-sm">
            <button
              onClick={onClose}
              className="text-gray-800 hover:font-semibold transition-all duration-300
                bg-gray-300 hover:bg-gray-200 font-medium rounded-lg py-3 px-5"
            >
              Cancel
            </button>
            <button
              onClick={onDelete}
              className="text-white hover:font-semibold transition-all duration-300
                bg-red-500 hover:bg-red-400 rounded-lg py-3 px-5"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteConfirmationModal;
