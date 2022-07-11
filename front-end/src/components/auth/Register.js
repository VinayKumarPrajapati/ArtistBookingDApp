import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import classnames from "classnames";

class Register extends Component {
	constructor() {
		super();
		this.state = {
			name: "",
			email: "",
			password: "",
			password2: "",
			errors: {},
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	onSubmit(e) {
		e.preventDefault();

		const newUser = {
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
			password2: this.state.password2,
		};

		axios
			.post("/api/users/register", newUser)
			.then((res) => console.log(res.data))
			.catch((err) => this.setState({ errors: err.response.data }));
	}

	render() {
		const { errors } = this.state;

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
										<h1>Welcome friend!</h1>
									</div>
								</div>
							</div>
							<div className="col-xl-6 col-lg-7 col-md-10 col-12 m-auto">
								<div className="login-form">
									<div>
										<div className="login-title">
											<h2>Register</h2>
										</div>
										<div className="login-discription">
											<h3>Hello Everyone</h3>
											<h4>
												Welcome to Friendbook, create your account below to
												start usinf friendbook.
											</h4>
										</div>
										<div className="form-sec">
											<div>
												<form
													className="theme-form"
													noValidate
													onSubmit={this.onSubmit}>
													<div className="form-group">
														<label for="name">Full Name</label>
														<input
															type="text"
															className={classnames(
																"form-control form-control-lg",
																{
																	"is-invalid": errors.name,
																}
															)}
															placeholder="Name"
															name="name"
															value={this.state.name}
															onChange={this.onChange}
														/>
														{errors.name && (
															<div className="invalid-feedback">
																{errors.name}
															</div>
														)}
														<i
															className="input-icon iw-20 ih-20"
															data-feather="user"></i>
													</div>
													<div className="form-group">
														<label for="exampleInputEmail1">
															Email address
														</label>
														<input
															type="email"
															className={classnames(
																"form-control form-control-lg",
																{
																	"is-invalid": errors.email,
																}
															)}
															placeholder="Email Address"
															name="email"
															value={this.state.email}
															onChange={this.onChange}
														/>
														{errors.email && (
															<div className="invalid-feedback">
																{errors.email}
															</div>
														)}
														<i
															className="input-icon iw-20 ih-20"
															data-feather="mail"></i>
													</div>
													<div className="form-group">
														<label for="exampleInputPassword1">Password</label>
														<input
															type="password"
															className={classnames(
																"form-control form-control-lg",
																{
																	"is-invalid": errors.password,
																}
															)}
															placeholder="Password"
															name="password"
															value={this.state.password}
															onChange={this.onChange}
														/>
														{errors.password && (
															<div className="invalid-feedback">
																{errors.password}
															</div>
														)}
														<i
															className="input-icon iw-20 ih-20"
															data-feather="eye"></i>
													</div>
													<div className="form-group">
														<label for="exampleInputPassword1">
															Repeat Password
														</label>
														<input
															type="password"
															className={classnames(
																"form-control form-control-lg",
																{
																	"is-invalid": errors.password2,
																}
															)}
															placeholder="Confirm Password"
															name="password2"
															value={this.state.password2}
															onChange={this.onChange}
														/>
														{errors.password2 && (
															<div className="invalid-feedback">
																{errors.password2}
															</div>
														)}
														{errors.password && (
															<div className="invalid-feedback">
																{errors.password}
															</div>
														)}
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
														<Link to="#" className="ms-auto">
															forget password?
														</Link>
													</div>
													<div className="btn-section">
														<Link to="#" className="btn btn-solid btn-lg">
															sign up
														</Link>
														<Link
															to="login"
															className="btn btn-solid btn-lg ms-auto">
															login
														</Link>
													</div>
												</form>
												<div className="connect-with">
													<h6>
														<span>OR Connect With</span>
													</h6>
													{/* <ul className="social-links">
														<li className="google">
															<Link to="#">
																<svg className="">
																	<use xlink:href="../assets/svg/icons.svg#google"></use>
																</svg>
															</Link>
														</li>
														<li className="facebook">
															<Link to="#">
																<svg className="">
																	<use xlink:href="../assets/svg/icons.svg#facebook"></use>
																</svg>
															</Link>
														</li>
														<li className="twitter">
															<Link to="#">
																<svg className="">
																	<use xlink:href="../assets/svg/icons.svg#twitter"></use>
																</svg>
															</Link>
														</li>
													</ul> */}
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
									Friendbook is a website which allows users, who sign-up for
									free profiles, to connect with friends, work colleagues or
									people they don't know, online.
								</p>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default Register;
