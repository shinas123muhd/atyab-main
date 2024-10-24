import React, { useState } from "react";
import ImageUpload from "../../components/admin/common/imageUpload";
import { useParams } from "react-router-dom";
import { CustomeInput } from "../../components";
import CustomSelect from "../../components/admin/common/customDropDown";
import { useFormik } from "formik";
import * as Yup from "yup";
import { dogFoodCategories } from "../../constants";

const CategoryDetails = () => {
  const { categoryId } = useParams();
  const [error, setError] = useState(null);
  const currentCategory = dogFoodCategories.find(
    (category) => category.id.toString() === categoryId.toString()
  );
  const [image, setImage] = useState(currentCategory.image);

  const initialValues = {
    name: currentCategory?.name,
    description: currentCategory?.description,
    category: currentCategory?.category,
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    description: Yup.string().required("Description is required"),
    category: Yup.string().required("Category is required"),
  });
  const { handleChange, errors, handleSubmit, values } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, setSubmitting) => {
      if (image === null) {
        return setError("image is required");
      }
      console.log({ ...values, image: image });
    },
  });

  return (
    <>
      <section className="flex flex-col text-gray-800">
        <h3 className="text-lg font-semibold  ">Update Category</h3>
        <div className="w-full min-h-[70vh] grid md:grid-cols-2 gap-5 ">
          <div className="bg-white   rounded-xl px-5 p-7 shadow-md mt-4 flex flex-col">
            <h4>General Information</h4>
            <div className="flex flex-col my-7">
              <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                <CustomeInput
                  name={"name"}
                  title={"Name "}
                  errors={errors}
                  value={values.name}
                  onchange={handleChange}
                  required
                  placeholder="Enter Category Name"
                />
                <div className="flex flex-col gap-2 w-full">
                  <label className="text-sm text-[#737373]">Description</label>
                  <textarea
                    type={"text"}
                    name={"description"}
                    onChange={handleChange}
                    value={values.description}
                    className={`p-2 md:p-3 text-sm  rounded-lg border border-gray-300  w-full`}
                    placeholder={"Enter description"}
                  />
                  {errors.description && (
                    <p className="text-xs font-medium  text-red-500">
                      {errors.description}
                    </p>
                  )}
                </div>

                <CustomSelect
                  name={"category"}
                  title={"Category"}
                  errors={errors}
                  onChange={handleChange}
                  value={values.category}
                  required
                  options={dogFoodCategories}
                  placeholder={"Select one of the Category"}
                />
                <button
                  type="submit"
                  className="py-3 rounded-lg bg-gray-800 text-white text-sm mt-5"
                >
                  {categoryId ? `Save Category` : `Create Category`}
                </button>
              </form>
            </div>
          </div>
          <div className="bg-whte rounded-xl bg-white  p-7 shadow-md mt-4 flexCenter">
            <ImageUpload
              onImageUpload={setImage}
              formError={error}
              currentImage={image}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryDetails;
