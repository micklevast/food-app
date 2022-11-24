import React, { useState } from "react";
import Comments from "./Comments";
import DishComponent from "./DishComponent";
// import MyFood from "./myFood.json";

export function MenuComponent(props) {
  // const food = JSON.parse(MyFood);
  const [show_hide, set_show_hide] = useState("false");
  const [margin, setmargin] = useState("5px");

  const toggle = () => {
    if (show_hide === "false") {
      set_show_hide("true");
      setmargin("28px");
    } else {
      set_show_hide("false");
      setmargin("5px");
    }
  };

  return (
    <div className="m-500">
      <div
        className="row"
        style={{ justifyContent: "center" }}
        // style={{ height: "60vh" }}
      >
        <div
          style={{ height: "60vh", marginTop: margin, paddingTop: margin }}
          className="col-xs-12 col-sm-12 col-md-5 col-xl-5 cl-lg-5 m-1 ml-29"
        >
          <DishComponent
            food1_img={props.imgLink}
            name={props.name}
            desc={props.desc}
          />
          {/* <p>{MyFood[0]}</p> */}
        </div>{" "}
        <div className="col-xs-12 col-sm-12 col-md-5 col-xl-5 cl-lg-5 m-1 mr-29">
          <button type="" onClick={toggle}>
            show/hide Comments
          </button>
          {show_hide === "true" ? (
            <Comments
              name={props.name}
              author={props.author}
              Comments={props.comment}
              date={props.date}
              img={props.img}
            />
          ) : (
            <h3>Click btn to get to know Comments toogle value:{show_hide}</h3>
          )}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
