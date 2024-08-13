import React from "react";
import RefComp from "../components/RefComp";
import useFetch from "../components/useFetch";
import { FaStar } from "react-icons/fa6";
import { truncateSentence } from "../helpers/helper";

function Departments() {
  const [data, error] = useFetch("https://fakestoreapi.com/products"); // custom hook
  console.log("data", data);
  console.log("error", error);
  return (
    <div>
      {/* <RefComp /> */}
      <div className="container-fluid">
        <div className="row g-4">
          {data.map(
            ({ id, description, category, title, rating, image, price }) => (
              <div className="col-3" key={id}>
                <div className="card">
                  <div
                    style={{ height: "220px" }}
                    className="bg-primary w-100 object-fit-contain overflow-hidden"
                  >
                     <img src={image} className="img-fluid w-100" alt="Card image object-fit-fill" height="inherit"/>
                  </div>

                  <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text fst-italic">{truncateSentence(description)}</p>
                    <p className="card-text text-italic">{category}</p>
                    <p className="card-text text-italic">{price}</p>
                    <p className="card-text text-italic">
                      {rating.rate}
                      <FaStar color="yellow" />
                    </p>
                    <button className="card-link btn btn-primary">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Departments;
