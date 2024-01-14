import { useEffect, useState } from "react"
import { formatLargeNumber } from "../global/funtions"

const TopSalesChart = ({ title, data }) => {
    const [width, setWidth] = useState([])
    useEffect(() => {
        const arr = data.map(item => {
            return item.sales * 100 / item.total
        })
        setWidth(arr)
    }, [data])

    return (
        <div className="bg-white rounded-md shadow-md p-4">
            <p className="text-xl font-bold">{title}</p>
            <div className="h-56 overflow-hidden hover:overflow-y-scroll p-4" style={{ scrollbarGutter: "stable", scrollbarWidth: "thin" }}>
                {
                    data.map((item, index) => {
                        const percent = item.sales * 100 / item.total;
                        return <div key={index} className="my-2 overflow-x-hidden">
                            <div className="flex justify-between mb-1">
                                <p className="font-bold text-gray-500">{item.title}</p>
                                <p className="font-bold">${formatLargeNumber(item.sales)}</p>
                            </div>
                            <div className="bg-gray-100 h-4 rounded-md relative overflow-hidden">
                                <span className="rounded absolute top-0 left-0 h-full bg-black" style={{ width: `${percent}%` }} />
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default TopSalesChart