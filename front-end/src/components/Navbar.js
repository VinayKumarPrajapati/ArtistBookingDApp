import React, { Component } from "react";

class Navbar extends Component {
	render() {
		return (
			// <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
			// 	<div className="container">
			// 		<a className="navbar-brand" href="landing.html">
			// 			Book The Artist
			// 		</a>
			// 		<button
			// 			className="navbar-toggler"
			// 			type="button"
			// 			data-toggle="collapse"
			// 			data-target="#mobile-nav">
			// 			<span className="navbar-toggler-icon" />
			// 		</button>

			// 		<div className="collapse navbar-collapse" id="mobile-nav">
			// 			<ul className="navbar-nav mr-auto">
			// 				<li className="nav-item">
			// 					<a className="nav-link" href="profiles.html">
			// 						Artist Booking DApp
			// 					</a>
			// 				</li>
			// 			</ul>

			// 			<ul className="navbar-nav ml-auto">
			// 				<li className="nav-item">
			// 					<a className="nav-link" href="register.html">
			// 						Sign Up
			// 					</a>
			// 				</li>
			// 				<li className="nav-item">
			// 					<a className="nav-link" href="login.html">
			// 						Login
			// 					</a>
			// 				</li>
			// 			</ul>
			// 		</div>
			// 	</div>
			// </nav>
			<div>
				<div className="loading-text">
					<div>
						<h1 className="animate">Loading</h1>
					</div>
				</div>
				<header className="no-sticky bg-transparent home-landing overflow-hidden">
					<div className="container">
						<div className="header-section">
							<div className="header-left">
								<div className="brand-logo">
									<a href="index.html">
										<img
											src="../assets/images/icon/logo-color.png"
											alt="logo"
											className="img-fluid blur-up lazyload"
										/>
									</a>
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
												<a className="nav-link" href="javascript:void(0)">
													back
												</a>
											</li>
											<li className="nav-item active">
												<a className="nav-link" href="index.html">
													Home
												</a>
											</li>
											<li className="nav-item">
												<a className="nav-link" href="about-us.html">
													features
												</a>
											</li>
											<li className="nav-item">
												<a className="nav-link" href="career.html">
													testimonial
												</a>
											</li>
											<li className="nav-item">
												<a className="nav-link" href="blog.html">
													download
												</a>
											</li>
											<li className="nav-item">
												<a className="nav-link" href="faq.html">
													contact
												</a>
											</li>
											<li className="nav-item">
												<a
													className="nav-link d-flex align-items-center btn btn-white"
													href="login.html">
													<i
														className="me-2 iw-18 ih-18"
														data-feather="log-in"></i>
													login
												</a>
											</li>
										</ul>
									</div>
								</nav>
							</div>
						</div>
					</div>
				</header>

				<section className="home-section overflow-hidden">
					<img
						src="../assets/images/company-landing/home-bg.jpg"
						className="img-fluid blur-up lazyload bg-img"
						alt=""
					/>
					<div className="home-content">
						<div className="container">
							<div className="row">
								<div className="col-lg-7 order-lg-2">
									<div className="content-screen">
										<div className="main-screen">
											<img
												src="../assets/images/company-landing/home-laptop.png"
												alt=""
												className="img-fluid blur-up lazyload wow zoomIn"
												data-wow-delay="0.20s"
											/>
										</div>
										<div className="home-effect">
											<img
												src="../assets/images/company-landing/home-effect/1.png"
												alt=""
												className="img-fluid blur-up lazyload user wow zoomIn"
												data-wow-delay="0.60s"
											/>
											<img
												src="../assets/images/company-landing/home-effect/2.png"
												alt=""
												className="img-fluid blur-up lazyload user-round wow zoomIn"
												data-wow-delay="0.50s"
											/>
											<img
												src="../assets/images/company-landing/home-effect/3.png"
												alt=""
												className="img-fluid blur-up lazyload heart wow zoomIn"
												data-wow-delay="0.40s"
											/>
										</div>
									</div>
								</div>
								<div className="col-lg-5 order-lg-1">
									<div className="content">
										<div>
											<h1>
												easy to talk with <span>friends</span>
											</h1>
											<p>
												Friendbook is an online platform that allows users to
												create a public profile and interact with friends,
												family, colleagues, customers, or clients.
											</p>
											<a href="#" className="btn btn-solid btn-lg">
												get started
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="animation-home">
						<div className="cross"></div>
						<div className="cross cross1"></div>
						<div className="tringle"></div>
						<div className="tringle tringle1"></div>
						<div className="circle"></div>
						<div className="circle circle1"></div>
					</div>
				</section>
			</div>
		);
	}
}

export default Navbar;
