import { styled, css, keyframes } from '@storybook/theming';

export const slides2 = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  90% {
    transform: translate3d(0, 0, 0);
  }
  96% {
    transform: translate3d(-110%, 0, 0);
  }
  98% {
    transform: translate3d(-90%, 0, 0);
  }
  100% {
    transform: translate3d(-100%, 0, 0);
  }
`
export const slides3 = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  45% {
    transform: translate3d(0, 0, 0);
  }
  48% {
    transform: translate3d(-110%, 0, 0);
  }
  49% {
    transform: translate3d(-90%, 0, 0);
  }
  50% {
    transform: translate3d(-100%, 0, 0);
  }
  95% {
    transform: translate3d(-100%, 0, 0);
  }
  98% {
    transform: translate3d(-210%, 0, 0);
  }
  99% {
    transform: translate3d(-190%, 0, 0);
  }
  100% {
    transform: translate3d(-200%, 0, 0);
  }
`

export const TooltipContent = styled.div`
  overflow: hidden;
  max-width: 180px;
  font-size: 14px;

  .wrapper {
    display: flex;
    flex-wrap: nowrap;
    ${props => props.slideNumber === 2 ? css`animation-name: ${slides2};` : null}
    ${props => props.slideNumber === 3 ? css`animation-name: ${slides3};` : null}
    animation-duration: ${props => props.slideNumber ? (props.slideNumber - 1) * 3 : 0}s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    animation-easing-function: ease;
  }

  .slide {
    padding: 8px 10px 5px 10px;
    width: 100%;
    flex: 0 0 100%;
    text-align: center;
  }
`;
