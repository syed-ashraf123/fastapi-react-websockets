import { useEffect } from "react";
function App() {
  console.log("Running");
  var ws = null;
  useEffect(() => {
    ws = new WebSocket("ws://localhost:8000/ws");
    ws.onopen = () => ws.send("Connected");
    onmeaage();
  }, []);
  const onmeaage = () => {
    ws.onmessage = (event) => {
      console.log("WebSocket message received:", event);
    };
  };
  const webgazer = window.webgazer;
  useEffect(() => {
    // webgazer
    //   .setGazeListener((data, clock) => {
    //     if (data) ws.send(JSON.stringify({ x: data.x, y: data.y }));
    //   })
    //   .begin();
  });
  return <div className="App"></div>;
}

export default App;
