import { Products } from '@/components/products';
import { useAppSelector } from '@/store';

const Home = () => {
  const { isAuth } = useAppSelector(state => state.auth);

  return isAuth && <Products />;
};

export default Home;
