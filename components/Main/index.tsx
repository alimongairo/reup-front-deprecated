import Header from "@/components/Main/Header";
import ProductsList from "@/components/Main/Products";
import {useAppDispatch} from "@/hooks/store";
import {useEffect} from "react";
import {getProductListAction} from "@/store/productList/thunk";

const MainLayout = ()=>{
    const dispatch = useAppDispatch()

    useEffect(()=>{
        dispatch(getProductListAction())
    },[])

    return <div className="w100">
            <Header/>
            <ProductsList/>
    </div>
}

export default MainLayout