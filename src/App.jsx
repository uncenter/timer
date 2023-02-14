import { useState, useEffect } from "react";
import "./App.css";
import Timer from "./components/Timer";

function App() {
    return (
        <div className="App">
            <div className="header">
                <img height="50" width="50" src="/clock_512x512.png" alt="logo" />
                <h1 className="title">Timer</h1>
            </div>
            <Timer />
        </div>
    );
}

export default App;
