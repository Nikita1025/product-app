import React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Form, Input } from 'antd';
import { Controller, useForm } from 'react-hook-form';

import s from './addProductForm.module.css';

import { addProductSchema } from '@/common/schemas/add-product-schema';
import { Spinner } from '@/components/ui/spiner /spinner';
import { usePostProduct } from '@/hooks/usePostProduct';
import { AddProductType } from '@/utils/types';

export const AddProductForm = () => {
  const { mutate, isLoading } = usePostProduct();
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<AddProductType>({
    resolver: zodResolver(addProductSchema()),
  });

  const onSubmit = handleSubmit((data: AddProductType) => {
    mutate(data);
    reset();
  });

  return (
    <>
      {isLoading && <Spinner />}
      <Form onFinish={onSubmit} className={s.container}>
        <Controller
          name="title"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <div className={s.input_container}>
              <Input placeholder="Title" {...field} />
              {errors.title && <span className={s.error}>{errors.title.message}</span>}
            </div>
          )}
        />
        <Controller
          name="price"
          control={control}
          render={({ field }) => (
            <div className={s.input_container}>
              <Input placeholder="Price" type="number" {...field} />
              {errors.price && <span className={s.error}>{errors.price.message}</span>}
            </div>
          )}
        />
        <Controller
          name="category"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <div className={s.input_container}>
              <Input placeholder="Category" {...field} />
              {errors.category && (
                <span className={s.error}>{errors.category.message}</span>
              )}
            </div>
          )}
        />
        <Controller
          name="description"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <div className={s.input_container}>
              <Input placeholder="Description" {...field} />
              {errors.description && (
                <span className={s.error}>{errors.description.message}</span>
              )}
            </div>
          )}
        />
        <Controller
          name="image"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <div className={s.input_container}>
              <Input placeholder="Image" {...field} />
              {errors.image && <span className={s.error}>{errors.image.message}</span>}
            </div>
          )}
        />
        <Button type="primary" htmlType="submit">
          Send
        </Button>
      </Form>
    </>
  );
};
