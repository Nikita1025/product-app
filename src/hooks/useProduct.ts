import { useQuery } from '@tanstack/react-query';

import { ProductApi } from '@/api';

export const useProduct = (id?: number) => {
  const {
    data: product,
    isLoading,
    isError,
  } = useQuery(['get product', id], () => ProductApi.getProduct(id), {
    enabled: !!id,
  });

  return { product, isLoading, isError };
};
