import TRA_CV from "/TRA_CV.pdf";
import Selfie from "../assets/about/selfie.svg";

const About = () => {
	return (
		<section id="section1" className="about">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<span className="about__top-title align-centre">Introduction</span>
						<h2 className="about__title align-centre">About Me.</h2>
					</div>
					<div className="col-12 col-lg-6">
						<div className="about__image-container">
							<img
								src={Selfie}
								alt="Picture of Tasha Rolland Aarons, Frontend Developer"
								className="about__image"
								width="1000"
								height="1000"
								loading="lazy"
							/>
						</div>
						<div className="btn-container">
							<a href={TRA_CV} className="btn btn__cv" target="_blank">CV</a>
							<a href="https://github.com/TashaRolland92" className="btn btn__github" target="_blank">GitHub</a>
							<a href="https://www.linkedin.com/in/tasharolland/" className="btn btn__linkedin" target="_blank">LinkedIn</a>
						</div>
					</div>
					<div className="col-12 col-lg-6">
						<p><span className="about__emoji">👩‍💻</span> Highly skilled and adaptable Frontend Developer with expertise in both designing and developing web and platform applications, transforming design concepts and business needs into intuitive, user-friendly web experiences.</p>
						<p><span className="about__emoji">🎨</span> While I specialise in Frontend design and technologies, I am always eager to expand my skill set and learn the full development cycle. I've explored backend development, including working with databases, writing API methods and retieving and manipulating data via internal APIs. This hands on experience has given me a deeper appreciation for how frontend and backend systems interact and I love being part of the process that connects it all.</p>
						<p><span className="about__emoji">⚙️</span> I am passionate about writing clean, efficient and effective code and I enjoy keeping on top of industry trends and continuously enhancing my technical expertise with modern frameworks and tools.</p>
						<p><span className="about__emoji">🍸</span> I surprisingly do not like coffee - but I absolutely love an Espresso Martini! Nothing beats a Dirty Banana though, while sitting back relaxing on the beautiful white sanded beaches of Jamaica, you will catch me there from time to time.</p>
						<p><span className="about__emoji">✨</span> In my spare time, I enjoy crafting unique handmade items, which brings out my creative side. Just like designing for the web, crafting allows me to experiment, problem solve and turn ideas into tangible creations. It's a rewarding process when people love what you create and that fuels my passion for creativity and attention to detail.</p>
					</div>
				</div>
			</div>
		</section>
	)
};

export default About;