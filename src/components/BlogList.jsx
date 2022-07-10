import BlogPost from "./BlogPost";
import Pagination from "./Pagination";
import React from "react";
import blogs from "../data/blogs.json";
import { useState } from "react";
import usePagination from "../hooks/usePagination";

const PAGE_SIZES = [15, 25, 50, 100];

function BlogList() {
  const [currentPage,setCurrentPage] = useState(1);
  const [pageSize,setPageSize] = useState(15);
  const [currentPaginationData,setcurrentPaginationData] = useState(blogs.posts.slice(0, pageSize))
  

  // console.log(currentPaginationData)

  const updateRowsPerPage = (rows) => {
    setCurrentPage(1)
    setPageSize(rows);
    // usePagination(1,650,rows)
    setcurrentPaginationData(blogs.posts.slice(0, rows))
    // console.log("updated ", rows)
  };
  const updatePage = (currentPage) => {
    setCurrentPage(currentPage);
    setcurrentPaginationData(blogs.posts.slice((currentPage-1)*pageSize, currentPage*pageSize))
    // con sole.log(currentPage)
  };

  return (
    <div>
      <Pagination
        currentPage={currentPage}
        totalCount={blogs.posts.length}
        pageSize={pageSize}
        pageSizeOptions={PAGE_SIZES}
        onPageChange={updatePage}
        onPageSizeOptionChange={updateRowsPerPage}
      />
      <ul
        // Do not remove the aria-label below, it is used for Hatchways automation.
        aria-label="blog list"
      >
        {currentPaginationData.map((blog) => (
          <BlogPost
            key={blog.id}
            author={blog.author}
            title={blog.title}
            excerpt={blog.excerpt}
            featureImage={blog.image}
          />
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
