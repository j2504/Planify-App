import React from 'react';
import ReactDOM from 'react-dom';
import LogOut from './LogOut';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LogOut />, div);
  ReactDOM.unmountComponentAtNode(div);
});