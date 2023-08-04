import React from "react";
import { Outlet } from "react-router";

const AdminLayout = () => {
	return (
		<>
			<div class="mx-auto max-w-screen-xl bg-white">
				<h1 class="mt-20 mb-10 ml-5 text-2xl font-bold text-gray-900">Admin</h1>
				<div class="bg-white py-2 px-3">
					<nav class="flex flex-wrap gap-4">
						<a
							href="#"
							class="inline-flex whitespace-nowrap border-b-2 border-transparent py-2 px-3 text-sm font-medium text-gray-600 transition-all duration-200 ease-in-out hover:border-b-purple-600 hover:text-purple-600"
						>
							Sản Phẩm
						</a>
						<a
							href="#"
							class="inline-flex whitespace-nowrap border-b-2 border-transparent py-2 px-3 text-sm font-medium text-gray-600 transition-all duration-200 ease-in-out hover:border-b-purple-600 hover:text-purple-600"
						>
							Đơn Hàng
						</a>
					</nav>
				</div>
			</div>
			<div class="w-screen bg-gray-50">
				<div class="mx-auto max-w-screen-xl px-2 py-10">
					<div class="mt-4 overflow-hidden rounded-xl bg-white px-6 shadow lg:px-4">
						<Outlet />
					</div>
				</div>
			</div>
		</>
	);
};

export default AdminLayout;
