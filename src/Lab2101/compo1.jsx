import { useState } from "react";
import CancleRequest from "./cleanUp";

const ShowUser = ({ var3 }) => (var3 ? <CancleRequest /> : null);

function CustomComponent() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide User" : "Show User"}
      </button>
      <ShowUser var3={show} />
    </>
  );
}

export default CustomComponent;
