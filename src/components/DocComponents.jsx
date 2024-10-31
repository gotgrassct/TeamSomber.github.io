import React, { useState, useEffect } from 'react';

// Shared styles for glass effect
const glassStyles = `
  .glass-text {
    position: relative;
    overflow: hidden;
  }

  .glass-text:hover::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at var(--x, 0%) var(--y, 0%),
      rgba(255, 255, 255, 0.15),
      transparent 40%
    );
    pointer-events: none;
  }

  .glass-text {
    transition: all 0.2s ease;
  }
`;

// Function to create color components
const createColorComponent = (color, bgColor, tooltip = '') => {
  return function({ children }) {
    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      e.currentTarget.style.setProperty('--x', `${x}%`);
      e.currentTarget.style.setProperty('--y', `${y}%`);
    };

    return (
      <span 
        className="glass-text"
        style={{ 
          color: color,
          backgroundColor: bgColor,
          padding: '2px 6px',
          borderRadius: '4px',
          cursor: tooltip ? 'help' : 'default'
        }}
        title={tooltip}
        onMouseMove={handleMouseMove}
      >
        <style>{glassStyles}</style>
        {children}
      </span>
    );
  };
};

// Text Colors with Tooltips
export const BlueText = createColorComponent('#66b3ff', 'rgba(102, 179, 255, 0.1)', 'Information');
export const GreenText = createColorComponent('#66ff8f', 'rgba(102, 255, 143, 0.1)', 'Success');
export const PurpleText = createColorComponent('#b366ff', 'rgba(179, 102, 255, 0.1)', 'Advanced Feature');
export const GreyText = createColorComponent('#a0a0a0', 'rgba(160, 160, 160, 0.1)', 'Optional');
export const YellowText = createColorComponent('#ffd966', 'rgba(255, 217, 102, 0.1)', 'Note');
export const OrangeText = createColorComponent('#ff9f66', 'rgba(255, 159, 102, 0.1)', 'Important');
export const PinkText = createColorComponent('#ff66b3', 'rgba(255, 102, 179, 0.1)', 'Tip');
export const RedText = createColorComponent('#ff6666', 'rgba(255, 102, 102, 0.1)', 'Warning');

// Generic Text Colors (without tooltips)
export const GenericBlueText = createColorComponent('#66b3ff', 'rgba(102, 179, 255, 0.1)');
export const GenericGreenText = createColorComponent('#66ff8f', 'rgba(102, 255, 143, 0.1)');
export const GenericPurpleText = createColorComponent('#b366ff', 'rgba(179, 102, 255, 0.1)');
export const GenericGreyText = createColorComponent('#a0a0a0', 'rgba(160, 160, 160, 0.1)');
export const GenericYellowText = createColorComponent('#ffd966', 'rgba(255, 217, 102, 0.1)');
export const GenericOrangeText = createColorComponent('#ff9f66', 'rgba(255, 159, 102, 0.1)');
export const GenericPinkText = createColorComponent('#ff66b3', 'rgba(255, 102, 179, 0.1)');
export const GenericRedText = createColorComponent('#ff6666', 'rgba(255, 102, 102, 0.1)');

