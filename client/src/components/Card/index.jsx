import React from "react";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
	return (
		<article className="relative">
			<Link to={product?.slug}>
				<div className="aspect-square overflow-hidden">
					<img
						className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125 rounded-s-md"
						src={"http://localhost:8080" + product?.images[0]?.path}
						alt=""
					/>
				</div>

				<div className="mt-4 flex items-start justify-between">
					<div className="">
						<h3 className="text-xs font-semibold sm:text-sm md:text-base">
							<a
								href="#"
								title=""
								className=""
							>
								{product?.name}
								<span
									className="absolute"
									aria-hidden="true"
								></span>
							</a>
						</h3>
						<div className="mt-2 flex items-center">
							<svg
								className="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
									className=""
								></path>
							</svg>
							<svg
								className="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
									className=""
								></path>
							</svg>
							<svg
								className="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
									className=""
								></path>
							</svg>
							<svg
								className="block h-3 w-3 align-middle text-pink-600 sm:h-4 sm:w-4"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
									className=""
								></path>
							</svg>
							<svg
								className="block h-3 w-3 align-middle text-gray-400 sm:h-4 sm:w-4"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
									className=""
								></path>
							</svg>
						</div>
					</div>

					<div className="text-right">
						<del className="mt-px text-xs font-semibold text-gray-600 sm:text-sm">
							{" "}
							{product?.price} VNĐ{" "}
						</del>
						<p className="text-xs font-normal sm:text-sm md:text-base">{product?.price} VNĐ</p>
					</div>
				</div>
			</Link>
		</article>
	);
};

export default Card;
