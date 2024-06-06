import React, { useState, useContext } from "react";
import Radio from "../Radio/Radio";
import "./Questions.css";
import { Context } from "../../context/context";

const Questions = ({ question, id, accordId, answer }) => {
  const [radioData, setRadioData] = useState({
    yes: "yes",
    no: "no",
    na: "na",
  });

  const { data, setData } = useContext(Context);

  const onRadioChangeHandler = (e) => {
    console.log(e.target.name, "name");

    console.log(e.target.value, "value");
    setData(() => {
      let newData = data.map((item) => {
        if (item.accordId == accordId) {
          return {
            ...item,
            questions: item.questions.map((elem) => {
              if (elem.id == e.target.name) {
                return {
                  ...elem,
                  answer: e.target.value,
                };
              } else return elem;
            }),
          };
        } else return item;
      });

      return newData;
    });

    // let changeEditableStateOfNextAccordion= false;

    // data.forEach((item) => {

    // })
  };

  return (
    <div className="question-container">
      <div>{question}</div>
      <div className="flex">
        <Radio
          label={"Yes"}
          value={"yes"}
          onChange={onRadioChangeHandler}
          id={id}
          name={id}
          checked={answer === "yes"}
        />
        <Radio
          label={"No"}
          value={"no"}
          onChange={onRadioChangeHandler}
          id={id}
          checked={answer === "no"}
        />

        <Radio
          label={"N/A"}
          value={"na"}
          onChange={onRadioChangeHandler}
          id={id}
          checked={answer === "na"}
        />
      </div>
    </div>
  );
};

export default Questions;
