import Header from "@/components/Main/Header";
import ProductsList from "@/components/Main/Products";
import {useAppDispatch} from "@/hooks/store";
import {useEffect} from "react";
import {getProductListAction} from "@/store/productList/thunk";
import style from "./main.module.scss"

const MainLayout = ()=>{
    const dispatch = useAppDispatch()

    useEffect(()=>{
        dispatch(getProductListAction())
    },[])

    return <div className={style.main}>
            <Header/>
            <ProductsList/>       
    </div>
}

export default MainLayout