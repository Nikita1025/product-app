import { ProductPage } from '@/components/productPage';
import { useAppSelector } from '@/store';
const Index = () => {
  const { isAuth } = useAppSelector(state => state.auth);

  return isAuth && <ProductPage />;
};

export default Index;
