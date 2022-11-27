import {createAsyncThunk} from "@reduxjs/toolkit";
import {PRODUCT_DETAILS_ALIAS, TProductItem} from "@/store/ProductDetail/type";
import {getProductDetailsRequest} from "@/network/rest/productDetails";
import {notification} from "antd";

export const mockData:TProductItem = {
    title: 'Свитшот',
    id: 1,
    description: 'Тёплая одежда',
    price: 1000,
    img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    like: false,
    cartActive: false,
    idChapter: 'productNew',
}


export const getProductDetailsAction = createAsyncThunk(
    `${PRODUCT_DETAILS_ALIAS}/get`,
    async ()=>{
        try {
            // const data = await getProductDetailsAction();
            console.log(mockData)
            return mockData
        }catch(error){
            notification.error({message: 'error'})
        }
    }
)