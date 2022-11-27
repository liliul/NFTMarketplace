import Logo from '../../assets/logo.svg'

import Face from '../../assets/footer/facebook-one.svg'
import Insta from '../../assets/footer/instagram.svg'
import Tele from '../../assets/footer/telegram.svg'
import Tik from '../../assets/footer/tiktok.svg'
import Twit from '../../assets/footer/twitter.svg'
import Tube from '../../assets/footer/youtube.svg'


export default function Footer() {
    return (

        <>
            <footer className="w-full h-auto xl:h-322px bg-header pb-24">

                <section className="h-auto xl:w-[1166px] xl:h-[198px] xl:ml-28 xl:flex lg:justify-between flex justify-center gap-8 flex-wrap pt-[61px] px-3 xl:px-0 ">
                    <article className="w-[276px] h-auto ">
                        <img src={Logo} alt="Logo" />

                        <strong className="text-base font-fontUbuntu text-white mt-3">
                            TheFund
                        </strong>

                        <p className='text-sm text-white mt-4'>
                        TheFund is the world's first non-fungible token (NFT) marketplace for both digital and physical assets
                        </p>
                    </article>
                    <article className="flex gap-16">
                        <ul>
                            <b className="text-gradient text-sm font-fontUbuntu font-bold ">Company</b>
                            <li className='text-white text-xs font-bold mb-[14px] mt-2'>About</li>
                            <li className='text-white text-xs font-bold mb-[14px]'>Careers</li>
                            <li className='text-white text-xs font-bold mb-[14px]'>Ventures</li>
                            <li className='text-white text-xs font-bold mb-[14px]'>Grants</li>
                        </ul>
                        <ul>
                            <b className="text-gradient text-sm font-fontUbuntu font-bold pb-4">Stats</b>
                            <li className='text-white text-xs font-bold mb-[14px] mt-2'>Rankings</li>
                            <li className='text-white text-xs font-bold mb-[14px]'>Activity</li>
                        </ul>
                        <ul>
                            <b className="text-gradient text-sm font-fontUbuntu font-bold pb-4">Resources</b>
                            <li className='text-white text-xs font-bold mb-[14px] mt-2'>Help Center</li>
                            <li className='text-white text-xs font-bold mb-[14px]'>Gas-Free Marketplace</li>
                            <li className='text-white text-xs font-bold mb-[14px]'>Blog</li>
                            <li className='text-white text-xs font-bold mb-[14px]'>Newsletter</li>
                        </ul>
                    </article>
                    <article className="w-[211px] h-auto">
                        <b className="text-gradient text-sm font-fontUbuntu font-bold">Follow us on</b>

                        <div className="grid grid-cols-3 gap-2 place-content-between  mt-2">
                            <div className='w-[45px] h-[45px] border border-[#73E0A9] flex items-center justify-center rounded-lg'><img src={Face} alt="Facebook icon" /></div>
                            <div className='w-[45px] h-[45px] border border-[#73E0A9] flex items-center justify-center rounded-lg'><img src={Insta} alt="Instagram icon" /></div>
                            <div className='w-[45px] h-[45px] border border-[#73E0A9] flex items-center justify-center rounded-lg'><img src={Tele} alt="Telegram icon" /></div>
                            <div className='w-[45px] h-[45px] border border-[#73E0A9] flex items-center justify-center rounded-lg'><img src={Tik} alt="Tiktok icon" /></div>
                            <div className='w-[45px] h-[45px] border border-[#73E0A9] flex items-center justify-center rounded-lg'><img src={Twit} alt="Twitter icon" /></div>
                            <div className='w-[45px] h-[45px] border border-[#73E0A9] flex items-center justify-center rounded-lg'><img src={Tube} alt="Youtube icon" /></div>
                        </div>
                    </article>
                </section>

            </footer>
        </>
    )
}