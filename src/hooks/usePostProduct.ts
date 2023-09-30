import { useMutation, useQueryClient } from '@tanstack/react-query';

import { ProductApi } from '@/api/product-api';
import {
  AddProductResponseType,
  AddProductType,
  ResponseProductsType,
} from '@/utils/types';
export const usePostProduct = () => {
  const queryClient = useQueryClient();

  return useMutation((data: AddProductType) => ProductApi.addProduct(data), {
    onSuccess: (data: AddProductResponseType) => {
      queryClient.setQueryData(
        ['get products'],
        (oldData: ResponseProductsType[] | undefined) =>
          oldData ? [data, ...oldData] : oldData,
      );
    },
  });
};
