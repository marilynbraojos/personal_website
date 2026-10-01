import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Gallery.css';

// Main Gallery Items
const GALLERY_ITEMS = [
  {
    id: 1,
    description: "Appalachian Trail Hiking & Mountain Views",
    location: "📍 Blue Ridge Mountains, GA",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    rotation: "-2deg"
  },
  {
    id: 2,
    description: "Off-Road Terrain Navigation Field Testing",
    location: "📍 Georgia Tech Robotics Lab",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    rotation: "1.8deg"
  },
  {
    id: 3,
    description: "Presenting Aerospace Research at AIAA Conference",
    location: "📍 San Diego, CA",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
    rotation: "-1.2deg"
  },
  {
    id: 4,
    description: "MS Mechanical Engineering Graduation",
    location: "📍 University of Florida, Gainesville",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
    rotation: "2.5deg"
  },
  {
    id: 5,
    description: "Summit Views & Weekend Outdoor Expeditions",
    location: "📍 Great Smoky Mountains, TN",
    image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=800&q=80",
    rotation: "-2.2deg"
  },
  {
    id: 6,
    description: "LISA Optical Test Bench Alignment",
    location: "📍 Space Optics Cleanroom Facility",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    rotation: "1.5deg"
  }
];

// Secret Dog Gallery Items (Snoopy Easter Egg)
const SECRET_DOG_ITEMS = [
  {
    id: 'dog-1',
    description: "Snoopy — The Ultimate Beagle Adventurer",
    location: "📍 Snoopy's Doghouse",
    image: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=800&q=80",
    rotation: "-1.8deg"
  },
  {
    id: 'dog-2',
    description: "Golden Retriever — Always Ready to Explore",
    location: "📍 Sunny Meadows",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=80",
    rotation: "2.1deg"
  },
  {
    id: 'dog-3',
    description: "Australian Shepherd — High Energy Research Buddy",
    location: "📍 Outdoor Trail Run",
    image: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=800&q=80",
    rotation: "-2.5deg"
  },
  {
    id: 'dog-4',
    description: "Pembroke Welsh Corgi — Short Legs, Big Personality",
    location: "📍 Park Lawn",
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80",
    rotation: "1.2deg"
  },
  {
    id: 'dog-5',
    description: "Bernese Mountain Dog — Fluffy Alpine Explorer",
    location: "📍 Mountain Pass",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80",
    rotation: "-1.5deg"
  }
];

function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showSecretDogs, setShowSecretDogs] = useState(false);
  const location = useLocation();

  // Reset to main gallery on navbar clicks or navigation
  useEffect(() => {
    const handleReset = () => {
      setShowSecretDogs(false);
      setActiveIndex(null);
    };

    handleReset();
    window.addEventListener('resetGallery', handleReset);
    return () => window.removeEventListener('resetGallery', handleReset);
  }, [location]);

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
        setActiveIndex(null);
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
  }, [activeIndex, showSecretDogs]);

  const activePhoto = activeIndex !== null ? currentItems[activeIndex] : null;

  return (
    <div className="gallery-container">
      <div className="gallery-header">
        {showSecretDogs ? (
          <>
            <div className="secret-badge-banner">🐶 Secret Easter Egg Unlocked!</div>
            <h1 className="gallery-title">Favorite Dogs 🐾</h1>
            <p className="gallery-subtitle">
              You found Snoopy's secret collection! Here are some of my absolute favorite dogs.
            </p>
            <button className="back-to-main-btn" onClick={() => { setShowSecretDogs(false); setActiveIndex(null); }}>
              ← Back to Main Gallery
            </button>
          </>
        ) : (
          <>
            <h1 className="gallery-title">Gallery</h1>
            <p className="gallery-subtitle">
              Moments, research milestones, and adventures captured along the way.
              <button 
                className="secret-snoopy-btn" 
                onClick={() => { setShowSecretDogs(true); setActiveIndex(null); }}
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
        <div className="lightbox-backdrop" onClick={() => setActiveIndex(null)}>
          <button 
            className="lightbox-arrow prev-arrow" 
            onClick={prevPhoto}
            aria-label="Previous photo"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-polaroid">
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
