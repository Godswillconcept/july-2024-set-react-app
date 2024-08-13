import ClassColor from "../components/ClassColor";
import Counter from "../components/Counter";
import FunctionColor from "../components/FuctionColor";
import FunctCar from "../components/FunctCar";
import FunctEffect from "../components/FunctEffect";
import Posts from "../components/Posts";
const Services = () => {
  return (
    <div className="container p-4" >
      <h2>Services</h2>
      <h3>Class component</h3>
      <ClassColor />
      <hr />
      <h3>Functional component</h3>
      <FunctionColor />
      <Counter />
      <FunctCar />
      <FunctEffect />

      <h2>Posts from API</h2>
      <Posts />
    </div>
  );
};

export default Services;
