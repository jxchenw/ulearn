import React, { Component } from "react";
import Modal from "./Modal";

class Login extends Component {
	style = {
		textAlign: "right",
	};

	render() {
		const isLogin = this.props.isLogin;
		let button;
		if (isLogin) {
			button = <span>James</span>;
		} else {
			button = (
				<div>
					<a className="m-2" href="#">
						Login
					</a>
					<button
						type="button"
						className="btn btn-primary"
						onClick={this.props.triggerModal}
					>
						Join for Free
					</button>
				</div>
			);
		}
		return (
			<div style={this.style}>
				<Modal
					isModalOpen={this.props.isModalOpen}
					triggerModal={this.props.triggerModal}
				/>
				{button}
			</div>
		);
	}
}

export default Login;
