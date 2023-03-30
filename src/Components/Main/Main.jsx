import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

const Main = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="grid lg:grid-cols-3 gap-4">
      <div className="col-span-2 border">
        <div className="">
          {data.map((singleData) => (
            <Card key={singleData.id} singleData={singleData}></Card>
          ))}
        </div>
      </div>
      <div className="border border-primary"> this is cart sectopn</div>
    </div>
  );
};

export default Main;
