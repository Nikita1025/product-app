import { useMutation } from '@tanstack/react-query';
import Cookies from 'js-cookie';

import { AuthApi } from '@/api';
import { authActions, useAppDispatch } from '@/store';
import { LoginFormType, LoginResponseType } from '@/utils';

export const useLogin = () => {
  const dispatch = useAppDispatch();

  return useMutation((data: LoginFormType) => AuthApi.logIn(data), {
    onSuccess: (data: LoginResponseType) => {
      Cookies.set('token', data.token, { expires: 7 });
      data.token && dispatch(authActions.setIsAuth(true));
    },
  });
};
