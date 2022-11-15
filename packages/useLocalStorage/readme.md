# Introduction
With this package you can use localStorage in your React app and also in Next.js app without hydration error. It is a simple hook that returns an array with two values. The first value is the value of the key in the localStorage and the second value is a function that you can use to set the value of the key in the localStorage.

# Installation
```
# Npm
npm install @hulkhooks/use-localstorage --save
```

```
# yarn
yarn add @hulkhooks/use-localstorage
```

```
# pnpm
pnpm add @hulkhooks/use-localstorage
```


# Usage
```js
import { useLocalStorage } from '@hulkhooks/use-localstorage'

function UseLocalStorageExample() {
  const [value, setValue] = useLocalStorage('key', 'default-value');
  return (
    <>
      <p>{value}</p>
      <button onClick={() => setValue('new-value')}>Set value</button>
    </>
  );
}
```

# Try It
[![Edit thirsty-cray-ele8gg](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/thirsty-cray-ele8gg?file=/src/App.js)