import React from "react";

const Radio = ({ label, value, onChange, id, checked }) => {
  return (
    <div className="radio-container">
      <label>{label}</label>
      <input
        type="radio"
        id={id}
        name={id}
        value={value}
        checked={checked}
        onChange={onChange}
      ></input>
    </div>
  );
};

export default Radio;
