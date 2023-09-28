import {useProducts} from "@/hooks/useProducts";
import {Product} from "@/components/products/product/product";
import {AddProductForm} from "@/components/addProductForm/addProductForm";
import React, {useState} from "react";
import {Button, Spin} from "antd";
import {antIcon} from "@/utils/antIcon";

export const Products = () => {
    const [open, setOpen]=useState(false)
    const {products} = useProducts()
    const onClickOpen =()=>{
        setOpen(!open)
    }
    return (<div >
            {/*{isLoading && <Spin indicator={antIcon} />}*/}

            <Button type='primary' onClick={onClickOpen}>Create product</Button>
            {open && <AddProductForm/>}
            {products?.map(el => (
                <div key={el.id}>
                    <Product image={el.image}
                             price={el.price}
                             title={el.title}
                             category={el.category}
                             description={el.description}
                             id={el.id}
                    />
                </div>
            ))}

        </div>
    );
};

