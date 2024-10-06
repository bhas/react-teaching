

## #1

```jsx
function button() {
  return <button>Click me</button>;
}
```

## #2

```jsx
const MyComponent {
    return 
        <div>Hello World</div>;
}
```

## #3

```jsx
function OuterComponent() {
  function InnerComponent() {
    return <div>Inner</div>;
  }

  return <InnerComponent />;
}
```

## #4

```jsx
function App() {
  return <MyOtherComponent>;
}
```

## #5

```jsx
function App() {
  return (
    <h1>My header</h1>
    <ol>
        <li>Item 1</li>
        <li>Item 2</li>
    </ol>
  )
}
```

## #6

```jsx
function App() {
    const cssClass = 'addContainer'
    const productName = 'Sushi'
    return <button class="cssClass">Buy more {productName}</button>;
}
```