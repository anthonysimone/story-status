//.storybook/addons/story-status.js
import React, { Fragment } from "react";
import { AddonPanel, Badge, WithTooltip } from "@storybook/components";
import { addons, types } from "@storybook/addons";
import { useParameter } from "@storybook/api";
import { styled, css, keyframes } from '@storybook/theming';

const ADDON_ID = 'storystatus';
const STATUS_PARAM_KEY = 'status';
const DESC_PARAM_KEY = 'statusDescription';
const PANEL_ID = `${ADDON_ID}/panel`;
const TOOL_ID = `${ADDON_ID}/tool`;

export const statusToClass = {
  deprecated: 'neutral',
  development: 'critical',
  review: 'warning',
  published: 'positive'
}

export const statusToDescription = {
  deprecated: 'This component has been deprecated. Do not use this in new places as it is no longer supported and will be removed from the product soon.',
  development: 'This component is in active development. This should not be used in the product as it is an active working or experimental zone.',
  review: 'This component is in review. The api could still change as it goes through engineering and design review. This should not be used in the product yet, but will likely be available soon!',
  published: 'This component is published! This is the one you can use!'
}

addons.register(ADDON_ID, () => {
  addons.add(PANEL_ID, {
    title: "Status",
    type: types.PANEL,
    render: ({ active, key }) => {
      return (
        <AddonPanel active={active} key={key}>
          <StatusDescriptionWrapper />
        </AddonPanel>
      );
    }
  });

  addons.add(TOOL_ID, {
    title: 'Status',
    type: types.TOOL,
    match: ({ viewMode }) => viewMode === 'story',
    render: () => (
      <Fragment>
        <StatusBadgeWrapper />
      </Fragment>
    )
  });
});

const StatusBadgeWrapper = () => {
  const results = useParameter(STATUS_PARAM_KEY, '');
  const statusBadgeClass = statusToClass[results];

  return (
    results ?
      results === 'deprecated' ?
        <WithTooltip
          position="bottom"
          trigger="click"
          tooltip={() => <TooltipContent slideNumber={3}>
            <div className="wrapper">
              <div className="slide">Please do not use!</div>
              <div className="slide">Like, for real.</div>
              <div className="slide">👀</div>
            </div>
          </TooltipContent>}
          closeOnClick={false}
          style={{display: 'inline-block', alignSelf: 'center'}}>
          <StyledBadge status={statusBadgeClass}>
            {results}
          </StyledBadge>
        </WithTooltip>
      :
        <StyledBadge status={statusBadgeClass}>
          {results}
        </StyledBadge>
    : null
  )
}

const StyledBadge = styled(Badge)`
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

const StyledDescription = styled.div`
  padding: 10px;

  h2, h3 {
    margin: 0;
    font-weight: 500;
  }

  h2 {
    font-size: 22px;
  }

  h3 {
    font-size: 18px;
  }

  p {
    font-size: 14px;
  }

  .description {
    margin-top: 10px;
  }

  .additional-information {
    margin-top: 30px;
  }
`;

const StatusDescriptionWrapper = () => {
  const resultStatus = useParameter(STATUS_PARAM_KEY, '');
  let resultDesc = useParameter(DESC_PARAM_KEY, '');

  if (resultStatus && resultDesc === '') {
    resultDesc = 'No additional status information present.';
  }

  return (
    <StyledDescription>
      <div className="status-description-panel">
        { resultStatus ?
          <h2>Status: {resultStatus}</h2>
        :
          <h2>Status: No status set</h2>
        }
        <div className="description">
        { resultStatus ?
          <p className="default-description">{statusToDescription[resultStatus]}</p>
        : null }
        { resultDesc ?
          <div className="additional-information">
            <h3>Additional Information</h3>
            <p className="description">{resultDesc}</p>
          </div>
        : null }
        </div>
      </div>
    </StyledDescription>
  );
}

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

const TooltipContent = styled.div`
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
    padding: 10px 5px;
    width: 100%;
    flex: 0 0 100%;
    text-align: center;
  }
`;
