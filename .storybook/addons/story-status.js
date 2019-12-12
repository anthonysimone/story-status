//.storybook/addons/story-status.js
import React, { Fragment } from "react";
import { AddonPanel, Badge, WithTooltip } from "@storybook/components";
import { addons, types } from "@storybook/addons";
import { useParameter } from "@storybook/api";
import { styled, css } from '@storybook/theming';

export const statusToClass = {
  deprecated: 'neutral',
  development: 'critical',
  review: 'warning',
  published: 'positive'
}

addons.register("story-status/panel", () => {
  addons.add("story-status/panel", {
    title: "status",
    type: types.PANEL,
    render: ({ active, key }) => {
      return (
        <AddonPanel active={active} key={key}>
          <StatusDescription />
        </AddonPanel>
      );
    }
  });
});

addons.register("story-status/tool", api => {
  addons.add("story-status/tool", {
    title: 'status',
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
  const results = useParameter('status', '');
  const statusBadgeClass = statusToClass[results];

  return (
    results ?
      <WithTooltip
        position="bottom"
        trigger="hover"
        tooltip={({ onHide }) => 'Please do not use!'}
        style={{display: 'inline-block', alignSelf: 'center'}}>
        <StyledBadge status={statusBadgeClass}>
          {results}
        </StyledBadge>
      </WithTooltip>
    : null
  )
}

const StyledBadge = styled(Badge)`
  ${props =>
    props.status === statusToClass['deprecated'] &&
    css`
      position: relative;
      overflow: hidden;
      border: 2px solid ${props.theme.color.critical};
      z-index: 0;

      &:before,
      &:after {
        content: '';
        display: block;
        position: absolute;
        background: ${props.theme.color.critical};
        width: 120%;
        height: 2px;
        top: 50%;
        left: 50%;
        z-index: -1;
      }
      &:before {
        transform: translate3d(-50%, -50%, 0) rotateZ(-10deg);
      }
      &:after {
        transform: translate3d(-50%, -50%, 0) rotateZ(10deg);
      }
    `};
`;

const StatusDescription = () => {
  const results = useParameter('statusDescription', '');

  return results;
}
