import cx from './products.module.scss'
import {useAppSelector} from "@/hooks/store";
import {getProductListDataSource} from "@/store/productList/productListNew/selectors";
import ProductCardNew from "@/components/Main/Products/ProductCardNew";

const ProductsList = ()=>{
    const dataSource = useAppSelector(getProductListDataSource)

    return (
      <div className={cx.wrapper}>

        <div className={cx.new}>
            <h3>Новинки</h3>
        </div>

        <div className={cx.dataSourceNew}>
          {dataSource.map((productNew) => {
            return (
              <ProductCardNew
                productImg={productNew.img}
                productPrice={productNew.price}
                productDescription={productNew.description}
                productTitle={productNew.title}
                productId={productNew.id}
                key={productNew.id}
              />
            );
          })}
        </div>
        
        <div className={cx.stocks}>
            <h3>Акции</h3>
        </div>

        <div className={cx.dataSourceHit}>
          {/* {dataSourceHit.map((productNew) => {
            return (
              <ProductCardHit
                productImg={productNew.img}
                productPrice={productNew.price}
                productDescription={productNew.description}
                productTitle={productNew.title}
                productId={productNew.id}
                key={productNew.id}
              />
            );
          })} */}
        </div>
      </div>

    );
}

export default ProductsList;