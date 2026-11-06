import React, { useState, useEffect } from "react";
import "./Slideshow.css";

const images = [
  "/slide1.jpg",
  "/slide2.jpg",
  "/slide3.jpg",
  "/slide4.jpg"
];

function Slideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // change slide every 4s
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slideshow">
      {images.map((src, index) => (
        <div
          key={index}
          className={`slide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${src})` }}
        ></div>
      ))}
    </div>
  );
}

export default Slideshow;
