# react-flip

> "D

[![NPM](https://img.shields.io/npm/v/react-flip.svg)](https://www.npmjs.com/package/react-flip) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-flip
```

## Usage

```jsx
import React, { Component } from "react";

import { Wrapper } from "react-flip";

const Example = () => {
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
    <Wrapper
      trigger="hover"
      direction="vertical"
      flipForward
      rotation="left"
      duration={0.6}
      flipCount={1}
      perspective="900px"
    >
      <div style={style.content} />
      <div style={style.content2} />
    </Wrapper>
  );
};
```

## License

MIT © [thoriqdharmawan](https://github.com/thoriqdharmawan)
