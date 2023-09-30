import React from 'react';

import { Spin } from 'antd';

import s from './spinner.module.css';

import { antIcon } from '@/components/ui/antIcon';

export const Spinner = () => {
  return <Spin className={s.spin} indicator={antIcon} />;
};
