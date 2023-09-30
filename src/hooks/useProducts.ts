import { useQuery } from '@tanstack/react-query';

import { ProductApi } from '@/api';

export const useProducts = () => {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery(['get products'], () => ProductApi.getProducts());

  return { products, isLoading, isError };
};
