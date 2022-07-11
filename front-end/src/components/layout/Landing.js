import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
	render() {
		return (
			<div>
				<section className="feature-section section-pt-space sm-pb-space overflow-hidden">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<div className="title-sec">
									<h4>our features</h4>
									<h3>we provide best feature</h3>
								</div>
							</div>
							<div className="col-lg-4 col-6 mobile-w100">
								<div className="feature-box">
									<div className="icon-box">
										<img
											src="../assets/images/company-landing/icon/feature1.png"
											className="img-fluid blur-up lazyload"
											alt=""
										/>
									</div>
									<div className="feature-content">
										<h3>clean UI</h3>
										<p>
											We Provide Clean and better interface for easy to use
											application.
										</p>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-6 mobile-w100">
								<div className="feature-box">
									<div className="icon-box">
										<img
											src="../assets/images/company-landing/icon/feature2.png"
											className="img-fluid blur-up lazyload"
											alt=""
										/>
									</div>
									<div className="feature-content">
										<h3>well managed</h3>
										<p>
											We design this very much properly, Easy and simple to
											understand.
										</p>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-6 mobile-w100">
								<div className="feature-box">
									<div className="icon-box">
										<img
											src="../assets/images/company-landing/icon/feature3.png"
											className="img-fluid blur-up lazyload"
											alt=""
										/>
									</div>
									<div className="feature-content">
										<h3>RESPONSIVE DESIGN</h3>
										<p>
											Fully responsive design for user, quick and easy to
											operate in device.
										</p>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-6 mobile-w100">
								<div className="feature-box">
									<div className="icon-box">
										<img
											src="../assets/images/company-landing/icon/feature4.png"
											className="img-fluid blur-up lazyload"
											alt=""
										/>
									</div>
									<div className="feature-content">
										<h3>24*7 SUPPORT</h3>
										<p>
											Our support service team are always there to support you
											and guide you.
										</p>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-6 mobile-w100">
								<div className="feature-box">
									<div className="icon-box">
										<img
											src="../assets/images/company-landing/icon/feature5.png"
											className="img-fluid blur-up lazyload"
											alt=""
										/>
									</div>
									<div className="feature-content">
										<h3>EASY INTEGRATION</h3>
										<p>
											We provide easy integration for easy to understand our
											application.
										</p>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-6 mobile-w100">
								<div className="feature-box">
									<div className="icon-box">
										<img
											src="../assets/images/company-landing/icon/feature6.png"
											className="img-fluid blur-up lazyload"
											alt=""
										/>
									</div>
									<div className="feature-content">
										<h3>DAY NIGHT MODE</h3>
										<p>
											We provide one more smart feature supports day and night
											mode.
										</p>
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
					</div>
				</section>

				<section className="section-pb-space section-pt-space single-feature-section landing-bg overflow-hidden">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<div className="title-sec">
									<h4>register in a minute</h4>
									<h3>register to join friendbook</h3>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="vector-section mb--65">
									<img
										src="../assets/images/company-landing/feature-vector/register/phone.svg"
										className="img-fluid blur-up lazyload main-img wow zoomIn"
										data-wow-delay="0.20s"
										alt=""
									/>
									<img
										src="../assets/images/company-landing/feature-vector/register/lock.svg"
										className="img-fluid blur-up lazyload lock-img wow zoomIn"
										data-wow-delay="0.30s"
										alt=""
									/>
									<img
										src="../assets/images/company-landing/feature-vector/register/thumbs-up.svg"
										className="img-fluid blur-up lazyload thumb-img wow zoomIn"
										data-wow-delay="0.40s"
										alt=""
									/>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="feature-content wow fadeInRight">
									<div>
										<h3 className="title">
											Register To Enjoy This Application
										</h3>
										<p>
											Lorem ipsum, dolor sit amet consectetur adipisicing elit.
											Dolorum blanditiis atque cum iure nihil, ipsa commodi
											veniam, nemo ipsam sed aliquam aliquid modi totam. Quia
											architecto nesciunt facere consectetur laudantium.
										</p>
										<ul className="feature-lisiting">
											<li>
												<img
													src="../assets/svg/checkmark.svg"
													className="img-fluid blur-up lazyload"
													alt=""
												/>
												Easy to Register with your Device.
											</li>
											<li>
												<img
													src="../assets/svg/checkmark.svg"
													className="img-fluid blur-up lazyload"
													alt=""
												/>
												Register in a minute by your Email ID
											</li>
											<li>
												<img
													src="../assets/svg/checkmark.svg"
													className="img-fluid blur-up lazyload"
													alt=""
												/>
												Your Data is Secure with us.
											</li>
										</ul>
										<Link to="#" className="btn btn-solid btn-md">
											register now
										</Link>
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

				<section className="section-pb-space section-pt-space single-feature-section overflow-hidden">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<div className="title-sec">
									<h4>find new friends</h4>
									<h3>get in touch with friends</h3>
								</div>
							</div>
							<div className="col-lg-7 order-lg-2">
								<div className="vector-section">
									<img
										src="../assets/images/company-landing/feature-vector/get-in-touch.svg"
										className="img-fluid blur-up lazyload wow zoomIn"
										data-wow-delay="0.20s"
										alt=""
									/>
								</div>
							</div>
							<div className="col-lg-5 order-lg-1">
								<div
									className="feature-content wow fadeInLeft"
									data-wow-delay="0.30s">
									<div>
										<h3 className="title">talk with your loved once</h3>
										<p>
											There are many variations of passages of Lorem Ipsum
											available, but the majority have suffered alteration in
											some form, by injected humour.
										</p>
										<Link to="#" className="btn btn-solid btn-md">
											chat now
										</Link>
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

				<section className="section-pb-space section-pt-space single-feature-section landing-bg overflow-hidden">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<div className="title-sec">
									<h4>active users</h4>
									<h3>more then 100k active users</h3>
								</div>
							</div>
							<div className="col-lg-7">
								<div className="vector-section">
									<img
										src="../assets/images/company-landing/feature-vector/active-user.svg"
										className="img-fluid blur-up lazyload active-img wow zoomIn"
										data-wow-delay="0.20s"
										alt=""
									/>
								</div>
							</div>
							<div className="col-lg-5">
								<div
									className="feature-content wow fadeInRight"
									data-wow-delay="0.25s">
									<div>
										<h3 className="title">
											Register To Enjoy This Application
										</h3>
										<p>
											Lorem ipsum, dolor sit amet consectetur adipisicing elit.
											Dolorum blanditiis atque cum iure nihil, ipsa commodi
											veniam, nemo ipsam sed aliquam aliquid modi totam. Quia
											architecto nesciunt facere consectetur laudantium.
										</p>
										<ul className="feature-lisiting">
											<li>
												<img
													src="../assets/svg/checkmark.svg"
													className="img-fluid blur-up lazyload"
													alt=""
												/>
												Easy to Register with your Device.
											</li>
											<li>
												<img
													src="../assets/svg/checkmark.svg"
													className="img-fluid blur-up lazyload"
													alt=""
												/>
												Register in a minute by your Email ID
											</li>
											<li>
												<img
													src="../assets/svg/checkmark.svg"
													className="img-fluid blur-up lazyload"
													alt=""
												/>
												Your Data is Secure with us.
											</li>
										</ul>
										<Link to="#" className="btn btn-solid btn-md">
											register now
										</Link>
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

				<section className="testimonial-section section-pb-space section-pt-space single-feature-section overflow-hidden">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<div className="title-sec">
									<h4>testimonial</h4>
									<h3>see what our client says</h3>
								</div>
							</div>
						</div>
						<div className="row testimonial-space">
							<div className="col-lg-6 order-lg-2">
								<div className="testimonial-vector">
									<div className="round">
										<span></span>
										<img
											src="../assets/images/company-landing/logo.png"
											className="img-fluid blur-up lazyload"
											alt=""
										/>
									</div>
									<div className="users-sec">
										<div className="user-box wow zoomIn" data-wow-delay="0.10s">
											<div className="content">
												<h6>best UI Design</h6>
											</div>
											<div className="img">
												<img
													src="../assets/images/user-sm/1.jpg"
													className="img-fluid blur-up lazyload"
													alt=""
												/>
											</div>
										</div>
										<div
											className="user-box user2 wow zoomIn"
											data-wow-delay="0.15s">
											<div className="img">
												<img
													src="../assets/images/user-sm/2.jpg"
													className="img-fluid blur-up lazyload"
													alt=""
												/>
											</div>
											<div className="content bottom">
												<h6>cool app</h6>
											</div>
										</div>
										<div
											className="user-box user3 wow zoomIn"
											data-wow-delay="0.20s">
											<div className="img">
												<img
													src="../assets/images/user-sm/3.jpg"
													className="img-fluid blur-up lazyload"
													alt=""
												/>
											</div>
											<div className="content bottom">
												<h6>love to use</h6>
											</div>
										</div>
										<div
											className="user-box user4 wow zoomIn"
											data-wow-delay="0.25s">
											<div className="content">
												<h6>best app</h6>
											</div>
											<div className="img">
												<img
													src="../assets/images/user-sm/4.jpg"
													className="img-fluid blur-up lazyload"
													alt=""
												/>
											</div>
										</div>
										<div
											className="user-box user5 wow zoomIn"
											data-wow-delay="0.30s">
											<div className="content">
												<h6>best app</h6>
											</div>
											<div className="img">
												<img
													src="../assets/images/user-sm/5.jpg"
													className="img-flui"
													alt=""
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-6 order-lg-1">
								<div className="feature-content">
									<div>
										<h3 className="title">our client's reviews</h3>
										<p>
											It is a long established fact that a reader will be
											distracted by the readable content of a page when looking
											at its layout. The point of using Lorem Ipsum is a
											more-or-less.
										</p>
										<div className="user-section">
											<ul>
												<li>
													<img
														src="../assets/images/user-sm/1.jpg"
														className="img-fluid blur-up lazyload"
														alt=""
													/>
												</li>
												<li>
													<img
														src="../assets/images/user-sm/2.jpg"
														className="img-fluid blur-up lazyload"
														alt=""
													/>
												</li>
												<li>
													<img
														src="../assets/images/user-sm/3.jpg"
														className="img-fluid blur-up lazyload"
														alt=""
													/>
												</li>
												<li>
													<img
														src="../assets/images/user-sm/4.jpg"
														className="img-fluid blur-up lazyload"
														alt=""
													/>
												</li>
												<li>
													<img
														src="../assets/images/user-sm/5.jpg"
														className="img-fluid blur-up lazyload"
														alt=""
													/>
												</li>
												<li>
													<img
														src="../assets/images/user-sm/6.jpg"
														className="img-fluid blur-up lazyload"
														alt=""
													/>
												</li>
											</ul>
										</div>
										<div className="count-status">
											<ul>
												<li>
													<h4>1M+</h4>
													<h6>total users</h6>
												</li>
												<li>
													<h4>50+</h4>
													<h6>unique features</h6>
												</li>
												<li>
													<h4>10K+</h4>
													<h6>user reviews</h6>
												</li>
											</ul>
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
					</div>
				</section>
			</div>
		);
	}
}

export default Landing;
