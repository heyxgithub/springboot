import _ from 'lodash';
import './style.css';
import MyImage from './pic.jpg';

function component() {
    let element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add("hello");

    var icon = new Image();
    icon.src = MyImage;
    element.appendChild(icon);

    return element;
}

document.body.appendChild(component());