import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ContactBg } from "../../constants/images";
import { Call, Email } from "@mui/icons-material";
import { CustomeInput, Header, Map } from "../../components";
import { useTranslation } from "react-i18next";
const Contact = () => {
  const { t } = useTranslation();
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    subject: Yup.string().required("Subject is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.number().required("Phone number is required"),
    message: Yup.string().required("Message is required"),
  });
  const initialValues = {
    name: "",
    subject: "",
    email: "",
    phone: "",
    message: "",
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
      {/* <Header title={t("Contact Us")} /> */}
      <section className="px-4 xl:px-16">
        {/* contact form section  */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flexCenter h-fit sm:h-full ">
            <img src={ContactBg} alt="" className="w-[65%]" />
          </div>
          <div className=" py-8 md:py-20 md:w-5/6">
            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col gap-3 "
            >
              <CustomeInput
                title={t("Full Name")}
                name={"name"}
                placeholder={t("Enter your full name")}
                onchange={handleChange}
                errors={errors}
              />
              <CustomeInput
                title={t("Subject")}
                name={"subject"}
                onchange={handleChange}
                errors={errors}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <CustomeInput
                  title={t("Email")}
                  type="email"
                  name={"email"}
                  onchange={handleChange}
                  errors={errors}
                />
                <CustomeInput
                  title={t("Phone")}
                  type="number"
                  name={"phone"}
                  onchange={handleChange}
                  errors={errors}
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label className="text-sm text-[#737373]">{t("Message")}</label>
                <textarea
                  name={"message"}
                  onChange={handleChange}
                  className={`p-2 text-sm  rounded-lg border border-gray-300  w-full`}
                />
                {errors.message && (
                  <p className="text-xs font-medium  text-red-500">
                    {errors.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="px-3  mt-2 py-[10px] md:py-3 font-medium
         rounded-lg bg-[#22223B] text-white flexCenter"
              >
                {t("Send")}
              </button>
            </form>
            <div className="flexStart my-2 gap-4 text-sm text-gray-600 mt-4">
              <div className="flexStart group">
                <Email
                  fontSize="inherit"
                  className="group-hover:text-[#0B8BA6] transition-all duration-300"
                />

                <a
                  href="mailto:aplastic@eim.ae"
                  className="ml-1 group-hover:text-gray-800"
                >
                  aplastic@eim.ae
                </a>
              </div>
              <div className="flexStart group">
                <Call
                  fontSize="inherit"
                  className="group-hover:text-[#0B8BA6] transition-all duration-300"
                />
                <a
                  href="tel:+971506357347"
                  className="ml-1 group-hover:text-gray-800"
                >
                  +971506357347
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* contact map and address section  */}
      <div className=" bg-[#F2E9E4]">
        <div className="grid  grid-cols-1 px-4 gap-4 md:gap-0 md:grid-cols-2 py-7 max-w-screen-xl mx-auto ">
          <div
            className="flex flex-col justify-center
     gap-2"
          >
            <h3 className="font-bold text-xl text-[#22223B]">
              {t("Our Address")}
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-gray-600">
              <li>Atyab</li>
              <li>{t("Address")} : P.O.Box 38036, Sharjah. UAE</li>
              <li>{t("Phone")} : +971 50 635 7347, 06 534 7325 </li>
              <li className="flexStart gap-1">
                {t("Email")} :{" "}
                <a href="mailto:aplastic@eim.ae"> aplastic@eim.ae</a>,{" "}
                <a href="mailto:ajmaltradinguae@gmail.com">
                  ajmaltradinguae@gmail.com
                </a>{" "}
              </li>
            </ul>
          </div>
          <div className="h-[250px]  rounded-xl overflow-hidden">
            <Map />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
