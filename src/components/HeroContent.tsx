import { ReactTyped } from "react-typed";

const HeroContent = () => (
    <div className="hero__content">
        <h1 className="hero__title">Hi, I'm <span className="default__gradient--text  uppercase">Tasha.</span></h1>
        <h2 className="hero__subtitle">I'm a&nbsp;
            <span className="default__gradient--text">
                <ReactTyped
                    strings={[
                        "Frontend Designer",
                        "Frontend Engineer",
                        "Tech Enthusiast",
                        "Cocktail Lover",
                        "Passionate Crafter.",
                    ]}
                    typeSpeed={60}
                    backSpeed={60}
                />
            </span>
        </h2>
        <h3>Welcome to my portfolio, find out a little more about me and what I do in both my professional and personal time.</h3>
    </div>
);

export default HeroContent;
