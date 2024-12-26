import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Component1 from "./Lab2412/component1";
// import TimeTable from "./Lab2412/timetable";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Component1 />
    {/* <TimeTable /> */}
  </StrictMode>
);
