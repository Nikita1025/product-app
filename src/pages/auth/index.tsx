import { useEffect } from 'react';

import { useRouter } from 'next/router';

import { LoginForm } from '@/components/login/loginForm';
import { useAppSelector } from '@/store/store';

const Index = () => {
  const { isAuth } = useAppSelector(state => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (isAuth) {
      router.push('/');
    }
  }, [isAuth]);

  return !isAuth && <LoginForm />;
};

export default Index;
