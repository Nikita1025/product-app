import baseApi from '@/api/base-api';
import { LoginFormType, LoginResponseType } from '@/utils/types';

export const AuthApi = {
  async logIn(loginData: LoginFormType) {
    const { data } = await baseApi.post<LoginResponseType>('/auth/login', loginData);

    return data;
  },
};
