// "use client"
// import { useEffect, useRef, useState } from 'react';
// import '@tensorflow/tfjs';
// import * as tmPose from '@teachablemachine/pose';

// const URL = "https://teachablemachine.withgoogle.com/models/NUOIafEBs/";

// type Keypoint = {
//     position: {
//         x: number,
//         y: number,
//     },
//     part: string,
//     score: number,
// };

// type Pose = {
//     keypoints: Keypoint[],
//     score: number,
// };

// const PhysicalPose = () => {
//     const [model, setModel] = useState<tmPose.CustomPoseNet | null>(null);
//     const [webcam, setWebcam] = useState<tmPose.Webcam | null>(null);
//     const [maxPredictions, setMaxPredictions] = useState(0);
//     const canvasRef = useRef<HTMLCanvasElement>(null);
//     const labelContainerRef = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//         if (webcam) {
//             window.requestAnimationFrame(loop);
//         }
//     }, [webcam]);

//     const init = async () => {
//         const modelURL = `${URL}model.json`;
//         const metadataURL = `${URL}metadata.json`;

//         const loadedModel = await tmPose.load(modelURL, metadataURL);
//         setModel(loadedModel);
//         setMaxPredictions(loadedModel.getTotalClasses());

//         const size = 500;
//         const flip = true;
//         const webcamInstance = new tmPose.Webcam(size, size, flip);
//         await webcamInstance.setup();
//         await webcamInstance.play();
//         setWebcam(webcamInstance);

//         if (canvasRef.current) {
//             canvasRef.current.width = size;
//             canvasRef.current.height = size;
//         }

//         if (labelContainerRef.current) {
//             labelContainerRef.current.innerHTML = '';
//             for (let i = 0; i < loadedModel.getTotalClasses(); i++) {
//                 const div = document.createElement('div');
//                 labelContainerRef.current.appendChild(div);
//             }
//         }
//     };

//     const loop = async () => {
//         if (webcam && model) {
//             webcam.update();
//             await predict();
//             window.requestAnimationFrame(loop);
//         }
//     };

//     const predict = async () => {
//         if (webcam && model && webcam.canvas) {
//             const { pose, posenetOutput } = await model.estimatePose(webcam.canvas);
//             const prediction = await model.predict(posenetOutput);

//             if (labelContainerRef.current) {
//                 prediction.forEach((pred, i) => {
//                     const classPrediction = `${pred.className}: ${(pred.probability * 100).toFixed(2)}`;
//                     if (labelContainerRef.current) {
//                         labelContainerRef.current.childNodes[i].textContent = classPrediction;
//                     }
//                 });
//             }

//             drawPose(pose);
//         }
//     };

//     const drawPose = (pose: Pose) => {
//         if (canvasRef.current && webcam?.canvas) {
//             const ctx = canvasRef.current.getContext('2d');
//             if (ctx) {
//                 ctx.drawImage(webcam.canvas, 0, 0);
//                 if (pose) {
//                     const minPartConfidence = 0.5;
//                     tmPose.drawKeypoints(pose.keypoints, minPartConfidence, ctx);
//                     tmPose.drawSkeleton(pose.keypoints, minPartConfidence, ctx);
//                 }
//             }
//         }
//     };

//     return (
//         <div>
//             <h1>Physical Pose Model</h1>
//             <button type="button" onClick={init}>Start</button>
//             <canvas ref={canvasRef} id="canvas" />
//             <div ref={labelContainerRef} id="label-container" className="text"></div>
//         </div>
//     );
// };

// export default PhysicalPose;

import React from "react";
const PhysicalPose = () => {
  return (
    <>
      <div>
        <iframe src="p1.html" className="w-full h-[100vh]"></iframe>
      </div>
    </>
  );
};
export default PhysicalPose;
