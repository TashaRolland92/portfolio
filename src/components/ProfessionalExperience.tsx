import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import BI from "../assets/professional/bi-logo.png";
import EY from "../assets/professional/ey-logo.png";
import NL from "../assets/professional/new-look-logo.png";
import PP from "../assets/professional/pod-point-icon.png";
import CD from "../assets/professional/copia-logo.png";
import TRA_CV from "/TRA_CV.pdf";

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
					<VerticalTimelineElement
						className="vertical-timeline-element--work vertical-timeline-element--one"
						contentStyle={{ background: '#FFD6FF', color: '#4E4A52', fontSize: '12px'}}
						contentArrowStyle={{ borderRight: '14px solid #FFD6FF' }}
						date="Sept 2020 - Present"
						iconStyle={{ background: '#FFD6FF', color: '#FFF' }}
						icon={<img src={BI} alt="Bordeaux Index" loading="lazy" />}
					>
						<h3 className="vertical-timeline-element-title jordy-blue">Frontend Engineer</h3>
						<h4 className="vertical-timeline-element-subtitle">Bordeaux Index</h4>
						<p>JavaScript, PHP, Laravel, UI/UX, CSS3, MySql, Adobe Photoshop, Node.js, Figma, Jira, Azure, TDD, InVision.</p>
					</VerticalTimelineElement>

					<VerticalTimelineElement
						className="vertical-timeline-element--work vertical-timeline-element--two"
						date="Jan 2019 - Sept 2020"
						contentStyle={{ background: '#E7C6FF', color: '#4E4A52', fontSize: '12px' }}
						contentArrowStyle={{ borderRight: '14px solid #E7C6FF' }}
						iconStyle={{ background: '#E7C6FF', color: '#4E4A52' }}
						icon={<img src={EY} alt="Ernst & Young LLP" loading="lazy" />}
					>
						<h3 className="vertical-timeline-element-title jordy-blue">Frontend Developer</h3>
						<h4 className="vertical-timeline-element-subtitle">Ernst & Young LLP</h4>
						<p>AngularJS, JavaScript, Trello, MS Sharepoint, HTML5, CSS3, CRM, InVision, Agile.</p>
					</VerticalTimelineElement>

					<VerticalTimelineElement
						className="vertical-timeline-element--work vertical-timeline-element--three"
						date="June 2019 - Dec 2019"
						contentStyle={{ background: '#C8B6FF', color: '#4E4A52', fontSize: '12px' }}
						contentArrowStyle={{ borderRight: '14px solid #C8B6FF' }}
						iconStyle={{ background: '#C8B6FF', color: '#4E4A52' }}
						icon={<img src={NL} alt="New Look" loading="lazy" />}
					>
						<h3 className="vertical-timeline-element-title mimi-pink">Frontend Developer</h3>
						<h4 className="vertical-timeline-element-subtitle">New Look</h4>
						<p>JavaScript, CSS3, HTML5, Oracle Maxymiser, InVision, A/B Testing.</p>
					</VerticalTimelineElement>

					<VerticalTimelineElement
						className="vertical-timeline-element--work vertical-timeline-element--four"
						date="Nov 2018 - May 2019"
						contentStyle={{ background: '#B8C0FF', color: '#4E4A52', fontSize: '12px' }}
						contentArrowStyle={{ borderRight: '14px solid #B8C0FF' }}
						iconStyle={{ background: '#B8C0FF', color: '#4E4A52' }}
						icon={<img src={PP} alt="Pod Point" loading="lazy" />}
					>
						<h3 className="vertical-timeline-element-title mimi-pink">Frontend Developer</h3>
						<h4 className="vertical-timeline-element-subtitle">Pod Point</h4>
						<p>JavaScript, CSS3, HTML5, React, NPM, React Native, Xcode, Node.js, AWS, Agile.</p>
					</VerticalTimelineElement>

					<VerticalTimelineElement
						className="vertical-timeline-element--work vertical-timeline-element--five"
						date="May 2012 - Oct 2015"
						contentStyle={{ background: '#94B2F5', color: '#4E4A52', fontSize: '12px' }}
						contentArrowStyle={{ borderRight: '14px solid #94B2F5' }}
						iconStyle={{ background: '#94B2F5', color: '#4E4A52' }}
						icon={<img src={CD} alt="Copia Digital" loading="lazy" />}
					>
						<h3 className="vertical-timeline-element-title mimi-pink">Web Designer/Developer</h3>
						<h4 className="vertical-timeline-element-subtitle">Copia Digital</h4>
						<p>HTML5, CSS3, PHP, CMS, SVN, Adobe Photoshop, D3, Balsamiq, phpMyAdmin.</p>
					</VerticalTimelineElement>
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