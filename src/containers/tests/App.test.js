import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { shallow } from 'enzyme';
import App from '../App';

it('renders App in react router context within BrowserRouter', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App', () => {
  it('renders shallow', () => {
    const appComponent = shallow(<App />);
    expect(appComponent).toHaveLength(1);
  });
});
