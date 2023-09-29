import baseApi from '@/api/base-api';
import {
  AddProductResponseType,
  AddProductType,
  EditProductRequestType,
  EditProductResponseType,
  ResponseProductsType,
} from '@/utils/types';

export const ProductApi = {
  async getProducts() {
    return baseApi.get<ResponseProductsType[]>('/products');
  },
  async getProduct(id?: number) {
    return baseApi.get<ResponseProductsType>(`/products/${id}`);
  },
  async addProduct(data: AddProductType) {
    return baseApi.post<AddProductResponseType>('/products', data, {
      headers: { 'Content-Type': 'application/json' },
    });
  },
  async editProduct(requestData: EditProductRequestType) {
    return baseApi.put<EditProductResponseType>(
      `/products/${requestData.id}`,
      requestData.requestData,
    );
  },
  async deleteProduct(id: number) {
    return baseApi.delete(`/products/${id}`);
  },
};
