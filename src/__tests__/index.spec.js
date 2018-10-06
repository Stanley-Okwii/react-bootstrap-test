import React from 'react';
import { shallow } from 'enzyme';
import App from '../index';

it('renders welcome message', () => {
  const wrapper = shallow(<App />);
  console.log(wrapper.debug())
//   const welcome = <h2>Welcome to React</h2>
  // expect(wrapper.contains(welcome)).toBe(true);
//   expect(wrapper.contains(welcome)).toEqual(true);
});