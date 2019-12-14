import React, { Fragment } from "react";
import { AddonPanel } from "@storybook/components";
import { addons, types } from "@storybook/addons";

import { StatusDescriptionWrapper } from './containers/StatusDescriptionWrapper';
import { StatusBadgeWrapper } from './containers/StatusBadgeWrapper';
import { ADDON_ID, PANEL_ID, TOOL_ID } from './constants';

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
