import React, { useState, useRef, useEffect } from 'react';

const Bannerscroller = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRef = useRef(null);

  
  const videos = [
    {
      src: "Tesla.mp4", 
      youtubeId: "iPJDW5EaIzE", 
      poster: "https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=90"
    }
  ];

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      
      setIsLoaded(true);
      
      
      const playVideo = async () => {
        try {
          await video.play();
        } catch (error) {
          console.log("Autoplay prevented, user interaction required");
        }
      };

      // Set up video event listeners
      video.addEventListener('loadeddata', () => {
        playVideo();
      });

      video.addEventListener('ended', () => {
        // Switch to next video when current ends
        setCurrentVideo((prev) => (prev + 1) % videos.length);
      });

      // Click to play if autoplay fails
      const handleClick = () => {
        video.play();
      };

      video.addEventListener('click', handleClick);

      return () => {
        video.removeEventListener('click', handleClick);
      };
    }
  }, [currentVideo, videos.length]);

  // Auto-cycle through videos every 60 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 60000); // 60 seconds

    return () => clearInterval(interval);
  }, [videos.length]);

  return (
    <div className="position-relative vh-100 overflow-hidden bg-black mt-3">
      {/* Background Image (Instant Load) */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundImage: `url(${videos[currentVideo].poster})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(0.8) contrast(1.2) saturate(1.1)',
          zIndex: 1
        }}
      />

      {/* Video Layer */}
      <video
        ref={videoRef}
        key={currentVideo}
        loop // Force re-render when video changes
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          objectFit: 'cover',
          filter: 'brightness(0.85) contrast(1.15) saturate(1.05)',
          zIndex: 2,
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 1s ease-in-out'
        }}
        muted
        playsInline
        preload="metadata"
        poster={videos[currentVideo].poster}
      >
        <source src={videos[currentVideo].src} type="video/mp4" />
      </video>

      {/* Premium Cinematic Overlays */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background: 'linear-gradient(45deg, rgba(0,0,0,0.1) 0%, transparent 50%, rgba(0,0,0,0.1) 100%)',
          zIndex: 3
        }}
      />

      {/* Subtle Vignette */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.2) 100%)',
          zIndex: 4
        }}
      />



      {/* Video Progress Indicator */}
      <div className="position-absolute bottom-0 start-0 w-100" style={{ zIndex: 5 }}>
        <div className="d-flex justify-content-center pb-2">
          {videos.map((_, index) => (
            <div
              key={index}
              className={`mx-1 rounded-pill ${
                index === currentVideo ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
              style={{
                width: '40px',
                height: '3px',
                transition: 'all 0.3s ease'
              }}
            />
          ))}
        </div>
      </div>

      {/* Enhanced Styles */}
      <style jsx>{`
        video {
          image-rendering: -webkit-optimize-contrast;
          image-rendering: crisp-edges;
          backface-visibility: hidden;
          transform: translate3d(0, 0, 0);
          will-change: opacity;
        }
        
        /* Smooth hardware acceleration */
        .position-absolute {
          backface-visibility: hidden;
          transform: translate3d(0, 0, 0);
        }
        
        /* High DPI optimization */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          video {
            image-rendering: -webkit-optimize-contrast;
          }
        }
        
        /* Mobile optimizations */
        @media (max-width: 768px) {
          video {
            object-position: center center;
          }
        }
        
        /* Hover effects */
        video:hover {
          filter: brightness(0.9) contrast(1.1) saturate(1.1);
          transition: filter 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default Bannerscroller;