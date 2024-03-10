import React from "react";

const DogsInColors = ({ dogs }) => {
  return (
    <div>
      {dogs.map((dog, index) => {
        const dogLength = dog.length;
        const color = dogLength > 6 ? "green" : "red";

        return (
          <div key={index} style={{ color: color, margin: "10px" }}>
            {dogLength}
          </div>
        );
      })}
    </div>
  );
};
export default DogsInColors;
