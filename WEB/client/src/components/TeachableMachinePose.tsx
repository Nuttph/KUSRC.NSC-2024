import React, { useEffect, useState } from "react";
import * as tmPose from "@teachablemachine/pose";

type TmPosePose = {
  keypoints: Array<{
    position: { x: number; y: number };
    part: string;
    score: number;
  }>;
  score: number;
};

const TeachableMachinePoseModel: React.FC = () => {
  const URL = "https://teachablemachine.withgoogle.com/models/Em6AHBi3d/";
  let model: tmPose.CustomPoseNet | null = null;
  let webcam: tmPose.Webcam | null = null;
  let ctx: CanvasRenderingContext2D | null = null;
  let labelContainer: HTMLDivElement | null = null;
  let maxPredictions: number = 0;

  const init = async () => {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    try {
      model = await tmPose.load(modelURL, metadataURL);
      maxPredictions = model.getTotalClasses();

      const size = 500;
      const flip = true;
      webcam = new tmPose.Webcam(size, size, flip);
      await webcam.setup();
      await webcam.play();
      window.requestAnimationFrame(loop);

      const canvas = document.getElementById("canvas") as HTMLCanvasElement;
      canvas.width = size;
      canvas.height = size;
      ctx = canvas.getContext("2d");
      labelContainer = document.getElementById(
        "label-container"
      ) as HTMLDivElement;
      if (labelContainer) {
        for (let i = 0; i < maxPredictions; i++) {
          labelContainer.appendChild(document.createElement("div"));
        }
      }
    } catch (error) {
      console.error("Failed to initialize Teachable Machine:", error);
    }
  };

  const [isOpen, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      init();
    }
    return () => {
      if (webcam) {
        webcam.stop();
      }
    };
  }, [isOpen]);

  const loop = async () => {
    if (webcam && model) {
      webcam.update();
      await predict();
      window.requestAnimationFrame(loop);
    }
  };

  const [result, setResult] = useState<boolean>(false);

  const predict = async () => {
    try {
      if (webcam && model) {
        const { pose, posenetOutput } = await model.estimatePose(webcam.canvas);
        const prediction = await model.predict(posenetOutput);

        if (labelContainer) {
          for (let i = 0; i < maxPredictions; i++) {
            const classPrediction =
              Number((prediction[i].probability * 100).toFixed(2)) > 80
                ? prediction[i].className
                : "";
            (labelContainer.childNodes[i] as HTMLDivElement).innerHTML =
              classPrediction;
            setResult(classPrediction === "Standart");
          }
        }

        drawPose(pose);
      }
    } catch (error) {
      console.error("Error predicting:", error);
    }
  };

  const drawPose = (pose: TmPosePose) => {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    if (canvas && ctx && webcam) {
      ctx.drawImage(webcam.canvas, 0, 0);
      if (pose) {
        const minPartConfidence = 0.5;
        tmPose.drawKeypoints(pose.keypoints, minPartConfidence, ctx);
        tmPose.drawSkeleton(pose.keypoints, minPartConfidence, ctx);
      }
    }
  };

  return (
    <>
      {isOpen ? "" : <button onClick={() => setOpen(true)}>Start</button>}
      <div className="flex flex-row">
        <div>
          <canvas id="canvas"></canvas>
        </div>
        <div
          id="label-container"
          className={`w-[50rem] h-[40px] items-center justify-center bg-red-500 rounded-[15px] ${
            isOpen ? "flex" : "hidden"
          }`}
        ></div>
      </div>
      <div
        className={`w-[50rem] h-[50rem] items-center justify-center rounded-[15px] flex ${
          result ? "bg-green-500" : "bg-red-500"
        }`}
      >
        {result ? "true" : "false"}
      </div>
    </>
  );
};

export default TeachableMachinePoseModel;
