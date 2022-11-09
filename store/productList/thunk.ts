import {createAsyncThunk} from "@reduxjs/toolkit";
import {PRODUCT_LIST_ALIAS, TProductItem} from "@/store/productList/type";
import {getProductListRequest} from "@/network/rest/productsList";
import {notification} from "antd";

const mockData:TProductItem[] = []

for(let i = 0;i<10;i++){
    mockData.push({
        title: '123',
        id: i,
        description: 'desc',
        img: 'strr'
    })
}

export const getProductListAction = createAsyncThunk(
    `${PRODUCT_LIST_ALIAS}/fetch`,
    async ()=>{
        try {
            // const data = await getProductListRequest();
            return mockData
        }catch(error){
            notification.error({message: 'error'})
        }
    }
)