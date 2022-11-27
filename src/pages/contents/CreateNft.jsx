import Walletone from '../../assets/wallet-one.svg'
import Triangle from '../../assets/triangle-round-rectangle.svg'
import Shopping from '../../assets/shopping-bag.svg'
import Picture from '../../assets/picture.svg'


export default function CreateNft() {
    return (

        <>
            <section className="w-full lg:h-[524px] bg-create pt-20 pb-8">
                <article className="xl:ml-28 px-3 xl:px-0  h-auto wh-[373px] xl:w-[1166px]  flex flex-col justify-between ">
                    <h1 className="text-white text-xl sm:text-2xl pb-8 font-fontMontserrat font-bold">Create and sell your NFTs</h1>

                    <section className="w-full md:flex lg:justify-between flex justify-center flex-wrap gap-12">
                        <article className="w-[205px] h-auto ">
                            <div className="flex flex-col items-center">
                                <img src={Walletone} alt="Wallet icon" />
                                <p className='text-white mt-3'>Set up your wallet</p>
                            </div>

                            <p className='text-sm text-white mt-3'>
                                Once you’ve set up your wallet of choice, 
                                connect it to OpenSea by clicking the wallet icon in the top right corner. 
                                Learn about the <b className='text-gradient'>wallets we support.</b>
                            </p>
                        </article>

                        <article className="w-[205px] h-auto ">
                            <div className="flex flex-col items-center">
                                <img src={Triangle} alt="Wallet icon" />
                                <p className='text-white mt-3'>Create your collection</p>
                            </div>

                            <p className='text-sm text-white mt-3'>
                                Click <b className="text-gradient">My Collections</b> and set up your collection. 
                                Add social links, a description, profile & banner images, and set a secondary sales fee.
                            </p>
                        </article>

                        <article className="w-[205px] h-auto ">
                            <div className="flex flex-col items-center">
                                <img src={Picture} alt="Wallet icon" />
                                <p className='text-white mt-3'>Add your NFTs</p>
                            </div>

                            <p className='text-sm text-white mt-3'>
                                Upload your work (image, video, audio, or 3D art), add a title and description,
                                and customize your NFTs with properties, stats, and unlockable content.
                            </p>
                        </article>

                        <article className="w-[205px] h-auto ">
                            <div className="flex flex-col items-center">
                                <img src={Shopping} alt="Wallet icon" />
                                <p className='text-white mt-3'>List them for sale</p>
                            </div>

                            <p className='text-sm text-white mt-3'>
                                Choose between auctions, fixed-price listings, and declining-price listings. 
                                You choose how you want to sell your NFTs, and we help you sell them!
                            </p>
                        </article>
                    </section>
                </article>
            </section>
        </>
    )
}
