import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { CustomeInput } from "../../components";
import CustomSelect from "../../components/admin/common/customDropDown";
import MultipleImageUpload from "../../components/admin/common/imageUpload/multiple";
import { dogFoodCategories, productListDummy } from "../../constants";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const [error, setError] = useState(null);
  const { productId } = useParams();
  const currentProduct = productListDummy.filter(
    (product) => product.id.toString() === productId.toString()
  )[0];
  const [image, setImage] = useState(currentProduct.image);
  const initialValues = {
    name: currentProduct.name,
    description: currentProduct.description,
    category: currentProduct.category,
    prize: currentProduct.price,
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    description: Yup.string().required("Description is required"),
    category: Yup.string().required("Category is required"),
    prize: Yup.number().min(0).required("Prize is required"),
  });

  const { handleChange, errors, handleSubmit, values } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, setSubmitting) => {
      if (image.length === 0) {
        return setError("image is required");
      }
      setError(null);
      console.log({ ...values, image: image });
    },
  });
  return (
    <section className="flex flex-col text-gray-800">
      <h3 className="text-lg font-semibold  ">Save Product </h3>
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
              <CustomeInput
                name={"prize"}
                title={"Prize "}
                type="number"
                errors={errors}
                value={values.prize}
                onchange={handleChange}
                required
                placeholder="Enter Prize"
              />
              <button
                type="submit"
                className="py-3 rounded-lg bg-gray-800 text-white text-sm mt-5"
              >
                Create Category
              </button>
            </form>
          </div>
        </div>
        <div className="bg-whte rounded-xl bg-white  p-7 shadow-md mt-4 flexCenter">
          <MultipleImageUpload
            onImagesUpload={setImage}
            formError={error}
            image={image}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
