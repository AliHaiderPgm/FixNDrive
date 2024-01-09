import React, { useState } from "react"
import { Layout, Menu } from "antd"
import { items } from "../../components/SidebarItems"
import Pages from "./Pages"
import { Link } from "react-router-dom"
import logo from '../../assets/car.png'


const { Header, Sider } = Layout;

export default function Index() {

    const [collapsed, setCollapsed] = useState(false);
    const year = new Date().getFullYear()

    return (
        <Layout>
            <Header className="sticky top-0">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="FixNDrive" className="max-w-full h-auto" />
                    </Link>
                </div>
            </Header>
            <Layout>
                <Sider
                    breakpoint="lg"
                    width={220}
                    className="h-dvh fixed"
                    collapsible
                    collapsed={collapsed}
                    onCollapse={value => setCollapsed(value)}
                >
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={["1"]}
                        defaultOpenKeys={["sub1"]}
                        className="h-full"
                        items={items}
                    />
                </Sider>

                <Layout className="p-4" style={{ marginLeft: !collapsed ? 220 : 80, transition: "all 0.2s" }}>
                    <Pages />
                    <footer className="mt-3">
                        <p className="mb-0 text-center">&copy; {year}. All Rights Reserved.</p>
                    </footer>
                </Layout>
            </Layout>
        </Layout >
    )
}