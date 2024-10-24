import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import SearchIcon from "@mui/icons-material/Search";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ResponsiveImageGallery from "../../components/admin/products/responsiveGallery";
import DeleteConfirmationModal from "../../components/user/common/Modal/DeleteConfirmation";
import { productListDummy } from "../../constants";
import UseToastNotification from "../../hooks/UseToastNotification";
import exportAsPDF from "../../components/admin/common/export/pdf";
import exportToGoogleSheets from "../../components/admin/common/export/sheet";
const OrderList = () => {
  const navigate = useNavigate();
  const [DeletePopUp, setDeletePopUp] = useState(false);
  const [filteredCategory, setFilteredCategory] = useState(productListDummy);
  const [id, setId] = useState(null);
  const { showToast } = UseToastNotification();
  const [searchKey, setSearchKey] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  // delete category based on their id
  const handleDelete = (categoryId) => {
    if (categoryId) {
      const filtered = filteredCategory.filter(
        (category) => category.id !== categoryId
      );
      setFilteredCategory(filtered);
      setId(null);
      setDeletePopUp(false);
      showToast("Category deleted");
    }
  };
  // function for handling modal open and close
  const handleModal = (e, categoryId) => {
    e.stopPropagation();
    setDeletePopUp(true);
    setId(categoryId);
  };
  //  handle search
  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchKey(searchValue);
    setSearchResult(
      searchValue
        ? productListDummy.filter((product) =>
            product.name.toLowerCase().includes(searchValue)
          )
        : []
    );
  };
  //  handle function for close the menu while click outside
  useEffect(() => {
    const handleClose = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClose);
    return () => {
      document.removeEventListener("mousedown", handleClose);
    };
  }, [menuRef]);
  const handleKeyDown = (e) => {
    if (searchResult.length === 0) return;
    switch (e.key) {
      case "ArrowDown":
        setFocusedIndex((prevIndex) =>
          prevIndex < searchResult.length - 1 ? prevIndex + 1 : 0
        );
        break;
      case "ArrowUp":
        setFocusedIndex((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : searchResult.length - 1
        );
      case "Enter":
        if (focusedIndex !== -1 && searchResult[focusedIndex]) {
          setSearchResult(
            searchResult[focusedIndex].name
              ? productListDummy.filter((product) =>
                  product.name
                    .toLowerCase()
                    .includes(searchResult[focusedIndex].name)
                )
              : []
          );
        }
    }
  };
  const handleSelect = (key) => {
    setSearchKey(key);
  };
  return (
    <section className="flex flex-col text-gray-800 ">
      <h3 className=" text-lg font-semibold  "> Order List</h3>
      <div className="bg-white  min-h-[75vh] md:min-h-[70vh] rounded-xl p-3 md:p-7 shadow-md mt-4 flex flex-col">
        <div className="flexBetween gap-3 md:gap-0">
          <div className="flexStart text-xs md:text-sm gap-6 w-full">
            <div className=" w-full">
              <div className=" w-[80%] md:w-2/4 xl:w-1/3 relative">
                <input
                  value={searchKey}
                  onKeyDown={handleKeyDown}
                  onChange={(e) => handleSearch(e)}
                  type="text"
                  className="p-3 border rounded-lg  w-full outline-none pr-12"
                  placeholder="Search by name"
                />

                <div className="absolute right-0 cursor-pointer top-0 bottom-0 my-auto flexCenter rounded-r-xl  px-3">
                  <SearchIcon />
                </div>
                {/* serarch result will be here  */}
                <div
                  className={`${searchResult.length === 0 ? `hidden` : `flex`}
                 w-full h-[250px] overflow-y-auto  flex-col z-40
             rounded-lg  shadow-md border border-gray-100  
             absolute top-[52px] bg-white `}
                >
                  <ul>
                    {searchResult.map((product, index) => (
                      <li
                        key={product.id}
                        onClick={() => handleSelect(product.name)}
                        className={`flexBetween ${
                          focusedIndex === index && `bg-gray-100`
                        } hover:bg-gray-100 px-5 cursor-pointer py-2`}
                      >
                        <div className="flexStart">
                          <div className="w-12 overflow-hidden aspect-square">
                            <img src={product.image[0].FileUrl} alt="" />
                          </div>
                          <span className="ml-2">{product.name}</span>
                        </div>
                        <div className="hidden md:flexStart gap-4">
                          <span>{product.category}</span>
                          <span className="font-semibold">
                            {product.quantity}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className=" relative">
            <div
              onClick={() => {
                setSearchResult([]);
                setMenuOpen(!menuOpen);
              }}
              className="cursor-pointer"
            >
              <MoreVertIcon className="" fontSize="medium" />
            </div>
            <div
              ref={menuRef}
              className={` ${
                menuOpen ? `scale-100` : `scale-0 overflow-hidden`
              } w-[200px]  rounded-lg text-xs md:text-sm h-fit right-0 top-7
            border border-gray-100 transition-all duration-300
            bg-white shadow-md absolute`}
            >
              <ul className="text-gray-700 ">
                <li
                  onClick={() => {
                    exportAsPDF(filteredCategory);
                    setMenuOpen(false);
                  }}
                  className="p-3 cursor-pointer hover:bg-gray-100 transition-all duration-300 "
                >
                  Export as PDF
                </li>
                <li
                  onClick={() => {
                    exportToGoogleSheets(filteredCategory);
                    setMenuOpen(false);
                  }}
                  className="p-3  cursor-pointer hover:bg-gray-100 transition-all duration-300 "
                >
                  Export to Excel
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="mt-7 w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="font-semibold text-xs md:text-sm text-left py-3 w-1/3 px-2 pl-5 rounded-l-lg">
                  Product
                </th>

                <th className="font-semibold whitespace-nowrap text-xs md:text-sm text-left py-3 px-4">
                  Order ID
                </th>
                <th className="font-semibold text-xs md:text-sm text-left py-3 px-4">
                  Price
                </th>
                <th className="font-semibold text-xs md:text-sm text-left py-3 px-4 ">
                  Quantity
                </th>

                <th className="font-semibold text-xs md:text-sm text-left py-3 px-4 ">
                  Payment
                </th>
                <th className="font-semibold text-xs md:text-sm text-left py-3 px-4 rounded-r-lg">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredCategory.map((item, index) => (
                <tr
                  key={index}
                  className={`text-sm  ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } cursor-pointer text-xs md:text-sm hover:bg-gray-100`}
                >
                  <td className="flexStart gap-6 p-4 rounded-r-xl ">
                    <div className="w-16 h-20 overflow-hidden">
                      <img
                        src={item.image[0].FileUrl}
                        alt="product"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h5 className="whitespace-nowrap">{item.name}</h5>
                  </td>
                  <td>
                    <div className="pl-5">#{item.id}</div>
                  </td>
                  <td>
                    <div className="pl-5">{item.price}</div>
                  </td>
                  <td>
                    <div className="pl-5">{item.quantity}</div>
                  </td>
                  <td>
                    <div className="pl-5">{item.price}</div>
                  </td>

                  <td>
                    <div className="flexStart gap-3 pl-2 text-base md:text-xl">
                      <div>
                        <RemoveRedEyeIcon fontSize="inherit" />
                      </div>
                      <div className="cursor-pointer">
                        <EditIcon fontSize="inherit" />
                      </div>
                      <div
                        className="cursor-pointer hover:text-red-500 transition-all duration-300 "
                        onClick={(e) => {
                          handleModal(e, item.id);
                        }}
                      >
                        <DeleteIcon fontSize="inherit" />
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <DeleteConfirmationModal
        isOpen={DeletePopUp}
        onClose={() => setDeletePopUp(false)}
        onDelete={() => handleDelete(id)}
      />
    </section>
  );
};

export default OrderList;
