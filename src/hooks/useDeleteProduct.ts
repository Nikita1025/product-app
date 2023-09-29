import { useMutation, useQueryClient } from '@tanstack/react-query';

import { ProductApi } from '@/api/product-api';
import { ResponseProductsType } from '@/utils/types';

export const useDeleteProduct = (id: number) => {
  const queryClient = useQueryClient();

  return useMutation(() => ProductApi.deleteProduct(id), {
    onSuccess() {
      queryClient.setQueryData(
        ['get products'],
        (oldData: ResponseProductsType[] | undefined) => {
          return oldData?.filter(product => product.id !== id);
        },
      );
    },
  });
};
