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
