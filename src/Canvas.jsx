import React, { useEffect, useRef, useState } from "react";
import images from "./image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Canvas = ({ details }) => {
  const scale = window.devicePixelRatio
  const { startIndex, numImages, duration, size, top, left, zIndex } = details;
  const [index, setIndex] = useState({ value: details.startIndex })
  const canvasRef = useRef(null);
  useGSAP(() => {
    gsap.to(index, {
      value: details.startIndex + details.numImages - 1, repeat: -1, duration: details.duration, ease: "linear", onUpdate: () => {
        setIndex({ value: Math.round(index.value) })
      }
    });
  }, [index]);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = images[index.value];
    img.onload = () => {
      canvas.width = canvas.offsetWidth * scale;
      canvas.height = canvas.offsetHeight * scale;
      canvas.style.width = canvas.offsetWidth + "px";
      canvas.style.height = canvas.offsetHeight + "px ";
      ctx.scale(scale, scale);
      ctx.drawImage(img, 0, 0, canvas.offsetWidth, canvas.offsetHeight);
    };
  });
  return <canvas data-scroll data-scroll-speed={
    Math.random().toFixed(1)
  } id="canvas" className="absolute" style={{ width: `${size * 1.8}px`, height: `${size * 1.8}px`, top: `${top}%`, left: `${left}%`, zIndex: `${zIndex}` }} ref={canvasRef}></canvas>;
};

export default Canvas;
