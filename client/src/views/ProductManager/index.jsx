import React, { useEffect, useState } from "react";
import Modal from "../../components/Modal";
import moment from "moment/moment";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import {
	getSingleProduct,
	getAllProduct,
	deleteProduct,
	updateProduct,
	createProduct,
} from "../../store/slices/product";
import { useDispatch, useSelector } from "react-redux";

const validationSchema = Joi.object({
	name: Joi.string().trim().required(),
	price: Joi.string().trim().required(),
	description: Joi.string().trim().required(),
	files: Joi.array().default([]),
});

const ProductManager = () => {
	const [slug, setSlug] = useState("");
	const [files, setFiles] = useState([]);
	const [open, setOpen] = useState({
		show: false,
		type: 1,
	});

	const dispatch = useDispatch();
	const { products, product } = useSelector((state) => state.product);

	const { register, handleSubmit, setValue } = useForm({
		resolver: async (data) => {
			const { error, value: values } = validationSchema.validate(data, {
				abortEarly: false,
			});

			return {
				values: error ? {} : values,
				errors: error
					? error.details.reduce((previous, currentError) => {
							return {
								...previous,
								[currentError.path[0]]: currentError,
							};
					  }, {})
					: {},
			};
		},
	});

	useEffect(() => {
		if (product) {
			const { name, price, description } = product;
			setValue("name", name);
			setValue("price", price);
			setValue("description", description);
		}
	}, [product]);

	useEffect(() => {
		dispatch(getAllProduct());
	}, []);

	const handleChangeFiles = (e) => {
		setFiles((prev) => [...prev, ...e.target.files]);
	};

	const handleFormData = (data) => {
		const formData = new FormData();

		if (open.type == 1) {
			for (let i = 0; i < files.length; i++) {
				formData.append("files", files[i]);
			}
		} else {
			if (files.length > 1) {
				for (let i = 0; i < files.length; i++) {
					formData.append("files", files[i]);
				}
			}
		}

		formData.append("payload", JSON.stringify(data));
		return formData;
	};

	const handleClose = () => {
		setOpen({
			...open,
			show: false,
		});
		setSlug(null);
	};

	const onSubmit = (data) => {
		if (open.type == 1) {
			const { files, ...arg } = data;
			const formData = handleFormData(arg);
			dispatch(createProduct(formData));
			handleClose();
		} else {
			const { files, ...arg } = data;
			const formData = handleFormData(arg);
			dispatch(
				updateProduct({
					id: product._id,
					product: formData,
				})
			);
			handleClose();
		}
	};

	const handleRemove = (id) => {
		const check = confirm("Ban co chac muon xoa khong");
		if (check) dispatch(deleteProduct(id));
	};

	return (
		<div>
			<div className="flex justify-end">
				<button
					className="px-4 py-2 my-4 bg-green-600 rounded text-white"
					onClick={() =>
						setOpen({
							...open,
							show: true,
						})
					}
				>
					+ Thêm mới
				</button>
			</div>
			<table className="min-w-full border-collapse border-spacing-y-2 border-spacing-x-2">
				<thead className="hidden border-b lg:table-header-group">
					<tr className="">
						<td className="whitespace-normal py-4 text-sm font-semibold text-gray-800 sm:px-3">#</td>
						<td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">Sản Phẩm</td>
						<td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">Giá</td>
						<td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">Mô Tả</td>
						<td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">Ngày Tạo</td>
						<td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">
							Ngày Cập Nhật
						</td>
						<td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">Action</td>
					</tr>
				</thead>

				<tbody className="bg-white lg:border-gray-300">
					{products?.map((product, index) => {
						return (
							<tr
								className=""
								key={index}
							>
								<td className="whitespace-no-wrap py-4 text-left text-sm text-gray-600 sm:px-3 lg:text-left">
									{index + 1}
								</td>

								<td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">
									{product?.name}
								</td>

								<td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">
									{product?.price} VND
								</td>

								<td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">
									{product?.description}
								</td>
								<td className="whitespace-no-wrap hidden py-4 text-left text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">
									{moment(product?.created_at).format("DD/MM/YYYY hh:mm:ss")}
								</td>
								<td className="whitespace-no-wrap hidden py-4 text-left text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">
									{moment(product?.updated_at).format("DD/MM/YYYY hh:mm:ss")}
								</td>
								<td className="whitespace-no-wrap hidden py-4 text-left text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">
									<div className="flex gap-4">
										<button
											className="px-4 py-2 bg-red-500 rounded text-white"
											onClick={() => handleRemove(product?._id)}
										>
											Xóa
										</button>
										<button
											className="px-4 py-2 bg-blue-400 rounded text-white"
											onClick={() => {
												setOpen({
													...open,
													type: 2,
													show: true,
												});
												dispatch(getSingleProduct(product?.slug));
											}}
										>
											Sửa
										</button>
									</div>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			<Modal
				title={open.type == 1 ? "Thêm mới sản phẩm" : "Cập nhật sản phẩm"}
				open={open.show}
				handleClose={handleClose}
			>
				<form
					className="py-3"
					onSubmit={handleSubmit(onSubmit)}
				>
					<div className="mb-4">
						<label
							for="name"
							className="block mb-2 text-sm text-gray-600"
						>
							Sản Phẩm
						</label>
						<input
							type="text"
							id="name"
							name="name"
							className="w-full px-4 py-3 border rounded "
							{...register("name")}
						/>
					</div>
					<div className="mb-4">
						<label
							for="price"
							className="block mb-2 text-sm text-gray-600"
						>
							Giá
						</label>
						<input
							type="text"
							id="price"
							name="price"
							className="w-full px-4 py-3 border rounded "
							{...register("price")}
						/>
					</div>
					<div className="mb-4">
						<label
							for="description"
							className="block mb-2 text-sm text-gray-600"
						>
							Mô tả
						</label>
						<input
							type="text"
							id="description"
							name="description"
							className="w-full px-4 py-3 border rounded "
							{...register("description")}
						/>
					</div>
					<div className="mb-4">
						<label
							for="files"
							className="block mb-2 text-sm text-gray-600"
						>
							File
						</label>
						<input
							type="file"
							id="files"
							name="files"
							multiple
							accept=".jpg, .png"
							onChange={handleChangeFiles}
							className="w-full px-4 py-3 border rounded "
						/>
					</div>

					<button
						type="submit"
						className="w-full px-4 py-3 bg-green-700 text-white rounded font-semibold"
					>
						{open.type == 1 ? "Tạo" : "Cập Nhật"}
					</button>
				</form>
			</Modal>
		</div>
	);
};

export default ProductManager;
