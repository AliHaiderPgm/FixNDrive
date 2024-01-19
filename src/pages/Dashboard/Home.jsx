import { AppstoreOutlined, BellFilled, DeleteOutlined, DownOutlined, EditOutlined, PlusOutlined, UserOutlined } from "@ant-design/icons"
import { Avatar, Button, Checkbox, Col, Dropdown, Form, Input, Modal, Row, Select, Space, Table } from "antd"
import { useState } from "react";

const Home = () => {
    const [isModalOpen, setIsModelOpen] = useState(false)
    const [form] = Form.useForm()
    const items = [
        {
            key: 'test1',
            label: (<p>Test item 1</p>),
        },
        {
            key: 'test2',
            label: (<p>Test item 2</p>),
        },
        {
            key: 'test3',
            label: (<p>Test item 3</p>),
        },
    ];
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            render: (current, data, index) => {
                return <>
                    <p>{current}</p>
                    <p className="text-sm text-gray-400">{data.address}</p>
                </>
            }
        },
        {
            title: '',
            dataIndex: 'test',
        },
        {
            title: 'Create Date',
            dataIndex: 'createDate',
        },
        {
            title: 'Role',
            dataIndex: 'role',
            render: (current, data, index) => {
                return <p className="bg-blue-500 w-full lg:w-1/2 p-2 text-white rounded text-center">{current}</p>
            }
        },
        {
            title: 'Action',
            key: 'action',
            render: () => (
                <div className="flex gap-4 text-xl text-gray-400">
                    <EditOutlined />
                    <DeleteOutlined />
                </div>
            ),
        },
    ];
    const data = [];
    for (let i = 1; i <= 100; i++) {
        data.push({
            key: i,
            name: 'John Brown',
            createDate: new Date().toDateString(),
            role: "admin",
            address: `New York No. ${i} Lake Park`,
            test: "lorem ipsum",
            description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
        });
    }
    const handleUser = () => {
        setIsModelOpen(true)
    }
    const handleForm = async () => {
        try {
            await form.validateFields() //validate Form
            const state = form.getFieldsValue()
            console.log(state)
        } catch {
            console.log("invalid form")
        }

    }
    return (
        <>
            <div className="flex flex-col gap-6">
                <header className="flex flex-col sm:flex-row justify-between gap-6">
                    <div className="flex justify-between w-full">
                        <div>
                            <h3 className="text-2xl font-semibold">Hello, Khan</h3>
                            <p>Have a nice day</p>
                        </div>
                        <BellFilled className="text-2xl cursor-pointer" />
                    </div>
                    <div className="vl hidden sm:block"></div>
                    <Dropdown menu={{ items, selectable: true, style: { width: 200 } }} className="cursor-pointer">
                        <div className="flex gap-4 items-center">
                            <Avatar icon={<UserOutlined />} />
                            <div>
                                <h3 className="text-base font-medium">Khan</h3>
                                <p className="text-xs">Admin</p>
                            </div>
                            <DownOutlined />
                        </div>
                    </Dropdown>
                </header>
                <div>
                    <h1 className="text-2xl text-blue-500 font-bold mb-3">Users Dashboard</h1>
                    <div className="flex gap-4 items-center flex-wrap justify-center">
                        <Input size="large" className="p-2 rounded-2xl md:max-w-[50%]" placeholder="Search" prefix={<UserOutlined className="mr-1" />} />
                        <Button type="primary" className="bg-blue-500" size="large" onClick={handleUser}>
                            Add user <PlusOutlined className="align-middle" />
                        </Button>
                        <Dropdown menu={{ items, selectable: true, style: { width: 200 } }} className="cursor-pointer">
                            <Space>
                                <h3 className="text-base font-medium">Sort</h3>
                                <DownOutlined />
                            </Space>
                        </Dropdown>
                        <Dropdown menu={{ items, style: { width: 200 } }} className="cursor-pointer">
                            <Space>
                                <h3 className="text-base font-medium text-nowrap">Saved Search</h3>
                                <DownOutlined />
                            </Space>
                        </Dropdown>
                        <AppstoreOutlined className="text-xl cursor-pointer" />
                    </div>
                </div>
                <div>
                    <Table columns={columns} dataSource={data} scroll={{ x: 600, y: 500 }} loading={false} pagination={{ position: ['bottomCenter'] }} />
                </div>
            </div>
            <Modal
                title="Add User"
                open={isModalOpen}
                width={750}
                okText="Add User"
                okButtonProps={{ className: "bg-blue-500" }}
                onOk={handleForm}
                cancelText="Cancel"
                onCancel={() => setIsModelOpen(false)}
            >
                <AddUserForm form={form} />
            </Modal>
        </>
    )
}

