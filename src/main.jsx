import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CustomComponent from "./Lab2101/compo1";
// import FontSelector from "./Lab0601/StateExample1";
// import Task1 from "./Lab0701/task1";
// import Task2 from "./Lab0701/task2";
// import Task3 from "./Lab0701/task3";
// import Task4 from "./Lab0701/task4";
// import HookExample from "./Lab0601/hookexmp";
// import StateExample1 from "./Lab0601/StateExample";
// import StateABC from "./Lab3012/statemanagement1";
// import StateXYZ from "./Lab3012/statemanagement2";
// import StatMerge from "./Lab3012/statemarge";
// import Component1 from "./Lab2412/component1";
// import TimeTable from "./Lab2412/timetable";
// import MyCustComp from "./Lab3112/propexamp3";
// import Purefunc1 from "./Lab3112/purefunc1";
// import MyCustButton from "./Lab3112/purefunc2";
// import HookExample1 from "./Lab3112/hookexamp1";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <TimeTable /> */}
    {/* <Component1 /> */}
    {/* <TimeTable /> */}
    {/* <StateABC /> */}
    {/* <StateXYZ /> */}
    {/* <StatMerge /> */}
    {/* <MyCustComp /> */}
    {/* <Purefunc1 var1={true} var2={"Hello"} />
    <Purefunc1 var1={false} var2={"How are you"} /> */}
    {/* <MyCustButton />
    <MyCustButton var2={"Hello"} />
    <MyCustButton var1={true} />
    <MyCustButton var1={true} var2={"Hello"} /> */}
    {/* <HookExample1 /> */}
    {/* <HookExample /> */}
    {/* <StateExample1 /> */}
    {/* <FontSelector/> */}
    {/* <Task1 />
        <Task2 />
        <Task3 />
        <Task4 /> 
    */}
    {/* <APIRequest /> */}
    {/* <CountDown /> */}
    {/* <ImageComponent /> */}
    <CustomComponent />
  </StrictMode>
);
