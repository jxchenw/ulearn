import React, { Component } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import "../static/css/styles.css";

class App extends Component {
	state = {
		isLogin: false,
		isModalOpen: false,
	};

	triggerModal = () => {
		console.log("trigger");
		this.setState({ isModalOpen: !this.state.isModalOpen });
	};

	render() {
		return (
			<div>
				<Navbar
					isLogin={this.state.isLogin}
					isModalOpen={this.state.isModalOpen}
					triggerModal={this.triggerModal}
				/>
				<Banner
					isModalOpen={this.state.isModalOpen}
					triggerModal={this.triggerModal}
				/>
			</div>
		);
	}
}

export default App;
