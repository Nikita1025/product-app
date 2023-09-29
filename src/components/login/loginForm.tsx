import React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Form, Spin } from 'antd';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import s from './loginFrom.module.css';

import { useLogin } from '@/hooks/useLogin';
import { antIcon } from '@/utils/antIcon';
import { LoginFormType } from '@/utils/types';
const schema = z.object({
  username: z.string().min(1, 'Username is required').max(100),
  password: z
    .string()
    .min(3, 'Password  must have more than 3 characters')
    .max(8, 'Password must have more than 8 characters'),
});

export const LoginForm = () => {
  const { mutate, status } = useLogin();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormType>({
    resolver: zodResolver(schema),
  });
  const onSubmit = handleSubmit((data: LoginFormType) => {
    mutate(data);
    reset();
  });

  return (
    <>
      <div className={s.container}>
        {status === 'loading' && <Spin indicator={antIcon} />}

        <span className={s.login}>Log In</span>
        <Form onFinish={onSubmit} className={s.container_form}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <input {...register('username')} />
            {errors.username && <span>{errors.username.message}</span>}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <input {...register('password')} />
            {errors.password && <span>{errors.password.message}</span>}
          </div>

          {/*<Controller*/}
          {/*  name="password"*/}
          {/*  control={control}*/}
          {/*  defaultValue=""*/}
          {/*  rules={{*/}
          {/*    required: 'Поле "Имя" является обязательным',*/}
          {/*  }}*/}
          {/*  render={({ field }) => <Input.Password placeholder="Password" {...field} />}*/}
          {/*/>*/}

          <Button type="primary" htmlType="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};
