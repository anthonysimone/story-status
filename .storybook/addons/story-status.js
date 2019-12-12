//.storybook/addons/story-status.js
import React, { Fragment } from "react";
import { AddonPanel } from "@storybook/components";
import { addons, types } from "@storybook/addons";
import { useParameter } from "@storybook/api";

addons.register("my/story-status", () => {
  addons.add("story-status/panel", {
    title: "status",
    type: types.PANEL,
    render: ({ active, key }) => (
      <AddonPanel active={active} key={key}>
        <Content />
      </AddonPanel>
    )
  });
});

const Content = () => {
  const results = useParameter("status", []); // story's parameter being retrieved here

  return (
    <Fragment>
      {results.length ? (
        <ol>
          {results.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      ) : null}
    </Fragment>
  );
};
