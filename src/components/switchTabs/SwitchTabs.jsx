import React, { useState } from "react";
import { useEffect } from "react";

import "./style.scss";

const SwitchTabs = ({ data, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [left, setLeft] = useState(0);
  const [widhtcount, setWidhtcount] = useState(window.screen.width);

  const currentScreenWidht = () => {
    setWidhtcount(() => {
      window.innerWidth;
    });
  };

  // useEffect(() => {
  //   window.addEventListener("resize", currentScreenWidht);
  //   return () => {
  //     window.removeEventListener("resize", currentScreenWidht);
  //   };
  // });

  const activeTab = (tab, index) => {
    if (widhtcount <= 500) {
      setLeft(index * 90);
    } else {
      setLeft(index * 125);
    }
    // setLeft(index * 125);
    setTimeout(() => {
      setSelectedTab(index);
    }, 300);
    onTabChange(tab, index);
  };

  return (
    <div className="switchingTabs">
      <div className="tabItems">
        {data.map((tab, index) => (
          <span
            key={index}
            className={`tabItem ${selectedTab === index ? "active" : ""}`}
            onClick={() => activeTab(tab, index)}
          >
            {tab}
          </span>
        ))}
        <span className="movingBg" style={{ left }} />
      </div>
    </div>
  );
};

export default SwitchTabs;
