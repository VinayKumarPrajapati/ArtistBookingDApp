import React from "react";
import { Link } from "react-router-dom";

export default () => {
	return (
		<footer className="footer-pt-space pb-0 footer-theme overflow-hidden">
			<div className="container">
				<div className="row footer-sec footer-pb-space">
					<div className="col-lg-4 col-md-6">
						<div className="footer-title d-md-none d-block">
							<h4>about</h4>
						</div>
						<div className="footer-content">
							<div className="footer-logo">
								<img src="../assets/images/icon/logo.png" alt="" />
							</div>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, et dolore magna aliqua
							</p>
							<div className="footer-social">
								<ul className="d-flex">
									<li>
										<Link to="#">
											<i className="fab fa-facebook-f"></i>
										</Link>
									</li>
									<li>
										<Link to="#">
											<i className="fab fa-google-plus-g"></i>
										</Link>
									</li>
									<li>
										<Link to="#">
											<i className="fab fa-twitter"></i>
										</Link>
									</li>
									<li>
										<Link to="#">
											<i className="fab fa-instagram"></i>
										</Link>
									</li>
									<li>
										<Link to="#">
											<i className="fas fa-rss"></i>
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-lg-2 col-md-6">
						<div className="footer-title">
							<h4>my account</h4>
						</div>
						<div className="footer-content">
							<ul>
								<li>
									<Link to="profile">timeline</Link>
								</li>
								<li>
									<Link to="profile-about">about</Link>
								</li>
								<li>
									<Link to="profile-friends">friends</Link>
								</li>
								<li>
									<Link to="profile-gallery">gallery</Link>
								</li>
								<li>
									<Link to="#">settings</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-lg-2 col-md-4">
						<div className="footer-title">
							<h4>quick links</h4>
						</div>
						<div className="footer-content">
							<ul>
								<li>
									<Link to="#">settings</Link>
								</li>
								<li>
									<Link to="help-support">help & support</Link>
								</li>
								<li>
									<Link to="#">messanger</Link>
								</li>
								<li>
									<Link to="favourite-page">pages</Link>
								</li>
								<li>
									<Link to="company-about">company</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-lg-2 col-md-4">
						<div className="footer-title">
							<h4>pages</h4>
						</div>
						<div className="footer-content">
							<ul>
								<li>
									<Link to="event">event</Link>
								</li>
								<li>
									<Link to="birthday">birthday</Link>
								</li>
								<li>
									<Link to="weather">weather</Link>
								</li>
								<li>
									<Link to="music">music</Link>
								</li>
								<li>
									<Link to="register">register</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-lg-2 col-md-4">
						<div className="footer-title">
							<h4>company</h4>
						</div>
						<div className="footer-content">
							<ul>
								<li>
									<Link to="#">about us</Link>
								</li>
								<li>
									<Link to="#">blog</Link>
								</li>
								<li>
									<Link to="#">contact us</Link>
								</li>
								<li>
									<Link to="#">faq</Link>
								</li>
								<li>
									<Link to="#">careers</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="sub-footer">
							<p>Friendbook © 2021. All rights reserved</p>
						</div>
					</div>
				</div>
			</div>
			<div className="animation-home">
				<div className="cross"></div>
				<div className="cross cross1"></div>
				<div className="tringle tringle1"></div>
			</div>
		</footer>
	);
};
