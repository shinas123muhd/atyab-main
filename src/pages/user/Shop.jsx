import CloseIcon from "@mui/icons-material/Close";
import TuneIcon from "@mui/icons-material/Tune";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import product1 from "../../assets/images/product1.webp";
import { Header, Pagination } from "../../components";
import ProductCard from "../../components/user/products/card";
import CategoryMenu from "../../components/user/products/categoryMenu";
import SortMenu from "../../components/user/products/sortMenu";
import { productCategories, sort } from "../../constants";

const Shop = () => {
  const { t } = useTranslation();
  const [whishList, setWhishList] = useState([]);
  const [isFilterMenuOpen, setFilteMenuOpen] = useState(false);
  const [sortBy, setSortBy] = useState(sort[0].title);
  const [categorizedBy, setCategorizedBy] = useState(null);

  // current category option
  console.log(categorizedBy);
  const productList = [
    {
      id: 10,
      title: "Syltherine",
      brand: "on brand",
      price: "210.00",
      image: product1,
    },
    {
      id: 1,
      title: "Syltherine",
      brand: "on brand",
      price: "210.00",
      image: product1,
    },
    {
      id: 2,
      title: "Syltherine",
      brand: "on brand",
      price: "210.00",
      image: product1,
    },
    {
      id: 3,
      title: "Syltherine",
      brand: "on brand",
      price: "210.00",
      image: product1,
    },
    {
      id: 4,
      title: "Syltherine",
      brand: "on brand",
      price: "210.00",
      image: product1,
    },
  ];
  const handleWhislist = (id) => {
    setWhishList(
      whishList.includes(id)
        ? whishList.filter((item) => item !== id)
        : [...whishList, id]
    );
  };
  useEffect(() => {
    if (isFilterMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isFilterMenuOpen]);

  const handeClose = () => {
    setFilteMenuOpen(false);
  };

  const handleInnerClick = (event) => {
    event.stopPropagation();
  };
  return (
    <section
      className={`${
        isFilterMenuOpen && "overflow-x-hidden"
      } flex  font-poppins h-full flex-col`}
    >
      {/* header  */}
      <Header
        title={"Exclusives of Sikkat Al Tayeb"}
        description={
          " Unique and distinctive perfumes with the scent of Arab authenticity"
        }
      />
      <div
        className=" px-4 lg:px-16 flex flex-col md:flex-row h-full gap-0
       md:gap-12 bg-primary py-4 md:py-14"
      >
        {/* All Categories  */}
        <CategoryMenu options={productCategories} setValue={setCategorizedBy} />
        {/* filter icon , visible only in mobile view 👨‍🏭  */}
        <div className="flexEnd md:hidden px-2">
          <div
            onClick={() => setFilteMenuOpen(!isFilterMenuOpen)}
            className="py-1 text-lg md:text-2xl md:py-2 px-4  
            border border-black/30 cursor-pointer rounded-lg"
          >
            <TuneIcon fontSize="inherit" />
          </div>
        </div>
        {/* products list  */}
        <div className="flex-1 h-full flex flex-col ">
          {/* sort menu  */}
          <SortMenu options={sort} value={sortBy} setValue={setSortBy} />
          {/* products  */}
          <div className="grid  grid-cols-2 h-full lg:grid-cols-3 2xl:grid-cols-4 gap-y-10 gap-4 my-4 md:my-7">
            {productList.map((item) => (
              <ProductCard
                key={item.id}
                product={item}
                handleWhislist={handleWhislist}
                whishList={whishList}
              />
            ))}
          </div>
          {/* pagination  */}
          <div className=" flexCenter mt-6 md:mt-0   md:flex">
            <Pagination itemsPerPage={5} />
          </div>
        </div>
      </div>
      {/* filter drawer  */}
      <div
        onClick={() => handeClose()}
        className={` ${
          isFilterMenuOpen ? `w-full` : "w-0 overflow-hidden"
        }  md:hidden flex justify-end transition-all duration-300 fixed top-0 right-0 left-0 h-[100vh] bg-black/40 `}
      >
        <div
          className={`bg-whte ${
            isFilterMenuOpen ? `translate-x-0` : `translate-x-[100%]`
          }  h-screen w-[80%] sm:w-[50%] bg-white flex transition-all duration-300 delay-200 flex-col`}
        >
          <div className="my-5 flexEnd px-5">
            <button onClick={() => setFilteMenuOpen(false)}>
              <CloseIcon />
            </button>
          </div>
          <h4 className="px-7 text-lg font-semibold">
            {" "}
            {t("All Categories")}s
          </h4>
          <div
            onClick={handleInnerClick} // This stops the click event from propagating
            className={`
bg-white text-[#22223B] rounded-bl-lg overflow-y-auto  text-lg flex flex-col justify-between h-full p-2 px-7`}
          >
            <ul className="flex flex-col mt-6 gap-3">
              {productCategories.map((item) => (
                <motion.li
                  key={item.id}
                  onClick={() => handeClose()}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{
                    opacity: isFilterMenuOpen ? 1 : 0,
                    x: isFilterMenuOpen ? 0 : 100,
                  }}
                  transition={{
                    delay: isFilterMenuOpen ? item.id * 0.2 : 0,
                    duration: 0.3,
                  }}
                  className="border-b border-black/15 py-2 text-sm md:text-base md:py-4 pb-5"
                >
                  {t(`${item.title}`)}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
