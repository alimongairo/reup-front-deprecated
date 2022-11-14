import {Card} from "antd";
import Link from "next/link";
import style from "./products.module.scss";
import {EPagesRoutes} from "@/constants/router";

const {Meta} = Card

interface IProps {
    productId: number;
    productTitle: string
}

const ProductCard = ({productId, productTitle}:IProps)=>{
    return <div>
        <Link href={`${EPagesRoutes.ProductDetail}/${productId}`}>
            {/* <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <Meta title="Europe Street beat" description="www.instagram.com"/>
            </Card> */}

            <div className={style.wrapper}>
                <div className="style.image">
                    <img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" alt="photo" />
                </div>
                <div className="style.title">
                    <h3 className="style.title">{productTitle}</h3>
                    <p className="style.desc">Тёплая одежда</p>
                    <span className="style.price">-Р</span>
                </div>
            </div>
            
        </Link>
    </div>
}

export default ProductCard