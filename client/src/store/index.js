import { configureStore } from '@reduxjs/toolkit';
import product from './slices/product';

export const store = configureStore({
	reducer: {
		product
	},
});
