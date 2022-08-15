import React from "react";
import { Puff } from "react-loader-spinner";
import "./spinner.css";

type Message = {
  message: String
}

const Spinner = (props:Message) => {
  return (
    <div className="spinner">
      <Puff
        color="#000"
        height={100}
        width={200}
      />
      <p className="spinner-text">{props.message}</p>
    </div>
  );
};

export default Spinner;
