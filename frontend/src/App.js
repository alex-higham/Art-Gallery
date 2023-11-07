import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ImageGallery from './components/ImageGallery';
import AboutPage from './components/AboutPage';
import ImageModal from './components/ImageModal';
import Navigation from './components/Navigation'; // Import the Navigation component

const App = () => {
  return (
    <Router>
      <div>
        <Navigation /> {/* Include the Navigation component */}
        <Routes>
          <Route path="/" element={<ImageGallery />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/image/:id" element={<ImageModal />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;