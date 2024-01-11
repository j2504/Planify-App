import React from 'react';
import ReactDOM from 'react-dom';
import TaskDetails from './TaskDetails';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TaskDetails />, div);
  ReactDOM.unmountComponentAtNode(div);
});