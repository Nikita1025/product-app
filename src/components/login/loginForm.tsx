import React from 'react';
import {Button, Form, Input, Spin} from 'antd';
import {LoginFormType} from "@/utils/types";
import {Controller, useForm} from "react-hook-form";
import s from './loginFrom.module.css'
import {useLogin} from "@/hooks/useLogin";
import {antIcon} from "@/utils/antIcon";

export const LoginForm = () => {
    const {mutate,status, error}=useLogin()
    const {
        handleSubmit,
        control,
        reset
    } = useForm<LoginFormType>()
    const onSubmit = handleSubmit((data: LoginFormType) => {
        mutate(data)
        reset()
    })
    return (
        <>
            <div className={s.container}>
                {status === 'loading' && <Spin indicator={antIcon} />}

                <span className={s.login}>Log In</span>
                <Form onFinish={onSubmit} className={s.container_form}>
                    <Controller
                        name="username"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: 'Поле "Имя" является обязательным',
                        }}
                        render={({field}) => <Input placeholder='Username' {...field} />}
                    />

                    <Controller
                        name="password"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: 'Поле "Имя" является обязательным',
                        }}
                        render={({field}) => <Input.Password placeholder='Password' {...field} />}
                    />

                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </>



    )
}
