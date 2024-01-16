import { BarChartOutlined } from "@ant-design/icons"
import banner3 from "../../assets/banner3.png"

const Sample_3 = () => {
    return (
        <div className="bg-[#00BA9D] rounded-md shadow-lg overflow-hidden h-full relative">
            <div className=" text-white flex flex-col items-center p-4">
                <BarChartOutlined className="text-2xl bg-blue-600 p-2 rounded-md relative z-10" />
                <h1 className="text-2xl font-semibold relative z-10">$32,987</h1>
                <p className="relative z-10">Transactions</p>
            </div>
            <img src={banner3} alt="banner 3" className="max-w-full h-auto absolute bottom-6 left-0" />
        </div>
    )
}

export default Sample_3