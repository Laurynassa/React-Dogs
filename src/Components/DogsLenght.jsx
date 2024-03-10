import React from "react";

const DogCircles = ({ dogs }) => {
  // Sukuriamas masyvas, kuriame kiekvienas elementas yra objektas su šunimi ir jos ilgiu
  const dogsWithLength = dogs.map((dog) => ({ name: dog, length: dog.length }));

  // Rūšiuojame masyvą pagal šunų ilgį nuo didžiausio iki mažiausio
  const sortedDogs = dogsWithLength.sort((a, b) => b.length - a.length);

  return (
    <div>
      {sortedDogs.map((dog, index) => (
        <div
          key={index}
          style={{ display: "flex", alignItems: "center", margin: "10px" }}
        >
          <div
            style={{
              marginRight: "10px",
            }}
          >
            {index + 1}
          </div>
          <div
            style={{
              borderRadius: "50%",
              width: `${dog.length * 10}px`,
              height: `${dog.length * 10}px`,
              background: "lightblue",
              textAlign: "center",
              lineHeight: `${dog.length * 10}px`,
            }}
          >
            {dog.name}
          </div>
        </div>
      ))}
    </div>
  );
};
export default DogCircles;
