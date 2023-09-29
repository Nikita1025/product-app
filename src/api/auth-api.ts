import baseApi from '@/api/base-api';
import { LoginFormType, LoginResponseType } from '@/utils/types';

export const AuthApi = {
  async logIn(data: LoginFormType) {
    return baseApi.post<LoginResponseType>('/auth/login', data);
  },
};
