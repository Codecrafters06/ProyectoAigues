import React from 'react';
import { Scene } from 'react-aframe';

interface ARPROJPlayerProps {
  src: string;
}

const ARPROJPlayer: React.FC<ARPROJPlayerProps> = ({ src }) => {
  return (
    <Scene>
      <a-assets>
        <a-asset-item id="arproj-asset" src={src}></a-asset-item>
      </a-assets>
      <a-entity gltf-model="#arproj-asset"></a-entity>
    </Scene>
  );
};

export default ARPROJPlayer;