import BrokenButton from './BrokenButton';
import styled from 'styled-components';

const clipPathRight = 'polygon(59% 15%, 50% 0, 100% 0, 100% 100%, 50% 100%, 35% 82%, 60% 68%, 38% 63%, 66% 37%, 34% 28%)';
const clipPathLeft = 'polygon(59% 15%, 50% 0, 0 0, 0 100%, 50% 100%, 35% 82%, 60% 68%, 38% 63%, 66% 37%, 34% 28%)';

const StyledBrokenButton = styled(BrokenButton)`
  .buttons-wrapper {
    position: relative;
  }

  .button-1 {
    clipPath: ${clipPathLeft}
  }

  .button-2 {
    position: absolute;
    top: 0;
    left: 0;
    clipPath: ${clipPathRight};
  }
`;

export default StyledBrokenButton;
