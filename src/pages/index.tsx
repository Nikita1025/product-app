import { useAppSelector} from "@/service/store";

import {Products} from "@/components/products/products";


const Home = () => {
    const {isAuth} = useAppSelector(state => state.auth)
    return isAuth && <Products />

}
export default Home
