import React from 'react';
import renderer from 'react-test-renderer';

import App from '../../src/components/app.js';

describe('<App/> (Enzyme Test)', () => {
  xit('should find home page', ()=> {
    let app = shallow(<App />);
    expect(app.find('nav').exists()).toBeTruthy();
  });

  xit('should find the dashboard page', () => {
    expect(null).toBeNull();
  });

  xit('should find all notes compiled', () => {
    expect(null).toBeNull();
  });
});

describe('App/> (Snapshot Test)', () => {
  xit('renders content is intended', () => {
    const component = renderer.create(
      <App/>
    );

    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  })
})