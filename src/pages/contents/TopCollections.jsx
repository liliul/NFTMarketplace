
import TopCard1 from '../../assets/card1-top-collections.jpg'

export default function TopCollections() {
    return (

        <>
            <section className="w-full h-[599px] mt-[144px]">
                <div className="ml-28 flex justify-between items-center  w-[1166px]">
                    <h1 className="text-xl text-white font-fontMontserrat font-bold">Top Collections</h1>
                    <span className="text-sm font-bold text-gradient">View All</span>
                </div>

                <section className="w-[1166px] ml-28 mt-11">
                    <article className="w-[286px] h-[367px] rounded-[31px] border ">
                        <div className="">
                            <img src={TopCard1} className='overflow-hidden rounded-t-[31px]' alt="Collections img" />
                        </div>

                        <div className="">
                            <div className="">
                                <img src="" alt="" />
                                <div className="">
                                    <h1>World of Women Galaxy</h1>
                                    <div className="">
                                        <p>By  Organization Woman</p>
                                        <img src="" alt="" />
                                    </div>
                                </div>
                            </div>

                            <hr />

                            <div>
                                <p>Price</p>
                                <b>0.218 ETH</b>
                            </div>
                        </div>
                    </article>
                </section>
            </section>
        </>
    )
}