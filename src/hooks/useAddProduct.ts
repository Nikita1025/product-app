import {useMutation, useQueryClient} from "@tanstack/react-query";
import {ProductService} from "@/service/product-service";
import {AddProductResponseType, AddProductType} from "@/utils/types";
import {useRouter} from "next/router";
export const useAddProduct = () => {
    const queryClient = useQueryClient()

    return useMutation(
        (data: AddProductType) => ProductService.addProduct(data),{
            onSuccess:(data)=>{
                queryClient.setQueryData(['get products'], (oldData:any)=>{
                    return{
                        ...oldData,
                        data: [...oldData.data, data.data]
                    }
                });
            }
        })
}

