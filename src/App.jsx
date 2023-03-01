import "./App.css";
import Stopwatch from "./components/Stopwatch.jsx";
import Project from "./components/Project.jsx";

function App() {
    return (
        <div className="App">
            <div className="header">
                <img height="50" width="50" src="/clock_512x512.png" alt="logo" />
                <h1 className="title">Stopwatch</h1>
            </div>
            <Stopwatch />
            <Project />
        </div>
    );
}

export default App;
