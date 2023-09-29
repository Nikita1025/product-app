import { useQuery } from '@tanstack/react-query';

import { ProductApi } from '@/api/product-api';

export const useProducts = () => {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery(['get products'], () => ProductApi.getProducts(), {
    select: ({ data }) => data,
  });

  return { products, isLoading, isError };
};
