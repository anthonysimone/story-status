import React from "react";
import { useParameter } from "@storybook/api";

import { StyledDescription } from '../components/StyledDescription';
import { STATUS_PARAM_KEY, DESC_PARAM_KEY, statusToDescription } from '../constants';

export const StatusDescriptionWrapper = () => {
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
