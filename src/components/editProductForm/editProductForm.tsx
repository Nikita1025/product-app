import React from 'react';
import {
    Button,
    Form,
    Input,
} from 'antd';
import {Controller, useForm} from "react-hook-form";
import {AddProductType, EditProductType} from "@/utils/types";
import {useEditProduct} from "@/hooks/useEditProduct";
import s from './editProductForm.module.css'
type EditProductFormType = {
    image: string
    price: number
    title: string
    category: string
    description: string
    id: number
    setEditMode:(editMode:boolean)=>void
}

export const EditProductForm = ({id,setEditMode, image, title, category, price, description}: EditProductFormType) => {

    const {mutate} = useEditProduct()
    const {
        handleSubmit,
        control,
        reset
    } = useForm<EditProductType>()

    const onSubmit = handleSubmit((requestData: EditProductType) => {
        mutate({requestData, id})
        console.log(requestData)
        reset()
        setEditMode(false)
    })
    const onClick=()=>{
        setEditMode(false)
    }
    return (
        <Form onFinish={onSubmit} className={s.container}>
            <Controller
                name="title"
                control={control}
                rules={{
                    required: 'Поле "Имя" является обязательным',
                }}
                render={({field}) => <Input defaultValue={title}
                                            placeholder='Title' {...field} />}
            />
            <Controller
                name="price"
                control={control}
                rules={{
                    required: 'Поле "Имя" является обязательным',
                }}
                render={({field}) => <Input defaultValue={price}
                                            type='number' placeholder='Price' {...field} />}
            />
            <Controller
                name="category"
                control={control}
                rules={{
                    required: 'Поле "Имя" является обязательным',
                }}
                render={({field}) => <Input defaultValue={category} placeholder='Category' {...field} />}
            />
            <Controller
                name="description"
                control={control}
                rules={{
                    required: 'Поле "Имя" является обязательным',
                }}
                render={({field}) => <Input defaultValue={description}
                                            placeholder='Description' {...field} />}
            />
            <Controller
                name="image"
                control={control}
                rules={{
                    required: 'Поле "Имя" является обязательным',
                }}
                render={({field}) => <Input defaultValue={image}
                                            placeholder='Link image' {...field} />}
            />
            <Form.Item >
                <div className={s.buttons}>
                    <Button type="primary" htmlType="submit">Send</Button>
                    <Button type="default" onClick={onClick}>Cancel</Button>
                </div>

            </Form.Item>
        </Form>

    );
};
