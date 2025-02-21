import Nav from './Nav';
import Logo from '../assets/svgs/diamond.svg';

const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="h-100 d-flex justify-content-between align-items-center">
							<h1 className="default__gradient--text logo">
								<img src={Logo} alt="Mimi Pink to Periwinkle, Gradient Diamond Icon" className="diamond-icon" />
								Tasha
							</h1>
							<Nav />
						</div>
					</div>
				</div>
			</div>
		</header>
	)
};

export default Header;