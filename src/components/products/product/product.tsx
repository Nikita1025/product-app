import s from './product.module.css'
import {useRouter} from "next/router";
import Link from "next/link";

type ProductType = {
    image: string
    price: number
    title: string
    category: string
    description: string
    id:number
}
export const Product = ({category, id, image, price, title, description}: ProductType) => {

    return (
        <div className={s.container}>
            <img src={image} alt='image product' className={s.image}/>
            <div className={s.container_info}>
                <Link href={`/product/${id}`} className={s.title}>{title}</Link>
                <span className={s.category}>{category}</span>

                <span className={s.price}>${price}</span>
                <span className={s.description}>{description}</span>
            </div>

        </div>
    );
};
