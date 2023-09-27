

import {useQuery} from "@tanstack/react-query";
import {ProductService} from "@/service/product-service";

export const useProducts = () => {
    const {
        data: products,
        isLoading,
        isError
    } = useQuery(
        ['get products'],
        () => ProductService.getProducts(),
        {
            select: ({data})=>data
        })
    return {products, isLoading, isError}
}
