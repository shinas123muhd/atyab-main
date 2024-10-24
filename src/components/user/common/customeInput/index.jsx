const CustomInput = ({
  title,
  onchange,
  errors,
  type = "text",
  placeholder = "",
  name,
  className,
  required = true,
  value,
}) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-sm text-[#737373]">{title}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onchange}
        className={`p-2 md:p-3 text-sm  rounded-lg border border-gray-300 ${className} w-full`}
        placeholder={placeholder}
      />
      {errors[name] && (
        <p className="text-xs font-medium  text-red-500">{errors[name]}</p>
      )}
    </div>
  );
};

export default CustomInput;
