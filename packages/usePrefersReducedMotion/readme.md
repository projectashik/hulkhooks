# Introduction

You can trigger animations in your React App based on user preferences using this hooks.

> The source code for this hook is taken from [https://www.joshwcomeau.com/snippets/react-hooks/use-prefers-reduced-motion/](https://www.joshwcomeau.com/snippets/react-hooks/use-prefers-reduced-motion/)

# Installation

```
# Npm
npm install @hulkhooks/use-prefers-reduced-motion --save
```

```
# yarn
yarn add @hulkhooks/use-prefers-reduced-motion
```

```
# pnpm
pnpm add @hulkhooks/use-prefers-reduced-motion
```

# Usage with React Spring

```js
import { useSpring, animated } from "react-spring";
import { usePrefersReducedMotion } from "@hulkhooks/use-prefers-reduced-motion";
const Box = ({ isBig }) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const styles = useSpring({
    width: 100,
    height: 100,
    background: "rebeccapurple",
    transform: isBig ? "scale(2)" : "scale(1)",
    immediate: prefersReducedMotion,
  });
  return <animated.div style={styles}>Box!</animated.div>;
};
```

# Try It

[![Edit hulkhooks-use-prefers-reduced-motion-712py8](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/hulkhooks-use-prefers-reduced-motion-712py8?fontsize=14&hidenavigation=1&theme=dark)
