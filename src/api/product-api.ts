import baseApi from '@/api/base-api';
import {
  AddProductResponseType,
  AddProductType,
  DeleteProductResponseType,
  EditProductResponseType,
  EditProductType,
  ResponseProductsType,
} from '@/utils/types';

export const ProductApi = {
  async getProducts() {
    const { data } = await baseApi.get<ResponseProductsType[]>('/products');

    return data;
  },
  async getProduct(id?: number) {
    const { data } = await baseApi.get<ResponseProductsType>(`/products/${id}`);

    return data;
  },
  async addProduct(newData: AddProductType) {
    const { data } = await baseApi.post<AddProductResponseType>('/products', newData, {
      headers: { 'Content-Type': 'application/json' },
    });

    return data;
  },
  async editProduct(id: number, newData: EditProductType) {
    const { data } = await baseApi.put<EditProductResponseType>(
      `/products/${id}`,
      newData,
    );

    return data;
  },
  async deleteProduct(id: number) {
    const { data } = await baseApi.delete<DeleteProductResponseType>(`/products/${id}`);

    return data;
  },
};
