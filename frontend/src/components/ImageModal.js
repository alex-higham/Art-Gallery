import React from 'react';
import { useLocation } from 'react-router-dom';

const ImageModal = () => {
  const location = useLocation();
  const image = location.state.image;

  if (!image) {
    // Handle the case where the image prop is not available
    return <div>No image available</div>;
  }

  return (
    <div className="modal">
      {/* Your modal content */}
    </div>
  );
};

export default ImageModal;