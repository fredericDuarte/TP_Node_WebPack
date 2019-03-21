var moment = require('moment')
import styles from './app.css'

function sayHelloToday() {
    var element = document.createElement('div');
    var today = moment().format('dddd, MMMM Do YYYY');
    element.innerHTML = "Hello, today we are : " + today;
    element.classList.add("hello");
    return element;
}

document.body.appendChild(sayHelloToday());