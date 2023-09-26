'use client'

import {useQuery} from "@tanstack/react-query";
import {ProductService} from "@/service/product-service";

export const useProduct = (id?:number) => {
    const {
        data: product,
        isLoading,
        isError
    } = useQuery(
        ['get product', id],
        () => ProductService.getProduct(id),
        {
            select: ({data})=>data,
            enabled: !!id
        })
    return {product, isLoading, isError}
}
