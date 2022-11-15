import cx from './index.module.scss'
import {useAppSelector} from "@/hooks/store";
import {getProductListDataSource} from "@/store/productList/productListNew/selectors";
import ProductCardNew from "@/components/Main/Products/ProductCardNew";

const ProductsList = ()=>{
    const dataSource = useAppSelector(getProductListDataSource)

    return (
      <div className={cx.wrapper}>
        <h2>Новинки</h2>
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
        <div className={cx.stocks}>
                <h3>Акции</h3>
        </div>
      </div>

    );
}

export default ProductsList;