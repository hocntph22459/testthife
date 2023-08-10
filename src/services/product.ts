import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import Iproduct from "../type/product"
export const productAPI = createApi({
    reducerPath: "product",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000/",

    }),
    tagTypes: ["product"],
    endpoints: (buidler) => ({
        getproducts: buidler.query<Iproduct[], void>({
            query: () => `products`,
            providesTags: ["product"]
        }),
        getproductByid: buidler.query<Iproduct, number>({
            query: (id) => `products/${id}`
        }),
        createProduct: buidler.mutation<Iproduct, Iproduct>({
            query: (product) => {
                return {
                    url: "products",
                    method: "POST",
                    body: product
                }
            },
            invalidatesTags: ["product"]
        }),
        Updateproduct: buidler.mutation<Iproduct, Iproduct>({
            query: (product) => {
                return {
                    url: `products/${product.id}`,
                    method: "PUT",
                    body: product
                }
            },
            invalidatesTags: ["product"]
        }),
        removeProduct: buidler.mutation<number, number>({
            query: (id) => {
                return {
                    url: `products/${id}`,
                    method: "DELETE",
                }
            },
            invalidatesTags: ["product"]
        })
    })
})

export const { useGetproductsQuery, useGetproductByidQuery, useCreateProductMutation, useUpdateproductMutation, useRemoveProductMutation } = productAPI