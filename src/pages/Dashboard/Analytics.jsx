import Header from "../../components/Header"
import Logo from "../../assets/logo.png"
import shape from "../../assets/shape.svg"
import { FundOutlined, RiseOutlined, ShopOutlined, ShoppingOutlined, UserOutlined } from "@ant-design/icons"
import Chart from "react-apexcharts";
import { Button } from "antd";
import Sample_2 from "../../components/banners/Sample_2";

const Analytics = () => {
    const data = {

        series: [{
            name: 'Revenue',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 99, 89, 30]
        }, {
            name: 'Expenses',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 69, 45, 10]
        },
        ],
        options: {
            chart: {
                type: 'bar',
                height: 350,
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'rounded',
                    borderRadius: 7,
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            },
            yaxis: {
                title: {
                    text: '$ (thousands)'
                }
            },
            fill: {
                opacity: 1
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return "$ " + val + " thousands"
                    }
                }
            },
            theme: {
                monochrome: {
                    enabled: true,
                    color: '#222',
                    shadeTo: 'light',
                    shadeIntensity: 1.2
                }
            }
        },

        responsive: [
            {
                breakpoint: 1000,
                options: {
                    plotOptions: {
                        bar: {
                            horizontal: true,
                        },
                    },
                }
            }
        ]

    };
    return (
        <div>
            <Header title="Analytics" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">

                <div className="col-span-2 grid grid-cols-1 lg:grid-cols-5 gap-4 bg-white p-4 rounded shadow-md overflow-hidden">
                    <div className=" bg-gray-50 rounded lg:col-span-2">
                        <img src={Logo} alt="FixNDrive" className="max-w-full object-contain h-full" />
                    </div>
                    <div className="col-span-3 flex flex-col gap-4">
                        <p className="text-4xl font-semibold uppercase mb-1">FixNDrive</p>
                        <p className="text-lg">FixNDrive offers complete auto care for your vehicle. Whether it’s time for your next factory recommended maintenance visit, a routine oil change, new tires, or repair services</p>
                        <p className="text-xl font-bold leading-6">Average Rate 2023</p>
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                            <div className="flex justify-center md:justify-normal gap-2">
                                <div>
                                    <UserOutlined className="bg-green-600 text-white p-2 text-3xl rounded-md" />
                                </div>
                                <div>
                                    <p className="text-2xl xl:text-3xl font-semibold">1200</p>
                                    <p className="text-gray-500">Users</p>
                                    <p className="text-green-600 mt-1">+45.00%</p>
                                </div>
                            </div>
                            <div className="flex justify-center md:justify-normal gap-2">
                                <div>
                                    <ShopOutlined className="bg-red-400 text-white p-2 text-3xl rounded-md" />
                                </div>
                                <div>
                                    <p className="text-2xl xl:text-3xl font-semibold">200</p>
                                    <p className="text-gray-500">Service Provider</p>
                                    <p className="text-red-600 mt-1">-12%</p>
                                </div>
                            </div>
                            <div className="flex justify-center md:justify-normal gap-2 col-span-1 sm:col-span-1 md:col-span-1">
                                <div>
                                    <ShoppingOutlined className="bg-blue-700 text-white p-2 text-3xl rounded-md" />
                                </div>
                                <div>
                                    <p className="text-2xl xl:text-3xl font-semibold">5234</p>
                                    <p className="text-gray-500">New Orders</p>
                                    <p className="text-green-600 mt-1">+14.56%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Sample_2 />

            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 mt-4 gap-4">
                <div className="col-span-2 bg-white shadow-md rounded-md p-4">
                    <Chart
                        options={data.options}
                        series={data.series}
                        type="bar"
                        width="100%"
                        height="400"
                    />
                </div>
                <div className="bg-white rounded-md p-4 md:p-1 shadow-md flex flex-col justify-between">
                    <div>
                        <h1 className="text-2xl font-bold">Total Report</h1>
                        <p className="text-gray-500">All Periods per 01/01/2022 - 08/282023</p>
                    </div>
                    <div className="flex flex-col xs:flex-row mb-1 items-center gap-4 md:gap-1 xl:gap-4 bg-gray-50 rounded-md p-4 md:p-0 xl:p-4">
                        <UserOutlined className="p-2 text-2xl bg-gray-200 rounded-md" />
                        <p className="font-bold">User Spendings</p>
                        <p className="font-semibold">$247.65</p>
                        <p className="text-green-500">+45.00%</p>
                    </div>
                    <div className="flex flex-col xs:flex-row mb-1 items-center gap-4 md:gap-1 xl:gap-4 bg-gray-50 rounded-md p-4 md:p-0 xl:p-4">
                        <FundOutlined className="p-2 text-2xl bg-gray-200 rounded-md" />
                        <p className="font-bold">Service Providers</p>
                        <p className="font-semibold">$357.65</p>
                        <p className="text-red-500">-02.00%</p>
                    </div>
                    <div className="flex flex-col xs:flex-row mb-1 items-center gap-4 md:gap-1 xl:gap-4 bg-gray-50 rounded-md p-4 md:p-0 xl:p-4">
                        <RiseOutlined className="p-2 text-2xl bg-gray-200 rounded-md" />
                        <p className="font-bold">Profits</p>
                        <p className="font-semibold">$997.65</p>
                        <p className="text-green-500">+45.00%</p>
                    </div>
                    <Button size="large" className="text-white bg-red-800 hover:bg-red-700 hover:!text-gray-200">More Details</Button>
                </div>
            </div>
        </div>
    )
}

export default Analytics