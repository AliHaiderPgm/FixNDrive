import { Button } from "antd"
const Sample_6 = () => {
    return (
        <div className="bg-yellow-400 outline-dashed outline-red-500 outline-2 rounded-md shadow-lg p-4 pt-12">
            <div className="bg-gray-200 rounded-sm shadow-sm relative h-48 w-40 mx-auto">
            </div>
            <div className="flex flex-col items-center gap-2 my-4">
                <h1 className="text-5xl font-bold text-red-500">Hot Offer!</h1>
                <Button className="bg-white text-red-500 hover:!text-red-400 w-2/3 flex items-center justify-center p-6" shape="round">Get Discount</Button>
            </div>
        </div>
    )
}

export default Sample_6