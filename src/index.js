import React, { useState } from "react";

export const Wrapper = (props) => {
  const {
    flipForward = false,
    rotation = "right",
    duration = 0.6,
    flipCount = 1,
    perspective = "500px",
    trigger = "hover",
    direction = "horizontal",
    ...child
  } = props;
  const [hover, setHover] = useState(false);
  const [oddClick, setOddClick] = useState(true);
  const [deg, setDeg] = useState(0);

  const style = {
    normal: {
      backgroundColor: "transparent",
      width: 400,
      height: 400,
      perspective: perspective,
    },
    inner: {
      position: "relative",
      width: "100%",
      height: "100%",
      transition: `transform ${duration}s`,
      boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
      transformStyle: "preserve-3d",
    },
    hover: {
      transform: `rotate${direction === "vertical" ? "X" : "Y"}(${deg}deg)`,
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

  const rotationStart = () => {
    let rotationDeg = 0;

    if (rotation === "left" || rotation === "down" ) {
      rotationDeg = deg - 180 * flipCount;
    } else {
      rotationDeg = deg + 180 * flipCount;
    }
    setDeg(rotationDeg);
  };

  const rotationEnd = () => {
    let rotationDeg = 0;
    if (rotation === "left" || rotation === "down" ) {
      if (flipForward) {
        rotationDeg = deg - 180 * flipCount;
      } else {
        rotationDeg = deg + 180 * flipCount;
      }
    } else {
      if (flipForward) {
        rotationDeg = deg + 180 * flipCount;
      } else {
        rotationDeg = deg - 180 * flipCount;
      }
    }
    setDeg(rotationDeg);
  };

  const rotationClick = () => {
    let rotationDeg = 0;
    if (flipForward) {
      if (rotation === "left") {
        rotationDeg = deg - 180;
      } else {
        rotationDeg = deg + 180;
      }
    } else {
      if (rotation === "left") {
        if (oddClick) {
          rotationDeg = deg - 180;
        } else {
          rotationDeg = deg - 180;
        }
      } else {
        if (oddClick) {
          rotationDeg = deg + 180;
        } else {
          rotationDeg = deg + 180;
        }
      }
    }
    setDeg(rotationDeg);
  };

  const onMouseEnter = () => {
    rotationStart();
  };

  const onMouseLeave = () => {
    rotationEnd();
  };

  const rotationOnClick = () => {
    setOddClick(!oddClick);
    rotationClick();
  };

  return (
    <div
      onMouseEnter={trigger === "hover" && onMouseEnter}
      onMouseLeave={trigger === "hover" && onMouseLeave}
      onClick={trigger === "click" && rotationOnClick}
      style={{
        ...style.normal,
      }}
    >
      <div style={{ ...style.inner, ...style.hover }} {...child} />
      {/* <div style={style.content}></div>
        <div style={style.content2}></div> */}
    </div>
  );
};
