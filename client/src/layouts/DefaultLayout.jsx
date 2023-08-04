import React from "react";
import Header from "../components/common/Header";
import { Outlet } from "react-router";

const DefaultLayout = () => {
	return (
		<div className="mx-auto max-w-screen-lg">
			<Header />
			<Outlet />
		</div>
	);
};

export default DefaultLayout;
