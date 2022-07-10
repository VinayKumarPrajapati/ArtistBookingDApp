import React from "react";

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
										<a href="#">
											<i className="fab fa-facebook-f"></i>
										</a>
									</li>
									<li>
										<a href="#">
											<i className="fab fa-google-plus-g"></i>
										</a>
									</li>
									<li>
										<a href="#">
											<i className="fab fa-twitter"></i>
										</a>
									</li>
									<li>
										<a href="#">
											<i className="fab fa-instagram"></i>
										</a>
									</li>
									<li>
										<a href="#">
											<i className="fas fa-rss"></i>
										</a>
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
									<a href="profile.html">timeline</a>
								</li>
								<li>
									<a href="profile-about.html">about</a>
								</li>
								<li>
									<a href="profile-friends.html">friends</a>
								</li>
								<li>
									<a href="profile-gallery.html">gallery</a>
								</li>
								<li>
									<a href="#">settings</a>
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
									<a href="#">settings</a>
								</li>
								<li>
									<a href="help-support.html">help & support</a>
								</li>
								<li>
									<a href="#">messanger</a>
								</li>
								<li>
									<a href="favourite-page.html">pages</a>
								</li>
								<li>
									<a href="company-about.html">company</a>
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
									<a href="#">about us</a>
								</li>
								<li>
									<a href="#">blog</a>
								</li>
								<li>
									<a href="#">contact us</a>
								</li>
								<li>
									<a href="#">faq</a>
								</li>
								<li>
									<a href="#">careers</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="sub-footer">
							<p>ArtistBook © 2022. All rights reserved</p>
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
