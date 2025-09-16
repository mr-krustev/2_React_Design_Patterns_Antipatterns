/*
  The benefits:
  - Reusability: the individual components within a compound component are designed to work together, 
    they can be easily reused in different parts of your application without having to duplicate code or functionality. 
    This can help to reduce the overall complexity of your codebase, and make it easier to maintain and update your application over time.
  - Flexibility: compound components provide a flexible way to build complex UI components while
    maintaining a clean and concise API. This pattern allows you to create highly customizable and reusable components 
    without passing too many props to the component.
  - Separation of Concerns: with compound components, each child component is responsible for its specific functionality,
      making it easier to maintain and update individual components without affecting the entire system.
  - Intuitive API: by encapsulating related child components within a parent component, 
      the Compound Components pattern offers a clear and intuitive API that’s easy to understand and use for other developers.
  - Enhanced Customization: this pattern allows developers to easily swap or extend child components, 
      leading to enhanced customization.
  - Consistency: by providing a consistent interface for interacting with a compound component, 
      the compound component pattern can help to improve the user experience of your application.
  - Less Prop Drilling: in compound components, instead of passing state through props, we pass elements as children 
      to a parent element. This allows the parent to manage the implicit state and reduces the need for prop drilling.
  - Maintainability: compound components provide a more flexible way to share state within React applications, 
      so making use of compound components in your React applications makes it easier to maintain and actually debug your apps.
*/

import Tabs from "./Tabs";
import Tab from "./Tab";

const TabsContainer = () => {
  return (
    <Tabs>
      <Tab label="Tab 1">
        <p>Content for Tab 1</p>
      </Tab>
      <Tab label="Tab 2">
        <p>Content for Tab 2</p>
      </Tab>
      <Tab label="Tab 3">
        <p>Content for Tab 3</p>
      </Tab>
    </Tabs>
  );
};

export default TabsContainer;
