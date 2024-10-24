import React, { useEffect, useState } from "react";
import { CustomeInput, Header } from "../../components";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
const Profile = () => {
  const [isAddressModalOpen, setAddressModal] = useState(false);
  const { t } = useTranslation();
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    firstName: Yup.string().required("FirstName is required"),
    lastName: Yup.string().required("LastName is required"),
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    zipcode: Yup.number().required("Zipcode is required"),
    phone: Yup.number().required("Phone number is required"),
  });
  const initialValues = {
    firstName: "",
    lastName: "",
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

  useEffect(() => {
    if (isAddressModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isAddressModalOpen]);
  return (
    <>
      <Header title={"Profile"} />
      <section className="min-h-[70vh] font-poppins bg-primary px-4 md:px-16  py-16 flex flex-col">
        <div className="bg-white p-7 text-sm rounded-xl flex flex-col">
          <div className="flexStart ">
            <h5 className="text-gray-600">{t("Name")}</h5>

            <EditIcon fontSize="inherit" className="ml-2 cursor-pointer" />
          </div>
          <div className="flex flex-col mt-4">
            <span className="text-gray-600">{t("Email")}</span>
            <p>abc@gmail.com</p>
          </div>
        </div>
        <div className="bg-white p-7 mt-5 text-sm rounded-xl flex flex-col">
          <div className="flexStart ">
            <h5 className="text-gray-600 font-semibold">{t("Address")}</h5>
            <div
              onClick={() => setAddressModal(true)}
              className="flexStart cursor-pointer"
            >
              <AddIcon fontSize="small" className="ml-4" />
              {t("Add")}
            </div>
          </div>
          <div className="flexStart rounded-xl border cursor-pointer p-4 bg-gray-50 mt-4">
            <div>
              <ErrorOutlineIcon className="text-gray-600" />
            </div>
            <p className="ml-4 text-sm">{t("No address added")}</p>
          </div>
        </div>
      </section>
      {isAddressModalOpen && (
        <div
          onClick={() => setAddressModal(false)}
          className="fixed bottom-0 left-0 right-0 top-0 bg-black/35 z-50 flexCenter"
        >
          <form
            onClick={(e) => e.stopPropagation()}
            onSubmit={handleSubmit}
            className="h-[90%] bg-white w-[95%] md:w-[70%] rounded-xl p-4 md:p-7 flex flex-col justify-between"
          >
            <div className="h-full  overflow-y-auto flex flex-col">
              <h4 className="text-xl   font-semibold">Add Address</h4>
              <div className=" md:pr-5">
                <div className="flex flex-col">
                  <div className="mt-4 flex flex-col gap-3">
                    <CustomeInput
                      onchange={handleChange}
                      errors={errors}
                      title={"Email Address"}
                      name={"email"}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <CustomeInput
                        onchange={handleChange}
                        errors={errors}
                        title={"First Name"}
                        name={"firstName"}
                      />
                      <CustomeInput
                        onchange={handleChange}
                        errors={errors}
                        title={"Last Name"}
                        name={"lastName"}
                      />
                    </div>
                    <CustomeInput
                      onchange={handleChange}
                      errors={errors}
                      title={"Address"}
                      name={"address"}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <CustomeInput
                        onchange={handleChange}
                        errors={errors}
                        title={"City"}
                        name={"city"}
                      />
                      <CustomeInput
                        onchange={handleChange}
                        errors={errors}
                        title={"State"}
                        name={"state"}
                      />
                    </div>
                    <CustomeInput
                      onchange={handleChange}
                      errors={errors}
                      title={"Zip Code"}
                      name={"zipcode"}
                    />
                    <CustomeInput
                      onchange={handleChange}
                      errors={errors}
                      title={"Phone Number"}
                      name={"phone"}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flexEnd text-sm pt-3">
              <button
                onClick={() => setAddressModal(false)}
                className="p-4 font-medium"
              >
                Cancel
              </button>
              <button className="p-4 bg-yellow-500 rounded-lg text-white">
                Save
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Profile;
