import {GithubOutlined} from '@ant-design/icons';
import {DefaultFooter} from '@ant-design/pro-components';
import '@umijs/max';
import React from 'react';
import './index.less';

const Footer: React.FC = () => {
  const defaultMessage = '聪ζ';
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer-container">
      <a
        href="https://beian.miit.gov.cn/"
        target="_blank"
        rel="noopener noreferrer"
        className="beian-link"
      >
        粤ICP备2024313392号
      </a>
      <span className="separator">|</span>
      <span>MIT 协议, 版权所有 © 2025 聪，All rights reserved.</span>
      {/*<span> 本网站由：<a href="https://www.upyun.com/?utm_source=lianmeng&utm_medium=referral" target="_blank"*/}
      {/*                  rel="noopener noreferrer"><img*/}
      {/*  src="/img/又拍云_logo1.png" alt="又拍云" style={{height: '20px', verticalAlign: 'middle'}}/> 又拍云提供 CDN 加速/存储服务</a></span>*/}

    </div>
    // <DefaultFooter
    //   style={{
    //     background: 'none',
    //   }}
    //   copyright={`${currentYear} ${defaultMessage}`}
    //   links={[
    //     {
    //       key: 'github',
    //       title: '聪ζ',
    //       href: 'https://github.com/lhccong',
    //       blankTarget: true,
    //     },
    //     {
    //       key: 'shortDog',
    //       title: (
    //         <>
    //           <GithubOutlined /> 渔岛
    //         </>
    //       ),
    //       href: 'https://github.com/lhccong/react-frontend-int',
    //       blankTarget: true,
    //     },
    //   ]}
    // />
  );
};
export default Footer;
