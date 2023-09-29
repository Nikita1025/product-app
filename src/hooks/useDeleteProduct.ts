import { useMutation, useQueryClient } from '@tanstack/react-query';

import { ProductApi } from '@/api/product-api';

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation((id: number) => ProductApi.deleteProduct(id), {
    onSuccess(data) {
      queryClient.setQueryData(['get products'], (oldData: any) => {
        oldData.filter((el: any) => el.id !== data.data.id);
      });
    },
  });
};
