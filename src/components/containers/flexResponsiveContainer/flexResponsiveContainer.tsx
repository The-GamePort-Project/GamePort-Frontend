import React from "react";

interface FlexResponsiveContainerProps {
  children: React.ReactNode;
}

const FlexResponsiveContainer = ({
  children,
}: FlexResponsiveContainerProps) => {
  return (
    <div className={`flex flex-col md:flex-row gap-4 flex-wrap`}>
      {children}
    </div>
  );
};
export default FlexResponsiveContainer;
