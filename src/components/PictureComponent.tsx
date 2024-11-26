import React from "react"

interface PictureComponent {
  srcset: string;
  src: string;
  alt: string;
}

const PictureComponent: React.FC<PictureComponent> = ( {srcset, src, alt} ) => {
  return (
    <picture>
      <source srcSet={srcset} type="image/webp"/>
      <img src={src} alt={alt} />
  </picture>
  )
  
}

export default PictureComponent;