import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DeleteConfirmationModal from "../../components/user/common/Modal/DeleteConfirmation";
import { dogFoodCategories } from "../../constants";
import UseToastNotification from "../../hooks/UseToastNotification";

const CategoryList = () => {
  const navigate = useNavigate();
  const [DeletePopUp, setDeletePopUp] = useState(false);
  const [filteredCategory, setFilteredCategory] = useState(dogFoodCategories);
  const [id, setId] = useState(null);
  const { showToast } = UseToastNotification();
  const [searchKey, setSearchKey] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [focusedIndex, setFocusedIndex] = useState(-1);

  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchKey(searchValue);
    setSearchResult(
      searchValue
        ? dogFoodCategories.filter(
            (product) =>
              product.name.toLowerCase().includes(searchValue) ||
              product.category.toLowerCase().includes(searchKey)
          )
        : []
    );
  };

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
          setSearchKey(searchResult[focusedIndex].name);
        }
    }
  };
  const handleSelect = (key) => {
    setSearchKey(key);
  };

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
  return (
    <section className="flex flex-col text-gray-800 ">
      <h3 className=" text-lg font-semibold  "> Category List</h3>
      <div className="bg-white  min-h-[75vh] md:min-h-[70vh] rounded-xl p-3 md:p-7 shadow-md mt-4 flex flex-col">
        <div className="flexBetween gap-3 md:gap-0">
          <div className="flexStart text-sm gap-6 w-full">
            <div className="hidden md:flexStart text-xs text-gray-600 gap-3">
              <span>Showing</span>
              <select className="border px-4 py-3 rounded-xl outline-none">
                <option value="30">30</option>
                <option value="60">40</option>
                <option value="50">50</option>
              </select>
              <span>Entries</span>
            </div>
            <div className=" w-full">
              <div className="md:w-2/3  relative">
                <input
                  type="text"
                  value={searchKey}
                  onKeyDown={handleKeyDown}
                  onChange={(e) => handleSearch(e)}
                  className="p-3 border rounded-lg w-full outline-none pr-12"
                  placeholder="Search here ..."
                />
                <div className="absolute cursor-pointer right-0 top-0 bottom-0 my-auto flexCenter rounded-r-xl  px-3">
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
                            <img src={product.image} alt="" />
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
          <Link to={"/admin/add-list"}>
            <button
              className="py-3  whitespace-nowrap md:text-sm md:min-w-[190px] hover:text-white
          hover:bg-gray-800 transition-all duration-300 hover:shadow-md
          flexCenter px-3 text-xs md:px-7 border text-gray-700 font-semibold  rounded-lg"
            >
              <AddIcon fontSize="small" />
              <span className="ml-2">Add New</span>
            </button>
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="mt-7 w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="font-semibold text-sm text-left py-3 px-2 pl-5 rounded-l-lg">
                  Category
                </th>

                <th className="font-semibold text-sm text-left py-3 px-4">
                  Quantity
                </th>
                <th className="font-semibold text-sm text-left py-3 px-4">
                  Price
                </th>
                <th className="font-semibold text-sm text-left py-3 px-4 ">
                  Sale
                </th>
                <th className="font-semibold text-sm text-left py-3 px-4 whitespace-nowrap ">
                  Start Data
                </th>
                <th className="font-semibold text-sm text-left py-3 px-4 rounded-r-lg">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredCategory.map((item, index) => (
                <tr
                  onClick={() => navigate(`/admin/add-list/${item.id}`)}
                  key={index}
                  className={`text-sm  ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } cursor-pointer hover:bg-gray-100`}
                >
                  <td className="flexStart gap-6 p-4 rounded-r-xl ">
                    <div className="w-10 h-12  overflow-hidden">
                      <img
                        src={item.image}
                        alt="product one"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h5 className="font-medium whitespace-nowrap text-sm ">
                      {item.category}
                    </h5>
                  </td>
                  <td>
                    <div className="pl-2">{item.quantity}</div>
                  </td>
                  <td>
                    <div className="pl-2">{item.price}</div>
                  </td>
                  <td>
                    <div className="pl-2">{item.sale}</div>
                  </td>
                  <td>
                    <div className="pl-2">20 NOV 2023</div>
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

export default CategoryList;
