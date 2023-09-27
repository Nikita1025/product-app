
import {useRouter} from 'next/router'

import {useEffect} from "react";


const Home = () => {
    const router = useRouter()
    useEffect(()=>{
        router.push('/products')

    },[])


    return <></>
    // TODO: think how to remove blinking this home page in the case :
    // user is not authenticated , we did initialize=true and then try to refresh access token
    // while trying to refresh , this page is blinking, then redirect to login / profile page
}

export default Home
