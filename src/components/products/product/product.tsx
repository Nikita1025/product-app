import s from './product.module.css'
import {useRouter} from "next/router";

type ProductType = {
    image: string
    price: number
    title: string
    category: string
    description: string
    id:number
}
export const Product = ({category, id, image, price, title, description}: ProductType) => {
    const router=useRouter()
    return (
        <div className={s.container}>
            <img src={image} alt='image product' className={s.image}/>
            <div className={s.container_info}>
                <span onClick={() => router.push(`/products/${id}`)} className={s.title}>{title}</span>
                <span className={s.category}>{category}</span>
                <span className={s.price}>${price}</span>
            </div>

        </div>
    );
};
