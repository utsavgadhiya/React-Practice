# Notes

========= React ==============

- Components
- Functional and Class Components
- JSX
- Props
- State
- Event Handlers
- Parent-Child Components
- Conditional Rendering
- List Rendering
- CSS Styling
- Forms
- Component Lifecycle
- Fragments
- Pure Components - Class Components
- Memo - Functional Components
- Refs
- Portals
- Error Boundary
- Higher Order Components - Component Reusability
- Render Props - Component Reusability
- Context
- HTTP request with axios
- Hooks - useState, useEffect, useContext, useReducer, useCallback, useMemo, useRef, Custom hooks

Notes:

- Always Destructure state and props property
- What Pure Component is to Class Component, Memo is to Functional Component
- Refs can't be attached to functional but only class components.
- When you want to execute a function immediately during the rendering of the DOM, you can call it directly by its name. However, when you want to execute the function in response to an event (like onClick or onHover), you should use an arrow function to ensure that the function is executed only when the event occurs (This only applies to Class Comp.)
- Regular Components: These are the standard components in React. They don't handle their own optimization for re-rendering, so they might re-render even if their props and state haven't changed.
- Pure Components: Pure components are similar to regular components, but they automatically do a shallow comparison on the component's props and state. If there is no change, they prevent unnecessary re-renders. However, they can be less efficient for complex data structures or props with nested objects.
- Memo Components: Memo components are used for functional components to prevent unnecessary re-renders. They perform a shallow comparison of props, and if the props remain the same, the component won't re-render. This is helpful in optimizing the performance of functional components.
- The difference between useCallback() and React.memo() and useMemo() is that the former one is used for memoizing functions, second one is used for memoizing components and the latter one is used for memoizing values.
- useState and useReducer are both used for state management.
- While working with state, if the state variable is object or array then make a copy of the existing state, modify as necessary and then pass the new state to the setter function or while returning from a reducer function as it will cause a re-render.
- props.children is always a new reference which will cause child comp to always re-renders. Therefore, if the child comp itself has children elements, there's no need wrap child comp with react memo.
\