import React from "react";
import "./button.css";

const Button = (props) => {
  let { className, btnName, onBtnClick } = props;

  return (
    <>
      <button className={`button-main ${className}`} onClick={onBtnClick}>
        {btnName}
      </button>
    </>
  );
};

export default Button;
