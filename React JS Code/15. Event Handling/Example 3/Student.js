import React from "react";

// You can use Arrow Function
function Student(props) {
  function handleClick(e) {
    // Prevent Default
    e.preventDefault();
    console.log("Button Clicked");
  }
  return (
    <div>
      <h1>Hello {props.name}</h1>;
      <a
        href="https://www.geekyshows.com"
        target="_blank"
        onClick={handleClick}
      >
        Click Me
      </a>
    </div>
  );
}

export default Student;
