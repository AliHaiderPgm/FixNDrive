import { BellOutlined, ShopOutlined } from "@ant-design/icons"
import { Avatar, Badge, Col, Input, Row } from "antd"

const Header = ({ title }) => {
    return (
        <div className="shadow-sm">
            <Row gutter={18} className="justify-between">
                <Col span={18}>
                    <Input placeholder="Search for..." size="large" />
                </Col>
                <Col span={4} className="flex gap-4">
                    <div>
                        <Avatar size="large" className="cursor-pointer hover:shadow-md" src="https://flagsapi.com/PK/flat/64.png" />
                    </div>
                    <div>
                        <Badge count={2} offset={[-5, 4]}>
                            <Avatar size="large" className="cursor-pointer bg-transparent hover:shadow-md" icon={<BellOutlined className="text-gray-500" />} />
                        </Badge>
                    </div>
                    <div>
                        <Badge count={7} color="green" offset={[-2, 5]}>
                            <Avatar size="large" className="cursor-pointer bg-transparent hover:shadow-md" icon={<ShopOutlined className="text-gray-500" />} />
                        </Badge>
                    </div>
                    <div>
                        <Avatar size="large" className="cursor-pointer shadow-md bg-white" src="https://api.dicebear.com/7.x/miniavs/svg?seed=69" />
                    </div>
                </Col>
            </Row>
            <div className="flex justify-between items-center bg-white px-4 py-2 mt-3 rounded">
                <h1 className="text-4xl">{title}</h1>
                <div className="flex items-center gap-8">
                    <p>Data refreshed</p>
                    <p className="px-12 py-4 bg-gray-100 rounded">{new Date().toUTCString()}</p>
                </div>
            </div>
        </div>
    )
}

export default Header