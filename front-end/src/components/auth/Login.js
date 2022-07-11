import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { loginUser } from "../../actions/authActions";
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

	componentDidMount() {
		if (this.props.auth.isAuthenticated) {
			this.props.history.push("/dashboard");
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.auth.isAuthenticated) {
			this.props.history.push("/dashboard");
		}

		if (nextProps.errors) {
			this.setState({ errors: nextProps.errors });
		}
	}

	onSubmit(e) {
		e.preventDefault();

		const userData = {
			email: this.state.email,
			password: this.state.password,
		};

		this.props.loginUser(userData);
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
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
												<form onSubmit={this.onSubmit} className="theme-form">
													<div className="form-group">
														<label htmlFor="exampleInputEmail1">
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
														<i
															className="input-icon iw-20 ih-20"
															data-feather="user"></i>
														{/* {errors.email && (
															<div className="invalid-feedback">
																{errors.email}
															</div>
														)} */}
													</div>
													<div className="form-group">
														<label htmlFor="exampleInputPassword1">
															Password
														</label>
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

														<i
															className="input-icon iw-20 ih-20"
															data-feather="eye"></i>
														{/* {errors.password && (
															<div className="invalid-feedback">
																{errors.password}
															</div>
														)} */}
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
																htmlFor="exampleCheck1">
																remember me
															</label>
														</div>
														<Link to="#" className="ms-auto forget-password">
															forget password?
														</Link>
													</div>
													<div className="btn-section">
														<input
															type="submit"
															className="btn btn-info btn-block mt-4"
														/>
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

Login.propTypes = {
	loginUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(Login);
