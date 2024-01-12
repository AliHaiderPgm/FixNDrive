import { CreditCardOutlined, MoneyCollectOutlined } from '@ant-design/icons'
import { Button, Rate, Switch } from 'antd'
import React, { useState } from 'react'

const ProfileCard = ({ data }) => {
    const [isChecked, setIsChecked] = useState(data.feeOnOrderService)
    const handleSwitch = (e) => {
        setIsChecked(e)
    }
    return (
        <div className="grid grid-cols-6 gap-4 p-4 rounded-md bg-white">
            <div>
                <img src={data.image} alt={data.name} className="max-w-full mb-2 rounded-md h-44 w-full object-cover" />
                <Button type="primary" shape="round" size='large' className="bg-[#0E335F] hover:!bg-blue-900 w-full text-white">Profile</Button>
            </div>
            <div className='flex flex-col gap-2'>
                <p className='font-semibold text-xl'>{data.name}</p>
                <p className='text-blue-500'>{data.url}</p>
                <p className='text-wrap'>{data.address}</p>
                <p>{data.number}</p>
                <p>{data.email}</p>
            </div>
            <div className='rounded-md overflow-hidden'>
                <gmp-map center={`${data.latitude},${data.longitude}`} zoom="4" map-id="DEMO_MAP_ID">
                    <gmp-advanced-marker
                        position={`${data.latitude},${data.longitude}`}
                        title={data.location}
                    ></gmp-advanced-marker>
                </gmp-map>
            </div>
            <div className='flex flex-col gap-4'>
                <p className='text-xl font-semibold'>Statistics:</p>
                <div className='flex items-start gap-2'>
                    <CreditCardOutlined className='bg-green-600 text-white p-1 rounded-md shadow text-3xl' />
                    <div>
                        <p className='text-xl font-semibold leading-none'>234</p>
                        <p className='text-gray-500'>New Order</p>
                    </div>
                </div>
                <div className='flex items-start gap-2'>
                    <MoneyCollectOutlined className='bg-[#0E335F] text-white p-1 rounded-md shadow text-3xl' />
                    <div>
                        <p className='text-xl font-semibold leading-none'>$234k</p>
                        <p className='text-gray-500'>Income</p>
                    </div>
                </div>
                <p className='text-xl font-semibold'>Reviews</p>
                <Rate disabled defaultValue={2} />
            </div>
            <div>
                <p className='text-xl font-semibold'>Fee on ordering Service</p>
                <div className='customSwitch mt-8'>
                    <Switch value={isChecked} onChange={handleSwitch} className='!h-14 !w-24 bg-red-700' />
                </div>
            </div>
            <div className='flex flex-col items-center justify-center gap-4'>
                <Button type='primary' size='large' className='w-full bg-green-600 hover:!bg-green-500'>Activate</Button>
                <Button type='primary' size='large' className='w-full bg-[#a41f1f] hover:!bg-red-600'>Suspend Account</Button>
            </div>
        </div>
    )
}

export default ProfileCard