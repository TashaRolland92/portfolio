import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutube, faTiktok, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	const socialData = [
		{ href: "https://www.instagram.com/tashaajade_/", class: "instagram", icon: faInstagram},
		{ href: "https://www.youtube.com/@TashaaJadee", class: "youtube", icon: faYoutube},
		{ href: "https://www.tiktok.com/@tashajade__/", class: "tiktok", icon: faTiktok},
		{ href: "https://www.linkedin.com/in/tasharolland/", class: "linkedin", icon: faLinkedin}
	];

	return (
		<section id="footer" className="footer">
			<div className="container">
				<div className="row">
					<div className="col-12 d-flex">
						<div className="footer__socials">
							{socialData.map((social, index) =>(
								<a href={social.href} target="_blank" key={index}>
          							<FontAwesomeIcon icon={social.icon} size="2x" className={social.class} />
		  					  	</a>
							))}
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<hr />
						<p>&copy; {currentYear} by Tasha Rolland Aarons</p>
					</div>
				</div>
			</div>
		</section>
	)
};

export default Footer;