import "../static/css/modal.css";

const Modal = (props) => {
	const showClassName = props.isModalOpen
		? "modal display-block"
		: "modal display-none";

	return (
		<div className={showClassName}>
			<section className="modal-main">
				<div className="modal-header" onClick={props.triggerModal}>
					<i className="fa fa-times-circle" aria-hidden="true"></i>
				</div>
				<div className="modal-body">
					<h2>Sign Up</h2>
					<p>
						Learn on your own time from top universities and
						businesses.
					</p>
					<label>Full Name</label>
					<input type="text" name="name" />
				</div>
			</section>
		</div>
	);
};

export default Modal;
