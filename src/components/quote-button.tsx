import React, { useState } from 'react';

const QuoteButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsActive(false);
  };
  const handleMouseDown = () => setIsActive(true);
  const handleMouseUp = () => setIsActive(false);

  return (
    <button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className="relative"
      style={{
        border: 'none',
        background: 'transparent',
        padding: 0,
        cursor: 'pointer',
        outline: 'none',
        transition: 'filter 250ms ease',
      }}
    >
      {/* Edge */}
      <span
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          borderRadius: '12px',
          background: 'linear-gradient(to left, #5f0f0f 0%, #ff312e 50%, #5f0f0f 100%)',
        }}
      ></span>

      {/* Front */}
      <span
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          padding: '12px 30px',
          borderRadius: '12px',
          fontSize: '1.1rem',
          fontWeight: 'bold',
          color: 'white',
          backgroundColor: '#ff312e',
          transform: isActive ? 'translateY(-2px)' : isHovered ? 'translateY(-6px)' : 'translateY(-4px)',
          transition: 'transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1)',
        }}
      >
        {/* Sparkle Icon */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          style={{ color: '#ffc107', marginRight: '8px' }}
        >
          <path
            d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z"
            fill="currentColor"
          />
        </svg>
        GET A QUOTE
      </span>
    </button>
  );
};

export default QuoteButton;
