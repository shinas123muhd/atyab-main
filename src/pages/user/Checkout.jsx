import React from "react";
import { CustomeInput, Header } from "../../components";
import { useFormik } from "formik";
import * as Yup from "yup";
import CustomInput from "../../components/user/common/customeInput";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
const Checkout = () => {
  const { t } = useTranslation();
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    fullName: Yup.string().required("full Name is required"),
    lastName: Yup.string().required("LastName is required"),
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    zipcode: Yup.number().required("Zipcode is required"),
    phone: Yup.number().required("Phone number is required"),
  });
  const initialValues = {
    fullName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    phone: "",
  };

  const { handleChange, handleSubmit, errors } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      console.log(values);
    },
  });
  return (
    <>
      <Header title={t("Checkout")} />
      <section className="px-4 min-h-screen  font-poppins md:px-16  py-16 bg-primary">
        <div className=" grid lg:grid-cols-5  gap-2 md:gap-7 h-full">
          <div className="col-span-3  flex flex-col">
            <form className="flex flex-col bg-white mt-5  md:mt-7 p-5 py-7 rounded-lg">
              <h4 className="text-lg font-semibold">{t("Order Details")}</h4>
              <p className="text-sm text-gray-600 mt-2">
                {t("We will delivery your order to the below address")}
              </p>
              <div className=" flex flex-col gap-3 mt-7">
                <CustomInput
                  onchange={handleChange}
                  errors={errors}
                  title={t("Email Address")}
                  name={"email"}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <CustomInput
                    onchange={handleChange}
                    errors={errors}
                    title={t("First Name")}
                    name={"firstName"}
                  />
                  <CustomInput
                    onchange={handleChange}
                    errors={errors}
                    title={t("Last Name")}
                    name={"lastName"}
                  />
                </div>
                <CustomInput
                  onchange={handleChange}
                  errors={errors}
                  title={t("Address")}
                  name={"adress"}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <CustomInput
                    onchange={handleChange}
                    errors={errors}
                    title={t("City")}
                    name={"city"}
                  />
                  <CustomInput
                    onchange={handleChange}
                    errors={errors}
                    title={t("State")}
                    name={"state"}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <CustomInput
                    onchange={handleChange}
                    errors={errors}
                    title={t("Zip Code")}
                    name={"zipCode"}
                  />
                  <CustomInput
                    onchange={handleChange}
                    errors={errors}
                    title={t("Phone Number")}
                    name={"number"}
                  />
                </div>

                <div className="mt-3 flexStart">
                  <input
                    type="checkbox"
                    name="save address"
                    id="save"
                    className="w-4 aspect-square"
                  />
                  <span className="ml-2">{t("Save address")}</span>
                </div>
              </div>
            </form>
          </div>
          {/* order summery  */}
          <div className="col-span-3 md:col-span-2 mt-7 sticky top-0 p-5 h-fit bg-white rounded-lg py-7 flex flex-col ">
            <h4 className="text-lg font-semibold">{t("Order Summery")}</h4>
            <div className="py-5 border-b mt-3 text-sm ">
              <div className="flexBetween">
                <div className="flexStart">
                  Total <span>(3 items)</span>
                </div>
                <span className="font-medium underline">5000</span>
              </div>
            </div>
            <div className="flexBetween py-4 text-sm">
              <div className="font-medium">{t("Total Payable")}</div>
              <span className="font-medium">5000</span>
            </div>
            <Link to={"/my-order"}>
              <button className="py-3 bg-black w-full rounded-lg text-white mt-6">
                {t("Place order")}
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
