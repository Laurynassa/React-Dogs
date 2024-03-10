import React from "react";

const DogList = ({ dogs }) => {
  return (
    <div>
      {dogs.map((dog, index) => (
        <div
          key={index}
          style={{
            border: "1px solid black",
            padding: "10px",
            margin: "5px",
            width: "50px",
          }}
        >
          {dog}
        </div>
      ))}
    </div>
  );
};
export default DogList;
