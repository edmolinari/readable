import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from '../../Dashboard/Dashboard';


describe('Dashboard', () => {
  it('renders shallow', () => {
    const dashboard = shallow(<Dashboard />);
    expect(dashboard).toHaveLength(1);
  });
});
