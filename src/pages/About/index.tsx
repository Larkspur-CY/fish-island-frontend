import React from 'react';
import { Card, Typography, Space, Image, List, Tag, Row, Col, Button, message } from 'antd';
import { CopyOutlined, TeamOutlined, AppstoreOutlined, MessageOutlined, ReadOutlined, PlayCircleOutlined, ToolOutlined, GiftOutlined } from '@ant-design/icons';
import styles from './index.less';
import imgAbout from '../../../public/img/qqAbout.png';
const { Title, Paragraph } = Typography;

const Feedback: React.FC = () => {
  const renderFeatureList = (items: string[], color: string) => (
    <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
      {items.map((item, index) => (
        <Col span={8} key={index}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Tag color={color}>✓</Tag>
            <span style={{ marginLeft: 8 }}>{item}</span>
          </div>
        </Col>
      ))}
    </Row>
  );

  const handleCopyQQ = () => {
    navigator.clipboard.writeText('695425036').then(() => {
      message.success('QQ群号已复制到剪贴板');
    }).catch(() => {
      message.error('复制失败，请手动复制');
    });
  };

  const renderTitle = (icon: React.ReactNode, text: string) => (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
      <div style={{
        marginRight: 12,
        fontSize: 24,
        color: '#1890ff',
        animation: 'float 3s ease-in-out infinite'
      }}>
        {icon}
      </div>
      <Title level={3} style={{ margin: 0 }}>{text}</Title>
    </div>
  );

  return (
    <div className={styles.container}>
      <Card className={styles.card}>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
              <div style={{
                marginRight: 12,
                fontSize: 28,
                color: '#1890ff',
                animation: 'float 3s ease-in-out infinite'
              }}>
                <TeamOutlined />
              </div>
              <Title level={2} style={{ margin: 0 }}>共建与反馈</Title>
            </div>
            <Paragraph>
              我们欢迎所有用户参与共建，您的每一条建议都是我们进步的动力。
              加入我们的QQ群，一起讨论和改进：
            </Paragraph>
            <div className={styles.qrCodeContainer}>
              <Image
                src={imgAbout}
                alt="QQ群二维码"
                width={200}
                preview={false}
              />
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginTop: 16,
                justifyContent: 'center',
                gap: 8
              }}>
                <span style={{
                  fontSize: 18,
                  fontWeight: 500,
                  color: '#1890ff',
                  lineHeight: '32px'
                }}>
                  QQ群号：695425036（暗号：渔）
                </span>
                <Button
                  type="primary"
                  icon={<CopyOutlined />}
                  onClick={handleCopyQQ}
                  size="small"
                  style={{ height: 32 }}
                >
                  复制
                </Button>
              </div>
              <div style={{ marginTop: 16, textAlign: 'center' }}>
                <Button
                  type="primary"
                  href="https://docs.qq.com/sheet/DSXdWdk9rbGNqT2NT?tab=BB08J2"
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={<ReadOutlined />}
                  style={{
                    height: 'auto',
                    padding: '8px 16px',
                    fontSize: '16px',
                    boxShadow: '0 2px 8px rgba(24, 144, 255, 0.2)',
                    transition: 'all 0.3s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(24, 144, 255, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(24, 144, 255, 0.2)';
                  }}
                >
                  【腾讯文档】渔岛需求与Bug
                </Button>
              </div>
            </div>
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
              <div style={{
                marginRight: 12,
                fontSize: 28,
                color: '#1890ff',
                animation: 'float 3s ease-in-out infinite'
              }}>
                <AppstoreOutlined />
              </div>
              <Title level={2} style={{ margin: 0 }}>网站功能介绍</Title>
            </div>
            <Paragraph style={{ marginBottom: 32 }}>
              鱼岛是一个专注于提供优质阅读体验和丰富娱乐功能的平台，我们致力于为用户提供一站式的信息聚合和娱乐服务。
            </Paragraph>

            <div style={{ marginBottom: 32 }}>
              {renderTitle(<AppstoreOutlined />, '1. 多源信息聚合')}
              {renderFeatureList([
                '知乎热榜',
                '微博热榜',
                '虎扑步行街热榜',
                '编程导航热榜',
                'CSDN 热榜',
                '掘金热榜',
                'B 站热门',
                '抖音热搜',
                '网易云热歌榜',
                '什么值得买热榜',
              ], 'blue')}
            </div>

            <div style={{ marginBottom: 32 }}>
              {renderTitle(<MessageOutlined />, '2. 渔聊天室')}
              {renderFeatureList([
                '发送 emoji 表情包',
                '发送搜狗在线表情包',
                '支持网站链接解析',
                '支持 markdown 文本解析',
                '支持 AI 助手回答',
                '头像框功能',
                '用户地理位置显示功能',
                '用户称号功能',
                '五子棋、象棋对战邀请功能',
                '积分红包🧧发送功能',
                '支持用户 CV 发送图片功能',
              ], 'green')}
            </div>

            <div style={{ marginBottom: 32 }}>
              {renderTitle(<ReadOutlined />, '3. 渔阅读')}
              {renderFeatureList([
                '在线搜书功能',
                '小窗口观看功能',
                '支持自定义书源',
              ], 'purple')}
            </div>

            <div style={{ marginBottom: 32 }}>
              {renderTitle(<PlayCircleOutlined />, '4. 小游戏')}
              {renderFeatureList([
                '五子棋（人机/在线对战）',
                '象棋（人机/在线对战）',
                '2048',
              ], 'orange')}
            </div>

            <div style={{ marginBottom: 32 }}>
              {renderTitle(<ToolOutlined />, '5. 工具箱')}
              {renderFeatureList([
                'JSON 格式化',
                '文本比对',
                '聚合翻译',
                'Git 提交格式生成',
                'AI 智能体',
                'AI 周报助手',
              ], 'cyan')}
            </div>

            <div style={{ marginBottom: 32 }}>
              {renderTitle(<GiftOutlined />, '6. 其他功能')}
              {renderFeatureList([
                '每日待办功能',
                '头像框兑换功能',
              ], 'magenta')}
            </div>
          </div>
        </Space>
      </Card>
    </div>
  );
};

export default Feedback;
