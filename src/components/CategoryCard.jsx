import { formatLargeNumber } from "../global/funtions"

const CategoryCard = ({ data }) => {
    return (
        <div className="bg-white rounded-md shadow-md p-6 flex flex-col gap-4 items-center h-full cursor-pointer hover:shadow-lg transition-shadow">
            <img src={data.imageUrl} alt="alternative of image" className="h-40 w-44 object-cover max-w-full border-1 rounded" />
            <div className="flex gap-2 items-start w-full">
                <div className="text-2xl bg-black text-white p-1 rounded-md">
                    {data.icon}
                </div>
                <div>
                    <p className="font-semibold">{data.title}</p>
                    <p className="text-xl font-bold">${formatLargeNumber(data.sales)}</p>
                </div>
            </div>
        </div>
    )
}

export default CategoryCard