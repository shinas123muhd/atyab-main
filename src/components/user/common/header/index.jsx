import { ProductHeader } from "../../../../constants/images";

const Header = ({ title, description = null }) => {
  return (
    <div className="w-full h-[150px] md:h-[370px] -z-20  relative overflow-hidden">
      <img
        src={ProductHeader}
        alt="product header"
        className="w-full h-full object-cover"
      />
      <div className="absolute top-0 bottom-0 my-auto   h-fit left-5 md:left-16 flex flex-col">
        <h2
          className="[text-shadow:1px_1px_2px_var(--tw-shadow-color)] shadow-gray-500 text-white
      font-bold text-2xl md:text-[40px]
      "
        >
          {title}
        </h2>
        <p className="text-white/70 mt-4 text-xs md:text-base  ">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Header;
