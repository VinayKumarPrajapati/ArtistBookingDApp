import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Navbar extends Component {
	onLogoutClick(e) {
		e.preventDefault();
		this.props.logoutUser();
	}

	render() {
		const { isAuthenticated, user } = this.props.auth;
		const authLinks = (
			<ul className="navbar-nav ml-auto">
				<li className="nav-item">
					<a
						href=""
						onClick={this.onLogoutClick.bind(this)}
						className="nav-link">
						<img
							className="rounded-circle"
							src={user.avatar}
							alt={user.name}
							style={{ width: "25px", marginRight: "5px" }}
							title="You must have a Gravatar connected to your email to display an image"
						/>{" "}
						Logout
					</a>
				</li>
			</ul>
		);

		const guestLinks = (
			<ul className="navbar-nav ml-auto">
				<li className="nav-item">
					<Link className="nav-link" to="/register">
						Sign Up
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/login">
						Login
					</Link>
				</li>
			</ul>
		);

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
											{isAuthenticated ? authLinks : guestLinks}
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

Navbar.propTypes = {
	logoutUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Navbar);
