import React, { Component, useState, useEffect } from "react";
import "./watch.css";
import Clock from "./Clock";

const Watch = () => {
  const [secondRatio, setSecondRatio] = useState(0);
  const [minuteRatio, setMinuteRatio] = useState(0);
  const [hourRatio, setHourRatio] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setClock();
    }, 1000);
  }, []);

  const setClock = () => {
    const currentDate = new Date();
    let secondRatio1 = currentDate.getSeconds() / 60;
    let minuteRatio1 = (secondRatio1 + currentDate.getMinutes()) / 60;
    let hourRatio1 = (minuteRatio1 + currentDate.getHours()) / 12;
    setSecondRatio((secondRatio1 = currentDate.getSeconds() / 60));
    setMinuteRatio(
      (minuteRatio1 = (secondRatio1 + currentDate.getMinutes()) / 60)
    );
    setHourRatio((hourRatio1 = (minuteRatio1 + currentDate.getHours()) / 12));
  };

  return (
    <Clock
      secondRatio={secondRatio}
      minuteRatio={minuteRatio}
      hourRatio={hourRatio}
    />
  );
};

export default Watch;
