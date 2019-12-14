import React from 'react';
import StyledButton from './StyledButton';

const clipPathRight = 'polygon(59% 15%, 50% 0, 100% 0, 100% 100%, 50% 100%, 35% 82%, 60% 68%, 38% 63%, 66% 37%, 34% 28%)';
const clipPathLeft = 'polygon(59% 15%, 50% 0, 0 0, 0 100%, 50% 100%, 35% 82%, 60% 68%, 38% 63%, 66% 37%, 34% 28%)';

const InlineBrokenButton = ({text}) => {
  return (
    <div style={{position: 'relative'}}>
      <StyledButton className="button-1" style={{ clipPath: clipPathLeft }}>{text}</StyledButton>
      <StyledButton className="button-2" style={{ position: 'absolute', top: 0, left: 0, clipPath: clipPathRight, transform: 'rotateZ(90deg)', transformOrigin: '50% 0' }}>{text}</StyledButton>
    </div>
  );
}

export default InlineBrokenButton;
