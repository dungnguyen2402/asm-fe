import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import http from "../../utils/http"

const initialState = {
	products: [],
	product: null,
	loading: false
}

export const getAllProduct = createAsyncThunk("product/getAllProduct", async (payload) => {
	const { data } = await http.get("/product")
	return data.data
})

export const getSingleProduct = createAsyncThunk('product/getSingleProduct', async (payload) => {
	const { data } = await http.get(`/product/${payload}`)
	return data.data
})

export const deleteProduct = createAsyncThunk('product/deleteProduct', async (payload) => {
	await http.delete(`/product/${payload}`)
	return payload
})

export const createProduct = createAsyncThunk("product/createProduct", async (payload) => {
	const { data } = await http.post(`/product`, payload, {
		headers: {
			'Content-Type': "multipart/form-data"
		}
	})

	return data.data
})

export const updateProduct = createAsyncThunk("product/updateProduct", async (payload) => {
	const { id, product } = payload
	const { data } = await http.put(`/product/${id}`, product, {
		headers: {
			'Content-Type': "multipart/form-data"
		}
	})

	return payload
})


const product = createSlice({
	name: 'product',
	initialState,
	extraReducers: (builder) => {
		// Lấy tất cả sản phẩm
		builder.addCase(getAllProduct.pending, (state, action) => {
			state.loading = true
		})
		builder.addCase(getAllProduct.fulfilled, (state, action) => {
			state.loading = false
			state.products = action.payload
		})
		builder.addCase(getAllProduct.rejected, (state, action) => {
			state.loading = false
			state.products = []
		})

		// Lấy 1 sản phẩm
		builder.addCase(getSingleProduct.pending, (state, action) => {
			state.loading = true
		})
		builder.addCase(getSingleProduct.fulfilled, (state, action) => {
			state.loading = false
			state.product = action.payload
		})
		builder.addCase(getSingleProduct.rejected, (state, action) => {
			state.loading = false
			state.product = []
		})

		// Xóa sản phẩm
		builder.addCase(deleteProduct.pending, (state, action) => {
			state.loading = true
		})
		builder.addCase(deleteProduct.fulfilled, (state, action) => {
			state.loading = false
			state.products = state.products.filter((item) => item._id != action.payload)
		})
		builder.addCase(deleteProduct.rejected, (state, action) => {
			state.loading = false
		})

		// Tạo sản phẩm
		builder.addCase(createProduct.pending, (state, action) => {
			state.loading = true
		})
		builder.addCase(createProduct.fulfilled, (state, action) => {
			state.loading = false
			state.products = [
				action?.payload,
				...state.products,
			]
		})
		builder.addCase(createProduct.rejected, (state, action) => {
			state.loading = false
		})


		// Cập nhật sản phẩm
		builder.addCase(updateProduct.pending, (state, action) => {
			state.loading = true
		})
		builder.addCase(updateProduct.fulfilled, (state, action) => {
			state.loading = false
			// state.products = state.products.map((item) => item._id == action.payload.id ? action.payload. : item)
		})
		builder.addCase(updateProduct.rejected, (state, action) => {
			state.loading = false
		})
	}
})


export default product.reducer