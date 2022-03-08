import { render } from '@testing-library/react';

import Intro from './intro';

describe('Intro', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Intro />);
    expect(baseElement).toBeTruthy();
  });
});
