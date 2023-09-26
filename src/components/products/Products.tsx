'use client'
import React from 'react';
import {useProducts} from "@/hooks/useProducts";
import {Product} from "@/components/products/product/product";

export const Products = () => {
    const {products} = useProducts()
    return (<div>
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

