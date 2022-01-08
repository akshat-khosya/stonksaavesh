import React, { useState } from "react";

const SnackBar = ({ text, delayTime = 5000 }) => {
	const [open, setOpen] = useState(true);
	setTimeout(() => {
		setOpen(false);
	}, delayTime);
	return (
		<>
			{open && (
				<div
					className="snackbar"
					data-aos="fade-up"
					data-aos-duration="250"
				>
					<span className="snackbar-text">{text}</span>
				</div>
			)}
		</>
	);
};

export default SnackBar;
