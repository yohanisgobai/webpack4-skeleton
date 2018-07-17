"use strict";

import _ from "lodash";

function component() {
  var element = document.createElement('div');

  //Lodash with import module
  element.innerHTML = _.join(['Hello', 'webpack','changed'], ' ');

  return element;
}

document.body.appendChild(component());
