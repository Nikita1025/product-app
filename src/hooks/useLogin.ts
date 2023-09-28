import {useMutation} from "@tanstack/react-query";
import {AuthService} from "@/service/auth-service";
import { LoginFormType} from "@/utils/types";
import Cookies from 'js-cookie'
import {useAppDispatch} from "@/service/store";
import {authActions} from "@/service/auth-slice";

export const useLogin = () => {
    const dispatch = useAppDispatch()
    return useMutation(
        (data: LoginFormType) => AuthService.logIn(data), {
            onSuccess: (data) => {
                Cookies.set('token', data.data.token, {expires: 7});
                data.data.token && dispatch(authActions.setIsAuth(true))
            },
        })
}
