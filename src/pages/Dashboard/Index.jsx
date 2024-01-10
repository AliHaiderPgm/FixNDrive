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
        <Layout hasSider>
            <Sider
                breakpoint="lg"
                width={220}
                className="!sticky top-0 max-h-[calc(100dvh-40px)] z-[1001]"
                collapsible
                collapsed={collapsed}
                onCollapse={value => setCollapsed(value)}
                theme="light"
            >
                <div className="logo min-h-10 h-10 grid place-items-center mt-3 px-3">
                    <Link to="/">
                        <img src={logo} alt="FixNDrive" className="max-w-full h-auto" />
                    </Link>
                </div>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={["1"]}
                    defaultOpenKeys={["sub1"]}
                    items={items}
                    className="pt-1"
                />
            </Sider>

            <Layout className="p-4">
                <Pages />
                <footer className="mt-3">
                    <p className="mb-0 text-center">&copy; {year}. All Rights Reserved.</p>
                </footer>
            </Layout>
        </Layout>
    )
}