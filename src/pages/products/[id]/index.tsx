import {ProductPage} from "@/components/productPage/productPage";
import {useAppSelector} from "@/service/store";
const Index = () => {
    const {isAuth} = useAppSelector(state => state.auth)

    return isAuth && <ProductPage />

};
export default Index
