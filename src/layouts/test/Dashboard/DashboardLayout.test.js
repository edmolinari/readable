import React from 'react'
import { shallow } from 'enzyme'
import Dashboard from '../../Dashboard/Dashboard'

describe('DashboardLayout', () => {
  it('renders shallow', () => {
    const dashboardLayout = shallow(<Dashboard />);
    expect(dashboardLayout).toHaveLength(1);
  })
})
