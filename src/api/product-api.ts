import { AxiosResponse } from 'axios';

import baseApi from '@/api/base-api';
import {
  AddProductResponseType,
  AddProductType,
  EditProductResponseType,
  EditProductType,
  ResponseProductsType,
} from '@/utils/types';

export const ProductApi = {
  async getProducts() {
    const { data } =
      await baseApi.get<AxiosResponse<ResponseProductsType[]>>('/products');

    return data;
  },
  async getProduct(id?: number) {
    return baseApi.get<ResponseProductsType>(`/products/${id}`);
  },
  async addProduct(data: AddProductType) {
    return baseApi.post<AddProductResponseType>('/products', data, {
      headers: { 'Content-Type': 'application/json' },
    });
  },
  async editProduct(id: number, newData: EditProductType) {
    const { data } = await baseApi.put<AxiosResponse<EditProductResponseType>>(
      `/products/${id}`,
      newData,
    );

    return data;
  },
  async deleteProduct(id: number) {
    return baseApi.delete(`/products/${id}`);
  },
};
