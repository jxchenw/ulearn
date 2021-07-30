import React, { Component } from "react";
import Search from "./Search";
import Login from "./Login";
import "bootstrap/dist/css/bootstrap.css";
import logo from "../static/img/coursera.svg";

const Navbar = (props) => {
	let styles = {
		lineHight: 3.2,
	};

	return (
		<div className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					<img src={logo} alt="" width="120" />
				</a>
				<div className="navbar-nav">
					<a className="nav-link active" aria-current="page" href="#">
						<button
							className="btn btn-primary dropdown-toggle"
							type="button"
						>
							Explore
						</button>
					</a>
				</div>
				<form className="d-flex">
					<div className="p-2">
						<Search />
					</div>
					<div className="p-2">
						<Login
							isLogin={props.isLogin}
							isModalOpen={props.isModalOpen}
							triggerModal={props.triggerModal}
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Navbar;
