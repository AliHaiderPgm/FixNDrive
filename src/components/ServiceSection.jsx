import ServiceCard from "./ServiceCard"

const ServiceSection = ({ title, icon, iconColor, data }) => {
    return (
        <>
            <div className="flex gap-2 py-4 items-center">
                <span className="text-xl text-white p-2 rounded-md" style={{ backgroundColor: iconColor }}>
                    {icon}
                </span>
                <span className="text-xl font-bold">{title}</span>
            </div>
            <div className="grid grid-cols-4 gap-4">
                {
                    data.map((item, index) => {
                        return <div key={index} >
                            <ServiceCard data={item} />
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default ServiceSection