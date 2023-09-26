export type ResponseProductsType={
    id:number
    image: string
    price: number
    title: string
    category: string
    description:string
    rating: RatingType
}

type RatingType={
    rate:number
    count: number
}
