import React from 'react';
import { action } from '@storybook/addon-actions';
import StyledButton from '../components/StyledButton';
import BrokenButton from '../components/BrokenButton';
import StyledBrokenButton from '../components/StyledBrokenButton';
import InlineBrokenButton from '../components/InlineBrokenButton';

export default {
  title: 'Styled Button',
};

export const styledEmoji = () => (
  <StyledButton onClick={action('clicked')}>
    This button might be broken <span role="img" aria-label="grimmacing emoji">😬</span>
  </StyledButton>
);

styledEmoji.story = {
  parameters: {
    status: 'deprecated',
    statusDescription: `This component doesn't work as expected. It is currently being replaced by the 'Pet Moji' button in the product and will be removed from the design system in v2.0!`
  }
}

export const brokenButton = () => (
  <BrokenButton text="🔥🏀🏀🏀🔥" />
);

brokenButton.story = {
  parameters: {
    status: 'development',
    statusDescription: `This component is experimenting with the concept of fire AND basketballs being used together. It is just an experiment for now.`
  }
}

export const styledBrokenButton = () => (
  <StyledBrokenButton text="🦄💅👩‍🎤🦄" />
);

styledBrokenButton.story = {
  parameters: {
    status: 'review',
    statusDescription: `Currently working through design review. Will need to update based on feedback, but this component is targeting v1.6 release.`
  }
}

export const inlineBrokenButton = () => (
  <InlineBrokenButton text="🦄💅👩‍🎤🦄" />
);

inlineBrokenButton.story = {
  parameters: {
    status: 'deprecated',
    statusDescription: `This button may break!!!`
  }
}
