import { useMutation, useQueryClient } from '@tanstack/react-query';

import { ProductApi } from '@/api/product-api';
import { EditProductRequestType } from '@/utils/types';

export const useEditProduct = (id: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: EditProductRequestType) =>
      ProductApi.editProduct({
        requestData: data.requestData,
        id: data.id,
      }),
    onSuccess: (newData: any) => queryClient.setQueryData(['get products', id], newData),
  });
};
