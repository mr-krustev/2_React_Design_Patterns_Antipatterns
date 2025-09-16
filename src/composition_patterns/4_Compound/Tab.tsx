import React, { ReactNode } from "react";

export interface TabProps {
  children: ReactNode;
  label: string;
}

const Tab: React.FC<TabProps> = ({ children }) => {
  return <>{children}</>;
};

export default Tab;
