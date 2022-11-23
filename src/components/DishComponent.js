import React from "react";
import img1 from "../images/food8.jpg";

export default function DishComponent(props) {
  return (
    <div>
      <div className="card">
        <img
          className="card-img-top justify-content-around"
          // src={img1}
          src={props.food1_img}
          alt="foodPics"
          style={{ width: "100" }}
          width="50%"
        />
        <div className="card-body">
          <h5 className="card-title"> {props.name} </h5>{" "}
          <p className="card-text">{props.desc} </p>{" "}
          {/* <a href="/" className="btn btn-primary">
            Go somewhere{" "}
          </a>{" "} */}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
