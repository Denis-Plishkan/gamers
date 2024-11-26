import React from 'react';

interface BaseIcon {
  id: string;
}

const BaseIcon: React.FC<BaseIcon> = ({ id }) => {
  return (
    <svg>
      <use href={`#${id}`} />
    </svg>
  );
};

export default BaseIcon;
