import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import SideCart from "../SideCart/SideCart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      const allReadyBookMark = prevBookmark.find((title) => title == blogTitle);
      if (allReadyBookMark) {
        toast("You already bookmarked this...");
      } else {
        bookmark.push(...prevBookmark, blogTitle);

        localStorage.setItem("bookmark", JSON.stringify(bookmark));
      }
    } else {
      bookmark.push(blogTitle);
      localStorage.setItem("bookmark", JSON.stringify(bookmark));
    }
    setHandleTitle(bookmark);
  };
  return (
    <div className="grid lg:grid-cols-3 gap-4 my-10">
      <div className="lg:col-span-2">
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
      <div className="">
        <SideCart handleTitle={handleTitle} spendTime={spendTime}></SideCart>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Main;
