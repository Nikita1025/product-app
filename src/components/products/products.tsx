import React, { useState } from 'react';

import { Button } from 'antd';

import { AddProductForm } from '@/components/addProductForm/addProductForm';
import { Product } from '@/components/products/product/product';
import { useProducts } from '@/hooks/useProducts';
import { ResponseProductsType } from '@/utils/types';

export const Products = () => {
  const [open, setOpen] = useState(false);
  const { products } = useProducts();
  const onClickOpen = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Button type="primary" onClick={onClickOpen}>
        Create product
      </Button>
      {open && <AddProductForm />}
      {products?.map((el: ResponseProductsType) => (
        <div key={el.id}>
          <Product
            image={el.image}
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
