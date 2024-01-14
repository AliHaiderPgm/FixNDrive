
const ServiceCard = ({ data }) => {
    return (
        <div className="bg-white p-4 rounded-md shadow-md hover:shadow-lg cursor-pointer transition-shadow">
            <img src={data.image} alt={data.name} className="h-48 w-full object-cover rounded-md max-w-full" />
            <p className="font-bold">{data.name}</p>
            <div>
                <p className="text-green-500 font-semibold">Available : {data.avalible}</p>
                <p className="text-blue-500 font-semibold">Sold : {data.sold}</p>
            </div>
        </div>
    )
}

export default ServiceCard