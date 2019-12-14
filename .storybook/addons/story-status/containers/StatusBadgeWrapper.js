import React from "react";
import { WithTooltip } from "@storybook/components";
import { useParameter } from "@storybook/api";

import { StyledBadge } from '../components/StyledBadge';
import { TooltipContent } from '../components/TooltipContent';
import { STATUS_PARAM_KEY, statusToClass } from '../constants';

export const StatusBadgeWrapper = () => {
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

