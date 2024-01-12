import { Pagination } from "antd"
import Header from "../../components/Header"
import ProfileCard from "../../components/ProfileCard"

const UserProfiles = () => {
    const userData = [
        {
            "name": "John Doe",
            "url": "https://www.example.com",
            "address": "123 Main St, Anytown, USA",
            "number": "1234567890",
            "image": "https://placehold.co/30",
            "email": "johndoe@example.com",
            "longitude": "-123.456",
            "latitude": "45.678",
            "feeOnOrderService": "true"
        },
        {
            "name": "Jane Smith",
            "url": "https://www.example.com",
            "address": "456 Oak Ave, Anytown, USA",
            "number": "0987654321",
            "image": "https://placehold.co/40",
            "email": "janesmith@example.com",
            "longitude": "-12.345",
            "latitude": "67.890",
            "feeOnOrderService": "false"
        },
        {
            "name": "Bob Johnson",
            "url": "https://www.example.com",
            "address": "789 Elm St, Anytown, USA",
            "number": "9876543210",
            "image": "https://placehold.co/50",
            "email": "bobjohnson@example.com",
            "longitude": "-1.234",
            "latitude": "56.789",
            "feeOnOrderService": "true"
        },
        {
            "name": "Alice Williams",
            "url": "https://www.example.com",
            "address": "321 Pine Ave, Anytown, USA",
            "number": "0123456789",
            "image": "https://placehold.co/60",
            "email": "alicewilliams@example.com",
            "longitude": "-0.123",
            "latitude": "45.678",
            "feeOnOrderService": "false"
        },
        {
            "name": "Mike Davis",
            "url": "https://www.example.com",
            "address": "654 Cedar St, Anytown, USA",
            "number": "9012345678",
            "image": "https://placehold.co/70",
            "email": "mikedavis@example.com",
            "longitude": "0.012",
            "latitude": "34.567",
            "feeOnOrderService": "true"
        }
    ]
    return (
        <div>
            <Header title="User Profiles" />
            <div className="my-2 grid gap-4 rounded-md">
                {
                    userData.map((seller, index) => {
                        return <ProfileCard data={seller} key={index} />
                    })
                }
                <Pagination defaultCurrent={1} total={50} />;
            </div>
        </div>
    )
}

export default UserProfiles