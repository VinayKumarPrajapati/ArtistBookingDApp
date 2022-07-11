import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
	render() {
		return (
			<div>
				<header className="no-sticky bg-transparent home-landing overflow-hidden">
					<div className="container">
						<div className="header-section">
							<div className="header-left">
								<div className="brand-logo">
									<Link to="index">
										<img
											src="../assets/images/icon/logo-color.png"
											alt="logo"
											className="img-fluid blur-up lazyload"
										/>
									</Link>
								</div>
							</div>
							<div className="header-right">
								<nav className="navbar navbar-expand-lg pe-0">
									<div className="overlay-bg"></div>
									<button className="navbar-toggler p-0" type="button">
										<i
											data-feather="menu"
											className="icon iw-22 ih-22 icon-light"></i>
									</button>
									<div className="navbar-collapse" id="navbarNavDropdown">
										<ul className="navbar-nav">
											<li className="nav-item d-block d-lg-none back-btn">
												<Link className="nav-link" to="javascript:void(0)">
													back
												</Link>
											</li>
											<li className="nav-item active">
												<Link className="nav-link" to="index">
													Home
												</Link>
											</li>
											<li className="nav-item">
												<Link className="nav-link" to="about-us">
													features
												</Link>
											</li>
											<li className="nav-item">
												<Link className="nav-link" to="career">
													testimonial
												</Link>
											</li>
											<li className="nav-item">
												<Link className="nav-link" to="blog">
													download
												</Link>
											</li>
											<li className="nav-item">
												<Link className="nav-link" to="faq">
													contact
												</Link>
											</li>
											<li className="nav-item">
												<Link
													className="nav-link d-flex align-items-center btn btn-white"
													to="login">
													<i
														className="me-2 iw-18 ih-18"
														data-feather="log-in"></i>
													login
												</Link>
											</li>
										</ul>
									</div>
								</nav>
							</div>
						</div>
					</div>
				</header>
			</div>
		);
	}
}

export default Navbar;
