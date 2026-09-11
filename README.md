# Dev Stack Builder

A simple React website where users can explore popular development technologies and build their own technology stack.

## Technologies Used

- React
- TypeScript
- Vite
- CSS
- React Toastify
- JSON

## Main Features

1. Technology cards are loaded from a JSON file instead of being hardcoded in a component.
2. Users can add technologies to their stack, remove one item, or remove everything at once.
3. Toast messages, a loading state, duplicate protection, and responsive layouts are included.

## Running the Project

```bash
npm install
npm run dev
```

## React Questions

i. What is JSX, and why is it used in React?
JSX lets us write HTML-like code inside JavaScript or TypeScript. It makes React components easier to read and build.

ii. What is the difference between props and state?
Props are values passed from a parent component to a child component. State is data kept inside a component and it can change while the app is running.

iii. What does the `useState` hook do, and where did you use it in this project?
`useState` stores changing data in a component. I used it for the selected technologies, loading status, error message, and mobile menu.

iv. What does the `useEffect` hook do, and why did you need it to load the JSON data?
`useEffect` runs code after the component renders. I used it to fetch the technology data once when the app starts.

v. Why does every item in a `.map()` list need a unique `key` prop?
React uses the key to identify each item. It helps React update the correct item when the list changes.

vi. What is conditional rendering? Show one place you used it.
Conditional rendering means showing different UI depending on a condition. In `StackPanel.tsx`, the empty-stack message is shown when no technology is selected.

vii. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
A parent passes data with props. A child can call a function that was passed through props to send an action back to the parent.
