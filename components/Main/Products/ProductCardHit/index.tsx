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

const ProductCardHit = ({productId, productImg, productTitle, productPrice, productDescription}:IProps)=>{
    return <div>
        <Link href={`${EPagesRoutes.ProductDetail}/${productId}`}>
            <div className={style.wrapper}>
                <div className={style.like_image}>
                    <svg className={style.img_like} width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.9952 3.12177C24.3599 2.44911 23.6056 1.9155 22.7754 1.55144C21.9451 1.18738 21.0553 1 20.1566 1C19.258 1 18.3681 1.18738 17.5379 1.55144C16.7077 1.9155 15.9534 2.44911 15.3181 3.12177L13.9997 4.51714L12.6812 3.12177C11.398 1.76368 9.65749 1.0007 7.84269 1.0007C6.0279 1.0007 4.28743 1.76368 3.00418 3.12177C1.72092 4.47987 1 6.32185 1 8.24249C1 10.1631 1.72092 12.0051 3.00418 13.3632L13.9997 25L24.9952 13.3632C25.6307 12.6909 26.1349 11.8926 26.4789 11.0139C26.8229 10.1353 27 9.19356 27 8.24249C27 7.29142 26.8229 6.34967 26.4789 5.47104C26.1349 4.59241 25.6307 3.79412 24.9952 3.12177Z" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
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

export default ProductCardHit