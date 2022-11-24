import React from "react";

export default function Comments(props) {
  return (
    <div>
      <div className="card" style={{ width: "18" }}>
        <div
          className="card-body"
          style={{
            color: "blue",
            // height: "60vh",
            backgroundImage:
              "url('https://media.wired.com/photos/59d67aeeb630711f17447691/master/pass/ChatBubbles-758308587.jpg')",
            height: "51.8vh",

            // marginTop: "-70px",
            // fontSize: "50px",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h5 className="card-title"> {props.name}-Comments </h5>{" "}
          {/* <p className="card-text"> {props.Comments} </p>{" "} */}
          {props.Comments.map((val, index) => {
            return (
              <div>
                <p className="card-text"> {props.Comments[index]} </p>
                <h6
                  className="card-subtitle mb-2 text-muted"
                  style={{ textAlign: "left", color: "red" }}
                >
                  ... {props.author[index]},{props.date[index]}
                </h6>{" "}
              </div>
            );
          })}
          {/* <h6 className="card-subtitle mb-2 text-muted">
            {" "}
            {props.author},{props.date}{" "}
          </h6>{" "} */}
          {/* <a href="/" className="card-link">
            {" "}
            Card link{" "}
          </a>{" "}
          <a href="/" className="card-link">
            {" "}
            Another link{" "}
          </a>{" "} */}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
