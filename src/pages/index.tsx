import { Products } from '@/components/products/products';
import { useAppSelector } from '@/store/store';

const Home = () => {
  const { isAuth } = useAppSelector(state => state.auth);

  return isAuth && <Products />;
};

export default Home;
