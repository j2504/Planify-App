import React from 'react';
import ReactDOM from 'react-dom';
import TaskForm from './TaskForm';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TaskForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});