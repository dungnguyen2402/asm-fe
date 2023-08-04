import React, { useEffect } from "react";
import Card from "../../components/Card";
import { useSelector, useDispatch } from "react-redux";
import { getAllProduct } from "../../store/slices/product";

const HomeView = () => {
	const dispatch = useDispatch();
	const { products } = useSelector((state) => state.product);

	useEffect(() => {
		dispatch(getAllProduct());
	}, []);

	return (
		<main className="grid grid-cols-2 gap-x-6 gap-y-10 px-2 pb-20 sm:grid-cols-3 sm:px-8 lg:mt-16 lg:grid-cols-4 lg:gap-x-4 lg:px-0">
			{products?.map((product) => {
				return <Card product={product} />;
			})}
		</main>
	);
};

export default HomeView;
