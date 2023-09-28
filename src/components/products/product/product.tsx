import s from './product.module.css'
import {useRouter} from "next/router";
import EditIcon from "@/assets/icon/edit-icon";
import {useState} from "react";
import {EditProductForm} from "@/components/editProductForm/editProductForm";

type ProductType = {
    image: string
    price: number
    title: string
    category: string
    description: string
    id: number
}
export const Product = ({category, id, image, price, title, description}: ProductType) => {
    const router = useRouter()


    const [editMode, setEditMode] = useState(false)
    const onClickEditMode = () => {
        setEditMode(!editMode)
    }
    return (
        <div className={s.container}>
            {editMode
                ? <EditProductForm id={id}
                                   title={title}
                                   description={description}
                                   image={image}
                                   price={price}
                                   category={category}
                                   setEditMode={setEditMode}
                />
                : <>
                    <img src={image} alt='image product' className={s.image}/>
                    <div className={s.container_info}>
                        <div className={s.info}>
                            <span onClick={() => router.push(`/products/${id}`)} className={s.title}>{title}</span>
                            <span className={s.category}>{category}</span>
                            <span className={s.price}>${price}</span>
                        </div>
                        <div className={s.icons}>
                            <EditIcon onClick={onClickEditMode}/>
                        </div>
                    </div>
                </>
            }
        </div>
    );
};
