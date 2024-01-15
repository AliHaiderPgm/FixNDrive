import { Dropdown, Table } from "antd"
import Header from "../../components/Header"
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
const Orders = () => {
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
    // const columns = [
    //     {
    //         title: 'Date & Time',
    //         dataIndex: 'name',
    //     },
    //     {
    //         title: 'Store Profile',
    //         dataIndex: 'test',
    //     },
    //     {
    //         title: 'SKU',
    //         dataIndex: 'createDate',
    //     },
    //     {
    //         title: 'Method',
    //         dataIndex: 'role',
    //     },
    //     {
    //         title: 'Type',
    //         key: 'action',
    //     },
    //     {
    //         title: 'Status',
    //         key: 'action',
    //         render: (current, data, index) => {
    //             return <p className="bg-blue-500 w-1/3 p-2 text-white rounded text-center">{current}</p>
    //         }
    //     },
    //     {
    //         title: 'Country',
    //         key: 'action',
    //     },
    //     {
    //         title: 'CURR',
    //         key: 'action',
    //     },
    //     {
    //         title: 'FEE',
    //         key: 'action',
    //     },
    //     {
    //         title: 'Tax',
    //         key: 'action',
    //     },
    //     {
    //         title: 'Total',
    //         key: 'action',
    //     },
    // ];
    const data = [];
    for (let i = 1; i <= 100; i++) {
        data.push({
            key: i,
            name: 'John Brown',
            imgUrl: "https://placehold.co/40",
            action: "hello",
            date: new Date().toDateString(),
            sku: Math.round(Math.random().toFixed(6) * 100000),
            role: "admin",
            method: "MasterCard",
            type: "Payment",
            orderStatus: "Waiting",
            country: "Pakistan",
            currency: "PKR",
            fee: 20,
            tax: 0.2,
            totalAmount: 200,
        });
    }
    const columns = [
        {
            title: 'Date & Time',
            dataIndex: 'date',
        },
        {
            title: 'Store Profile',
            render: (current, data, index) => {
                return <div className="flex gap-2 items-center">
                    <img src={current.imgUrl} alt="" className="rounded" />
                    <p className="text-sm">{current.name}</p>
                </div>
            }
        },
        {
            title: 'SKU',
            dataIndex: 'sku',
        },
        {
            title: 'Method',
            dataIndex: 'method',
        },
        {
            title: 'Type',
            dataIndex: 'type',
        },
        {
            title: 'Status',
            key: 'orderStatus',
            render: (current, data, index) => <p className="bg-blue-500 p-2 rounded-md text-center text-white">{current.orderStatus}</p>,
        },
        {
            title: 'Country',
            dataIndex: 'country',
        },
        {
            title: 'CURR',
            dataIndex: 'currency',
        },
        {
            title: 'Fee',
            dataIndex: 'fee',
        },
        {
            title: 'Tax',
            dataIndex: 'tax',
            render: (current, data, index) => <p>{current.tax}%</p>,
        },
        {
            title: 'Total',
            dataIndex: 'totalAmount',
            render: (current, data, index) => <p className="font-bold">{current}</p>
        },
    ];
    return (
        <div>
            <Header title="Orders" />
            <div className="flex justify-between py-4">
                <div className="flex flex-col gap-2">
                    <p className="font-semibold text-xl">Order request date from</p>
                    <p className="p-4 bg-white rounded-md border-1 shadow-sm">08/12/2023 - 08/24/2023</p>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="font-semibold text-xl">View Transactions: 6/1218</p>
                    <Dropdown menu={{ items, }} placement="bottom" className="border-1 shadow-sm">
                        <p className="bg-white cursor-pointer p-4 rounded-md hover:text-black">Sort Sellers</p>
                    </Dropdown>
                </div>
            </div>
            <div>
                <Table columns={columns} dataSource={data} scroll={{ y: 500 }} loading={false} pagination={{ position: ['bottomCenter'] }} />
            </div>
        </div>
    )
}

export default Orders