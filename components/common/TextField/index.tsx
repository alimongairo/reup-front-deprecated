import cx from './index.module.scss';
import classNames from 'classnames';

export interface ISelect {
  label?: string;
  onChange: any;
  value: string;
  multiline?: boolean;
  limit?: number;
}

const TextField = ({ label, onChange, value, multiline, limit }: ISelect) => {
  const len = value.length;
  return (
    <div className={classNames(cx.wrapper, multiline ? cx.wide : '')}>
      <div className={cx.container}>
        {multiline ? (
          <textarea
            className={cx.textfield}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={label}
            maxLength={limit}
          />
        ) : (
          <input
            className={cx.textfield}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={label}
            maxLength={limit}
          />
        )}
      </div>
      {limit && (
        <div
          className={classNames(cx.counter, len > limit - 11 ? cx.warning : '')}
        >
          {len}/{limit}
        </div>
      )}
    </div>
  );
};

export default TextField;
