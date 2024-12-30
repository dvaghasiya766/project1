import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import StateABC from "./Lab3012/statemanagement1";
import StateXYZ from "./Lab3012/statemanagement2";
// import Component1 from "./Lab2412/component1";
// import TimeTable from "./Lab2412/timetable";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Component1 /> */}
    {/* <TimeTable /> */}
    {/* <StateABC /> */}
    <StateXYZ />
  </StrictMode>
);
