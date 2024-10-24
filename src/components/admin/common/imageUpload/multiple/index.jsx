import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { X, Upload } from "lucide-react";
import { Loading } from "../../../../../constants/icons";
import {
  removeCategory,
  uploadCategory,
} from "../../../../../api/services/admin/service";
import useApi from "../../../../../hooks/UseApi";
import UseToastNotification from "../../../../../hooks/UseToastNotification";
import { ACCEPTED_FILE_TYPES, MAX_FILE_SIZE } from "../../../../../constants";

const MultipleImageUpload = ({ onImagesUpload, formError, image }) => {
  const { executeApi: uploadApi, loading: uploadLoading } =
    useApi(uploadCategory);
  const { executeApi: deleteApi, loading: deleteLoading } =
    useApi(removeCategory);
  const [images, setImages] = useState(image);
  const [error, setError] = useState(formError);
  const { showToast } = UseToastNotification();

  const validateFile = (file) => {
    if (file.size > MAX_FILE_SIZE) {
      return {
        code: "file-too-large",
        message: `File is too large. Max size is 2 MB.`,
      };
    }
    if (!Object.keys(ACCEPTED_FILE_TYPES).includes(file.type)) {
      return {
        code: "file-invalid-type",
        message:
          "File type not supported. Please upload PNG, JPG, JPEG, SVG, or WebP.",
      };
    }
    return null;
  };

  const onDrop = useCallback(
    async (acceptedFiles, rejectedFiles) => {
      if (images.length + acceptedFiles.length > 5) {
        showToast("You can only upload up to 5 images", "error");
        return;
      }
      if (rejectedFiles.length > 0) {
        const error = rejectedFiles[0].errors[0];
        setError(error.message);
        showToast(error.message, "error");
        return;
      }

      const newImages = await Promise.all(
        acceptedFiles.map(async (file) => {
          const validationError = validateFile(file);
          if (validationError) {
            showToast(validationError.message, "error");
            return null;
          }

          const { success, data, error } = await uploadApi({ params: file });
          if (success) {
            setError(null);
            showToast("Image uploaded successfully", "success");
            return data.FileDetails[0];
          } else {
            showToast(error || "Failed to upload", "error");
            return null;
          }
        })
      );

      const validNewImages = newImages.filter((img) => img !== null);
      setImages((prevImages) => [...prevImages, ...validNewImages]);
      if (onImagesUpload) {
        onImagesUpload([...images, ...validNewImages]);
      }
    },
    [images, uploadApi, showToast, onImagesUpload]
  );

  const removeImage = async (index) => {
    const imageToRemove = images[index];
    const { success, error } = await deleteApi({
      params: {
        org_url: imageToRemove.Filename,
        thumb_url: imageToRemove.ThumbNailFilename,
      },
    });
    if (success) {
      showToast("Image removed", "success");
      const newImages = images.filter((_, i) => i !== index);
      setImages(newImages);
      if (onImagesUpload) {
        onImagesUpload(newImages);
      }
    } else {
      showToast(error || "Failed to delete", "error");
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: ACCEPTED_FILE_TYPES,
    maxSize: MAX_FILE_SIZE,
    multiple: true,
  });

  return (
    <div className="p-3 md:p-7 relative mt-4">
      <div
        className={`grid ${
          images.length === 0
            ? "grid-cols-1"
            : `  grid-cols-3 md:grid-cols-2 lg:grid-cols-3`
        }  gap-2 md:gap-4`}
      >
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image.FileUrl}
              alt={`Uploaded ${index + 1}`}
              className="w-full h-32 object-contain rounded-lg"
            />
            <button
              onClick={() => removeImage(index)}
              className="absolute top-2 right-2 bg-gray-800 text-white rounded-full px-1  md:p-1 hover:bg-red-600 transition-colors duration-200"
            >
              <X size={20} className="w-3 md:w-[20px]" />
            </button>
          </div>
        ))}
        {images.length < 5 && (
          <div
            {...getRootProps()}
            className="w-full h-32 border-2 border-dashed p-3 border-gray-300 rounded-lg flex flex-col justify-center items-center cursor-pointer transition-all duration-300 ease-in-out hover:border-blue-500"
          >
            <input {...getInputProps()} />
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <p className="mt-2 text-xs text-gray-500">
              {isDragActive ? "Drop the images here" : "Add more images"}
            </p>
          </div>
        )}
      </div>
      {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
      {(uploadLoading || deleteLoading) && (
        <div className="absolute bg-white bg-opacity-70 flex justify-center items-center inset-0">
          <img src={Loading} alt="loading" className="w-[120px]" />
        </div>
      )}
    </div>
  );
};

export default MultipleImageUpload;
