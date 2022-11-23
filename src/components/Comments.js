import React from "react";

export default function Comments(props) {
  return (
    <div>
      <div className="card" style={{ width: "18" }}>
        <div className="card-body" style={{ height: "60vh" }}>
          <h5 className="card-title"> {props.name} </h5>{" "}
          <p className="card-text"> {props.Comments} </p>{" "}
          <h6 className="card-subtitle mb-2 text-muted">
            {" "}
            {props.author},{props.date}{" "}
          </h6>{" "}
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
