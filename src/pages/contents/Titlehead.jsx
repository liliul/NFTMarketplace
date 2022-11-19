
import Play from '../../assets/play.svg'

export default function TitleHead() {
    return (
        <>
            <section className="w-full h-[796px]">
                <article className="pt-[316px] w-[976px] m-auto">
                    <div className=" h-[260px] ">
                        <p className='text-gray-400 font-fontMontserrat text-sm font-bold mb-4'>Exclusive NFT for Digital and Real-world Assets</p>

                        <h1 className='text-white font-fontMontserrat font-bold text-3xl'>
                            The world's first non-fungible token (NFT) marketplace 
                            for both digital and physical assets.
                        </h1>

                        <div className='flex gap-8 w-[424px] h-14 mt-16'>
                            <div className='border-gradient w-[200px] h-14 rounded-full flex items-center justify-center'>
                                <a href="#" className=' text-white text-base font-bold'>Explore</a>
                            </div>

                            <button className='bg-gradient w-[200px] rounded-full text-white text-base font-bold'>Create</button>
                        </div>
                    </div>

                    <div className='flex gap-8 mt-[150px]'>
                        <img src={Play} alt="Video icon" />
                        <b className='text-white text-base font-bold font-fontUbuntu'>Learn more about TheFund</b>
                    </div>
                </article>
            </section>
        </>
    )
}