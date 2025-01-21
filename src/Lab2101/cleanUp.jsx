import { useState, useEffect } from "react";
import { Promise } from "bluebird";
Promise.config({ cancellation: true });
function FetchUser() {
  return Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Developer" });
    }, 5000);
  });
}
function CancleRequest() {
  const [id, setId] = useState("Loading...");
  const [name, setName] = useState("Data will display...");
  useEffect(() => {
    const promise = FetchUser().then((var1) => {
      setId(var1.id);
      setName(var1.name);
    });
    return () => {
      promise.cancle();
    };
  }, []);
  return (
    <div>
      <h1>User ID: {id}</h1>
      <h2>User Name:{name}</h2>
    </div>
  );
}
export default CancleRequest;
