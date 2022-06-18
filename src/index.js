import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Demo from './Demo';
import Avatar from './Avatar';

//Demo is javascript file so no extension needed
/*
ReactDOM.render(
  <>
  <Demo name="Himanshu Pabbi"></Demo>
  </>,document.getElementById("root")
)
*/

ReactDOM.render(
  <Avatar/>
  ,document.getElementById("root")
)