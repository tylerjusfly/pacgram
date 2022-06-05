 import Nav from './Nav.js';
import Main from './Main.js';


const App = () => {
    return `
        ${ Nav() }
        ${ Main() }
    `
}


document.getElementById("root").innerHTML = App()

const themeSwitch = document.querySelector('.toggleMe');

themeSwitch.addEventListener('change', () => {
  document.body.classList.toggle('dark-theme');
});