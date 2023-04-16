import Button from '@/components/common/Button';
import Heading from '@/components/common/Heading';
import Text from '@/components/common/Text';
import React, { memo, useContext, useState } from 'react';
import PopupClose from '@/static/icons/close.svg';
import cx from './index.module.scss';
import Image from 'next/image';
import { FilterContext } from '..';

const FilterSize = () => {
  const { setFormData } = useContext(FilterContext);
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

  const setFilterSize = (size: string) => {
    setFormData((state: any) => {
      return { ...state, size };
    });
  };
  const setFilterRuInt = (countrySize: string) => {
    setFormData((state: any) => {
      return { ...state, countrySize };
    });
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
                onClick={(e) => {
                  sizeCheckboxRuActive(e);
                  setFilterRuInt('ru');
                }}
                className={actSizeRu ? cx.active : cx.disabled}
                href=""
              >
                ru{' '}
              </a>
              <a
                onClick={(e) => {
                  sizeCheckboxRuActive(e);
                  setFilterRuInt('int');
                }}
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
          <Text size="normal">размер</Text>

          <div className={cx.size_checkbox}>
            <a
              onClick={(e) => {
                sizeCheckboxRuActive(e);
                setFilterRuInt('ru');
              }}
              className={actSizeRu ? cx.active : cx.disabled}
              href=""
            >
              ru{' '}
            </a>
            <a
              onClick={(e) => {
                sizeCheckboxIntActive(e);
                setFilterRuInt('int');
              }}
              className={actSizeInt ? cx.active : cx.disabled}
              href=""
            >
              int
            </a>
          </div>

          <div className={cx.btn_group_size}>
            <Button
              onClick={(e) => {
                e.preventDefault();
                setFilterSize('s');
              }}
              size="small"
            >
              s
            </Button>
            <Button
              onClick={(e) => {
                e.preventDefault();
                setFilterSize('m');
              }}
              size="small"
            >
              m
            </Button>
            <Button
              onClick={(e) => {
                e.preventDefault();
                setFilterSize('l');
              }}
              size="small"
            >
              l
            </Button>
            <Button
              onClick={(e) => {
                e.preventDefault();
                setFilterSize('xl');
              }}
              size="small"
            >
              xl
            </Button>
            <Button
              onClick={(e) => {
                e.preventDefault();
                setFilterSize('s');
              }}
              size="small"
            >
              s
            </Button>
            <Button
              onClick={(e) => {
                e.preventDefault();
                setFilterSize('m');
              }}
              size="small"
            >
              m
            </Button>
            <Button
              onClick={(e) => {
                e.preventDefault();
                setFilterSize('l');
              }}
              size="small"
            >
              l
            </Button>
            <Button
              onClick={(e) => {
                e.preventDefault();
                setFilterSize('xl');
              }}
              size="small"
            >
              xl
            </Button>
          </div>

          <Text onClick={onClickPopup}>таблица размеров</Text>
        </div>
      )}
    </div>
  );
};
export default memo(FilterSize);
