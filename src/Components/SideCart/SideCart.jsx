import React, { useEffect, useState } from "react";

const SideCart = ({ spendTime, handleTitle }) => {
  const [totalReadTime, setTotalReadTime] = useState(0);
  const [totalBlogTitle, setTotalBlogTitle] = useState([]);

  useEffect(() => {
    const getTimeFromLocalStorage = localStorage.getItem("readTime");
    const getBlogTitlesFromLocalStorage = JSON.parse(
      localStorage.getItem("bookmark")
    );
    setTotalReadTime(getTimeFromLocalStorage);
    setTotalBlogTitle(getBlogTitlesFromLocalStorage);
  }, [spendTime, handleTitle]);
  return (
    <div className="sticky top-4">
      <div className="bg-[rgba(224,226,240,0.92)] text-violet-500 font-semibold text-center border p-2 rounded border-[#6047EC]">
        <h1 className="">Spent time on read: {totalReadTime} min</h1>
      </div>
      <div className="bg-slate-100 my-4 p-4 rounded">
        <h1 className="font-semibold text-lg">
          Bookmarked Blogs: {totalBlogTitle?.length}
        </h1>
        {totalBlogTitle?.map((singleTitle, index) => (
          <p className="bg-white my-4 p-4 rounded" key={index}>
            {singleTitle}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SideCart;
