import discordLogo from "./images/discord-logo-white.png"
import menuIcon from "./images/menu-icon.png"

function Header(){

    return(

    <header className="header">

        <img className="discordlogo" src={discordLogo} alt="discordlogo"/>
        <img className="menu-Icon" src={menuIcon} alt="" />
    </header>
    )
}
export default Header