import cx from './index.module.scss';

interface IProps {
    searchValue: String;
  }

const SearchResult = ({searchValue}:IProps) => {
    return (
    <div className={cx.searchResult}>
        <h1>asdasdasd</h1>
    </div>
)}

export default SearchResult