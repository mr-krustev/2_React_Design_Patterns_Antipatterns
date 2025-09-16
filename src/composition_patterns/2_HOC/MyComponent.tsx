import { useTheme } from "./useTheme";
import { withLogging } from "./withLogging";
import { withStyles } from "./withStyles";

/*
  In the functional programming we have a concept of higher-order functions (HOFs). 
HOFs are functions that accept another function as an argument, enhance its behavior, 
and return a new function. Applying the idea of HOFs to components results in higher-order 
components (HOCs).

const HoC = Component => EnhancedComponent

- Reusability: HOCs allow you to encapsulate shared functionalities and apply them to multiple components, promoting code reuse.
- Separation of Concerns: HOCs help maintain separate responsibilities, enabling your components to focus on their specific tasks.
- Code Abstraction: HOCs abstract common logic from components, making them more concise and easier to understand.
- Composability: You can combine various HOCs to compose complex functionalities into your components.


Risks:
 - Prop collision
 - Wrapper Hell
*/

export const MyComponent = () => {
  return <div>Hello, cruel world!</div>;
};

export const MyComponentWithLogging = withLogging(MyComponent);
export const MyComponentWithStyles = withStyles(MyComponent);
export const MyComponentWithLoggingAndStyles = withLogging(
  withStyles(MyComponent)
);

export const MyComponentWithCustomHook = () => {
  const theme = useTheme();

  return (
    <div style={{ fontSize: theme.fontSize, color: theme.color }}>
      Hello, cruel world!
    </div>
  );
};
