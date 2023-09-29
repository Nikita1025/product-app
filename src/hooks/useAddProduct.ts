import { useMutation, useQueryClient } from '@tanstack/react-query';

import { ProductApi } from '@/api/product-api';
import { AddProductType } from '@/utils/types';
export const useAddProduct = () => {
  const queryClient = useQueryClient();

  return useMutation((data: AddProductType) => ProductApi.addProduct(data), {
    onSuccess: data => {
      queryClient.setQueryData(['get products'], (oldData: any) => {
        return {
          ...oldData,
          data: [...oldData.data, data.data],
        };
      });
    },
  });
};
