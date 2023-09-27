import {useProduct} from "@/hooks/useProduct";
import {useRouter} from "next/router";
import s from './productPage.module.css'
import VectorIcon from "@/assets/icon/vector-icon";
export const ProductPage = () => {
    const {query, push} = useRouter()
    const {product} = useProduct(Number(query?.id))

    return (
        <div>
            <div className={s.back_container} onClick={() => push('/products')}>
                <VectorIcon/>
                <span className={s.back}>Back</span>
            </div>
            <div className={s.container}>
                <img src={product?.image} className={s.image} alt='image product'/>
                <div className={s.container_info}>
                    <span className={s.title}>{product?.title}</span>
                    <span className={s.category}>{product?.category}</span>
                    <span className={s.price}>${product?.price}</span>
                    <span className={s.description}>{product?.description}</span>
                </div>
            </div>
        </div>

    );
};

