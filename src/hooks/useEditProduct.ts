import { useMutation } from '@tanstack/react-query';

import { ProductApi } from '@/api/product-api';
import { EditProductRequestType } from '@/utils/types';

export const useEditProduct = () => {
  // const queryClient = useQueryClient();

  return useMutation(
    (data: EditProductRequestType) =>
      ProductApi.editProduct({ requestData: data.requestData, id: data.id }),
    {
      // onSuccess: (data) => {
      //     queryClient.invalidateQueries(['get product', {id: data.data.id}])
      // }
    },
  );
};
