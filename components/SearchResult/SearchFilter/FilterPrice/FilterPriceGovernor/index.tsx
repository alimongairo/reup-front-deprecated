import cx from './index.module.scss';

interface IProps {
  valuePriceOt: any;
  setValuePriceOt: any;
  valuePriceDo: any;
  setValuePriceDo: any;
}

const FilterPriceGovernor = ({
  valuePriceOt,
  setValuePriceOt,
  valuePriceDo,
  setValuePriceDo,
}: IProps) => {
  const onChangeInput = (e: any) => {
    setValuePriceOt(e.target.value);
  };

  return (
    // <div className={cx.governor}>
    //   <div className={cx.governor_border}></div>
    //   <span>320</span>
    // </div>
    <div className={cx.wrapper}>
      <div className={cx.slidecontainer}>
        <input
          onChange={onChangeInput}
          type="range"
          min="1"
          max="100"
          step="1"
          value={valuePriceOt}
          className={cx.slider}
          id="myRange"
        />
        <span id="demo">{valuePriceOt}</span>
      </div>
    </div>
  );
};
export default FilterPriceGovernor;
