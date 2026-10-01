import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Gallery.css';

import gpodImg from '../../assets/gallery_dogs/gpod.webp';
import oniImg from '../../assets/gallery_dogs/not_dog_oni.webp';
import tofuImg from '../../assets/gallery_dogs/not_dog_tofu.webp';

import ssdlImg from '../../assets/gallery/ssdl_fall2025.webp';
import zooImg from '../../assets/gallery/zoo_san_diego.webp';

// Main Gallery Items
const GALLERY_ITEMS = [
  {
    id: 1,
    description: "GT Space Systems Design Lab Crew",
    location: "Atlanta, GA",
    image: ssdlImg,
    rotation: "-2deg"
  },
  {
    id: 2,
    description: "Zoo with my Favorite Person",
    location: "San Diego, CA",
    image: zooImg,
    rotation: "1.8deg"
  },
  {
    id: 3,
    description: "Presenting Aerospace Research at AIAA Conference",
    location: "San Diego, CA",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
    rotation: "-1.2deg"
  },
  {
    id: 4,
    description: "MS Mechanical Engineering Graduation",
    location: "University of Florida, Gainesville",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
    rotation: "2.5deg"
  },
  {
    id: 5,
    description: "Summit Views & Weekend Outdoor Expeditions",
    location: "Great Smoky Mountains, TN",
    image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=800&q=80",
    rotation: "-2.2deg"
  },
  {
    id: 6,
    description: "LISA Optical Test Bench Alignment",
    location: "Space Optics Cleanroom Facility",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    rotation: "1.5deg"
  }
];

// Secret Animal Gallery Items (Snoopy Easter Egg)
const SECRET_DOG_ITEMS = [
  {
    id: 'dog-1',
    description: "GPOD",
    location: "Parents: Lacey and Dillan",
    image: gpodImg,
    rotation: "-1.8deg",
    isNotDog: false
  },
  {
    id: 'dog-2',
    description: "Oni",
    location: "Parents: Janaki and Jonathan",
    image: oniImg,
    rotation: "2.1deg",
    isNotDog: true
  },
  {
    id: 'dog-3',
    description: "Mr. Tofu",
    location: "Parents: Janaki and Jonathan",
    image: tofuImg,
    rotation: "-2.2deg",
    isNotDog: true
  }
];

function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);
  const [showSecretDogs, setShowSecretDogs] = useState(() => {
    return sessionStorage.getItem('showSecretDogs') === 'true';
  });

  const openSecretDogs = () => {
    setShowSecretDogs(true);
    setActiveIndex(null);
    sessionStorage.setItem('showSecretDogs', 'true');
  };

  const closeSecretDogs = () => {
    setShowSecretDogs(false);
    setActiveIndex(null);
    sessionStorage.removeItem('showSecretDogs');
  };

  // Close normally when clicking outside
  const closeNormal = () => {
    if (isClosing) return;
    setActiveIndex(null);
  };

  // Close with 3D flip motion when clicking the polaroid picture itself
  const closeWithFlip = (e) => {
    if (e) e.stopPropagation();
    if (isClosing || activeIndex === null) return;
    setIsClosing(true);
    setIsFlipping(true);
    setTimeout(() => {
      setActiveIndex(null);
      setIsClosing(false);
      setIsFlipping(false);
    }, 280);
  };

  // Reset to main gallery when Navbar "Gallery" link is clicked
  useEffect(() => {
    const handleReset = () => {
      closeSecretDogs();
      setIsClosing(false);
      setIsFlipping(false);
    };

    window.addEventListener('resetGallery', handleReset);
    return () => window.removeEventListener('resetGallery', handleReset);
  }, []);

  const currentItems = showSecretDogs ? SECRET_DOG_ITEMS : GALLERY_ITEMS;

  const prevPhoto = (e) => {
    if (e) e.stopPropagation();
    setActiveIndex((prev) => (prev === 0 ? currentItems.length - 1 : prev - 1));
  };

  const nextPhoto = (e) => {
    if (e) e.stopPropagation();
    setActiveIndex((prev) => (prev === currentItems.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeIndex === null) return;
      if (e.key === 'ArrowLeft') {
        prevPhoto();
      } else if (e.key === 'ArrowRight') {
        nextPhoto();
      } else if (e.key === 'Escape') {
        closeNormal();
      }
    };

    if (activeIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeIndex, showSecretDogs, isClosing]);

  const activePhoto = activeIndex !== null ? currentItems[activeIndex] : null;

  return (
    <div className="gallery-container">
      <div className="gallery-header">
        {showSecretDogs ? (
          <>
            <div className="secret-badge-banner">EASTER EGG</div>
            <h1 className="gallery-title">Favorite Dogs 🐾</h1>
            <p className="gallery-subtitle">
              You found a collection of my favorite dogs! I hope they bring as much joy to you as they did to me.
            </p>
            <button className="back-to-main-btn" onClick={closeSecretDogs}>
              ← Back to Main Gallery
            </button>
          </>
        ) : (
          <>
            <h1 className="gallery-title">Gallery</h1>
            <p className="gallery-subtitle">
              I'm extremely lucky because I'm surrounded by the kindest most incredible people. Check out our adventures!
              <button 
                className="secret-snoopy-btn" 
                onClick={openSecretDogs}
                title="Snoopy's Secret Dog Gallery 🐾"
                aria-label="Secret Dog Gallery"
              >
                🐶
              </button>
            </p>
          </>
        )}
      </div>

      <div className="polaroid-grid">
        {currentItems.map((item, index) => (
          <div 
            key={item.id} 
            className="polaroid-card"
            style={{ '--rotation': item.rotation }}
            onClick={() => setActiveIndex(index)}
          >
            {item.isNotDog && <div className="not-dog-ribbon">NOT DOG</div>}
            <div className="polaroid-photo-wrapper">
              <img src={item.image} alt={item.description} className="polaroid-photo" />
            </div>

            <div className="polaroid-caption">
              <p className="polaroid-description">{item.description}</p>
              <span className="polaroid-location">{item.location}</span>
            </div>
          </div>
        ))}
      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {activePhoto && (
        <div className={`lightbox-backdrop ${isFlipping ? 'closing' : ''}`} onClick={closeNormal}>
          <button 
            className="lightbox-arrow prev-arrow" 
            onClick={prevPhoto}
            aria-label="Previous photo"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <div className="lightbox-content" onClick={closeNormal}>
            <div 
              className={`lightbox-polaroid ${isFlipping ? 'flipping-out' : ''}`} 
              onClick={closeWithFlip}
            >
              {activePhoto.isNotDog && <div className="not-dog-ribbon lightbox-ribbon">NOT DOG</div>}
              <img src={activePhoto.image} alt={activePhoto.description} className="lightbox-photo" />
              <div className="lightbox-caption">
                <h3>{activePhoto.description}</h3>
                <span className="lightbox-location">{activePhoto.location}</span>
              </div>
            </div>
          </div>

          <button 
            className="lightbox-arrow next-arrow" 
            onClick={nextPhoto}
            aria-label="Next photo"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

export default Gallery;
