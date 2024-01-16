import { Button } from "antd"
import shape1 from "../../assets/shape.svg"
import shape2 from "../../assets/shape2.png"
const Sample_4 = () => {
    return (
        <div className="flex flex-col justify-center bg-white shadow-lg rounded-md overflow-hidden h-full py-6">
            <div className="relative">
                <img src={shape1} alt="" className="max-w-full h-auto ml-4" />
                <img src={shape2} alt="" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-full h-auto" />
            </div>
            <div className="p-4 flex flex-col gap-4 items-center text-center">
                <h1 className="text-4xl font-bold">Worldwide Transactions</h1>
                <p>100% Open Source - No sign up required</p>
                <Button className="bg-[#00BA9D] text-white w-2/3" size="large" shape="round">Try For Free</Button>
            </div>
        </div>
    )
}

export default Sample_4