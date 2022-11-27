
import {useState} from 'react'
import Logo from '../../assets/logo.svg'
import Search from '../../assets/search.svg'
import Wallet from '../../assets/wallet-button.svg'

function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleMenu = () => {
        alert('Open Menu')
        document.title = 'Imagem Digital'
    }

    return (
        <>
            <header 
                className="max-w-[1440px] menuOpen w-full h-20 lg:flex lg:justify-around sm:flex sm:justify-around flex items-center justify-between bg-header fixed top-0  z-50"
            >
                <img src={Logo} className="xl:pl-28 " alt="Logo header" />

                <div className="hidden gap-8 items-center lg:ml-[57px] sm:flex md:flex h-9 w-96 rounded-full border-gradient">
                    <div className=''>
                        <img src={Search} className='ml-10'  alt="Search icon" />
                    </div>            
                   

                    <input 
                        type="search" 
                        className='bg-white text-sm w-96 h-4 input-bg p-1 mr-10'  
                        placeholder='Search items, collections, and accounts'
                    />
                </div>

                <nav className='ml-[97px] lg:flex md:hidden sm:hidden hidden'>
                    <ul className='flex items-center text-white'>
                        <li className='mr-[40px] text-sm'>Explore</li>
                        <li className='mr-[40px] text-sm'>Activity</li>
                        <li className='mr-[40px] text-sm'>Resources</li>
                    </ul>

                    <div className='mr-[40px] border-gradient rounded-full w-24 h-[32px] flex items-center justify-center'>
                        <a href="#" className='text-white font-fontUbuntu text-sm'>Account</a>
                    </div>
                </nav>

                <button className='xl:flex lg:hidden md:hidden sm:hidden hidden items-center justify-center  bg-gradient w-44 h-8 rounded-full'>
                    <img src={Wallet} alt="Wallet icon" />
                    <b className='text-white ml-4 font-fontUbuntu text-sm'>connect Wallet</b>
                </button>

                <nav 
                    className=' xl:hidden w-[32px] h-[32px] flex flex-col gap-1 justify-center items-end p-1 '
                    onClick={handleMenu}
                >
                    <div className='w-full h-1 bg-gradient'></div>
                    <div className='w-[70%] h-1 bg-gradient'></div>
                    <div className='w-[50%] h-1 bg-gradient'></div> 
                </nav>
            </header>
        </>
    )   
 }

export default Header
