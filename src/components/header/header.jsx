import './header.css'
function Header({ children }) {
    return <header className="header">
    <img src="/r&m.png" alt="Rick and Morty" className="header__logo"/>
    { children ? children : <div></div> }
</header>
}

export default Header;