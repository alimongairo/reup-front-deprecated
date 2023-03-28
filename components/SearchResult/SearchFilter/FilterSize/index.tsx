import Button from '@/components/common/Button';
import Heading from '@/components/common/Heading';
import Text from '@/components/common/Text';
import React, { useState } from 'react';
import PopupClose from '@/static/icons/close.svg';
import cx from './index.module.scss';
import Image from 'next/image';

const FilterSize = () => {
  const [actSizeInt, setActSizeInt] = useState(false);
  const [actSizeRu, setActSizeRu] = useState(false);
  const [popupActive, setPopupActive] = useState(false);

  const sizeCheckboxIntActive = (e: any) => {
    e.preventDefault();
    setActSizeInt(true);
    setActSizeRu(false);
  };
  const sizeCheckboxRuActive = (e: any) => {
    e.preventDefault();
    setActSizeRu(true);
    setActSizeInt(false);
  };

  const onClickPopup = () => {
    setPopupActive(!popupActive);
  };

  return (
    <div className={cx.wrapper_size}>
      {popupActive ? (
        <div className={cx.popupActive}>
          <div className={cx.popup_back}>
            <div className={cx.popup}>
              <Image onClick={onClickPopup} src={PopupClose} alt="Close" />
              <div className={cx.popup_table}>
                <table className={cx.iksweb}>
                  <tbody>
                    <tr>
                      <td>XS</td>
                      <td>38</td>
                    </tr>
                    <tr>
                      <td>S</td>
                      <td>40</td>
                    </tr>
                    <tr>
                      <td>M</td>
                      <td>42</td>
                    </tr>
                    <tr>
                      <td>L</td>
                      <td>44</td>
                    </tr>
                    <tr>
                      <td>XL</td>
                      <td>46</td>
                    </tr>
                    <tr>
                      <td>XXL</td>
                      <td>48</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <Heading tag="h4">размер</Heading>

            <div className={cx.size_checkbox}>
              <a
                onClick={(e) => sizeCheckboxRuActive(e)}
                className={actSizeRu ? cx.active : cx.disabled}
                href=""
              >
                ru{' '}
              </a>
              <a
                onClick={(e) => sizeCheckboxIntActive(e)}
                className={actSizeInt ? cx.active : cx.disabled}
                href=""
              >
                int
              </a>
            </div>

            <Text onClick={onClickPopup}>таблица размеров</Text>
          </div>
        </div>
      ) : (
        <div className={cx.size_btn}>
          <Heading tag="h4">размер</Heading>

          <div className={cx.size_checkbox}>
            <a
              onClick={(e) => sizeCheckboxRuActive(e)}
              className={actSizeRu ? cx.active : cx.disabled}
              href=""
            >
              ru{' '}
            </a>
            <a
              onClick={(e) => sizeCheckboxIntActive(e)}
              className={actSizeInt ? cx.active : cx.disabled}
              href=""
            >
              int
            </a>
          </div>

          <div className={cx.btn_group_size}>
            <Button size="small">s</Button>
            <Button size="small">m</Button>
            <Button size="small">l</Button>
            <Button size="small">xl</Button>
            <Button size="small">s</Button>
            <Button size="small">m</Button>
            <Button size="small">l</Button>
            <Button size="small">xl</Button>
          </div>

          <Text onClick={onClickPopup}>таблица размеров</Text>
        </div>
      )}
    </div>
  );
};
export default FilterSize;
