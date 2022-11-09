import {Button} from "antd";
import {ShoppingCartOutlined} from "@ant-design/icons";
import Link from "next/link";
import {EPagesRoutes} from "@/constants/router";

const Basket = ()=>{
    return <div>
        <Link href={EPagesRoutes.Basket}>
            <Button type="primary" size="large" icon={<ShoppingCartOutlined/>}/>
        </Link>
    </div>
}

export default Basket