import "../css/pagination.scss";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import usePagination, { DOTS } from "../hooks/usePagination";
import { useState } from "react";
import PropTypes from "prop-types";
import React from "react";
import { nanoid } from "nanoid";



function Pagination({
  onPageChange,
  onPageSizeOptionChange,
  totalCount,
  currentPage,
  pageSize,
  pageSizeOptions,

})


{
  
  const [toggle,setToggle] = useState(true);
  const [rightToggle,setRightToggle] = useState(false);
//   function onPageSizeOptionChange(Size){

//     console.log(Size);
// setSize(Size);


//   }
  const paginationRange = usePagination({  currentPage,    totalCount,    pageSize,} );
  // console.log("pagi",paginationRange[paginationRange.length-1])
  if(currentPage ==paginationRange[paginationRange.length-1] ){
console.log("last page!!!")
  }
  if (currentPage === 0 || paginationRange.length < 2) {
   
    return null;
  }

  const onNext = () => {
    
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
   
    onPageChange(currentPage - 1);
  };

  return (
    <ul
      className="wrapper"
      // Do not remove the aria-label below, it is used for Hatchways automation.
      aria-label="Blog post pagination list"
    >
      <li className="paginationItem">
        <button
          type="button"
          className="arrowButton left"
          // Do not remove the aria-label below, it is used for Hatchways automation.
          aria-label="Goto previous page"
          onClick={onPrevious}
          disabled={currentPage>1?false:true} // change this line to disable a button.
        >
          <ChevronLeftIcon />
        </button>
      </li>

      {paginationRange.map((pageNumber) => {
        // console.log("dis",pageNumber);
        const key = nanoid();

        if(pageNumber==currentPage){
          return (
            <li
              key={key}
              className="paginationItem"
              aria-current={currentPage} // change this line to highlight a current page.
            >
              <button
                type="button"
                style={{backgroundColor :"grey"}}
                // Do not remove the aria-label below, it is used for Hatchways automation.
                aria-label={`Goto page ${pageNumber}`}
                onClick={() => onPageChange(pageNumber)}
              >
                {pageNumber}
              </button>
            </li>
          );
        }
        if (pageNumber === DOTS) {
          return (
            <li key={key} className="dots">
              &#8230;
            </li>
          );
        }

        return (
          <li
            key={key}
            className="paginationItem"
            aria-current="page" // change this line to highlight a current page.
          >
            <button
              type="button"
              // style={{color :"grey"}}
              // Do not remove the aria-label below, it is used for Hatchways automation.
              aria-label={`Goto page ${pageNumber}`}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          </li>
        );
      })}

      <li className="paginationItem">
        <button
          type="button"
          className="arrowButton right"
          // Do not remove the aria-label below, it is used for Hatchways automation.
          aria-label="Goto next page"
          onClick={onNext}
          disabled={currentPage ==paginationRange[paginationRange.length-1]?true:false} // change this line to disable a button.
        >
          <ChevronRightIcon />
        </button>
      </li>

      <select
        className="paginationSelector"
        // Do not remove the aria-label below, it is used for Hatchways automation.
        aria-label="Select page size"
        value={pageSize}
        onChange={(e) => {
          onPageSizeOptionChange(e.target.value);
        }}
      >
        {pageSizeOptions.map((size) => (
          <option key={size} defaultValue={pageSize === size} value={size}>
            {size} per page
          </option>
        ))}
      </select>
     
    </ul>
  );
}

Pagination.propTypes = {
  totalCount: PropTypes.number,
  currentPage: PropTypes.number,
  pageSize: PropTypes.number,
  pageSizeOptions: PropTypes.instanceOf(Array),
  onPageChange: PropTypes.func,
  onPageSizeOptionChange: PropTypes.func,
};

Pagination.defaultProps = {
  totalCount: 0,
  currentPage: 1,
  pageSize: 1,
  pageSizeOptions: [15, 25, 50, 100],
  onPageChange: () => {},
  onPageSizeOptionChange: () => {},
};

export default Pagination;
