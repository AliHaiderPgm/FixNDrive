import shape from '../../assets/shape.svg'

const Sample_2 = () => {
    return (
        <div className="flex items-center justify-center gap-2 relative bg-gradient-to-tr from-gray-50 to-blue-200 rounded-md shadow-md p-4 overflow-hidden">
            <div className="absolute lg:static">
                <img src={shape} alt="" className="max-w-full h-auto" />
            </div>
            <div className="self-center md:-ml-4">
                <p className="text-4xl font-bold">$476.3k</p>
                <p className="md:-ml-4">Total Balance</p>
            </div>
        </div>
    )
}

export default Sample_2