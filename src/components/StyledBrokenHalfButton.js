
import styled from 'styled-components';

const clipPathRight = 'polygon(59% 15%, 50% 0, 100% 0, 100% 100%, 50% 100%, 35% 82%, 60% 68%, 38% 63%, 66% 37%, 34% 28%)';

const StyledButton = styled.button`
  border: 2px solid #37b067;
  border-radius: 3px;
  background-color: #eeeeee;
  cursor: pointer;
  font-size: 15px;
  padding: 3px 10px;
  transform-origin: 50% 100%;
  transition: transform 500ms ease;
  clipPath: ${clipPathRight};

  &:hover {
    transform: rotateX(90deg);
  }
`;

export default StyledButton;
