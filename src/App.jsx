import DogsFirstLetter from "./Components/DogsFirstBig";
import DogsInColors from "./Components/DogsInColors";
import DogsDisplay from "./Components/DogsInPairs";
import DogCircles from "./Components/DogsLenght";
import DogList from "./Components/DogsShow";

const App = () => {
  const dogs = ["šuo", "cucikas", "Bobikas", "kudlius", "Reksas", "aviganis"];

  return (
    <div>
      <h1>Šunų sąrašas:</h1>
      <DogList dogs={dogs} />
      <DogCircles dogs={dogs} />
      <DogsDisplay dogs={dogs} />
      <DogsFirstLetter dogs={dogs} />
      <DogsInColors dogs={dogs} />
    </div>
  );
};

export default App;
