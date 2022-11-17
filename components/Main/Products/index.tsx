import cx from './products.module.scss'
import {useAppSelector} from "@/hooks/store";
import {getProductListDataSource} from "@/store/productList/selectors";
import ProductCardNew from "@/components/Main/Products/ProductCardNew";
import ProductCardHit from './ProductCardHit';

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
                <ProductCardHit
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

        <div className={cx.hit}>
            <h3>Хиты</h3>
        </div>

        <div className={cx.dataSourceHit}>
          {dataSource.map((productNew) => {
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
          })}
        </div>

        <div className={cx.ChoiseReup}>
            <h3>Выбор REUP</h3>
        </div>

        <div className={cx.dataSourceChoiseReup}>
          <div className={cx.leftBlock}>

            <div className={cx.upLeft}>
              <div className={cx.upLeftCompletion}><span>Товар</span></div>
              <div className={cx.upLeftCompletion}><span>Товар</span></div>
              <div className={cx.upLeftCompletion}><span>Товар</span></div>
              <div className={cx.upLeftCompletion}><span>Товар</span></div>
            </div>

            <div className={cx.downLeft}>
              <span>Название бренда</span>
            </div>

          </div>

          <div className={cx.rightBlock}>

            <div className={cx.upRight}>
              <span>Название бренда</span>
            </div>

            <div className={cx.downRight}>
              <span>Название акции/отдела</span>
            </div>

          </div>

        </div>

        <div className={cx.forYou}>
            <h3>Товары для тебя</h3>
        </div>

        <div className={cx.dataSourceForYou}>
          {dataSource.map((productNew) => {
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
          })}
        </div>

        <div className={cx.btn}>
          <button>Показать ещё</button>
        </div>
        
      </div>
    );
}

export default ProductsList;