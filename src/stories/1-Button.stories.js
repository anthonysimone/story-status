import React from 'react';
import { action } from '@storybook/addon-actions';
// import { Button } from '@storybook/react/demo';
import StyledButton from '../components/StyledButton';

export default {
  title: 'Button',
};

// export const text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const oldButton = () => (
  <StyledButton onClick={action('clicked')}>
    This button might be broken <span role="img" aria-label="grimmacing emoji">😬</span>
  </StyledButton>
);

oldButton.story = {
  parameters: {
    status: 'deprecated',
    statusDescription: `This component doesn't work as expected. It is currently being replaced by the 'Pet Moji' button in the product and will be removed from the design system in v2.0!`
  }
}

export const fieryButton = () => (
  <StyledButton onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      🔥🏀🏀🏀🔥
    </span>
  </StyledButton>
);

fieryButton.story = {
  parameters: {
    status: 'development',
    statusDescription: `This component is experimenting with the concept of fire AND basketballs being used together. It is just an experiment for now.`
  }
}

export const bowieMojiButton = () => (
  <StyledButton onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      🦄💅👩‍🎤🦄
    </span>
  </StyledButton>
);

bowieMojiButton.story = {
  parameters: {
    status: 'review',
    statusDescription: `Currently working through design review. Will need to update based on feedback, but this component is targeting v1.6 release.`
  }
}

export const petMojiButton = () => (
  <StyledButton onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      🐈🐰🐶🐱
    </span>
  </StyledButton>
);

petMojiButton.story = {
  parameters: {
    status: 'published',
    statusDescription: `This button is very cute and it should be used as much as you'd like!`
  }
}
