import { Avatar, Badge, Button, Input } from "antd"
import Header from "../../components/Header"
import { UserOutlined, WhatsAppOutlined } from "@ant-design/icons"
const Settings = () => {
    const user = {
        "firstName": "John",
        "lastName": "Doe",
        "email": "johndoe@example.com",
        "phoneNumber": "+1 123-456-7890",
        "country": "United States",
        "city": "New York",
        "state": "New York",
        "zip": "10001",
        "address": "123 Main St"
    }
    return (
        <div>
            <Header title="Settings" />
            <div className="grid grid-cols-4 gap-2 my-2">
                <div className="flex flex-col gap-2">
                    <div className="bg-white rounded-md shadow-lg flex flex-col items-center gap-2 p-4">
                        <Badge dot offset={[0, 90]} color="#00BA9D">
                            <Avatar icon={<UserOutlined />} size={{
                                xs: 24,
                                sm: 32,
                                md: 40,
                                lg: 64,
                                xl: 80,
                                xxl: 100,
                            }} />
                        </Badge>
                        <h1 className="text-2xl font-bold">Khan</h1>
                        <p className="bg-red-500 rounded-md py-1 px-6 text-white">Admin</p>
                        <p className="text-blue-500">last visit 9/2/2023</p>
                        <Button shape="round" className="flex items-center justify-center p-4 w-full bg-blue-500 hover:bg-blue-500/20 text-white">Log out</Button>
                    </div>
                    <div className="bg-white rounded-md shadow-lg px-10 py-4 flex flex-col gap-3">
                        <p>Notifications<span className="text-blue-500 cursor-pointer">(2)</span></p>
                        <p>Messages<span className="text-blue-500 cursor-pointer">(10)</span></p>
                    </div>
                    <div className="bg-white rounded-md shadow-lg px-10 py-4 flex flex-col gap-3">
                        <p>maria@email.com</p>
                        <p>312 3rd St, Albany,New York 12206, USA</p>
                        <p>+1 123-123-123</p>
                        <p><WhatsAppOutlined className="-ml-6" />&nbsp;&nbsp;+1 123-123-123</p>
                        <p>Profile Information file</p>
                    </div>
                </div>
                <div className="col-span-3 bg-white rounded-md shadow-lg p-4">
                    <h1 className="text-2xl font-bold">My Profile Details</h1>
                    <div className="flex">
                        <div className="w-full">
                            <div className="p-4">
                                <p className="text-xs text-gray-500">First Name</p>
                                <p className="text-xl indent-6">{user.firstName}</p>
                            </div>
                            <div className="p-4">
                                <p className="text-xs text-gray-500">Last Name</p>
                                <p className="text-xl indent-6">{user.lastName}</p>
                            </div>
                            <div className="p-4">
                                <p className="text-xs text-gray-500">Email</p>
                                <p className="text-xl indent-6">{user.email}</p>
                            </div>
                            <div className="p-4">
                                <p className="text-xs text-gray-500">Phone Number</p>
                                <p className="text-xl indent-6">{user.phoneNumber}</p>
                            </div>
                            <div className="p-4">
                                <p className="text-xs text-gray-500">Password</p>
                                <Input.Password value={user.phoneNumber} size="large" />
                            </div>
                            <Button shape="round" className="flex justify-center items-center w-1/2 p-6 bg-green-500 hover:bg-green-500/55 text-white hover:!text-white">Update Information</Button>
                        </div>
                        <div className="w-full">
                            <div className="p-4">
                                <p className="text-xs text-gray-500">Country</p>
                                <p className="text-xl indent-6">{user.country}</p>
                            </div>
                            <div className="p-4">
                                <p className="text-xs text-gray-500">City</p>
                                <p className="text-xl indent-6">{user.city}</p>
                            </div>
                            <div className="p-4">
                                <p className="text-xs text-gray-500">State</p>
                                <p className="text-xl indent-6">{user.state}</p>
                            </div>
                            <div className="p-4">
                                <p className="text-xs text-gray-500">Zip Code</p>
                                <p className="text-xl indent-6">{user.zip}</p>
                            </div>
                            <div className="p-4">
                                <p className="text-xs text-gray-500">Address</p>
                                <p className="text-xl indent-6">{user.address}</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 mt-6">
                        <h2 className="text-2xl font-bold">Admin Panel Tools</h2>
                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <p className="text-bold">Connected Apps <span className="text-blue-500">(12)</span></p>
                            </div>
                            <div>
                                <p className="text-bold">Payment Methods</p>
                            </div>
                            <div>
                                <p className="text-bold">Appearance</p>
                            </div>
                            <div>
                                <p className="text-bold">Security Assets</p>
                            </div>
                            <div>
                                <p className="text-bold">Configuration Settings</p>
                            </div>
                            <div>
                                <p className="text-bold">View Mode</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Settings