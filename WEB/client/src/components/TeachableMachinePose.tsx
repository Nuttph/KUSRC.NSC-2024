import React, { useEffect, useRef, useState } from 'react';
import * as tmPose from '@teachablemachine/pose';

type Keypoint = {
  score: number;
  part: string;
  position: {
    x: number;
    y: number;
  };
};

type Pose = {
  keypoints: Keypoint[];
};

const TeachableMachinePose: React.FC = () => {
  const URL = "https://teachablemachine.withgoogle.com/models/_S_bFut3F/";
  const [model, setModel] = useState<tmPose.CustomPoseNet | null>(null);
  const [maxPredictions, setMaxPredictions] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const labelContainerRef = useRef<HTMLDivElement>(null);
  const [webcam, setWebcam] = useState<tmPose.Webcam | null>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    const loadModel = async () => {
      const modelURL = `https://storage.googleapis.com/tm-model/_S_bFut3F/model.json`;
      const metadataURL = `https://storage.googleapis.com/tm-model/_S_bFut3F/metadata.json`;

      const model = await tmPose.load(modelURL, metadataURL);
      setModel(model);
      setMaxPredictions(model.getTotalClasses());

      const size = 200;
      const flip = true;
      const webcam = new tmPose.Webcam(size, size, flip);
      await webcam.setup();
      await webcam.play();
      setWebcam(webcam);

      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = size;
        canvas.height = size;
        const context = canvas.getContext('2d');
        if (context) {
          setCtx(context);
          window.requestAnimationFrame(loop); // อย่าลืมเรียกใช้งาน loop ที่นี่
        }
      }
    };

    loadModel();
  }, []); // ต้องเปลี่ยนให้ loop ไม่เป็น dependency ของ useEffect เพราะไม่ใช่ dependency

  const loop = async () => {
    if (webcam && model && ctx) {
      webcam.update();
      const { pose, posenetOutput } = await model.estimatePose(webcam.canvas);
      const prediction = await model.predict(posenetOutput);

      if (labelContainerRef.current) {
        labelContainerRef.current.innerHTML = '';
        for (let i = 0; i < maxPredictions; i++) {
          const classPrediction =
            prediction[i].className + ': ' + prediction[i].probability.toFixed(2);
          const div = document.createElement('div');
          div.innerHTML = classPrediction;
          labelContainerRef.current.appendChild(div);
        }
      }

      drawPose(pose);
      window.requestAnimationFrame(loop);
    }
  };

  const drawPose = (pose: Pose) => {
    if (ctx && webcam) {
      ctx.drawImage(webcam.canvas, 0, 0);
      if (pose) {
        const minPartConfidence = 0.5;
        tmPose.drawKeypoints(pose.keypoints, minPartConfidence, ctx);
        tmPose.drawSkeleton(pose.keypoints, minPartConfidence, ctx);
      }
    }
  };

  const handleStart = () => {
    window.requestAnimationFrame(loop);
  };

  return (
    <div>
      <div>Teachable Machine Pose Model</div>
      <button type="button" onClick={handleStart}>Start</button>
      <div>
        <canvas ref={canvasRef}></canvas>
      </div>
      <div ref={labelContainerRef}></div>
    </div>
  );
};

export default TeachableMachinePose;