const AddUserForm = ({ form }) => {
    const CheckBoxTemp = ({ title }) => {
        return <>
            <Row className="px-2">
                <Col span={12}>
                    <p>{title}</p>
                </Col>
                <Col span={4}>
                    <Checkbox value="read"></Checkbox>
                </Col>
                <Col span={4}>
                    <Checkbox value="write"></Checkbox>
                </Col>
                <Col span={4}>
                    <Checkbox value="delete"></Checkbox>
                </Col>
            </Row>
        </>
    }
    return <>
        <Form
            form={form}
        >
            <Form.Item
                name="userId"
                rules={[
                    {
                        required: true,
                        message: 'User Id is required!',
                    },
                ]} >
                <Input placeholder="User Id" size="large" />
            </Form.Item>
            <div className="flex gap-4">
                <Form.Item
                    name="firstName"
                    className="w-full"
                    rules={[
                        {
                            required: true,
                            message: 'User first name is required!',
                        },
                    ]} >
                    <Input placeholder="First Name" size="large" />
                </Form.Item>
                <Form.Item
                    name="lastName"
                    className="w-full"
                    rules={[
                        {
                            required: true,
                            message: 'User last name is required!',
                        },
                    ]} >
                    <Input placeholder="Last Name" size="large" />
                </Form.Item>
            </div>
            <div className="flex gap-4">
                <Form.Item
                    name="email"
                    className="w-full"
                    rules={[
                        {
                            required: true,
                            message: 'Email is required!',
                        },
                    ]} >
                    <Input placeholder="Email ID" size="large" />
                </Form.Item>

                <Form.Item
                    name="mobileNumber"
                    className="w-full"
                    rules={[
                        {
                            required: true,
                            message: 'Mobile number is required!',
                        },
                    ]} >
                    <Input type="number" placeholder="Mobile Number" size="large" />
                </Form.Item>

                <Form.Item
                    name="role"
                    className="w-full"
                    rules={[
                        {
                            required: true,
                            message: 'Select user role!',
                        },
                    ]} >
                    <Select
                        placeholder="Select Role Type"
                        size="large"
                        options={[
                            {
                                value: 'jack',
                                label: 'Jack',
                            },
                            {
                                value: 'lucy',
                                label: 'Lucy',
                            },
                            {
                                value: 'Yiminghe',
                                label: 'yiminghe',
                            },
                            {
                                value: 'disabled',
                                label: 'Disabled',
                                disabled: true,
                            },
                        ]}
                    />
                </Form.Item>

            </div>
            <div className="flex gap-4">
                <Form.Item
                    name="userName"
                    className="w-full"
                    rules={[
                        {
                            required: true,
                            message: 'User name is required!',
                        },
                    ]} >
                    <Input placeholder="User Name" size="large" />
                </Form.Item>
                <Form.Item
                    name="password"
                    className="w-full"
                    rules={[
                        {
                            required: true,
                            message: 'Password is required!',
                        },
                    ]} >
                    <Input.Password placeholder="Password" size="large" />
                </Form.Item>
                <Form.Item
                    name="confirmPassword"
                    className="w-full"
                    rules={[
                        {
                            required: true,
                            message: 'Confirm password!',
                        },
                    ]} >
                    <Input.Password placeholder="Confirm Password" size="large" />
                </Form.Item>
            </div>

            <div className="py-4 mb-4 rounded-md bg-blue-50 ">
                <Row className="px-2">
                    <Col span={12}>
                        <p>Module Permissions</p>
                    </Col>
                    <Col span={4}>
                        <p>Read</p>
                    </Col>
                    <Col span={4}>
                        <p>Write</p>
                    </Col>
                    <Col span={4}>
                        <p>Delete</p>
                    </Col>
                </Row>
            </div>
            <Form.Item name="superAdminPermissions" rules={[
                {
                    required: true,
                    message: 'Set Permissions!',
                },
            ]} >
                <Checkbox.Group className="w-full">
                    <CheckBoxTemp title="Super Admin" />
                </Checkbox.Group>
            </Form.Item>
            <Form.Item name="adminPermissions" rules={[
                {
                    required: true,
                    message: 'Set Permissions!',
                },
            ]} >
                <Checkbox.Group className="w-full">
                    <CheckBoxTemp title="Admin" />
                </Checkbox.Group>
            </Form.Item>
            <Form.Item name="employeePermissions" rules={[
                {
                    required: true,
                    message: 'Set Permissions!',
                },
            ]} >
                <Checkbox.Group className="w-full">
                    <CheckBoxTemp title="Employee" />
                </Checkbox.Group>
            </Form.Item>
            <Form.Item name="loremIpsum">
                <Checkbox.Group className="w-full">
                    <CheckBoxTemp title="Lorem Ipsum" />
                </Checkbox.Group>
            </Form.Item>
        </Form>
    </>
}


export default Home