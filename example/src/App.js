import React from "react";

import { Wrapper } from "react-flip";
import "react-flip/dist/index.css";

const App = () => {
  const style = {
    content: {
      backgroundColor: "#bbb",
      position: "absolute",
      width: "100%",
      height: "100%",
      backfaceVisibility: "hidden",
    },
    content2: {
      backgroundColor: "#2980b9",
      position: "absolute",
      width: "100%",
      height: "100%",
      backfaceVisibility: "hidden",
      transform: "rotateY(180deg)",
    },
  };
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Wrapper
        trigger="click"
        // flipForward
        rotation="left"
        duration={0.6}
        flipCount={1}
        perspective="900px"
      >
        <div style={style.content}></div>
        <div style={style.content2}></div>
      </Wrapper>
    </div>
  );
};

export default App;
