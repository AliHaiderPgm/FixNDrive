import { Button } from "antd"
import banner5 from "../../assets/banner2.png"
const Sample_5 = () => {
    return (
        <div className="bg-white rounded-md shadow-lg p-4 pt-12">
            <div className="bg-gray-100 rounded-sm shadow-sm relative h-48 w-40 mx-auto">
                <img src={banner5} alt="banner" className="max-w-auto h-auto absolute bottom-0 left-0 -translate-x-[10%] translate-y-[15%]" />
            </div>
            <div className="flex flex-col items-center gap-2 my-4">
                <h1 className="text-2xl font-bold">New Phone15 Pro</h1>
                <p>Get $200–$600 in credit toward</p>
                <Button type="link">Shop now</Button>
            </div>
        </div>
    )
}

export default Sample_5