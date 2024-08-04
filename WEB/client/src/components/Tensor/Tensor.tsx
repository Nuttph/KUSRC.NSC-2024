"use client";
import React, { useRef, useEffect, useState } from "react";
import * as tmPose from "@teachablemachine/pose";

const Tensor: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [labels, setLabels] = useState<string[]>([]);
  const URL = "https://teachablemachine.withgoogle.com/models/PwgfPJ-6p/";
  let model: tmPose.CustomPoseNet | null = null;
  let webcam: tmPose.Webcam | null = null;
  let maxPredictions: number;

  useEffect(() => {
    const init = async () => {
      const modelURL = URL + "model.json";
      const metadataURL = URL + "metadata.json";

      try {
        model = await tmPose.load(modelURL, metadataURL);
        maxPredictions = model.getTotalClasses();

        const size = 300;
        const flip = true;
        webcam = new tmPose.Webcam(size, size, flip);
        await webcam.setup();
        await webcam.play();
        window.requestAnimationFrame(loop);

        const canvas = canvasRef.current;
        if (canvas) {
          canvas.width = size;
          canvas.height = size;
        }
      } catch (error) {
        console.error("Error initializing model or webcam:", error);
      }
    };

    init();

    return () => {
      if (webcam) {
        webcam.stop();
      }
    };
  }, []);

  const loop = async () => {
    if (webcam) {
      webcam.update();
    }
    await predict();
    window.requestAnimationFrame(loop);
  };

  const predict = async () => {
    if (!model || !webcam) return;

    const { pose, posenetOutput } = await model.estimatePose(webcam.canvas);
    const prediction = await model.predict(posenetOutput);

    const newLabels = prediction.map(
      (p) => `${p.className}: ${p.probability.toFixed(2)}`
    );

    setLabels(newLabels);
    drawPose(pose);
  };

  const drawPose = (pose: tmPose.Pose) => {
    if (!webcam || !canvasRef.current) return;
    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    ctx.drawImage(webcam.canvas, 0, 0);
    if (pose) {
      const minPartConfidence = 0.5;
      tmPose.drawKeypoints(pose.keypoints, minPartConfidence, ctx);
      tmPose.drawSkeleton(pose.keypoints, minPartConfidence, ctx);
    }
  };

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          window.location.reload();
        }}
      >
        Start
      </button>
      <canvas ref={canvasRef}></canvas>
      <div id="label-container">
        {labels.map((label, i) => (
          <div key={i}>{label}</div>
        ))}
      </div>
    </div>
  );
};

export default Tensor;
