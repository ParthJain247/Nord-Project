import "./App.css";
import React, { useEffect } from "react";

function Clock() {
  useEffect(() => {
    let hour = document.getElementById("hour");
    let minute = document.getElementById("minute");
    let second = document.getElementById("second");
    setInterval(() => {
      let d = new Date();
      let htime = d.getHours();
      let mtime = d.getMinutes();
      let stime = d.getSeconds();
      let hrotation = 30 * htime + mtime / 2;
      let mrotation = 6 * mtime;
      let srotation = 6 * stime;

      hour.style.transform = `rotate(${hrotation}deg)`;
      minute.style.transform = `rotate(${mrotation}deg)`;
      second.style.transform = `rotate(${srotation}deg)`;
    }, 1000);
  }, []);
  return (
    <div className="clock_body">
      <div id="clockContainer">
        <div id="hour"></div>
        <div id="minute"></div>
        <div id="second"></div>
      </div>
    </div>
  );
}

export default Clock;
