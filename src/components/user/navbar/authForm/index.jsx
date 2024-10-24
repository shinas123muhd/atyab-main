import React, { useRef, useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import { Popular } from "../../../../constants/images";
import OTPInput from "react-otp-input";
import { useTranslation } from "react-i18next";

const AuthForm = ({ isAuthFormOpen, setAuthFormOpen }) => {
  const [isOtpSend, setOtpSend] = useState(false);
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);
  const [error, setError] = useState(null);
  const [emailError, setEmailErroe] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const { t } = useTranslation();
  const handleChange = (index, value) => {
    if (isNaN(Number(value))) return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value !== "" && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && index > 0 && code[index] === "") {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async () => {
    setError(null);
    const enteredCode = code.join("");
    if (enteredCode.length === 6) {
      console.log(enteredCode);
    } else {
      setError("Please enter a 6-digit code");
    }
  };
  const validateInput = (value) => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const mobileRegex = /^[0-9]{10}$/; // assuming 10-digit mobile number

    if (emailRegex.test(value)) {
      setEmailErroe(null); // valid email
    } else if (mobileRegex.test(value)) {
      setEmailErroe(null); // valid mobile number
    } else {
      setEmailErroe("Please enter a valid email or mobile number");
    }
  };
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    validateInput(value);
  };

  return (
    <div
      onClick={() => setAuthFormOpen(false)}
      className={`${
        isAuthFormOpen ? "flexCenter" : "hidden"
      } fixed bottom-0 left-0 right-0 top-[90px] md:top-[150px]  z-50  bg-black/45 `}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[95%] md:w-[85%] lg:w-[70%] xl:w-[60%] relative rounded-lg
         overflow-hidden bg-primary py-10 md:py-0 md:h-[90%] grid grid-cols-5"
      >
        <div className="col-span-2 hidden md:flexCenter bg-white overflow-hidden">
          <img
            src={Popular}
            alt="login"
            className="w-full h-full object-cover opacity-90"
          />
        </div>
        <div className="col-span-5 md:col-span-3  p-7 flex flex-col">
          <div className={`${isOtpSend ? `hidden` : `block`}`}>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-gray-800">
                {t("Enter Email/Mobile number")}
              </span>
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                className="w-full border-b border-black/30 bg-transparent p-2 outline-none"
              />
              {emailError && (
                <span className="text-red-500 text-xs">{emailError}</span>
              )}
            </div>
            <p className="text-[10px] text-gray-600 mt-5 font-medium">
              {t(
                "By Continuing, you agree to Our Terms of Use and Privacy Policy"
              )}{" "}
            </p>
            <button
              onClick={() => setOtpSend(true)}
              className="text-white bg-gray-800 w-full py-3 rounded-md mt-4 text-sm"
            >
              {t("Request OTP")}
            </button>
          </div>
          <div className={`h-full    ${isOtpSend ? `flexCenter` : `hidden`}`}>
            <div className="w-full flex flex-col items-center">
              <h4 className="text-2xl font-semibold">
                {t("Verification Code")}
              </h4>
              <p className="text-xs text-gray-500 mt-4 md:text-sm text-center">
                {t("We have send the verification code to your email address")}
              </p>
              <div className="grid grid-cols-6 gap-3 my-7">
                {code.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    ref={(el) => {
                      inputRefs.current[index] = el;
                    }}
                    className="code-input border p-3 flexCenter text-center rounded-lg  aspect-square  "
                  />
                ))}
              </div>
              {error && <p className="text-xs text-red-500 mb-4 ">{error}</p>}
              <button
                onClick={handleSubmit}
                className="text-white bg-gray-800 py-3 rounded-md text-sm md:text-base w-1/2"
              >
                {t("Confirm")}
              </button>
            </div>
          </div>
        </div>
        <div
          onClick={() => setAuthFormOpen(false)}
          className="absolute cursor-pointer top-3 right-3"
        >
          <ClearIcon />
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
