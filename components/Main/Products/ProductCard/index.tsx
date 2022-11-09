import {Card} from "antd";
import Link from "next/link";
import {EPagesRoutes} from "@/constants/router";

const {Meta} = Card

interface IProps {
    productId: number;
}

const ProductCard = ({productId}:IProps)=>{
    return <div>
        <Link href={`${EPagesRoutes.ProductDetail}/${productId}`}>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
        </Link>
    </div>
}

export default ProductCard