// Image Component
export function NewImg({ src, className = '' }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [position, setPosition] = useState({ x: 0.5, y: 0.5 });
  const [startingRect, setStartingRect] = useState(null);
  const zoomLevels = [1, 1.5, 2, 2.5];

  // Convert the src path to work in both dev and production
  const imgSrc = src.startsWith('/') ? 
    (src.startsWith('/TeamSomber.github.io/') ? src : `/TeamSomber.github.io${src}`) : 
    src;

  useEffect(() => {
    if (isExpanded && !className) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isExpanded, className]);

  const handleImageClick = (e) => {
    e.stopPropagation();
    if (className) {
      window.open(src, '_blank');
      return;
    }
    
    if (isExpanded) {
      const rect = e.target.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      const currentIndex = zoomLevels.indexOf(zoomLevel);
      const nextIndex = (currentIndex + 1) % zoomLevels.length;
      const newZoom = zoomLevels[nextIndex];

      setZoomLevel(newZoom);
      if (newZoom > 1) {
        setPosition({ x, y });
      }
    } else {
      const rect = e.target.getBoundingClientRect();
      setStartingRect(rect);
      setIsExpanded(true);
      setIsClosing(false);
      setZoomLevel(1);
      setPosition({ x: 0.5, y: 0.5 });
    }
  };

  const handleBackgroundClick = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsExpanded(false);
      setIsClosing(false);
      setZoomLevel(1);
      setPosition({ x: 0.5, y: 0.5 });
      setStartingRect(null);
    }, 300);
  };

  const imageContent = (
    <img 
      src={imgSrc} 
      alt="" 
      style={{ 
        width: '100%',
        height: 'auto',
        cursor: 'pointer',
        transition: 'transform 0.2s',
        borderRadius: '8px',
        ':hover': {
          transform: 'scale(1.02)'
        }
      }} 
      onClick={handleImageClick}
    />
  );

  return (
    <>
      {className ? (
        <div className={className} style={{ 
          width: '150px', 
          flexShrink: 0,
          padding: '10px',
        }}>
          {imageContent}
        </div>
      ) : (
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          margin: '20px 0',
          padding: '10px'
        }}>
          {imageContent}
        </div>
      )}

      {!className && isExpanded && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: isClosing ? 'rgba(0, 0, 0, 0)' : 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
            cursor: zoomLevel === Math.max(...zoomLevels) ? 'zoom-out' : 'zoom-in',
            transition: 'background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
          onClick={handleBackgroundClick}
        >
          <style>
            {`
              @keyframes expandImage {
                from {
                  transform: translate(
                    ${startingRect ? startingRect.left - (window.innerWidth - startingRect.width) / 2 : 0}px,
                    ${startingRect ? startingRect.top - (window.innerHeight - startingRect.height) / 2 : 0}px
                  ) scale(${startingRect ? startingRect.width / (window.innerWidth * 0.9) : 1});
                }
                to {
                  transform: translate(0, 0) scale(1);
                }
              }

              @keyframes shrinkImage {
                from {
                  transform: translate(0, 0) scale(1);
                }
                to {
                  transform: translate(
                    ${startingRect ? startingRect.left - (window.innerWidth - startingRect.width) / 2 : 0}px,
                    ${startingRect ? startingRect.top - (window.innerHeight - startingRect.height) / 2 : 0}px
                  ) scale(${startingRect ? startingRect.width / (window.innerWidth * 0.9) : 0.8});
                }
              }
            `}
          </style>
          <div style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '90vw',
            height: '90vh'
          }}>
            <img 
              src={imgSrc} 
              alt="" 
              style={{
                maxWidth: '90%',
                maxHeight: '90vh',
                objectFit: 'contain',
                borderRadius: '8px',
                animation: isClosing 
                  ? 'shrinkImage 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards'
                  : 'expandImage 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: `scale(${zoomLevel})`,
                transformOrigin: `${position.x * 100}% ${position.y * 100}%`,
                opacity: isClosing ? 0 : 1,
                transition: 'opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onClick={handleImageClick}
            />
          </div>
        </div>
      )}
    </>
  );
}

// InfoBox Component
export function InfoBox({ children }) {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty('--x', `${x}%`);
    e.currentTarget.style.setProperty('--y', `${y}%`);
  };

  // Convert children to array to handle both text and images
  const childrenArray = React.Children.toArray(children);
  
  // Separate images from other content
  const images = childrenArray.filter(child => child.type === NewImg);
  const otherContent = childrenArray.filter(child => child.type !== NewImg);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      margin: '15px 0'
    }}>
      <div 
        className="info-box" 
        style={{
          backgroundColor: 'rgba(102, 179, 255, 0.2)',
          padding: '10px 20px',
          borderRadius: '8px',
          maxWidth: '800px',
          width: '100%',
          lineHeight: '1.4',
          cursor: 'default',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          gap: '20px'
        }}
        onMouseMove={handleMouseMove}
      >
        <style>
          {`
            .info-box {
              animation: floating 3s ease-in-out infinite;
              transition: all 0.2s ease-in-out;
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            }
            
            @keyframes floating {
              0% { transform: translateY(0px); }
              50% { transform: translateY(-5px); }
              100% { transform: translateY(0px); }
            }
            
            .info-box:hover {
              animation-play-state: paused;
              transform: translateY(-2px);
            }

            .info-box::after {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              opacity: 0;
              transition: opacity 0.3s;
              background: radial-gradient(
                circle at var(--x, 50%) var(--y, 50%),
                rgba(255, 255, 255, 0.15),
                transparent 40%
              );
              pointer-events: none;
            }

            .info-box:hover::after {
              opacity: 1;
            }

            .info-box-content {
              flex: 1;
            }

            .info-box-image {
              flex-shrink: 0;
              width: 150px;
            }

            .info-box-image img {
              width: 100%;
              height: auto;
              border-radius: 4px;
            }
          `}
        </style>
        <div className="info-box-content" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{
            color: '#66b3ff',
            fontWeight: 'bold',
            position: 'relative',
            zIndex: 1
          }}>
            Note:
          </span>
          <span style={{
            color: 'white',
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}>
            {otherContent}
          </span>
        </div>
        {images.length > 0 && (
          <div className="info-box-image">
            {React.cloneElement(images[0], { className: 'info-box-img' })}
          </div>
        )}
      </div>
    </div>
  );
}

