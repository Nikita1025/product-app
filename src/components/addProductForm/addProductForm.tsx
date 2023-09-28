import React from 'react';
import {
    Button,
    Form,
    Input,
} from 'antd';
import {Controller, useForm} from "react-hook-form";
import {AddProductType} from "@/utils/types";
import {useAddProduct} from "@/hooks/useAddProduct";
import s from './addProductForm.module.css'

export const AddProductForm = () => {

    const {mutate} = useAddProduct()
    const {
        handleSubmit,
        control,
        reset
    } = useForm<AddProductType>()

    const onSubmit = handleSubmit((data: AddProductType) => {
        mutate(data)
        reset()
    })
    return (
        <Form onFinish={onSubmit} className={s.container}>
            <Controller
                name="title"
                control={control}
                defaultValue=""
                rules={{
                    required: 'Поле "Имя" является обязательным',
                }}
                render={({field}) => <Input placeholder='Title' {...field} />}
            />
            <Controller
                name="price"
                control={control}
                rules={{
                    required: 'Поле "Имя" является обязательным',
                }}
                render={({field}) => <Input  type='number'  placeholder='Price' {...field} />}
            />
            <Controller
                name="category"
                control={control}
                defaultValue=""
                rules={{
                    required: 'Поле "Имя" является обязательным',
                }}
                render={({field}) => <Input placeholder='Category' {...field} />}
            />
            <Controller
                name="description"
                control={control}
                defaultValue=""
                rules={{
                    required: 'Поле "Имя" является обязательным',
                }}
                render={({field}) => <Input placeholder='Description' {...field} />}
            />
            <Controller
                name="image"
                control={control}
                defaultValue=""
                rules={{
                    required: 'Поле "Имя" является обязательным',
                }}
                render={({field}) => <Input placeholder='Link image' {...field} />}
            />
            <Form.Item>
                <Button type="primary" htmlType="submit">Send</Button>
            </Form.Item>

        </Form>

    );
};
