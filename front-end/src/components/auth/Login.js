import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
	constructor() {
		super();
		this.state = {
			email: "",
			password: "",
			errors: {},
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(e) {
		e.preventDefault();

		const user = {
			email: this.state.email,
			password: this.state.password,
		};

		console.log(user);
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	render() {
		return (
			<div>
				<section className="login-section">
					<div className="header-section">
						<div className="logo-sec">
							<Link to="index">
								<img
									src="../assets/images/icon/logo.png"
									alt="logo"
									className="img-fluid blur-up lazyload"
								/>
							</Link>
						</div>
						<div className="right-links">
							<ul>
								<li>
									<Link to="#"> about </Link>
								</li>
								<li>
									<Link to="#"> upgrade </Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="container">
						<div className="row">
							<div className="col-xl-6 col-lg-5 d-none d-lg-block">
								<div className="login-welcome">
									<div>
										<img
											src="../assets/images/login/charcter.png"
											className="img-fluid blur-up lazyload"
											alt="charcter"
										/>
										<h1>Welcome Back!</h1>
									</div>
								</div>
							</div>
							<div className="col-xl-6 col-lg-7 col-md-10 col-12 m-auto">
								<div className="login-form">
									<div>
										<div className="login-title">
											<h2>Login</h2>
										</div>
										<div className="login-discription">
											<h3>Hello Everyone, Welcome Back</h3>
											<h4>
												Welcome to Friendbook, please login to your account.
											</h4>
										</div>
										<div className="form-sec">
											<div>
												<form className="theme-form">
													<div className="form-group">
														<label for="exampleInputEmail1">
															Email address
														</label>
														<input
															type="email"
															className="form-control"
															id="exampleInputEmail1"
															placeholder="Enter email"
														/>
														<i
															className="input-icon iw-20 ih-20"
															data-feather="user"></i>
													</div>
													<div className="form-group">
														<label for="exampleInputPassword1">Password</label>
														<input
															type="password"
															className="form-control"
															id="exampleInputPassword1"
															placeholder="Password"
														/>
														<i
															className="input-icon iw-20 ih-20"
															data-feather="eye"></i>
													</div>
													<div className="bottom-sec">
														<div className="form-check checkbox_animated">
															<input
																type="checkbox"
																className="form-check-input"
																id="exampleCheck1"
															/>
															<label
																className="form-check-label"
																for="exampleCheck1">
																remember me
															</label>
														</div>
														<Link to="#" className="ms-auto forget-password">
															forget password?
														</Link>
													</div>
													<div className="btn-section">
														<Link to="#" className="btn btn-solid btn-lg">
															login
														</Link>
														<Link
															to="register"
															className="btn btn-solid btn-lg ms-auto">
															sign up
														</Link>
													</div>
												</form>
												<div className="connect-with">
													<h6>
														<span>OR Connect With</span>
													</h6>
													<ul className="social-links">
														<li className="google">
															<Link to="#">
																{/* <svg className="">
																	<use xlink:href="../assets/svg/icons.svg#google"></use>
																</svg> */}
															</Link>
														</li>
														<li className="facebook">
															<Link to="#">
																{/* <svg className="">
																	<use xlink:href="../assets/svg/icons.svg#facebook"></use>
																</svg> */}
															</Link>
														</li>
														<li className="twitter">
															<Link to="#">
																{/* <svg className="">
																	<use xlink:href="../assets/svg/icons.svg#twitter"></use>
																</svg> */}
															</Link>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="how-work">
						<div className="media">
							<i data-feather="play-circle"></i>
							<div className="media-body">
								<h2>how it work?</h2>
								<p>
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been.
								</p>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default Login;
