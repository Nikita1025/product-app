import {useMutation, useQueryClient} from "@tanstack/react-query";
import {ProductService} from "@/service/product-service";
import {AxiosError, AxiosResponse} from "axios";

export const useDeleteProduct = () => {
    const queryClient = useQueryClient()

    return useMutation(
        (id:number) => ProductService.deleteProduct(id), {
            onSuccess(data) {
                queryClient.setQueryData(['get products'],(oldData:any)=>{
                    oldData.filter((el:any) => el.id !== data.data.id)
                } );
            },
        })
}
