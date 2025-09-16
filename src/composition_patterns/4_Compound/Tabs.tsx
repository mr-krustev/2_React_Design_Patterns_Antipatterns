import React, { useState, ReactNode } from "react";

interface TabsProps {
  children: ReactNode;
}

const hasLabelProp = (child: ReactNode) => {
  return (
    React.isValidElement(child) &&
    typeof child.props === "object" &&
    child.props !== null &&
    "label" in child.props &&
    typeof child.props.label === "string"
  );
};

const Tabs: React.FC<TabsProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div>
        {React.Children.map(children, (child, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            style={{ fontWeight: activeTab === index ? "bold" : "normal" }}
          >
            {React.isValidElement(child) &&
              typeof child.props === "object" &&
              child.props !== null &&
              "label" in child.props &&
              typeof child.props.label === "string" &&
              child.props.label}
          </button>
        ))}
      </div>
      <div>
        {React.Children.map(children, (child, index) => (
          <div
            key={index}
            style={{ display: activeTab === index ? "block" : "none" }}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
