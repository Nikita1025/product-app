import axios from "axios";
import {ResponseProductsType} from "@/utils/types";

const API_URL = 'https://fakestoreapi.com/'
axios.defaults.baseURL = API_URL
export const ProductService = {
    async getProducts() {
        return axios.get<ResponseProductsType[]>('products')
    },
    async getProduct(id?:number){
        return axios.get<ResponseProductsType>(`products/${id}`)
    }
}
