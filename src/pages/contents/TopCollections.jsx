
import TopCard1 from '../../assets/card1-top-collections.jpg'
import TopCard2 from '../../assets/card2-top-collections.jpg'
import TopCard3 from '../../assets/card3-top-collections.jpg'
import TopCard4 from '../../assets/card4-top-collections.jpg'
import TopCard5 from '../../assets/card5-top-collections.jpg'
import TopCard6 from '../../assets/card6-top-collections.jpg'
import TopCard7 from '../../assets/card7-top-collections.jpg'
import TopCard8 from '../../assets/card8-top-collections.jpg'

import ProfileCollec1 from '../../assets/collection-card1.jpg'
import ProfileCollec2 from '../../assets/collection-card2.jpg'
import ProfileCollec3 from '../../assets/collection-card3.jpg'
import ProfileCollec4 from '../../assets/collection-card4.jpg'
import ProfileCollec5 from '../../assets/collection-card5.jpg'
import ProfileCollec6 from '../../assets/collection-card6.jpg'
import ProfileCollec7 from '../../assets/collection-card7.jpg'
import ProfileCollec8 from '../../assets/collection-card8.jpg'

import Verified from '../../assets/icon-verified.svg'

import ImgCollec from '../../assets/background.png'

export default function TopCollections() {
    return (

        <>
            <section className="w-full h-auto mt-[144px] pb-16 relative">
                <img src={ImgCollec} className='img-collections w-full h-full' alt="img" />
                <div className="xl:ml-28 px-3 xl:px-0  flex justify-between items-center xl:w-[1166px]">
                    <h1 className="text-xl text-white font-fontMontserrat font-bold">Top Collections</h1>
                    <span className="text-sm font-bold text-gradient">View All</span>
                </div>

                <section className="xl:w-[1166px] h-auto px-3 xl:px-0  xl:ml-28 mt-11 grid-collections">
                    <article className="h-full rounded-[31px] border  border-[#73E0A9]">
                        <div className="overflow-hidden w-full ">
                            <img src={TopCard1} className='w-full rounded-t-[31px]' alt="Collections img" />
                        </div>

                        <div className="px-4 pb-4">
                            <div className="p-5 flex items-center bg-[#1F1D2B]">
                                <img src={ProfileCollec1} className='rounded-full overflow-hidden' alt="Profile Img" />
                                <div className="ml-2">
                                    <h1 className='text-white font-fontMontserrat font-bold text-[10px]'>World of Women Galaxy</h1>
                                    <div className="flex">
                                        <p className='text-[10px] text-white mr-2'>By  Organization Woman</p>
                                        <img src={Verified} width="11px" alt="Verified icon" />
                                    </div>
                                </div>
                            </div>

                            <hr className='hr-gradient h-[1px] w-full' />

                            <div className='p-4 bg-[#1F1D2B] rounded-b-[17px]'>
                                <p className='text-white font-fontUbuntu text-sm'>Price</p>
                                <b className='text-white font-fontUbuntu text-sm'>0.218 ETH</b>
                            </div>
                        </div>
                    </article>

                    <article className=" h-full rounded-[31px] border  border-[#73E0A9]">
                        <div className="overflow-hidden w-full">
                            <img src={TopCard2} className='w-full rounded-t-[31px]' alt="Collections img" />
                        </div>

                        <div className="px-4 pb-4">
                            <div className="p-5 flex items-center bg-[#1F1D2B]">
                                <img src={ProfileCollec2} className='rounded-full overflow-hidden' alt="Profile Img" />
                                <div className="ml-2">
                                    <h1 className='text-white font-fontMontserrat font-bold text-[10px]'>World of Women Galaxy</h1>
                                    <div className="flex">
                                        <p className=' text-white mr-2 text-[10px]'>By  Organization Woman</p>
                                        <img src={Verified} width="11px" alt="Verified icon" />
                                    </div>
                                </div>
                            </div>

                            <hr className='hr-gradient h-[1px] w-full' />

                            <div className='p-4 bg-[#1F1D2B] rounded-b-[17px]'>
                                <p className='text-white font-fontUbuntu text-sm'>Price</p>
                                <b className='text-white font-fontUbuntu text-sm'>0.218 ETH</b>
                            </div>
                        </div>
                    </article>

                    <article className="w-full h-full rounded-[31px] border  border-[#73E0A9]">
                        <div className="overflow-hidden w-full">
                            <img src={TopCard3} className='w-full rounded-t-[31px]' alt="Collections img" />
                        </div>

                        <div className="px-4 pb-4">
                            <div className="p-5 flex items-center bg-[#1F1D2B]">
                                <img src={ProfileCollec3} className='rounded-full overflow-hidden' alt="Profile Img" />
                                <div className="ml-2">
                                    <h1 className='text-white font-fontMontserrat font-bold text-[10px]'>World of Women Galaxy</h1>
                                    <div className="flex">
                                        <p className='text-[10px] text-white mr-2'>By  Organization Woman</p>
                                        <img src={Verified} width="11px" alt="Verified icon" />
                                    </div>
                                </div>
                            </div>

                            <hr className='hr-gradient h-[1px] w-full' />

                            <div className='p-4 bg-[#1F1D2B] rounded-b-[17px]'>
                                <p className='text-white font-fontUbuntu text-sm'>Price</p>
                                <b className='text-white font-fontUbuntu text-sm'>0.218 ETH</b>
                            </div>
                        </div>
                    </article>

                    <article className="h-full rounded-[31px] border  border-[#73E0A9]">
                        <div className="overflow-hidden w-full">
                            <img src={TopCard4} className='w-full rounded-t-[31px]' alt="Collections img" />
                        </div>

                        <div className="px-4 pb-4">
                            <div className="p-5 flex items-center bg-[#1F1D2B]">
                                <img src={ProfileCollec4} className='rounded-full overflow-hidden' alt="Profile Img" />
                                <div className="ml-2">
                                    <h1 className='text-white font-fontMontserrat font-bold text-[10px]'>World of Women Galaxy</h1>
                                    <div className="flex">
                                        <p className='text-[10px] text-white mr-2'>By  Organization Woman</p>
                                        <img src={Verified} width="11px" alt="Verified icon" />
                                    </div>
                                </div>
                            </div>

                            <hr className='hr-gradient h-[1px] w-full' />

                            <div className='p-4 bg-[#1F1D2B] rounded-b-[17px]'>
                                <p className='text-white font-fontUbuntu text-sm'>Price</p>
                                <b className='text-white font-fontUbuntu text-sm'>0.218 ETH</b>
                            </div>
                        </div>
                    </article>

                    <article className="h-full rounded-[31px] border  border-[#73E0A9]">
                        <div className="overflow-hidden w-full">
                            <img src={TopCard5} className='w-full rounded-t-[31px]' alt="Collections img" />
                        </div>

                        <div className="px-4 pb-4">
                            <div className="p-5 flex items-center bg-[#1F1D2B]">
                                <img src={ProfileCollec5} className='rounded-full overflow-hidden' alt="Profile Img" />
                                <div className="ml-2">
                                    <h1 className='text-white font-fontMontserrat font-bold text-[10px]'>World of Women Galaxy</h1>
                                    <div className="flex">
                                        <p className='text-[10px] text-white mr-2'>By  Organization Woman</p>
                                        <img src={Verified} width="11px" alt="Verified icon" />
                                    </div>
                                </div>
                            </div>

                            <hr className='hr-gradient h-[1px] w-full' />

                            <div className='p-4 bg-[#1F1D2B] rounded-b-[17px]'>
                                <p className='text-white font-fontUbuntu text-sm'>Price</p>
                                <b className='text-white font-fontUbuntu text-sm'>0.218 ETH</b>
                            </div>
                        </div>
                    </article>

                    <article className="h-full rounded-[31px] border  border-[#73E0A9]">
                        <div className="overflow-hidden w-full">
                            <img src={TopCard6} className='w-full rounded-t-[31px]' alt="Collections img" />
                        </div>

                        <div className="px-4 pb-4">
                            <div className="p-5 flex items-center bg-[#1F1D2B]">
                                <img src={ProfileCollec6} className='rounded-full overflow-hidden' alt="Profile Img" />
                                <div className="ml-2">
                                    <h1 className='text-white font-fontMontserrat font-bold text-[10px]'>World of Women Galaxy</h1>
                                    <div className="flex">
                                        <p className='text-[10px] text-white mr-2'>By  Organization Woman</p>
                                        <img src={Verified} width="11px" alt="Verified icon" />
                                    </div>
                                </div>
                            </div>

                            <hr className='hr-gradient h-[1px] w-full' />

                            <div className='p-4 bg-[#1F1D2B] rounded-b-[17px]'>
                                <p className='text-white font-fontUbuntu text-sm'>Price</p>
                                <b className='text-white font-fontUbuntu text-sm'>0.218 ETH</b>
                            </div>
                        </div>
                    </article>

                    <article className="h-full rounded-[31px] border  border-[#73E0A9]">
                        <div className="overflow-hidden w-full">
                            <img src={TopCard7} className='w-full rounded-t-[31px]' alt="Collections img" />
                        </div>

                        <div className="px-4 pb-4">
                            <div className="p-5 flex items-center bg-[#1F1D2B]">
                                <img src={ProfileCollec7} className='rounded-full overflow-hidden' alt="Profile Img" />
                                <div className="ml-2">
                                    <h1 className='text-white font-fontMontserrat font-bold text-[10px]'>World of Women Galaxy</h1>
                                    <div className="flex">
                                        <p className='text-[10px] text-white mr-2'>By  Organization Woman</p>
                                        <img src={Verified} width="11px" alt="Verified icon" />
                                    </div>
                                </div>
                            </div>

                            <hr className='hr-gradient h-[1px] w-full' />

                            <div className='p-4 bg-[#1F1D2B] rounded-b-[17px]'>
                                <p className='text-white font-fontUbuntu text-sm'>Price</p>
                                <b className='text-white font-fontUbuntu text-sm'>0.218 ETH</b>
                            </div>
                        </div>
                    </article>

                    <article className="h-full rounded-[31px] border  border-[#73E0A9]">
                        <div className="overflow-hidden w-full">
                            <img src={TopCard8} className='w-full rounded-t-[31px]' alt="Collections img" />
                        </div>

                        <div className="px-4 pb-4">
                            <div className="p-5 flex items-center bg-[#1F1D2B]">
                                <img src={ProfileCollec8} className='rounded-full overflow-hidden' alt="Profile Img" />
                                <div className="ml-2">
                                    <h1 className='text-white font-fontMontserrat font-bold text-[10px]'>World of Women Galaxy</h1>
                                    <div className="flex">
                                        <p className='text-[10px] text-white mr-2'>By  Organization Woman</p>
                                        <img src={Verified} width="11px" alt="Verified icon" />
                                    </div>
                                </div>
                            </div>

                            <hr className='hr-gradient h-[1px] w-full' />

                            <div className='p-4 bg-[#1F1D2B] rounded-b-[17px]'>
                                <p className='text-white font-fontUbuntu text-sm'>Price</p>
                                <b className='text-white font-fontUbuntu text-sm'>0.218 ETH</b>
                            </div>
                        </div>
                    </article>
                </section>
            </section>
        </>
    )
}
