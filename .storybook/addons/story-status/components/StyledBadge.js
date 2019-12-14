import { Badge } from "@storybook/components";
import { styled, css } from '@storybook/theming';

import { statusToClass } from '../constants';

export const StyledBadge = styled(Badge)`
  ${props =>
    props.status === statusToClass['deprecated'] &&
    css`
      position: relative;
      overflow: hidden;
      border: 2px solid ${props.theme.background.critical};
      z-index: 0;

      &:before,
      &:after {
        content: '';
        display: block;
        position: absolute;
        background: ${props.theme.background.critical};
        opacity: 0.3;
        width: 120%;
        height: 2px;
        top: 50%;
        left: 50%;
        z-index: -1;
      }
      &:before {
        transform: translate3d(-50%, -50%, 0) rotateZ(-15deg);
      }
      &:after {
        transform: translate3d(-50%, -50%, 0) rotateZ(15deg);
      }
    `};
`;
