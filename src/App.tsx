import React from "react";
import "./App.css";
import TabsContainer from "./composition_patterns/4_Compound/TabsContainer";
import SearchInput from "./composition_patterns/4_Compound/2.1_FlyOut";
import { LockableInput } from "./composition_patterns/3_Render_Props/RenderProps";
import { UsersContainer } from "./composition_patterns/1_Cointainer_Presentation/UserContainer";
import {
  MyComponentWithLogging,
  MyComponentWithLoggingAndStyles,
  MyComponentWithStyles,
} from "./composition_patterns/2_HOC/MyComponent";

function App() {
  return (
    <>
      {/* <div>
        <UsersContainer />
      </div> */}
      {/* <div>
        <MyComponentWithLogging />
        <MyComponentWithStyles />
        <MyComponentWithLoggingAndStyles />
      </div> */}
      {/* <div>
        <LockableInput />
      </div> */}
      {/* <div>
        <TabsContainer />
      </div> */}
      {/* <div>
        <SearchInput />
      </div> */}
    </>
  );
}

export default App;
