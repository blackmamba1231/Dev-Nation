"use client";
import React from 'react';
import './image-loader.css'; // Import CSS for shimmer effect

const ImageLoader: React.FC = () => {
  return (
    <div className="image-loader">
      <div className="shimmer"></div>
    </div>
  );
};

export default ImageLoader;
