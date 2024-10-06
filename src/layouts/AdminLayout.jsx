import {
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	SettingFilled,
	TableOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
const { Header, Sider, Content } = Layout;

export const AdminLayout = () => {
	const [collapsed, setCollapsed] = useState(false);
	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken();

	return (
		<Layout style={{ minHeight: '100vh' }}>
			<Sider
				trigger={null}
				collapsible
				collapsed={collapsed}
			>
				<div className="demo-logo-vertical" />
				<Menu
					theme="dark"
					mode="inline"
					defaultSelectedKeys={['1']}
					items={[
						{
							key: '1',
							icon: <TableOutlined />,
							label: 'Table Products',
						},
						{
							key: '2',
							icon: <TableOutlined />,
							label: 'Table Users',
						},
						{
							key: '3',
							icon: <SettingFilled />,
							label: 'Settings',
						},
					]}
				/>
			</Sider>
			<Layout>
				<Header
					style={{
						padding: 0,
						background: colorBgContainer,
					}}
				>
					<Button
						type="text"
						icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
						onClick={() => setCollapsed(!collapsed)}
						style={{
							fontSize: '16px',
							width: 64,
							height: 64,
						}}
					/>
				</Header>
				<Content
					style={{
						margin: '24px 16px',
						padding: 24,
						minHeight: 280,
						background: colorBgContainer,
						borderRadius: borderRadiusLG,
					}}
				>
					<Outlet />
				</Content>
			</Layout>
		</Layout>
	);
};
