import { withLogging } from "./withLogging";
import { withStyles } from "./withStyles";

export const MyComponent = () => {
  return <div>Hello, cruel world!</div>;
};

export const MyComponentWithLogging = withLogging(MyComponent);
export const MyComponentWithStyles = withStyles(MyComponent);
export const MyComponentWithLoggingAndStyles = withLogging(
  withStyles(MyComponent)
);
