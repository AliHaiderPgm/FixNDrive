import Header from "../../components/Header"
import Sample_1 from "../../components/banners/Sample_1"
import Sample_10 from "../../components/banners/Sample_10"
import Sample_2 from "../../components/banners/Sample_2"
import Sample_3 from "../../components/banners/Sample_3"
import Sample_4 from "../../components/banners/Sample_4"
import Sample_5 from "../../components/banners/Sample_5"
import Sample_6 from "../../components/banners/Sample_6"
import Sample_7 from "../../components/banners/Sample_7"
import Sample_8 from "../../components/banners/Sample_8"
import Sample_9 from "../../components/banners/Sample_9"
const Banners = () => {
    return (
        <>
            <Header title="Banners & Offers" />
            <div className="grid grid-cols-4 gap-2 mt-2">
                <div className="col-span-3">
                    <div className="grid grid-cols-9 gap-2 mb-2">
                        <div className="col-span-4">
                            <Sample_1 />
                        </div>
                        <div className="col-span-4">
                            <Sample_2 />
                        </div>
                        <div>
                            <Sample_3 />
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        <div>
                            <Sample_5 />
                        </div>
                        <div>
                            <Sample_6 />
                        </div>
                        <div>
                            <Sample_7 />
                        </div>
                    </div>
                </div>
                <div>
                    <Sample_4 />
                </div>
            </div>
            <div className="grid grid-cols-4 gap-6 my-2">
                <div className="col-span-3 grid grid-cols-2 gap-2">
                    <div>
                        <Sample_8 />
                    </div>
                    <div>
                        <Sample_9 />
                    </div>
                </div>
                <div>
                    <Sample_10 />
                </div>
            </div>
        </>
    )
}

export default Banners