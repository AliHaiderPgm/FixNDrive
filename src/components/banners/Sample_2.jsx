import shape from '../../assets/shape.svg'

const Sample_2 = () => {
    return (
        <div className="grid grid-cols-10 bg-gradient-to-tr from-gray-50 to-blue-200 rounded-md shadow-md p-4">
            <div className="col-span-7">
                <img src={shape} alt="" className="max-w-full h-auto" />
            </div>
            <div className="col-span-3 self-center -ml-4">
                <p className="text-4xl font-bold">$476.3k</p>
                <p className="-ml-4">Total Balance</p>
            </div>
        </div>
    )
}

export default Sample_2