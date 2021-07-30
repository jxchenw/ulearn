import React, { Component } from "react";

const Banner = (props) => {
	return (
		<div>
			<h1>Learn Without Limits</h1>
			<p>
				Build skills with courses, certificates, and degrees online from
				world-class universities and companies.
			</p>
			<button
				type="button"
				className="btn btn-primary btn-lg"
				onClick={props.triggerModal}
			>
				Join for Free
			</button>
		</div>
	);
};

export default Banner;
