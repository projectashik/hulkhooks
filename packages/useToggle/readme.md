# Introduction
Basically, what this hook does is switch a parameter's true or false value to the inverse. It comes in handy when we wish to change one action into its opposite action, such as when we want to reveal or hide a modal, show more or less text, or open or close a side menu.

# Installation
```
# Npm
npm install @hulkhooks/use-toggle --save
```

```
# yarn
yarn add @hulkhooks/use-toggle
```

```
# pnpm
pnpm add @hulkhooks/use-toggle
```


# Usage
```js
function UseToggleExample() {
  const [isTextChanged, setIsTextChanged] = useToggle();
  return (
    <>
      {isTextChanged.toString()}
      <button onClick={setIsTextChanged}>
        {isTextChanged ? "Toggled" : "Click to Toggle"}
      </button>
    </>
  );
}
```

# Try It
<iframe src="https://codesandbox.io/embed/objective-darkness-jixj5i?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="objective-darkness-jixj5i"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>