"use client";
import { useEffect, useRef, useState } from "react";

const Tensor = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [predictions, setPredictions] = useState<any[]>([]);
  const modelURL = "https://teachablemachine.withgoogle.com/models/5yeddlPSq/";

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data && event.data.predictions) {
        setPredictions(event.data.predictions);
      }
    };

    window.addEventListener("message", handleMessage);

    // ส่ง modelURL ไปยัง iframe หลังจาก iframe โหลดเสร็จ
    if (iframeRef.current) {
      iframeRef.current.onload = () => {
        console.log("Sending model URL to iframe");
        iframeRef.current?.contentWindow?.postMessage({ modelURL }, "*");
      };
    }

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <div className="pt-[150px]">
      <iframe
        ref={iframeRef}
        src="/testtext.html"
        className="w-full h-[100vh]"
        title="Iframe"
      ></iframe>
      <div>
        <h1>Predictions from Iframe:</h1>
        <ul>
          {predictions.map((prediction, index) => (
            <li key={index}>
              {prediction.className}: {prediction.probability}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tensor;
