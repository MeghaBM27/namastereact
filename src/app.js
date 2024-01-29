import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import BodySection from "./component/BodySection";


const MyAppLayout = () => {
  return (
    <div className="app-container">
      <Header />
      <BodySection />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyAppLayout />);
