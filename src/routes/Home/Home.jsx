import React, { useState, useContext } from "react";
import "./Home.css";
import Accordion from "../../components/Accordion/Accordion";
import { Context } from "../../context/context";

const Home = () => {
  const { data, setData } = useContext(Context);

  const showBtns = (questions) => {
    let isShowBtns = false;
    questions.forEach((elem) => {
      if (elem.answer === "yes" || elem.answer === "na") {
        isShowBtns = true;
      }
    });

    return isShowBtns;
  };

  return (
    <div className="home-container">
      {data &&
        data.map((item, i) => {
          return (
            <Accordion
              key={item.accordId}
              headline={item.headline}
              questions={item.questions}
              accordId={item.accordId}
              isOpen={item.isOpen}
              isEditable={item.isEditable}
              showBtns={showBtns(item.questions)}
            />
          );
        })}
    </div>
  );
};

export default Home;
