import { useMutation, useQueryClient } from '@tanstack/react-query';

import { ProductApi } from '@/api/product-api';
import {
  EditProductResponseType,
  EditProductType,
  ResponseProductsType,
} from '@/utils/types';

export const usePutProduct = (id: number) => {
  const queryClient = useQueryClient();

  return useMutation(
    ['edit'],
    (data: EditProductType) => ProductApi.editProduct(id, data),
    {
      onSuccess(newData: EditProductResponseType) {
        queryClient.setQueryData(
          ['get products'],
          (oldData: ResponseProductsType[] | undefined) => {
            return oldData?.map(product =>
              product.id === id ? { ...product, ...newData } : product,
            );
          },
        );
      },
    },
  );
};
