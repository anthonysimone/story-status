import React from 'react';
import StyledButton from './StyledButton';
import StyledBrokenHalfButton from './StyledBrokenHalfButton';

const clipPathRight = 'polygon(59% 15%, 50% 0, 100% 0, 100% 100%, 50% 100%, 35% 82%, 60% 68%, 38% 63%, 66% 37%, 34% 28%)';

const BrokenButton = ({text}) => {
  return (
    <div className="buttons-wrapper">
      <StyledButton style={{clipPath: clipPathRight}} className="button-1">{text}</StyledButton>
      <StyledBrokenHalfButton className="button-2">{text}</StyledBrokenHalfButton>
    </div>
  );
}

export default BrokenButton;
