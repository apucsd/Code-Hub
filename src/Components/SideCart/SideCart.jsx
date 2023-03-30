import React, { useEffect, useState } from "react";

const SideCart = (props) => {
  const spendTime = props.spendTime;
  const [totalReadTime, setTotalReadTime] = useState("");
  useEffect(() => {
    const getTimeFromLocalStorage = localStorage.getItem("readTime");
    setTotalReadTime(getTimeFromLocalStorage);
  }, [spendTime]);
  return (
    <div className="sticky top-4">
      <div className="bg-[rgba(224,226,240,0.92)] text-violet-500 font-semibold text-center border p-2 rounded border-[#6047EC]">
        <h1>Spent time on read: {totalReadTime}</h1>
      </div>
    </div>
  );
};

export default SideCart;
