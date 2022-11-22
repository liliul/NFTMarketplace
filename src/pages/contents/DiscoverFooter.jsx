import Imgvideo from '../../assets/img-video.jpg'
import Play from '../../assets/play.svg'

export default function DiscoverFooter() {
    return (

        <>
            <section className="w-full h-auto pt-28 pb-[128px]">
                <article className="w-[994px] h-[736px] m-auto ">
                    <h1 className="text-white text-4xl font-fontMontserrat font-bold text-center">Discover the latest #TOPNFT</h1>
                    <p className="text-gradient text-center text-lg font-fontUbuntu mt-2">The NFT marketplace with everything for everyone</p>
                
                    <figure className='mt-[54px] w-full h-[483px] relative'>
                        <img src={Imgvideo} alt="Video img" />
                        <figcaption className='w-full h-full play-center'>
                            <img src={Play} width="64px" alt="Play img" />
                        </figcaption>
                    </figure>

                    <div className="mt-14 w-full flex justify-center">
                        <button className="w-[300px] h-14 bg-gradient rounded-full text-white font-fontUbuntu font-bold">
                            Explore the marketplace
                        </button>
                    </div>
                </article>
            </section>
        </>
    )
}