import { BellOutlined, ShopOutlined } from "@ant-design/icons"
import { Avatar, Badge, Button, Col, Divider, Dropdown, Input, Row, Space, theme } from "antd"
import React from "react";
const { useToken } = theme;

const Header = ({ title }) => {
    const notifications = [
        {
            "name": "John",
            "notification": "created account",
            "time": "8",
            "key": "1",
            "image": "https://placehold.co/30",
            "type": "Offer"
        },
        {
            "name": "Sarah",
            "notification": "placed order",
            "time": "10",
            "key": "2",
            "image": "https://placehold.co/31",
            "type": "Referal link"
        },
        {
            "name": "Michael",
            "notification": "leaved a review on product",
            "time": "15",
            "key": "3",
            "image": "https://placehold.co/32",
            "type": "Electronics"
        },
        {
            "name": "Emily",
            "notification": "created account",
            "time": "12",
            "key": "4",
            "image": "https://placehold.co/33",
            "type": "Offer"
        },
        {
            "name": "David",
            "notification": "placed order",
            "time": "9",
            "key": "5",
            "image": "https://placehold.co/34",
            "type": "Referal link"
        },
        {
            "name": "Jessica",
            "notification": "leaved a review on product",
            "time": "18",
            "key": "6",
            "image": "https://placehold.co/35",
            "type": "Electronics"
        },
        {
            "name": "Daniel",
            "notification": "created account",
            "time": "14",
            "key": "7",
            "image": "https://placehold.co/36",
            "type": "Offer"
        },
        {
            "name": "Olivia",
            "notification": "placed order",
            "time": "11",
            "key": "8",
            "image": "https://placehold.co/37",
            "type": "Referal link"
        },
        {
            "name": "William",
            "notification": "leaved a review on product",
            "time": "16",
            "key": "9",
            "image": "https://placehold.co/38",
            "type": "Electronics"
        },
        {
            "name": "Sophia",
            "notification": "created account",
            "time": "13",
            "key": "10",
            "image": "https://placehold.co/39",
            "type": "Offer"
        }
    ]
    const messages = [
        {
            "name": "John Doe",
            "time": "12",
            "date": "2020-01-01",
            "message": "Hello, how are you?",
            "image": "https://placehold.co/123"
        },
        {
            "name": "Jane Smith",
            "time": "18",
            "date": "2020-01-02",
            "message": "I'm good, thanks! How about you?",
            "image": "https://placehold.co/45"
        },
        {
            "name": "Mike Johnson",
            "time": "9",
            "date": "2020-01-03",
            "message": "I'm doing well. Just got back from vacation.",
            "image": "https://placehold.co/67"
        },
        {
            "name": "Emily Davis",
            "time": "15",
            "date": "2020-01-04",
            "message": "That sounds nice. Where did you go?",
            "image": "https://placehold.co/89"
        },
        {
            "name": "Chris Wilson",
            "time": "20",
            "date": "2020-01-05",
            "message": "I went to Hawaii. It was amazing.",
            "image": "https://placehold.co/101"
        },
        {
            "name": "Sarah Thompson",
            "time": "11",
            "date": "2020-01-06",
            "message": "Lucky you! I've always wanted to go there.",
            "image": "https://placehold.co/123"
        },
        {
            "name": "David Rodriguez",
            "time": "16",
            "date": "2020-01-07",
            "message": "You should definitely go if you get the chance.",
            "image": "https://placehold.co/145"
        },
        {
            "name": "Amy Anderson",
            "time": "21",
            "date": "2020-01-08",
            "message": "I'll keep that in mind. Thanks!",
            "image": "https://placehold.co/167"
        },
        {
            "name": "Mark Martinez",
            "time": "13",
            "date": "2020-01-09",
            "message": "No problem. Let me know if you have any other questions.",
            "image": "https://placehold.co/189"
        },
        {
            "name": "Laura Hernandez",
            "time": "19",
            "date": "2020-01-10",
            "message": "Will do. Have a great day!",
            "image": "https://placehold.co/200"
        }
    ]
    const { token } = useToken();
    const contentStyle = {
        backgroundColor: token.colorBgElevated,
        borderRadius: token.borderRadiusLG,
        boxShadow: token.boxShadowSecondary,
    }
    return (
        <>
            <div className="shadow-sm">
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-12">
                    <div className="col-span-1 sm:col-span-6 md:col-span-8">
                        <Input placeholder="Search for..." size="large" />
                    </div>
                    <div className="col-span-1 sm:col-span-6 md:col-span-4 flex gap-2 justify-end">
                        <div>
                            <Avatar size="large" className="cursor-pointer hover:shadow-md" src="https://flagsapi.com/PK/flat/64.png" />
                        </div>
                        <div>
                            <Dropdown trigger={['click']} dropdownRender={(menu) => (
                                <div style={contentStyle}>
                                    <p className="text-xl font-bold mb-2 pt-5 px-5">Notifications</p>
                                    <div className="flex items-center px-5 mb-2">
                                        <p className="font-bold">All <span className="font-normal">(1,234)</span></p>
                                        <Divider type="vertical" className="bg-gray-400" />
                                        <p className="text-blue-400">Following <span className="text-black">(1,234)</span></p>
                                        <Divider type="vertical" className="bg-gray-400" />
                                        <p className="text-blue-400">Order <span className="text-black">(34)</span></p>
                                    </div>

                                    <div className="max-h-svh overflow-hidden hover:overflow-y-scroll">
                                        {notifications.map((item, index) => {
                                            return <div key={index}>
                                                <div className="flex gap-2 items-start p-4 hover:bg-gray-100 transition cursor-pointer">
                                                    <img src={item.image} alt="placeholder" className="max-w-full aspect-square rounded-md max-h-12 object-contain" />
                                                    <div>
                                                        <p className="font-semibold">{item.name}</p>
                                                        <p>{item.notification}</p>
                                                        <div className="flex gap-2 my-1 text-gray-500">
                                                            <p>{item.time}h ago</p>
                                                            <p>Offers</p>
                                                        </div>
                                                        {
                                                            item.type === 'Offer' ? <div className="flex gap-2">
                                                                <Button size="small" type="primary" className="bg-blue-500">Accept</Button>
                                                                <Button size="small" danger>Decline</Button>
                                                            </div> : null
                                                        }
                                                    </div>
                                                </div>
                                                <Divider className="m-0" />
                                            </div>
                                        })}
                                        <div className="p-4">
                                            <Button type="primary" shape="round" className="w-full bg-blue-500">Load more</Button>
                                        </div>
                                    </div>
                                </div>
                            )}>
                                <Badge count={2} color="#cc0000" offset={[-5, 4]}>
                                    <Avatar size="large" className="cursor-pointer bg-transparent hover:shadow-md" icon={<BellOutlined className="text-gray-500" />} />
                                </Badge>
                            </Dropdown>
                        </div>
                        <div>
                            <Dropdown trigger={['click']} dropdownRender={(menu) => (
                                <div style={contentStyle}>
                                    <p className="text-xl font-bold mb-2 pt-5 px-5">Messages</p>
                                    <div className="flex items-center px-5 mb-2">
                                        <p className="font-bold">All <span className="font-normal">(1,234)</span></p>
                                        <Divider type="vertical" className="bg-gray-400" />
                                        <p className="text-blue-400">Latest <span className="text-black">(1,234)</span></p>
                                        <Divider type="vertical" className="bg-gray-400" />
                                        <p className="text-blue-400">Archive <span className="text-black">(34)</span></p>
                                    </div>

                                    <div className="max-h-svh overflow-hidden hover:overflow-y-scroll">
                                        {messages.map((item, index) => {
                                            return <div key={index}>
                                                <div className="flex gap-2 items-start p-4 hover:bg-gray-100 transition cursor-pointer">
                                                    <img src={item.image} alt="placeholder" className="max-w-full aspect-square rounded-md max-h-12 object-contain" />
                                                    <div className="w-44">
                                                        <p className="font-semibold">{item.name}</p>
                                                        <p className="truncate">{item.message} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque magnam, voluptas ad eaque neque maxime aliquid in fugiat minima tenetur!</p>
                                                        <div className="flex gap-2 my-1 text-gray-500">
                                                            <p>{item.time}h ago</p>
                                                            <p>{item.date}</p>
                                                        </div>
                                                        <div className="flex gap-2">
                                                            <Button size="small" type="primary" className="bg-green-500">Reply</Button>
                                                            <Button size="small" danger>Mark as read</Button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <Divider className="m-0" />
                                            </div>
                                        })}
                                        <div className="p-4">
                                            <Button type="primary" shape="round" className="w-full bg-blue-500">Load more</Button>
                                        </div>
                                    </div>
                                </div>
                            )}>
                                <Badge count={7} color="#5cb85c" offset={[-2, 5]}>
                                    <Avatar size="large" className="cursor-pointer bg-transparent hover:shadow-md" icon={<ShopOutlined className="text-gray-500" />} />
                                </Badge>
                            </Dropdown>
                        </div>
                        <div>
                            <Avatar size="large" className="cursor-pointer shadow-md bg-white" src="https://api.dicebear.com/7.x/miniavs/svg?seed=69" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-2 justify-between items-center bg-white px-4 py-2 mt-3 rounded">
                    <h1 className="text-4xl">{title}</h1>
                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-8">
                        <p>Data refreshed</p>
                        <p className="px-3 md:px-12 py-2 md:py-4 bg-gray-100 rounded">{new Date().toUTCString()}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header