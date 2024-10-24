import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Upload, X } from "lucide-react";
import { Loading } from "../../../../constants/icons";
import {
  removeCategory,
  uploadCategory,
} from "../../../../api/services/admin/service";
import useApi from "../../../../hooks/UseApi";
import UseToastNotification from "../../../../hooks/UseToastNotification";
import { ACCEPTED_FILE_TYPES, MAX_FILE_SIZE } from "../../../../constants";

const ImageUpload = ({ onImageUpload, formError, currentImage }) => {
  const {
    executeApi: uploadApi,
    loading: uploadLoading,
    data: uploadData,
  } = useApi(uploadCategory);
  const { executeApi: deleteApi } = useApi(removeCategory);
  const [image, setImage] = useState(currentImage);
  const [error, setError] = useState(formError);
  const { showToast } = UseToastNotification();
  //  validate files
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
      if (rejectedFiles.length > 0) {
        const error = rejectedFiles[0].errors[0];
        setError(error.message);
        showToast(error.message, "error");
        return;
      }

      const file = acceptedFiles[0];
      const validationError = validateFile(file);
      if (validationError) {
        setError(validationError.message);
        showToast(validationError.message, "error");
        return;
      }

      if (file) {
        const reader = new FileReader();
        reader.onload = async (e) => {
          setError(null);
          if (onImageUpload) {
            const { success, data, error } = await uploadApi({ params: file });
            if (success) {
              setImage(data.FileDetails[0].FileUrl);
              onImageUpload(data.FileDetails.Filename);
              showToast("Uploaded Category", "success");
            } else {
              showToast(error || "Failed to upload", "error");
            }
          }
        };
        reader.readAsDataURL(file);
      }
    },
    [onImageUpload, uploadApi, showToast]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: ACCEPTED_FILE_TYPES,
    maxSize: MAX_FILE_SIZE,
    multiple: false,
  });
  const removeImage = async () => {
    console.log(image);
    if (image) {
      const { Filename, ThumbNailFilename } = uploadData?.FileDetails[0];
      const { success, error } = await deleteApi({
        params: { org_url: Filename, thumb_url: ThumbNailFilename },
      });
      if (success) {
        showToast("Category removed", "success");
        setImage(null);
        setError(null);
        if (onImageUpload) {
          onImageUpload(null);
        }
      } else {
        showToast(error || "Failed to delete", "error");
      }
    }
  };

  return (
    <div className="p-7 relative mt-4 flex justify-center items-center">
      <div
        {...getRootProps()}
        className="w-[80%] h-[90%] rounded-lg flex flex-col justify-center items-center cursor-pointer transition-all duration-300 ease-in-out hover:border-blue-500"
      >
        <input {...getInputProps()} />
        {image ? (
          <div className="relative">
            <img
              src={image}
              alt="Uploaded"
              className="w-full h-full object-contain rounded-lg"
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                removeImage();
              }}
              className="absolute top-2 right-2 bg-gray-800 text-white rounded-full p-1 hover:bg-red-600 transition-colors duration-200"
            >
              <X size={20} />
            </button>
          </div>
        ) : (
          <div className="text-center">
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <p className="mt-2 text-sm text-gray-500">
              {isDragActive
                ? "Drop the image here"
                : "Drag 'n' drop an image here, or click to select"}
            </p>
            <p className="mt-1 text-xs text-gray-400">
              (PNG, JPG, JPEG, SVG, WebP, max 2MB)
            </p>
            {error ||
              (formError && (
                <p className="text-red-500 text-xs mt-2 w-[80%]">
                  {error || formError}
                </p>
              ))}
          </div>
        )}
      </div>
      {uploadLoading && (
        <div className="absolute bg-white flexCenter top-0 left-0 right-0 bottom-0">
          <img src={Loading} alt="loading" className="w-[120px]" />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
