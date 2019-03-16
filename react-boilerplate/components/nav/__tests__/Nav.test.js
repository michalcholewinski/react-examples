import { shallow } from 'enzyme';
import React from 'react';

import { Nav } from '../Nav';

describe('Nav', () => {
  it('should match snapshot', () => {
    const component = shallow(<Nav />);

    expect(component)
      .toMatchSnapshot();
  });
});