// Video Component
export function Video({ url }) {
  const getYouTubeID = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getYouTubeID(url);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      margin: '20px 0',
      width: '100%'
    }}>
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '800px',
        paddingBottom: '56.25%'
      }}>
        <iframe
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '8px',
            border: 'none'
          }}
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}

// PageLink Component
export function PageLink({ to, children }) {
  // Convert the path to work in both dev and production
  const linkPath = to.startsWith('/') ? 
    (to.startsWith('/TeamSomber.github.io/') ? to : `/TeamSomber.github.io${to}`) : 
    to;

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty('--x', `${x}%`);
    e.currentTarget.style.setProperty('--y', `${y}%`);
  };

  return (
    <a 
      href={linkPath}
      className="page-link"
      onMouseMove={handleMouseMove}
      style={{
        color: 'inherit',
        textDecoration: 'none',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        position: 'relative',
        padding: '2px 4px',
        margin: '-2px -4px',
        borderRadius: '4px',
        transition: 'all 0.2s ease',
        lineHeight: 'inherit',
        verticalAlign: 'baseline',
        zIndex: 1
      }}
    >
      <style>
        {`
          .page-link {
            position: relative;
            overflow: hidden;
          }

          .page-link * {
            cursor: pointer !important;
            pointer-events: none;
          }

          .page-link:hover {
            transform: translateY(-1px);
            background-color: rgba(102, 179, 255, 0.1);
          }

          .page-link::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 1px;
            background: #66b3ff;
            transform: scaleX(0);
            transform-origin: right;
            transition: transform 0.3s ease;
          }

          .page-link:hover::after {
            transform: scaleX(1);
            transform-origin: left;
          }

          .page-link::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(
              circle at var(--x, 0%) var(--y, 0%),
              rgba(102, 179, 255, 0.15),
              transparent 100%
            );
            opacity: 0;
            transition: opacity 0.3s ease;
            pointer-events: none;
          }

          .page-link:hover::before {
            opacity: 1;
          }
        `}
      </style>
      {children}
    </a>
  );
}

// BulletPoints Component
export function BulletPoints({ children }) {
  // Split the content into lines
  const lines = children.toString().split('\n').filter(line => line.trim());

  return (
    <div style={{ margin: '20px 0' }}>
      <ol style={{
        listStyle: 'none',
        counterReset: 'bullet',
        padding: 0,
        margin: 0
      }}>
        <style>
          {`
            .bullet-point {
              counter-increment: bullet;
              margin: 12px 0;
              padding-left: 40px;
              position: relative;
              display: flex;
              align-items: center;
            }

            .bullet-point::before {
              content: counter(bullet);
              position: absolute;
              left: 0;
              top: 50%;
              transform: translateY(-50%);
              width: 24px;
              height: 24px;
              background: rgba(102, 179, 255, 0.1);
              color: #66b3ff;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              font-weight: bold;
              font-size: 14px;
              transition: all 0.2s ease;
            }

            .bullet-point:hover::before {
              background: rgba(102, 179, 255, 0.2);
              transform: translateY(-50%) scale(1.1);
            }
          `}
        </style>
        <li className="bullet-point">{lines[0] || ''}</li>
        <li className="bullet-point">{lines[1] || ''}</li>
        <li className="bullet-point">{lines[2] || ''}</li>
        <li className="bullet-point">{lines[3] || ''}</li>
        <li className="bullet-point">{lines[4] || ''}</li>
        <li className="bullet-point">{lines[5] || ''}</li>
        <li className="bullet-point">{lines[6] || ''}</li>
        <li className="bullet-point">{lines[7] || ''}</li>
        <li className="bullet-point">{lines[8] || ''}</li>
        <li className="bullet-point">{lines[9] || ''}</li>
      </ol>
    </div>
  );
}

// LineFormat Component
export function LineFormat({ children }) {
  return (
    <div style={{ 
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      margin: '20px 0',
      whiteSpace: 'pre-line'
    }}>
      {children}
    </div>
  );
}