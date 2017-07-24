import React from 'react';
import ReactDOM from 'react-dom';
import MainAndInputContainer from './containers/main_and_input_container'

window.onload = () => {
  ReactDOM.render(
    <MainAndInputContainer />,
    document.getElementById('app')
  );
};