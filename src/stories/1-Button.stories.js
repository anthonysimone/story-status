import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

export default {
  title: 'Button',
};

export const text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

emoji.story = {
  parameters: {
    status: 'deprecated',
    statusDescription: `
      # Don't ever use this component. It is broken!
    `
  }
}

export const moreEmoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      🔥🏀🏀🏀🔥
    </span>
  </Button>
);

moreEmoji.story = {
  parameters: {
    status: 'development',
    statusDescription: `
      # This is a work in progress or an experiment. Probably don't use it.
    `
  }
}

export const bowieMoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      🦄💅👩‍🎤🦄
    </span>
  </Button>
);

bowieMoji.story = {
  parameters: {
    status: 'review',
    statusDescription: `
      # This is in eng/design review. It's api may still change!
    `
  }
}

export const petMoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      🐈🐰🐶🐱
    </span>
  </Button>
);

petMoji.story = {
  parameters: {
    status: 'published',
    statusDescription: `
      # This component has been published! Use it 'til your heart's content!
    `
  }
}
