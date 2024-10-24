import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";

const MenuItem = ({
  item,
  currentPath,
  isOpen,
  toggleOpen,
  setSideBarOpen,
  isMobileView,
}) => {
  const isActive =
    item.path === currentPath ||
    (item.subItems &&
      item.subItems.some((subItem) => subItem.path === currentPath));

  const closeSidebarIfMobile = () => {
    if (isMobileView) {
      setSideBarOpen(true);
    }
  };

  return (
    <Link to={item.iconType === "img" && `/admin`}>
      <li>
        <div
          onClick={toggleOpen}
          className={`flexBetween cursor-pointer ${
            isActive ? "bg-gray-100" : ""
          } hover:bg-gray-100 px-3 group py-3 rounded-lg`}
        >
          <div className="flexStart gap-3">
            {item.iconType === "img" ? (
              <img
                src={item.icon}
                alt={item.title.toLowerCase()}
                className={isActive ? "filter-active" : ""}
              />
            ) : (
              <item.icon
                className={`${isActive ? "text-yellow-600" : ""} text-gray-800`}
              />
            )}
            <span
              className={`${
                isActive ? "text-yellow-600" : ""
              } group-hover:text-yellow-600`}
            >
              {item.title}
            </span>
          </div>
          {item.subItems && (
            <KeyboardArrowDownIcon
              fontSize="small"
              className={`${
                isOpen ? "rotate-0" : "-rotate-90"
              } transition-all duration-700 text-gray-600`}
            />
          )}
        </div>
        {item.subItems && (
          <ul
            className={`flex ${
              isOpen ? "scale-100 opacity-100 mt-3" : "scale-0 h-0 opacity-0"
            } transition-all duration-300 flex-col gap-4 pl-10 list-disc`}
          >
            {item.subItems.map((subItem, index) => (
              <Link
                onClick={closeSidebarIfMobile}
                to={subItem.path}
                key={index}
              >
                <li
                  className={`${
                    currentPath === subItem.path ? "text-yellow-600" : ""
                  } cursor-pointer hover:text-yellow-600`}
                >
                  {subItem.title}
                </li>
              </Link>
            ))}
          </ul>
        )}
      </li>
    </Link>
  );
};

export default MenuItem;
