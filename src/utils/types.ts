export type ResponseProductsType = {
    id: number
    image: string
    price: number
    title: string
    category: string
    description: string
    rating: RatingType
}

type RatingType = {
    rate: number
    count: number
}

export type AddProductType = {
    title: string
    price: number
    category: string
    description: string
    image: string

}
export type EditProductType = {
    title: string
    price: number
    category: string
    description: string
    image: string

}
export type EditProductResponseType = {
    title: string
    price: number
    category: string
    description: string
    image: string
    id:number
}
export type EditProductRequestType={
    requestData: EditProductType
    id: number
}
export type AddProductResponseType = {
    title: string
    price: number
    category: string
    description: string
    image: string
    id:number
}
export type LoginFormType={
    username: string
    password: string
}
export type LoginResponseType={
    token: string
}
