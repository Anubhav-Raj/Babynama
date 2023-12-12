import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [totalMinutes, setTotalMinutes] = useState(0);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef();
  const startTimeRef = useRef();
  // To check input number is  number or not
  const handleKeyPress = (e) => {
    if (isRunning) {
      resetStopwatch();
    }
    if (isNaN(e.key)) {
      e.preventDefault();
    }
  };

  // to  start  stopWatch
  const startStopwatch = () => {
    if (!isRunning) {
      const totalSeconds = totalMinutes * 60;
      const initialTime = time || totalSeconds;
      setTime(initialTime);
      setIsRunning(true);
      startTimeRef.current = Date.now() - (totalSeconds - initialTime) * 1000;
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }
  };

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const remainingSeconds = seconds % 3600;
    const minutes = Math.floor(remainingSeconds / 60);
    const remainingMinutes = remainingSeconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${remainingMinutes.toString().padStart(2, "0")}`;
  };

  const resetStopwatch = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTotalMinutes(0);
    setTime(0);
  };

  return (
    <>
      <div className="flex-container">
        <div className="centered-div">
          <label className="lable_text">Enter Minute</label>
          <div className="input_box">
            <input
              name="min"
              type="text"
              onChange={(e) => setTotalMinutes(e.target.value)}
              onKeyPress={handleKeyPress}
              value={totalMinutes}
            />
          </div>
          <div className="circle">
            <span>
              <span>
                {isRunning ? (
                  <svg
                    width="50px"
                    height="50px"
                    viewBox="0 0 24.00 24.00"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#06ACCD"
                    onClick={startStopwatch}
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke=""
                        strokeWidth="1.5"
                      ></circle>{" "}
                      <path
                        d="M8 9.5C8 9.03406 8 8.80109 8.07612 8.61732C8.17761 8.37229 8.37229 8.17761 8.61732 8.07612C8.80109 8 9.03406 8 9.5 8C9.96594 8 10.1989 8 10.3827 8.07612C10.6277 8.17761 10.8224 8.37229 10.9239 8.61732C11 8.80109 11 9.03406 11 9.5V14.5C11 14.9659 11 15.1989 10.9239 15.3827C10.8224 15.6277 10.6277 15.8224 10.3827 15.9239C10.1989 16 9.96594 16 9.5 16C9.03406 16 8.80109 16 8.61732 15.9239C8.37229 15.8224 8.17761 15.6277 8.07612 15.3827C8 15.1989 8 14.9659 8 14.5V9.5Z"
                        stroke=""
                        strokeWidth="1.5"
                      ></path>{" "}
                      <path
                        d="M13 9.5C13 9.03406 13 8.80109 13.0761 8.61732C13.1776 8.37229 13.3723 8.17761 13.6173 8.07612C13.8011 8 14.0341 8 14.5 8C14.9659 8 15.1989 8 15.3827 8.07612C15.6277 8.17761 15.8224 8.37229 15.9239 8.61732C16 8.80109 16 9.03406 16 9.5V14.5C16 14.9659 16 15.1989 15.9239 15.3827C15.8224 15.6277 15.6277 15.8224 15.3827 15.9239C15.1989 16 14.9659 16 14.5 16C14.0341 16 13.8011 16 13.6173 15.9239C13.3723 15.8224 13.1776 15.6277 13.0761 15.3827C13 15.1989 13 14.9659 13 14.5V9.5Z"
                        stroke=""
                        strokeWidth="1.5"
                      ></path>{" "}
                    </g>
                  </svg>
                ) : (
                  <svg
                    fill="#06ACCD"
                    height="50px"
                    width="50px"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    // eslint-disable-next-line react/no-unknown-property
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="-51.2 -51.2 614.40 614.40"
                    xmlSpace="preserve"
                    stroke="#06ACCD"
                    strokeWidth="0.00512"
                    transform="matrix(1, 0, 0, -1, 0, 0)"
                    onClick={startStopwatch}
                  >
                    <g
                      id="SVGRepo_bgCarrier"
                      strokeWidth="0"
                      transform="translate(256,256), scale(0)"
                    >
                      <rect
                        x="-51.2"
                        y="-51.2"
                        width="614.40"
                        height="614.40"
                        rx="0"
                        fill=""
                        strokeWidth="0"
                      ></rect>
                    </g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke="#CCCCCC"
                      strokeWidth="1.024"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <g>
                        <g>
                          <path d="M256,0C114.608,0,0,114.608,0,256s114.608,256,256,256s256-114.608,256-256S397.392,0,256,0z M256,496 C123.664,496,16,388.336,16,256S123.664,16,256,16s240,107.664,240,240S388.336,496,256,496z"></path>
                        </g>
                      </g>
                      <g>
                        <g>
                          <path d="M176.416,129.792v252.416L395.024,256L176.416,129.792z M192.416,157.504L363.024,256l-170.608,98.496V157.504z"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                )}
              </span>
            </span>
            <span className="time" id="display">
              {time > 0 ? formatTime(time) : "00:00:00"}
            </span>
            <div>
              <button onClick={resetStopwatch}>Reset</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
