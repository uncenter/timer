import { useState, useEffect } from "react";
import Icon from "@mdi/react";
import { mdiPause, mdiPlay, mdiHistory } from "@mdi/js";

function Stopwatch() {
    const [time, setTime] = useState(() => {
        let seconds = localStorage.getItem("clock_seconds");
        if (seconds) {
            return Number(seconds);
        } else {
            return 0;
        }
    });
    const [paused, setPaused] = useState(false);
    let interval;

    function secondsToHms(s) {
        let hours = Math.floor(s / 3600);
        let minutes = Math.floor((s - hours * 3600) / 60);
        let seconds = s - hours * 3600 - minutes * 60;

        let timeString =
            hours.toString().padStart(2, "0") +
            ":" +
            minutes.toString().padStart(2, "0") +
            ":" +
            seconds.toString().padStart(2, "0");
        return timeString;
    }

    useEffect(() => {
        let interval;
        if (!paused) {
            interval = setInterval(() => {
                setTime((time) => {
                    const newTime = time + 1;
                    localStorage.setItem("clock_seconds", String(newTime));
                    document.title = secondsToHms(newTime);
                    return newTime;
                });
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [paused]);
    

    return (
        <div className="stopwatch">
            <div className="section clock">
                <h1 className="title">{secondsToHms(time)}</h1>
            </div>
            <div className="section controls">
                <button onClick={() => {setTime(0); setPaused((prevPaused) => !prevPaused); localStorage.setItem("clock_seconds", String(0)); document.title = secondsToHms(0)}}>
                    <Icon path={mdiHistory} size={1} />
                </button>
                <button onClick={() => setPaused((prevPaused) => !prevPaused)}>
                    {paused ? (
                        <Icon path={mdiPlay} size={1} />
                    ) : (
                        <Icon path={mdiPause} size={1} />
                    )}
                </button>
            </div>
        </div>
    );
}

export default Stopwatch;