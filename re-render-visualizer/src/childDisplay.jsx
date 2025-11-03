import React from "react";

const ChildDisplay = React.memo(({ value }) => {
  console.log("ChildDisplay rendered");

  return (
    <div
      id="child"
      style={{
        marginTop: "20px",
        padding: "20px",
        border: "2px solid #888",
        borderRadius: "10px",
      }}
    >
      <h3>Child Component</h3>
      <p>Value from parent: {value}</p>
    </div>
  );
});

export default ChildDisplay;
