import React, { FC } from 'react';


interface AvatarProps {
  src: string; 
  alt: string; 
  selected: boolean; 
  onClick: () => void;
}

const AvatarComponent: FC<AvatarProps> = ({ src, alt, selected, onClick }) => {
  return (
    <div
      className={`w-24 h-24 overflow-hidden cursor-pointer ${selected ? 'border-4 border-blue-500' : ''}`}
      onClick={onClick}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
};

export default AvatarComponent;
