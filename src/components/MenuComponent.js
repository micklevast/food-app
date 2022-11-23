import React, { useState } from "react";
import Comments from "./Comments";
import DishComponent from "./DishComponent";
// import MyFood from "./myFood.json";

export function MenuComponent(props) {
  // const food = JSON.parse(MyFood);

  return (
    <div className="m-500">
      <div
        className="row"
        style={{ justifyContent: "center" }}
        // style={{ height: "60vh" }}
      >
        <div className="col-xs-12 col-sm-12 col-md-5 col-xl-5 cl-lg-5 m-1 ml-29">
          <DishComponent
            food1_img={props.imgLink}
            name={props.name}
            desc={props.desc}
          />
          {/* <p>{MyFood[0]}</p> */}
        </div>{" "}
        <div className="col-xs-12 col-sm-12 col-md-5 col-xl-5 cl-lg-5 m-1 mr-29">
          <Comments
            name={props.name}
            author={props.author}
            Comments={props.comment}
            date={props.date}
          />
        </div>{" "}
      </div>{" "}
    </div>
  );
}
