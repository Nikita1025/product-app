import React, { useState } from 'react';

import { useRouter } from 'next/router';

import s from './product.module.css';

import DeleteIcon from '@/assets/icon/delete-icon';
import EditIcon from '@/assets/icon/edit-icon';
import { EditProductForm } from '@/components/editProductForm';
import { Spinner } from '@/components/ui/spiner ';
import { useDeleteProduct } from '@/hooks';

type ProductType = {
  image: string;
  price: number;
  title: string;
  category: string;
  description: string;
  id: number;
};
export const Product = ({
  category,
  id,
  image,
  price,
  title,
  description,
}: ProductType) => {
  const router = useRouter();
  const { mutate, isLoading } = useDeleteProduct(id);
  const [editMode, setEditMode] = useState(false);
  const onClickEditMode = () => {
    setEditMode(!editMode);
  };
  const onClickDelete = () => {
    mutate();
  };

  return (
    <>
      {isLoading && <Spinner />}
      <div className={s.container}>
        {editMode ? (
          <EditProductForm
            id={id}
            title={title}
            description={description}
            image={image}
            price={price}
            category={category}
            setEditMode={setEditMode}
          />
        ) : (
          <>
            <div className={s.block_info}>
              <img src={image} alt="image product" className={s.image} />
              <div className={s.container_info}>
                <div className={s.info}>
                  <span
                    onClick={() => router.push(`/products/${id}`)}
                    className={s.title}
                  >
                    {title}
                  </span>
                  <span className={s.category}>{category}</span>
                  <span className={s.price}>${price}</span>
                </div>
              </div>
            </div>
            <div className={s.icons}>
              <EditIcon className={s.icon} onClick={onClickEditMode} />
              <DeleteIcon className={s.icon} onClick={onClickDelete} />
            </div>
          </>
        )}
      </div>
    </>
  );
};
