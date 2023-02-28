import _ from 'lodash';
import './style.css';

const title = document.createElement('h3');
title.textContent = 'Webpack setup!';

const page = document.querySelector('body');
page.append(title);

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());