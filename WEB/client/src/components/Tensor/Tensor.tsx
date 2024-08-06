"use client";
import { useEffect, useRef, useState } from "react";

const Tensor = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [predictions, setPredictions] = useState<any[]>([]);
  const [modelURL, setModelURL] = useState<string>("");

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      console.log("ข้อความที่รับจาก iframe:", event.data);
      if (event.data && event.data.predictions) {
        setPredictions(event.data.predictions);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  const sendModelURLToIframe = () => {
    if (iframeRef.current) {
      const url = "https://teachablemachine.withgoogle.com/models/5yeddlPSq/"; // URL โมเดล
      iframeRef.current.contentWindow?.postMessage({ modelURL: url }, "*");
    }
  };

  return (
    <div className="pt-[150px] text-[#fff] flex flex-row items-center gap-[50px]">
      <div>
        <iframe
          ref={iframeRef}
          src="/testtext.html"
          className="w-[700px] h-[1000px]"
          title="Iframe"
        ></iframe>
      </div>
      <div className="text-[35px]">
        <button
          onClick={sendModelURLToIframe}
          className="mt-4 p-2 bg-blue-500 text-white"
        >
          ส่ง URL โมเดล
        </button>
        <h1>การคาดการณ์จาก Iframe:</h1>
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
