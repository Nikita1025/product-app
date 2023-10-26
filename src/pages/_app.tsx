import '@/styles/globals.css';
import { ReactElement, ReactNode, useEffect } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Cookies from 'js-cookie';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { Provider } from 'react-redux';

import { LayoutApp } from '@/components/ui/layout';
import { authActions, store, useAppDispatch } from '@/store';

export type NextPageWithLayout<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
//в
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ReactQueryDevtools initialIsOpen={false} />
        <LayoutApp>
          <MyApp Component={Component} {...pageProps} />
        </LayoutApp>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const dispatch = useAppDispatch();
  const token = Cookies.get('token');
  const router = useRouter();

  useEffect(() => {
    if (token) {
      dispatch(authActions.setIsAuth(true));
    }
    if (!token) {
      router.push('/auth');
    }
  }, [token]);

  return (
    <>
      <Component {...pageProps} />
    </>
  );
};
