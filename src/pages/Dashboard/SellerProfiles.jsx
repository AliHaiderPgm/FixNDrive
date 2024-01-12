import { Pagination } from "antd"
import Header from "../../components/Header"
import ProfileCard from "../../components/ProfileCard"

const SellerProfiles = () => {
    const sellerData = [
        {
            "name": "John's Shop",
            "url": "www.johnsshop.com",
            "address": "123 Main St",
            "number": "555-123-4567",
            "image": "https://placehold.co/123",
            "email": "john@johnsshop.com",
            "longitude": "-73.987",
            "latitude": "40.123",
            "feeOnOrderService": "true"
        },
        {
            "name": "Jane's Shop",
            "url": "www.janesshop.com",
            "address": "456 Elm St",
            "number": "555-987-6543",
            "image": "https://placehold.co/456",
            "email": "jane@janesshop.com",
            "longitude": "-74.567",
            "latitude": "39.876",
            "feeOnOrderService": "false"
        },
        {
            "name": "Mike's Shop",
            "url": "www.mikesshop.com",
            "address": "789 Oak St",
            "number": "555-456-7890",
            "image": "https://placehold.co/789",
            "email": "mike@mikesshop.com",
            "longitude": "-75.432",
            "latitude": "38.765",
            "feeOnOrderService": "true"
        },
        {
            "name": "Sara's Shop",
            "url": "www.sarasshop.com",
            "address": "321 Pine St",
            "number": "555-789-0123",
            "image": "https://placehold.co/321",
            "email": "sara@sarasshop.com",
            "longitude": "-76.543",
            "latitude": "37.654",
            "feeOnOrderService": "false"
        },
        {
            "name": "Tom's Shop",
            "url": "www.tomsshop.com",
            "address": "654 Maple St",
            "number": "555-012-3456",
            "image": "https://placehold.co/654",
            "email": "tom@tomsshop.com",
            "longitude": "-77.654",
            "latitude": "36.543",
            "feeOnOrderService": "true"
        },
        {
            "name": "Amy's Shop",
            "url": "www.amysshop.com",
            "address": "987 Birch St",
            "number": "555-345-6789",
            "image": "https://placehold.co/987",
            "email": "amy@amysshop.com",
            "longitude": "-78.765",
            "latitude": "35.432",
            "feeOnOrderService": "false"
        },
        {
            "name": "Chris's Shop",
            "url": "www.chrissshop.com",
            "address": "210 Cedar St",
            "number": "555-678-9012",
            "image": "https://placehold.co/210",
            "email": "chris@chrissshop.com",
            "longitude": "-79.876",
            "latitude": "34.321",
            "feeOnOrderService": "true"
        },
        {
            "name": "Lisa's Shop",
            "url": "www.lisasshop.com",
            "address": "543 Walnut St",
            "number": "555-901-2345",
            "image": "https://placehold.co/543",
            "email": "lisa@lisasshop.com",
            "longitude": "-80.987",
            "latitude": "33.210",
            "feeOnOrderService": "false"
        },
        {
            "name": "Steve's Shop",
            "url": "www.stevesshop.com",
            "address": "876 Oak St",
            "number": "555-234-5678",
            "image": "https://placehold.co/876",
            "email": "steve@stevesshop.com",
            "longitude": "-81.098",
            "latitude": "32.109",
            "feeOnOrderService": "true"
        },
        {
            "name": "Emily's Shop",
            "url": "www.emilysshop.com",
            "address": "109 Pine St",
            "number": "555-567-8901",
            "image": "https://placehold.co/109",
            "email": "emily@emilysshop.com",
            "longitude": "-82.109",
            "latitude": "31.098",
            "feeOnOrderService": "false"
        },
        {
            "name": "Mark's Shop",
            "url": "www.marksshop.com",
            "address": "432 Elm St",
            "number": "555-890-1234",
            "image": "https://placehold.co/432",
            "email": "mark@marksshop.com",
            "longitude": "-83.210",
            "latitude": "30.987",
            "feeOnOrderService": "true"
        },
        {
            "name": "Olivia's Shop",
            "url": "www.oliviasshop.com",
            "address": "765 Maple St",
            "number": "555-123-4567",
            "image": "https://placehold.co/765",
            "email": "olivia@oliviasshop.com",
            "longitude": "-84.321",
            "latitude": "29.876",
            "feeOnOrderService": "false"
        }
    ]
    return (
        <div>
            <Header title="Seller Profiles" />
            <div className="my-2 grid gap-4 rounded-md">
                {
                    sellerData.map((seller, index) => {
                        return <ProfileCard data={seller} key={index} />
                    })
                }
                <Pagination defaultCurrent={1} total={50} />;
            </div>
        </div>
    )
}

export default SellerProfiles