 import Nav from './Nav.js';
import Main from './Main.js';


const App = () => {
    return `
        ${ Nav() }
        ${ Main() }
    `
}


document.getElementById("root").innerHTML = App()
