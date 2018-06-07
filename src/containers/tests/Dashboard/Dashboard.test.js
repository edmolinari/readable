import React from 'react';
import { mount } from 'enzyme';
import Dashboard from '../../Dashboard/Dashboard';

describe('Dashboard', () => {
  const dashboard = mount(<Dashboard />);

  it('renders mount', () => {
    expect(dashboard).toHaveLength(1);
  });

  describe('dashboard cards', () => {
    it('contains 4 StatsCards', () => {
      expect(
        dashboard.find('StatsCard').length
      ).toEqual(4)
    })

    it('has Categories card', () => {
      expect(
        dashboard.find('StatsCard[title="Categories"]').length
      ).toEqual(1);
    });

    it('has Posts card', () => {
      expect(
        dashboard.find('StatsCard[title="Posts"]')
      ).toHaveLength(1);
    });

    it('has Commets card', () => {
      expect(
        dashboard.find('StatsCard[title="Comments"]').length
      ).toEqual(1);
    });

    it('has Votes card', () => {
      expect(
        dashboard.find('StatsCard[title="Votes"]').length
      ).toEqual(1);
    });
  });

  describe('Categories', () =>{
    it('has Categories card', () => {
      expect(
        dashboard.find('RegularCard[cardTitle="Posts Catgories"]').length
      ).toEqual(1);
    });

    it('has Categories Table', () => {
      expect(
        dashboard.find('Table')
      ).toHaveLength(1);
    });

    it('has Categories Table with header "Name", "Comments" and "Votes', () => {
      const tableHead=[ "Name", "Comments", "Votes"];
      expect(
        dashboard.find('Table').text()
      ).toContain(tableHead.join(''));
    });
  })
});
