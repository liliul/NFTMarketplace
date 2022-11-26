
import Card1 from '../../assets/card1.jpg'
import Profile from '../../assets/profile-card1.jpg'
import Veri from '../../assets/icon-verified.svg'
import Card2 from '../../assets/card2.jpg'
import Profile2 from '../../assets/profile-card2.jpg'
import Card3 from '../../assets/card3.jpg'
import Profile3 from '../../assets/profile-card3.jpg'




export default function Cardhiddegems() {
    return (

        <>
            <section className="w-full h-auto">
                <div className="xl:ml-28 pt-11  flex justify-between items-center  xl:w-[1166px]">
                    <h1 className="text-xl text-white font-fontMontserrat font-bold">Hidden Gems</h1>
                    <span className="text-sm font-bold text-gradient">View All</span>
                </div>

                <div className="xl:ml-28 pt-11  xl:w-[1166px] flex flex-wrap justify-between">

                    <div className="border border-black mt-5 p-2 rounded-3xl w-[321px] h-auto ">
                        <div className="w-full h-[287px] flex flex-col items-center  relative">
                            <img src={Card1} className='rounded-[35px] overflow-hidden w-full'  alt="Img bg" />

                            <div className='absolute bottom-[-28px]'>
                                <img src={Profile} className='rounded-full overflow-hidden' alt="Img icon" />
                            </div>
                        </div>

                        <div className="mt-10">
                            <header className='flex justify-center gap-3'>
                                <h2 className='text-white text-sm font-fontMontserrat font-bold'>ZombieClub Token</h2>
                                <img src={Veri} alt="Verified icon" />
                            </header>
                            <h4 className='text-center text-xs text-white'>Created by <strong className='text-gradient'>ZombieLab</strong></h4>
                            <p className='mt-4 text-white text-sm font-fontUbuntu'>
                                Zombie Lab is a collection of 10,000 animated NFTs. 
                                Each NFT is unique and resides on the Ethereum blockchain. 
                                Your Zombie Lab Club NFT will double as your club membership.
                            </p>
                        </div>
                        
                    </div>

                    <div className="border border-black mt-5 p-2 rounded-3xl w-[321px] h-auto ">
                        <div className="w-full h-[287px] flex flex-col items-center  relative">
                            <img src={Card2} className='rounded-[35px] overflow-hidden w-full'  alt="Img bg" />

                            <div className='absolute bottom-[-28px]'>
                                <img src={Profile2} className='rounded-full overflow-hidden' alt="Img icon" />
                            </div>
                        </div>

                        <div className="mt-10">
                            <header className='flex justify-center gap-3'>
                                <h2 className='text-white text-sm font-fontMontserrat font-bold'>Meta Bounty Hunters</h2>
                                <img src={Veri} alt="Verified icon" />
                            </header>
                            <h4 className='text-center text-xs text-white'>Created by <strong className='text-gradient'>B30898</strong></h4>
                            <p className='mt-4 text-white text-sm font-fontUbuntu'>
                                Meta Bounty Hunters is a first of its kind  community and collective of elite members who share a community-first
                                 mindset and are focused on giving back to its NFT holders through the Reflection Rewards.
                            </p>
                        </div>
                        
                    </div>

                    <div className="border border-black mt-5 p-2 rounded-3xl w-[321px] h-auto ">
                        <div className="w-full h-[287px] flex flex-col items-center  relative">
                            <img src={Card3} className='rounded-[35px] overflow-hidden w-full'  alt="Img bg" />

                            <div className='absolute bottom-[-28px]'>
                                <img src={Profile3} className='rounded-full overflow-hidden' alt="Img icon" />
                            </div>
                        </div>

                        <div className="mt-10">
                            <header className='flex justify-center gap-3'>
                                <h2 className='text-white text-sm font-fontMontserrat font-bold'>Treeverse Plots</h2>
                                <img src={Veri} alt="Verified icon" />
                            </header>
                            <h4 className='text-center text-xs text-white'>Created by <strong className='text-gradient'>Treeverse_Wallet</strong></h4>
                            <p className='mt-4 text-white text-sm font-fontUbuntu'>
                                Treeverse is an open-world, fantasy MMORPG with a MOBA-style combat system. 
                                Slay beasts, forge mighty weapons, lure the biggest fish, form guilds, defeat dungeons
                            </p>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}
