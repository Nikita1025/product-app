import React from 'react';
import {
    Button,
    Form,
    Input,
    Upload,
} from 'antd';
import {Controller, useForm} from "react-hook-form";
import {AddProductType} from "@/utils/types";
import {useAddProduct} from "@/hooks/useAddProduct";
import {useQueryClient} from "@tanstack/react-query";

const normFile = (e: any) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};
export const AddProductForm = () => {
    const queryClient = useQueryClient()

    const {mutate} = useAddProduct()
    const {
        handleSubmit,
        control
    } = useForm<AddProductType>()

    const onSubmit = handleSubmit((data: AddProductType) => {
        mutate(data, {
            onSuccess: (data) => {
                // Обновление данных в React Query
                queryClient.setQueryData(['products'], (prevData: any) => [...prevData, data]);
            }
        })
    })
    return (
        <Form onFinish={onSubmit}>
            <Controller
                name="title"
                control={control}
                defaultValue=""
                rules={{
                    required: 'Поле "Имя" является обязательным',
                }}
                render={({field}) => <Input {...field} />}
            />
            <Controller
                name="price"
                control={control}
                defaultValue={0}
                rules={{
                    required: 'Поле "Имя" является обязательным',
                }}
                render={({field}) => <Input {...field} />}
            />
            <Controller
                name="category"
                control={control}
                defaultValue=""
                rules={{
                    required: 'Поле "Имя" является обязательным',
                }}
                render={({field}) => <Input {...field} />}
            />
            <Controller
                name="description"
                control={control}
                defaultValue=""
                rules={{
                    required: 'Поле "Имя" является обязательным',
                }}
                render={({field}) => <Input {...field} />}
            />
            <Controller
                name="image"
                control={control}
                defaultValue=""
                rules={{
                    required: 'Поле "Изображение" является обязательным',
                }}
                render={({field}) => (
                    <Upload
                        accept="image/*"
                        beforeUpload={() => false}
                        onChange={(info) => {
                            const {file} = info;
                            field.onChange(file);
                        }}
                    >
                        <Button>Выберите файл</Button>
                    </Upload>
                )}
            />
            <Form.Item>
                <Button type="primary" htmlType="submit">Отправить</Button>
            </Form.Item>
        </Form>

    );
};
