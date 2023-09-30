import React, { useState } from 'react';

import { Button } from 'antd';

import s from './products.module.css';

import { AddProductForm } from '@/components/addProductForm/addProductForm';
import { Product } from '@/components/products/product/product';
import { Spinner } from '@/components/ui/spiner /spinner';
import { useProducts } from '@/hooks/useProducts';

export const Products = () => {
  const [open, setOpen] = useState(false);
  const { products, isLoading } = useProducts();

  const onClickOpen = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div>
        <Button type="primary" className={s.button} onClick={onClickOpen}>
          Create product
        </Button>
        {isLoading && <Spinner />}
      </div>

      {open && <AddProductForm />}
      {products?.map(el => (
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
