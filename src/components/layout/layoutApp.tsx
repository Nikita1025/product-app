import React, { ReactNode } from 'react';

import { Layout } from 'antd';

import s from './layoutApp.module.css';

type LayoutAppType = {
  children: ReactNode;
};

const { Header, Content } = Layout;

export const LayoutApp = ({ children }: LayoutAppType) => {
  return (
    <Layout>
      <Header className={s.header}>
        <span className={s.title_header}>Shop online</span>
      </Header>
      <Content className={s.content}>{children}</Content>
    </Layout>
  );
};
