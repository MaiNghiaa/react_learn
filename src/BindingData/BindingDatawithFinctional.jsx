import React from "react";

export default function BindingDatawithFinctional() {
  const testfunction = () => {
    return <div>vai o` con chim en</div>;
  };
  const test = "asdasd";
  const arr = [1, 2, 3, 4, 5];
  return (
    <div>
      <h1>BindingDatawithFinctional</h1>
      <p>{test}</p>
      <p>{arr}</p>
      <p>{testfunction()}</p>
    </div>
  );
}
