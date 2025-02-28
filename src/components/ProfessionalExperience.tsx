import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import BI from "../assets/professional/bi-logo.png";
import EY from "../assets/professional/ey-logo.png";
import NL from "../assets/professional/new-look-logo.png";
import PP from "../assets/professional/pod-point-icon.png";
import CD from "../assets/professional/copia-logo.png";
import TRA_CV from "/TRA_CV.pdf";

const experienceData = [
	{
		titleClasses: 'vertical-timeline-element-title jordy-blue',
		title: "Frontend Engineer",
		subtitle: "Bordeaux Index",
		techList: [
			'js',
			'sass',
			'node',
			'php',
		],
		icon: BI,
		bgColor: '#FFD6FF',
		arrowColor: '#FFD6FF',
	},
	{
		titleClasses: 'vertical-timeline-element-title jordy-blue',
		title: "Frontend Developer",
		subtitle: "Ernst & Young LLP",
		description: "AngularJS, JavaScript, Trello, MS Sharepoint, HTML5, CSS3, CRM, InVision, Agile.",
		techList: [
			'js',
			'css',
			'angular',
			'html',
		],
		icon: EY,
		bgColor: '#E7C6FF',
		arrowColor: '#E7C6FF',
	},
	{
		titleClasses: 'vertical-timeline-element-title mimi-pink',
		title: "Frontend Developer",
		subtitle: "New Look",
		techList: [
			'js',
			'css',
			'html',
		],
		icon: NL,
		bgColor: '#C8B6FF',
		arrowColor: '#C8B6FF',
	},
	{
		titleClasses: 'vertical-timeline-element-title mimi-pink',
		title: "Frontend Developer",
		subtitle: "Pod Point",
		techList: [
			'js',
			'react',
			'css',
			'php',
		],
		icon: PP,
		bgColor: '#B8C0FF',
		arrowColor: '#B8C0FF',
	},
	{
		titleClasses: 'vertical-timeline-element-title mimi-pink',
		title: "Web Designer/Developer",
		subtitle: "Copia Digital",
		description: "HTML5, CSS3, PHP, CMS, SVN, Adobe Photoshop, D3, Balsamiq, phpMyAdmin.",
		techList: [
			'html',
			'sass',
			'php',
		],
		icon: CD,
		bgColor: '#94B2F5',
		arrowColor: '#94B2F5',
	},
];

const ProfessionalExperience = () => {
  return (
    <section id="section3" className="professional-experience">
		<div className="container">
			<div className="row">
				<div className="col-12">
					<span className="professional-experience__top-title align-centre">My Frontend Footprint</span>
					<h2 className="align-centre">Professional Experience.</h2>
				</div>

				<VerticalTimeline>
					{experienceData.map((exp, index) => (
						<VerticalTimelineElement
							key={index}
							className={`vertical-timeline-element--work vertical-timeline-element--${index + 1}`}
							contentStyle={{background: exp.bgColor, color: '#4E4A52', fontSize: '12px'}}
							contentArrowStyle={{borderRight: `14px solid ${exp.arrowColor}`}}
							iconStyle={{background: exp.bgColor, color: '#FFF'}}
							icon={<img src={exp.icon} alt={exp.subtitle} loading="lazy" />}
						>
							<h3 className={exp.titleClasses}>{exp.title}</h3>
							<h2 className="vertical-timeline-element-subtitle">{exp.subtitle}</h2>
							<ul className="tech__list">
								{exp.techList.map((tech, index) => (
									<li key={index} className={`tech__list--item tech__list--${tech}`}>{tech}</li>
								))}
							</ul>
						</VerticalTimelineElement>
					))}
				</VerticalTimeline>

				<div className="col-12">
					<p className="align-centre">View my <a href={TRA_CV} target="_blank">CV</a> for a detailed overview of my experience.</p>
				</div>
			</div>
		</div>
    </section>
  )
};

export default ProfessionalExperience;