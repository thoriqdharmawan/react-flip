import React, { useState } from "react";

export const Wrapper = () => {
  const [hover, setHover] = useState(false);
  const [deg, setDeg] = useState(180);

  const style = {
    normal: {
      backgroundColor: "transparent",
      width: 100,
      height: 100,
      perspective: "1000px",
    },
    inner: {
      position: "relative",
      width: "100%",
      height: "100%",
      transition: "transform 0.6s",
      boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
      transformStyle: "preserve-3d",
    },
    hover: {
      transform: `rotateY(${deg}deg)`,
    },
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

  const onMouseEnter = () => {
    setHover(true);
  }
  
  const onMouseLeave = () => {
    setHover(false);
  }
  
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        ...style.normal,
      }}
    >
      <div style={{ ...style.inner, ...(hover ? style.hover : null) }}>
        <div style={style.content}></div>
        <div style={style.content2}></div>
      </div>
    </div>
  );
};
