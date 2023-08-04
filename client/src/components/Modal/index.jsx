import React from "react";

const Modal = ({ open, children, title, handleClose }) => {
	return (
		<div
			style={{
				display: open ? "block" : "none",
			}}
			className="w-full h-full fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
		>
			<div className="w-full h-full flex items-center justify-center ">
				<div class="w-[600px] rounded-lg shadow-lg bg-white my-3 ">
					<div class="flex justify-between border-b border-gray-100 px-5 py-4 z-30">
						<div>
							<h1 class="ml-2 font-bold text-gray-700 text-lg">{title}</h1>
						</div>
						<div>
							<button onClick={handleClose}>❌</button>
						</div>
					</div>

					<div class="px-10 py-5 text-gray-600">{children}</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
