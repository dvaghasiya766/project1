import * as React from "react";
function fethcUserData() {
  // API call to fetch user data
  // Simulating delay for demonstration purposes
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "John Doe", age: 30 });
    }, 2000);
  });
}
function APIRequest() {
  const [name, setName] = React.useState("Loading...");
  const [age, setAge] = React.useState("Data will display...");
  useEffect(() => {
    const interval = setInterval(() => {
      setTotalSeconds((prevSeconds) =>
        prevSeconds > 0 ? prevSeconds - 1 : clearInterval(interval)
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  React.useEffect(() => {
    fethcUserData()
      .then((userData) => {
        setName(userData.name);
        setAge(userData.age);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
    //   fethcUserDataWithError().then();
  });
  return (
    // Cleanup function to cancel the API call if component unmounts
    <div>
      User: {name}
      <br />
      Age: {age}
    </div>
  );
}

export default APIRequest;
