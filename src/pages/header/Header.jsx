
import Logo from '../../assets/logo.svg'
import Search from '../../assets/search.svg'
import Wallet from '../../assets/wallet-button.svg'

function Header() {

    return (
        <>
            <header className="max-w-[1440px] w-full h-20 flex items-center bg-header fixed top-0  z-50">
                <img src={Logo} className="pl-28" alt="Logo header" />

                <div className="flex items-center ml-[97px] h-9 w-96 rounded-full border-gradient">
                    <div className=''>
                        <img src={Search} className='pl-8 pr-6'  alt="Search icon" />
                    </div>            
                   

                    <input type="search" className='input-bg text-sm w-72  h-4'  placeholder='Search items, collections, and accounts' />
                </div>

                <nav className='ml-[97px] flex'>
                    <ul className='flex items-center text-white'>
                        <li className='mr-[40px] text-sm'>Explore</li>
                        <li className='mr-[40px] text-sm'>Activity</li>
                        <li className='mr-[40px] text-sm'>Resources</li>
                    </ul>

                    <div className='mr-[40px] border-gradient rounded-full w-24 h-[32px] flex items-center justify-center'>
                        <a href="#" className='text-white font-fontUbuntu text-sm'>Account</a>
                    </div>
                </nav>

                <button className='flex items-center justify-center  bg-gradient w-44 h-8 rounded-full'>
                    <img src={Wallet} alt="Wallet icon" />
                    <b className='text-white ml-4 font-fontUbuntu text-sm'>connect Wallet</b>
                </button>

            </header>
        </>
    )   
 }

export default Header