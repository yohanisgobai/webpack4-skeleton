"use strict";

import _ from 'lodash';
import './style.css';
import Icon from './icon-gr.png';

function component() {
  var element = document.createElement('div');

  //Lodash with import module
  element.innerHTML = _.join(['Hello', 'webpack','changed'], ' ');
  element.classList.add('hello');

  //Add Icon
  var myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
