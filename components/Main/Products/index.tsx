import ProductCard from "@/components/Main/Products/ProductCard";

import cx from './index.module.scss'
import {useAppSelector} from "@/hooks/store";
import {getProductListDataSource} from "@/store/productList/selectors";

const ProductsList = ()=>{
    const dataSource = useAppSelector(getProductListDataSource)

    return <div className={cx.wrapper}>
        {dataSource.map(product=>{
            return <ProductCard productTitle={product.title} productId={product.id} key={product.id}/>
        })}
    </div>
}

export default ProductsList;