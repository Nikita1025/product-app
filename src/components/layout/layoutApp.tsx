'use client'

import {Layout} from 'antd';
import React, {ReactNode} from 'react';
import s from './layoutApp.module.css'

type LayoutAppType = {
    children: ReactNode
}

const {Header, Content, Footer} = Layout;

export const LayoutApp = ({children}: LayoutAppType) => {
    return (
        <Layout>
            <Header className={s.header}>
                <span className={s.title_header}>Shop online</span>
            </Header>
            <Content className={s.content}>
                {children}
            </Content>
            <Footer className={s.footer}>Shop online ©2023</Footer>
        </Layout>
    );
};

