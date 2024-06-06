import React, { useState, useContext } from "react";
import "./Accordion.css";
import Questions from "../Questions/Questions";
import Button from "../Button/Button";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Context } from "../../context/context";

const Accordion = ({ headline, questions, accordId, isOpen, isEditable }) => {
  const { data, setData } = useContext(Context);

  const onSave = () => {
    let nextAccordionEditableCheck = true;

    questions.forEach((element) => {
      if (element.answer === "no") {
        nextAccordionEditableCheck = false;
      }
    });

    if (nextAccordionEditableCheck) {
      setData(() => {
        let newData = data.map((item) => {
          if (item.accordId == accordId + 1) {
            return {
              ...item,
              isEditable: true,
              isOpen: true,
            };
          } else if (item.accordId === accordId) {
            return {
              ...item,
              isOpen: false,
            };
          } else return item;
        });

        return newData;
      });
    } else {
      setData(() => {
        let newData = data.map((item) => {
          if (item.accordId > accordId) {
            return {
              ...item,
              isEditable: false,
              isOpen: false,
            };
          } else return item;
        });

        return newData;
      });
    }
  };

  const onCancel = () => {
    setData(() => {
      let newData = data.map((item) => {
        if (item.accordId == accordId) {
          return {
            ...item,
            questions: item.questions.map((elem) => {
              return {
                ...elem,
                answer: "no",
              };
            }),
          };
        } else return item;
      });
      return newData;
    });
  };

  return (
    <>
      <div
        className={`accordion-container  ${
          !isEditable ? "accordion-container-disabled" : ""
        }`}
      >
        <div className="flex">
          <div className="accordion-headline">{headline}</div>
          <div>
            {true ? (
              <FaPlus
                onClick={() => {
                  setData(() => {
                    let newData = data.map((item) => {
                      if (item.accordId == accordId) {
                        return {
                          ...item,
                          isOpen: !item.isOpen,
                        };
                      } else return item;
                    });

                    return newData;
                  });
                }}
              />
            ) : (
              <FaMinus />
            )}
          </div>
        </div>
        {isOpen ? (
          <div className="accordion-questions">
            {questions &&
              questions.map((elem, j) => {
                return (
                  <Questions
                    key={j}
                    question={elem.question}
                    id={elem.id}
                    accordId={accordId}
                    answer={elem.answer}
                  />
                );
              })}

            <div className="accordion-btns">
              <Button onBtnClick={onSave} btnName={"Save"} />
              <Button onBtnClick={onCancel} btnName={"Cancel"} />
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Accordion;
