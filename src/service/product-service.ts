import axios from "axios";
import {
    AddProductResponseType,
    AddProductType, EditProductRequestType,
    EditProductResponseType,
    ResponseProductsType
} from "@/utils/types";

const API_URL = 'https://fakestoreapi.com/'
axios.defaults.baseURL = API_URL
export const ProductService = {
    async getProducts() {
        return axios.get<ResponseProductsType[]>('products')
    },
    async getProduct(id?: number) {
        return axios.get<ResponseProductsType>(`products/${id}`)
    },
    async addProduct(data: AddProductType) {
        return axios.post<AddProductResponseType>('products', data, {headers: {"Content-Type": "application/json"}})
    },
    async editProduct(requestData: EditProductRequestType) {
        return axios.put<EditProductResponseType>(`products/${requestData.id}`, requestData.requestData)
    },
    async deleteProduct(id: number) {
        return axios.delete(`products/${id}`)
    }
}
