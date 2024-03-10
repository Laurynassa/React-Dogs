import React from "react";

const DogsDisplay = ({ dogs }) => {
  return (
    <div>
      {dogs.map((dog, index) => (
        <div key={index} style={{ display: "inline-block", margin: "10px" }}>
          {index % 2 === 0 ? (
            // Poriniai indeksai - kvadratas
            <div style={{ border: "1px solid black", padding: "10px" }}>
              {dog}
            </div>
          ) : (
            // Neporiniai indeksai - apskritimas
            <div
              style={{
                borderRadius: "50%",
                width: "60px",
                height: "50px",
                background: "lightblue",
                textAlign: "center",
                lineHeight: "50px",
              }}
            >
              {dog}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default DogsDisplay;
