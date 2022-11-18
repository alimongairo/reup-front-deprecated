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
                <div className={style.like_image}>
                    <img className={style.img_like} src="../../../../build/icons/like.svg" alt="" />
                    <img src={productImg} alt="photo" />
                </div>
                
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