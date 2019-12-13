import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

export default {
  title: 'Button',
};

export const text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const emoji = () => (
  <Button onClick={action('clicked')}>
    This button might be broken <span role="img" aria-label="grimmacing emoji">😬</span>
  </Button>
);

emoji.story = {
  parameters: {
    status: 'deprecated',
    statusDescription: `This component doesn't work as expected. It is currently being replaced by the 'Pet Moji' button in the product and will be removed from the design system in v2.0!`
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
    statusDescription: `This component is experimenting with the concept of fire AND basketballs being used together. It is just an experiment for now.`
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
    statusDescription: `Currently working through design review. Will need to update based on feedback, but this component is targeting v1.6 release.`
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
    statusDescription: `This button is very cute and it should be used as much as you'd like!`
  }
}
