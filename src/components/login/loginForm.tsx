import React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Form, Input, Alert } from 'antd';
import { Controller, useForm } from 'react-hook-form';

import s from './loginFrom.module.css';

import { loginSchema } from '@/common/schemas';
import { Spinner } from '@/components/ui/spiner ';
import { useLogin } from '@/hooks';
import { LoginFormType } from '@/utils';

export const LoginForm = () => {
  const { mutate, isLoading, isError } = useLogin();
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<LoginFormType>({
    resolver: zodResolver(loginSchema()),
  });
  const onSubmit = handleSubmit((data: LoginFormType) => {
    mutate(data);
    reset();
  });

  return (
    <div className={s.container_page}>
      <div className={s.status}>
        {isError && (
          <Alert closable message="username or password is incorrect" type="error" />
        )}
        {isLoading && <Spinner />}
      </div>
      <div className={s.container}>
        <span className={s.login}>Log In</span>
        <Form onFinish={onSubmit} className={s.container_form}>
          <Controller
            name="username"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div className={s.input_container}>
                <Input placeholder="Username" {...field} />
                {errors.username && (
                  <span className={s.error}>{errors.username.message}</span>
                )}
              </div>
            )}
          />

          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div className={s.input_container}>
                <Input.Password placeholder="Password" {...field} />
                {errors.password && (
                  <span className={s.error}>{errors.password.message}</span>
                )}
              </div>
            )}
          />
          <Button type="primary" htmlType="submit">
            Log In
          </Button>
        </Form>
      </div>
    </div>
  );
};
