import banner7 from "../../assets/banner5.png"
const Sample_7 = () => {
    return (
        <div className="rounded-md shadow-lg h-full relative" style={{ background: "radial-gradient(circle, rgba(62,128,211,1) 0%, rgba(1,40,90,1) 100%)" }}>
            <img src={banner7} alt="banner" className="max-w-full h-auto" />
            <div className="flex flex-col items-center text-white p-4 absolute top-2/3">
                <h1 className="text-2xl font-bold ">Security Payments</h1>
                <p className="text-center">Secure e-commerce platform and payment provider</p>
            </div>
        </div>
    )
}

export default Sample_7