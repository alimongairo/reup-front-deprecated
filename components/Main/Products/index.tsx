import ProductCard from "@/components/Main/Products/ProductCard";

import cx from './index.module.scss'

const ProductsList = ()=>{
    return <div className={cx.wrapper}>
        <ProductCard productId='1'/>
        <ProductCard productId='2'/>
        <ProductCard productId='3'/>
        <ProductCard productId='4'/>
    </div>
}

export default ProductsList;