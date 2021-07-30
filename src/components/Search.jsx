import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";

class Search extends Component {
	state = {
		keyword: "",
	};

	handleSearch = () => {
		console.log(this.state.keyword);
	};

	handleChange = (e) => {
		this.setState({ keyword: e.target.value });
	};

	render() {
		return (
			<div className="input-group mb-3">
				<input
					type="text"
					className="form-control"
					placeholder="What do you want to learn?"
					value={this.state.keyword}
					onChange={this.handleChange}
				/>
				<button
					className="btn btn-outline-primary"
					type="button"
					onClick={this.handleSearch}
				>
					<i className="fa fa-search" aria-hidden="true"></i>
				</button>
			</div>
		);
	}
}

export default Search;
