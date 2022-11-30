import React from 'react';
import Link from 'next/link';
import { Checkbox, Form } from 'antd';
import { EPagesRoutes } from '@/constants/router';
import cx from './index.module.scss';

const Checkboxes = () => {
  return (
    <>
      <Form.Item
        name="rules"
        valuePropName="checked"
        rules={[
          {
            validator: (_, checked) =>
              checked
                ? Promise.resolve()
                : Promise.reject(
                    new Error('Ознакомтесь с правилами и подтвердите согласие'),
                  ),
          },
        ]}
      >
        <Checkbox>
          <div className={cx.checkboxText}>
            я ознакомился и согласен с{' '}
            <Link href={`${EPagesRoutes.Order}/`} className={cx.link}>
              политикой обработки персональных данных
            </Link>{' '}
            и{' '}
            <Link href={`${EPagesRoutes.Order}/`} className={cx.link}>
              пользовательским соглашением
            </Link>
          </div>
        </Checkbox>
      </Form.Item>

      <Form.Item name="advertising">
        <Checkbox>
          <div className={cx.checkboxText}>
            я согласен получать новости об акциях и специальных предложениях
          </div>
        </Checkbox>
      </Form.Item>
    </>
  );
};

export default React.memo(Checkboxes);
