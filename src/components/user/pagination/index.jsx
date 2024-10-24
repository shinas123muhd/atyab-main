import React, { useState } from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ itemsPerPage }) => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        className="flex items-center gap-2 md:gap-4 text-xs md:text-base"
        pageClassName="border-2 border-black/35 px-3 md:px-4 aspect-square
        flexCenter
         hover:bg-black hover:text-white transition-all duration-300 py-2 rounded-lg"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Pagination;
