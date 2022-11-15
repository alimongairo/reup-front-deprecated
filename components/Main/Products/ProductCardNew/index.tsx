import { EPagesRoutes } from "@/constants/router";
import Link from "next/link";
import style from "./products.module.scss";

interface IProps {
    productId: number;
    productTitle: string;
    productPrice: number; 
    productDescription: string;
    productImg: string;
}

const ProductCardNew = ({productId, productImg, productTitle, productPrice, productDescription}:IProps)=>{
    return <div>
        <Link href={`${EPagesRoutes.ProductDetail}/${productId}`}>
            <div className={style.wrapper}>
                <img src={productImg} alt="photo" />
                <div className={style.text}>
                    <h3 className={style.title}>{productTitle}</h3>
                    <p className={style.desc}>{productDescription}</p>
                    <span className={style.price}>{productPrice} ₽</span>
                </div>
                <div className={style.inCart}>
                    <button>В корзину</button>
                </div>
            </div>       
        </Link>
    </div>
}

export default ProductCardNew