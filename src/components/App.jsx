import React, { useState } from "react";

function App() {
  const [currentTime, updateTime] = useState(new Date().toLocaleTimeString());

  function setTime() {
    updateTime(new Date().toLocaleTimeString());
  }

  setInterval(setTime, 1000);

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button>Get Time</button>
    </div>
  );
}

export default App;
