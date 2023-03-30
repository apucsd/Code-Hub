import React from "react";

const Card = (props) => {
  //   console.log(props);
  const { authorName, blogTitle, image, authorImg, readTime, publishDate } =
    props.singleData;
  const markAsRead = props.markAsRead;
  return (
    <div className="card shadow-lg mx-4 p-6 rounded-none my-2">
      <img className="w-full h-64 rounded-lg my-lg4" src={image} alt="" />
      <div className="flex justify-between items-center my-3">
        <div className="flex gap-4">
          <div>
            {/* author img div */}
            <img
              className="w-[45px] h-[45px] rounded-full"
              src={authorImg}
              alt=""
            />
          </div>
          <div>
            <h3 className="font-semibold">{authorName}</h3>
            <p className="text-slate-500">{publishDate}</p>
          </div>
        </div>

        <div className="flex gap-2">
          <p className="text-slate-500">{readTime} min read</p>
          <div className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="my-4">
        <h1 className="text-2xl font-semibold">{blogTitle}</h1>
        <br />
        <button
          onClick={() => markAsRead(readTime)}
          className="underline text-violet-600"
        >
          Mark as read
        </button>
      </div>
    </div>
  );
};

export default Card;
