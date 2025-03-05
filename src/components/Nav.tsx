import { useState } from "react";

const NavLinks = [
	{id: 'section1', name: 'About', href: '#section1' },
	{id: 'section2', name: 'Technical Skills', href: '#section2' },
	{id: 'section3', name: 'Professional Experience', href: '#section3' },
	{id: 'section4', name: 'Contact', href: '#section4' },
];

const Nav = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => setIsNavOpen(!isNavOpen);

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        e.preventDefault();

        const targetSection = document.getElementById(sectionId);

        if(targetSection) {
            const targetPosition = targetSection.offsetTop;

            window.scrollTo({
                top: targetPosition - 80,
                behavior: 'smooth',
            });
        }

        if (isNavOpen) setIsNavOpen(false);
    };

    return (
        <nav className="nav">
			<div className={`menu-toggle ${isNavOpen ? 'menu-toggle--active' : ''}`} id="mobileMenu" onClick={toggleNav}>
                <span className="menu-toggle__bar menu-toggle--top"></span>
                <span className="menu-toggle__bar menu-toggle--middle"></span>
                <span className="menu-toggle__bar menu-toggle--bottom"></span>
            </div>
            <ul className={`nav__list ${isNavOpen ? 'nav__list--active' : ''}`}>
				{NavLinks.map((link, index) => (
					<li key={link.id} className={`nav__item nav__item--${index + 1}`}>
						<a
							href={link.href}
							className="nav__link"
							onClick={(e) => handleLinkClick(e, link.id)}
						>
							{link.name}
						</a>
					</li>
				))}
            </ul>
        </nav>
    )
};

export default Nav;