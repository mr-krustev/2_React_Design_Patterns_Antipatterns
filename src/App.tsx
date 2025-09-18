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
import { UserList } from "./antipatterns/5_Index_Keys";
import { SearchInput2 } from "./composition_patterns/4_Compound";

function App() {
  return (
    <>
      {/* <div style={{ width: "100%" }}>
        <UserList />
      </div> */}
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
      {/* <div>
        <SearchInput2 />
      </div> */}
    </>
  );
}

export default App;
