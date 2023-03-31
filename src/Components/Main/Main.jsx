import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import SideCart from "../SideCart/SideCart";

const Main = () => {
  const [data, setData] = useState([]);
  const [spendTime, setSpendTime] = useState(0);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const markAsRead = (readTime) => {
    const prev = JSON.parse(localStorage.getItem("readTime"));
    if (prev) {
      const newTime = prev + readTime;
      localStorage.setItem("readTime", newTime);
      setSpendTime(newTime);
    } else {
      localStorage.setItem("readTime", readTime);
      setSpendTime(readTime);
    }
  };
  ////handle bookmark function
  const [handleTitle, setHandleTitle] = useState([]);
  const handleBookMark = (blogTitle) => {
    let bookmark = [];
    const prevBookmark = JSON.parse(localStorage.getItem("bookmark"));
    if (prevBookmark) {
      bookmark.push(...prevBookmark, blogTitle);

      localStorage.setItem("bookmark", JSON.stringify(bookmark));
    } else {
      bookmark.push(blogTitle);
      localStorage.setItem("bookmark", JSON.stringify(bookmark));
    }
    setHandleTitle(bookmark);
  };
  return (
    <div className="grid lg:grid-cols-3 gap-4 my-10">
      <div className="col-span-2">
        <div className="">
          {data.map((singleData) => (
            <Card
              markAsRead={markAsRead}
              key={singleData.id}
              singleData={singleData}
              handleBookMark={handleBookMark}
            ></Card>
          ))}
        </div>
      </div>
      <div className=" ">
        <SideCart handleTitle={handleTitle} spendTime={spendTime}></SideCart>
      </div>
    </div>
  );
};

export default Main;
