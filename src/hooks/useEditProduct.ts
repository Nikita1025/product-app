import {useMutation, useQueryClient} from "@tanstack/react-query";
import {ProductService} from "@/service/product-service";
import {
    AddProductResponseType,
    AddProductType,
    EditProductRequestType,
    EditProductResponseType,
    EditProductType, ResponseProductsType
} from "@/utils/types";
import {useRouter} from "next/router";

export const useEditProduct = () => {
    const queryClient = useQueryClient()

    return useMutation(
        (data: EditProductRequestType) => ProductService.editProduct(
            {requestData: data.requestData, id: data.id}), {
            // onSuccess: (data) => {
            //     queryClient.invalidateQueries(['get product', {id: data.data.id}])
            // }
        })
}
