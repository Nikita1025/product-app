'use client'
import {useRouter} from "next/router";
import {useProduct} from "@/hooks/useProduct";

export const ProductPage = () => {
    const {query} = useRouter()

    const {product}=useProduct(Number(query?.id))
    return (
        <div>
            {product?.title}
        </div>
    );
};

