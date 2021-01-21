import logoPath  from "../image/header_logo.svg";

function Header() {
	return (
		
		<header className="header">
		<img src={logoPath}  alt="Место" className="header__logo"/>
	  </header>
		
	)
} 
export default Header;