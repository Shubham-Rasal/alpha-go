"use client";
import React from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

export default function ConfettiComponent() {
  const { width, height } = useWindowSize();
  const [isRunning, setIsRunning] = React.useState(true);
  const [opacity, setOpacity] = React.useState(1);

  // clear after 5 seconds
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsRunning(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  // fade out smoothly after 5 seconds
  React.useEffect(() => {
    if (!isRunning) {
      const fadeOutTimer = setInterval(() => {
        setOpacity((prevOpacity) => prevOpacity - 0.01);
      }, 50);
      return () => clearInterval(fadeOutTimer);
    }
  }, [isRunning]);

  return isRunning ? (
    <Confetti
    opacity={opacity} width={width} height={height} />
  ) : null;
}
