import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  const callApi = async () => {
    try {
      const response = await fetch("http://localhost:8080/");
      const text = await response.text();
      setMessage(text);

      setTimeout(() => {
        setMessage("");
      }, 5000); // Clear message after 5 seconds
    } catch (err) {
      setMessage("Error fetching API");
      console.error(err);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Spring Boot API Call</h1>
      <button onClick={callApi}>Click Me</button>
      <p>{message}</p>
    </div>
  );
}

export default App;
