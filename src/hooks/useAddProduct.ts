import {useMutation, useQueryClient} from "@tanstack/react-query";
import {ProductService} from "@/service/product-service";
import {AddProductType} from "@/utils/types";
import {useRouter} from "next/router";
export const useAddProduct = () => {
    const {push}=useRouter()
    return useMutation(
        (data: AddProductType) => ProductService.addProduct(data),{
            onSuccess:()=>{
                push('/products')
            }
        })
}

