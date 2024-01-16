import Banner1 from "../../assets/banner1.png"
const Sample_1 = () => {
    return (
        <div className="relative">
            <div className="flex flex-col gap-2 justify-center rounded-md shadow-lg p-4 bg-gradient-to-tr from-[#00214D] via-[#3E80D3] via-60%
         to-[#01285A] h-52 text-white">
                <div className="w-1/2">
                    <h1 className="text-4xl font-bold">Get Up to 70% off</h1>
                    <p>subscribe</p>
                </div>
            </div>
            <img src={Banner1} alt="Discount" className="max-w-full h-auto absolute top-0 right-0" />
        </div>
    )
}

export default Sample_1