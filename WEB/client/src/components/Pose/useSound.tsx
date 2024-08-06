import { useState, useEffect } from "react";

const useSound = () => {
  const [lastSoundPlayTime, setLastSoundPlayTime] = useState(0);
  const [timer, setTimer] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const soundCooldown = 1000; // 1 วินาที

  const playSound = () => {
    const audio = new Audio("/count-time.mp3");
    audio.play();
  };

  const checkProbability = (predictions: any[]) => {
    if (predictions.length > 0 && predictions[0]?.probability !== undefined) {
      const probability = predictions[0].probability * 100;
      const currentTime = Date.now();

      if (probability > 70) {
        if (currentTime - lastSoundPlayTime > soundCooldown) {
          playSound();
          setLastSoundPlayTime(currentTime);
        }
        setIsCounting(true);
      } else {
        setIsCounting(false);
        setTimer(0);
      }
    }
  };

  // Timer increment logic
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isCounting) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    } else {
      if (interval) {
        clearInterval(interval);
      }
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isCounting]);

  return { checkProbability, timer };
};

export default useSound;
