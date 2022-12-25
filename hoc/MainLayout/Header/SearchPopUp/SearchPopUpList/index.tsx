import style from './index.module.scss';
import classNames from 'classnames';

const SearchPopUpList = () => {
  return (
    <div className={style.search__container}>
      <div className={classNames(style.text_field, style.text_field_floating)}>
        <input
          className={style.text_field__input}
          type="text"
          id="input_text"
          name="input_text"
          placeholder="Хочу найти"
        />
        <label className={style.text_field__label} htmlFor="input_text">
          Хочу найти...
        </label>
      </div>
    </div>
  );
};

export default SearchPopUpList;
