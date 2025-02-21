import { useState } from "react"; // importing dependancies - useState hook to manage the nav menu toggle state

const NavLinks = [
	{id: 'section1', name: 'About', href: '#section1' },
	{id: 'section2', name: 'Technical Skills', href: '#section2' },
	{id: 'section3', name: 'Professional Experience', href: '#section3' },
	// {id: 'section4', name: 'Contact', href: 'mailto:hi@tasharolland.com' },
];

const Nav = () => {
    const [isNavOpen, setIsNavOpen] = useState(false); // declaring state - tracking nav menu is open - closed by default

    const toggleNav = () => setIsNavOpen(!isNavOpen); // toggles the nav menu open/closed when the hamburger icon is clicked

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        e.preventDefault(); // stop the default anchor link behavior

        const targetSection = document.getElementById(sectionId); // getElementById to find the clicked target section

        if(targetSection) {
            // Get the position of the target section
            const targetPosition = targetSection.offsetTop;

            // Scroll to the target section, but offset the height of the sticky header (80px)
            window.scrollTo({
                top: targetPosition - 80,  // Adjust by the header height
                behavior: 'smooth',        // Smooth scroll
            });
        }

        if (isNavOpen) setIsNavOpen(false); // if the nav is open, it closes (useful for mobile users after clicking a link)
    };

    return (
        <nav className="nav">
            {/* conditional class here for active state - animation when isNavOpen is true | toggleNav onClick event which open/closes menu */}
			<div className={`menu-toggle ${isNavOpen ? 'menu-toggle--active' : ''}`} id="mobileMenu" onClick={toggleNav}>
                <span className="menu-toggle__bar menu-toggle--top"></span>
                <span className="menu-toggle__bar menu-toggle--middle"></span>
                <span className="menu-toggle__bar menu-toggle--bottom"></span>
            </div>
			{/* conditional class here to active state - makes menu visible when isNavOpen is true */}
            <ul className={`nav__list ${isNavOpen ? 'nav__list--active' : ''}`}>
				{NavLinks.map((link, index) => (
					<li key={link.id} className={`nav__item nav__item--${index + 1}`}>
						<a
							href={link.href}
							className="nav__link"
							onClick={(e) => link.id !== 'section4' && handleLinkClick(e, link.id)}
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
// default my component so it's available to import in other files