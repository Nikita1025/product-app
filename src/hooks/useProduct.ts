import { useQuery } from '@tanstack/react-query';

import { ProductApi } from '@/api/product-api';

export const useProduct = (id?: number) => {
  const {
    data: product,
    isLoading,
    isError,
  } = useQuery(['get product', id], () => ProductApi.getProduct(id), {
    select: ({ data }) => data,
    enabled: !!id,
  });

  return { product, isLoading, isError };
};
