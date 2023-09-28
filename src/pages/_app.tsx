import '@/styles/globals.css'
import {AppProps} from "next/app";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {LayoutApp} from "@/components/layout/layoutApp";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {Provider} from "react-redux";
import {store, useAppDispatch} from "@/service/store";
import {useRouter} from "next/router";
import Cookies from "js-cookie";
import {ReactElement, ReactNode, useEffect} from "react";
import {authActions} from "@/service/auth-slice";
import {NextPage} from "next";

export type NextPageWithLayout<P = {}> = NextPage<P> & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        },
    }
})

function App({Component, pageProps}: AppProps) {

    return (<QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <ReactQueryDevtools initialIsOpen={false}/>
                <LayoutApp>
                    <MyApp Component={Component} {...pageProps}/>
                </LayoutApp>
            </Provider>
        </QueryClientProvider>
    )
}

export default App

function MyApp({Component, pageProps}: AppPropsWithLayout) {
    const dispatch = useAppDispatch()
    const token = Cookies.get('token');
    const router = useRouter()

    useEffect(() => {
        if (token) {
            dispatch(authActions.setIsAuth(true))
        }
        if (!token) {
            router.push('/auth')
        }
    }, [token])


    return (
        <>
            <Component {...pageProps} />
        </>
    )
}

