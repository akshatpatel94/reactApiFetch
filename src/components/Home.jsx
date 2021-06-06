import React from "react";

var heading = { textAlign: "center", color: "orange" };
let currTime = new Date().getHours();
let greeting = "";
var greetColor = {};

if (currTime >= 1 && currTime <= 11) {
  greeting = "Good Morning!";
  greetColor.color = "Green";
} else if (currTime >= 12 && currTime <= 15) {
  greeting = "Good Afternoon!";
  greetColor.color = "red";
} else if (currTime >= 16 && currTime <= 19) {
  greeting = "Good Evening!";
  greetColor.color = "aqua";
} else {
  greeting = "Good Night!";
  greetColor.color = "skyblue";
}

const Home = () => {
  return (
    <>
      <div className="wish_box">
        <h1 style={heading}>
          Hello Sir, <span style={greetColor}>{greeting}</span>
        </h1>
      </div>
    </>
  );
};
export default Home;
