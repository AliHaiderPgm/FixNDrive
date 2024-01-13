import { Dropdown, Space } from "antd"
import Header from "../../components/Header"
import { DownOutlined } from "@ant-design/icons"


const Services = () => {
    const items = [
        {
            key: '1',
            label: <p>Top Seller</p>,
        },
        {
            key: '2',
            label: <p>Best Seller</p>,
        },
        {
            key: '3',
            label: <p>Test Seller</p>,
        },
    ];
    return (
        <div>
            <Header title="Services" />
            <div className="flex justify-between py-4">
                <div className="flex flex-col gap-2">
                    <p className="font-semibold text-xl">Sales Period</p>
                    <p className="p-4 bg-white rounded-md border-1 shadow-sm">08/12/2023 - 08/24/2023</p>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="font-semibold text-xl">View Products: 9/18</p>
                    <Dropdown menu={{ items, }} placement="bottom" className="border-1 shadow-sm">
                        <p className="bg-white cursor-pointer p-4 rounded-md hover:text-black">Sort Sellers</p>
                    </Dropdown>
                </div>
            </div>
        </div>
    )
}

export default Services