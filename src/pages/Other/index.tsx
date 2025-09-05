import React from 'react';
import { Card, Typography, Space, Row, Col, message } from 'antd';
import { LinkOutlined, PlayCircleOutlined } from '@ant-design/icons';
import './index.less';

const { Title, Paragraph } = Typography;

const OtherProducts: React.FC = () => {
  const handleCopyUrl = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText('https://tv.yucoder.cn').then(() => {
      message.success('网址已复制到剪贴板');
    });
  };

  return (
    <div className="other-products-container">
      <Title level={2}>渔岛出品🌟</Title>
      <Row gutter={[24, 24]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <a
            href="https://tv.yucoder.cn"
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            <Card
              cover={
                <div style={{
                  padding: '32px',
                  textAlign: 'center',
                  borderBottom: '1px solid #f0f0f0'
                }}>
                  <PlayCircleOutlined style={{ fontSize: '64px', color: '#1890ff' }} />
                </div>
              }
              title={
                <Space>
                  <Title level={3}>渔 TV</Title>
                  <a
                    href="#"
                    onClick={handleCopyUrl}
                    className="copy-link"
                  >
                    <LinkOutlined />
                  </a>
                </Space>
              }
            >
              <Paragraph>
                渔 TV 是一个专注于提供优质电视节目和综艺内容的平台。在这里你可以观看热播电视剧、热门综艺节目、经典电影等，支持高清播放、收藏追剧等功能，让你在工作之余享受轻松愉快的观影时光。
              </Paragraph>
              <Paragraph className="visit-link">
                <span className="link-text">立即访问</span>
              </Paragraph>
            </Card>
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default OtherProducts;
