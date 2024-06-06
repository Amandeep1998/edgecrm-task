import React, { useState, useContext } from "react";
import "./Home.css";
import Accordion from "../../components/Accordion/Accordion";
import { Context } from "../../context/context";

const Home = () => {
  const { data, setData } = useContext(Context);

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
            />
          );
        })}
    </div>
  );
};

export default Home;
