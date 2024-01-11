import React from 'react';
import ReactDOM from 'react-dom';
import UserAccount from './UserAccount';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserAccount />, div);
  ReactDOM.unmountComponentAtNode(div);
});