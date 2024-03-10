import React from "react";

const DogsFirstLetter = ({ dogs }) => {
  return (
    <div>
      {dogs.map((dog, index) =>
        dog.charAt(0) === dog.charAt(0).toUpperCase() ? null : (
          <div
            key={index}
            style={{
              border: "1px solid black",
              padding: "10px",
              margin: "10px",
            }}
          >
            {dog}
          </div>
        )
      )}
    </div>
  );
};

export default DogsFirstLetter;
