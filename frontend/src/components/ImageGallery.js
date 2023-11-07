import React, { useState } from 'react';
import './ImageGallery.css';

const ImageGallery = () => {
  const images = [
    { id: 1, src: '/armor_cat.jpg', alt: 'Armor Cat', title: 'Amored Cat', description: 'A cute cat in armor. Made using stable diffusion' },
    { id: 2, src: '/cyberpunk_armor.jpg', alt: 'Cyberpunk Armor', title: 'Cyberpunk Armor', description: 'Heavy cyberpunk armored person in neon city lights.  Made using stable diffusion' },
    { id: 3, src: '/flame_background.jpg', alt: 'Flame Background', title: 'Flame Background', description: 'The group reaches an apocalyptic backdrop where the city and mountainside is in flames.  Made using stable diffusion' },
    { id: 4, src: '/house_waterfall.jpg', alt: 'House Waterfall', title: 'House Waterfall', description: 'Small asian house surrounded by waterfalls.  Made using stable diffusion' },
    { id: 5, src: '/purple_forest.jpg', alt: 'Purple Forest', title: 'Purple Forest', description: 'A fantasy forest with purple trees.  Made using stable diffusion' },
    { id: 6, src: '/snow_mountain.jpg', alt: 'Snow Mountain', title: 'Snow Mountain', description: 'Jagged snow peak mountain range.  Made using stable diffusion' },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div>
      {/* Header */}
      <h1 className="gallery-header">Welcome to Neuartify's art gallery!</h1>
      <p className="gallery-header">Click on an image to enter modal mode.  </p>
      <p className="gallery-header">Updating images requires manually updating code.  For now...  </p>
      <div className="gallery">
        {images.map((image, index) => (
          <div key={image.id} onClick={() => openModal(index)} className="gallery-image">
            <img src={image.src} alt={image.alt} />
            <div className="image-text">
              <p className="image-title">{image.title}</p>
            </div>
          </div>
        ))}
      </div>

      {modalOpen && (
        <div className="modal">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <div className="modal-content">
            <img src={images[currentImageIndex].src} alt={images[currentImageIndex].alt} />
            <div className="image-text">
              <p className="image-title">{images[currentImageIndex].title}</p>
              <p className="image-description">{images[currentImageIndex].description}</p>
            </div>
          </div>
          <button className="prev" onClick={prevImage}>&#10094;</button>
          <button className="next" onClick={nextImage}>&#10095;</button>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;