const Nav = () => `
    <nav>
    <a href="#" class="logo-name">
        <img src="./images//shakurLogo.png" alt="tupacShakur">
    </a>
    <label class="switch">
            <i class="fas fa-adjust"></i>
            <div>
              <input class= "toggleMe" type="checkbox" />
              <span class="slider round"></span>
            </div>
          </label>
    <span class="search-box">
        <input type="text" placeholder="Search" id="search">
        <button><i class="fa fa-search"></i></button>
    </span>
    </nav>
`



export default Nav