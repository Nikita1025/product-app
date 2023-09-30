import { useMutation } from '@tanstack/react-query';
import Cookies from 'js-cookie';

import { AuthApi } from '@/api/auth-api';
import { authActions } from '@/store/auth-slice';
import { useAppDispatch } from '@/store/store';
import { LoginFormType, LoginResponseType } from '@/utils/types';

export const useLogin = () => {
  const dispatch = useAppDispatch();

  return useMutation((data: LoginFormType) => AuthApi.logIn(data), {
    onSuccess: (data: LoginResponseType) => {
      Cookies.set('token', data.token, { expires: 7 });
      data.token && dispatch(authActions.setIsAuth(true));
    },
  });
};
