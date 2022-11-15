import {createAsyncThunk} from "@reduxjs/toolkit";
import {PRODUCT_LIST_ALIAS, TProductItem} from "@/store/productList/productListNew/type";
import {getProductListRequest} from "@/network/rest/productsList";
import {notification} from "antd";

const mockData:TProductItem[] = []

for(let i = 0; i<4; i++){
    mockData.push({
        title: 'Свитшот',
        id: i,
        description: 'Тёплая одежда',
        price: 1000,
        img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
        like: false,
        cartActive: false
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