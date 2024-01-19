import { Dropdown } from "antd"
import Header from "../../components/Header"
import TopSalesChart from "../../components/TopSalesChart"
import CategoryCard from "../../components/CategoryCard"
import { AlibabaOutlined, AmazonOutlined, AppleOutlined, MobileOutlined } from "@ant-design/icons"
import ServiceSection from "../../components/ServiceSection"


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
    ]
    const TopChartItems = [
        {
            title: "Car Listing",
            total: 20000000,
            sales: 14627834,
        },
        {
            title: "Workshop Repairs",
            total: 2500000,
            sales: 1374823,
        },
        {
            title: "Workshop Repairs",
            total: 2500000,
            sales: 1374823,
        },
        {
            title: "Workshop Repairs",
            total: 2500000,
            sales: 1374823,
        },
        {
            title: "Workshop Repairs",
            total: 2500000,
            sales: 1374823,
        },
        {
            title: "Workshop Repairs",
            total: 2500000,
            sales: 1374823,
        },
        {
            title: "Workshop Repairs",
            total: 2500000,
            sales: 1374823,
        },
        {
            title: "Workshop Repairs",
            total: 2500000,
            sales: 1374823,
        },
    ]
    const CategoryItems = [
        {
            title: "Electronics",
            sales: 23000,
            icon: <MobileOutlined />,
            imageUrl: "https://placehold.co/1000x500"
        },
        {
            title: "Food & Drinks",
            sales: 18000,
            icon: <AppleOutlined />,
            imageUrl: "https://placehold.co/500"
        },
        {
            title: "Fashion",
            sales: 123000,
            icon: <AmazonOutlined />,
            imageUrl: "https://placehold.co/400x300"
        },
        {
            title: "Services",
            sales: 223000,
            icon: <AlibabaOutlined />,
            imageUrl: "https://placehold.co/700x500"
        },
    ]
    const testData = [
        {
            "name": "TV",
            "avalible": "10",
            "sold": "2",
            "image": "https://placehold.co/20",
        },
        {
            "name": "Laptop",
            "avalible": "5",
            "sold": "3",
            "image": "https://placehold.co/30"
        },
        {
            "name": "Smartphone",
            "avalible": "8",
            "sold": "1",
            "image": "https://placehold.co/40"
        },
        {
            "name": "Tablet",
            "avalible": "3",
            "sold": "4",
            "image": "https://placehold.co/50"
        }
    ]

    return (
        <div>
            <Header title="Services" />
            <div className="flex flex-col sm:flex-row justify-between py-4">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-2">
                <div className="col-span-2">
                    <TopSalesChart title="Top Sales by Categories" data={TopChartItems} />
                </div>
                {
                    CategoryItems.map((item, index) => {
                        return <div key={index} className="col-span-2 sm:col-span-1">
                            <CategoryCard data={item} />
                        </div>
                    })
                }
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 my-2">
                <div>
                    <ServiceSection title="Electronics" icon={<MobileOutlined />} iconColor="#035ECF" data={testData} />
                </div>
                <div>
                    <ServiceSection title="Fashion" icon={<AmazonOutlined />} iconColor="#FF5470" data={testData} />
                </div>
                <div>
                    <ServiceSection title="Food & Drinks" icon={<AppleOutlined />} iconColor="#00193B" data={testData} />
                </div>
                <div>
                    <ServiceSection title="Services" icon={<AlibabaOutlined />} iconColor="#F8D518" data={testData} />
                </div>
            </div>
        </div>
    )
}

export default Services