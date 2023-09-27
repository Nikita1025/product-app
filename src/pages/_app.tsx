import '@/styles/globals.css'
import {AppProps} from "next/app";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {LayoutApp} from "@/components/layout/layoutApp";


const queryClient = new QueryClient({
    defaultOptions: {
        queries:{
            refetchOnWindowFocus: false
        },
    }
})
 function App({Component, pageProps}: AppProps) {

    return (<QueryClientProvider client={queryClient}>
            <LayoutApp>
                <Component {...pageProps}/>
            </LayoutApp>
        </QueryClientProvider>
    )
}
export default App

