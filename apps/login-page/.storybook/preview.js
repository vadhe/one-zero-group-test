import { addDecorator } from '@storybook/react';
import { GlobalStyle } from '../src/utils/Global';

addDecorator((story) => (
  <>
    <GlobalStyle />
    {story()}
  </>
));
