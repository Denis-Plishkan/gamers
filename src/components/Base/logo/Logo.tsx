import React from 'react';

interface LogoProps {
  src: string;
  alt?: string;
  className?: string;
  width?: string | number;
  height?: string | number;
  onClick?: () => void;
}

const Logo: React.FC<LogoProps> = ({
  src,
  alt = 'Logo',
  className = '',
  width,
  height,
  onClick,

}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={{ width, height }}
      onClick={onClick}
    />
  );
};

export default Logo;