import HeroContent from "./HeroContent";
import HeroImage from "../assets/svgs/hero_image.svg";

const Hero = () => (
    <section className="hero">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-7 d-flex">
                    <HeroContent />
                </div>
                <div className="col-12 col-md-5 d-flex">
                    <div className="hero__image-container">
                        <img
                            src={HeroImage}
                            alt="Diamonds, stars, hearts, music notes in pastel, lilac and pink tones"
                            className="hero__image"
							width="497"
							height="428"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Hero;