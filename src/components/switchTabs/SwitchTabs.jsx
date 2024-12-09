import React, { useState } from "react";
import { useEffect } from "react";

import "./style.scss";

const SwitchTabs = ({ data, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [left, setLeft] = useState(0);
  const [widhtcount, setWidhtcount] = useState(window?.innerWidth);

  const currentScreenWidht = () => {
    setWidhtcount(() => {
      return window?.innerWidth;
    });
  };

  useEffect(() => {
    window.addEventListener("resize", currentScreenWidht);
    return () => {
      window.removeEventListener("resize", currentScreenWidht);
    };
  });

  const activeTab = (tab, index) => {
    if (widhtcount <= 500) {
      setLeft(index * 96);
    } else {
      setLeft(index * 102);
    }
    // setLeft(index * 125);
    setTimeout(() => {
      setSelectedTab(index);
    }, 300);
    onTabChange(tab, index);
  };

  // useEffect(() => {
  //   activeTab();
  // }, [widhtcount]);

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
