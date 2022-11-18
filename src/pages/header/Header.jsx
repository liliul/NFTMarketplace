
import Logo from '../../assets/logo.svg'
import Search from '../../assets/search.svg'

function Header() {

    return (
        <>
            <header className="w-full h-24 flex items-center">
                <img src={Logo} className="pl-28" alt="Logo header" />

                <div className="flex ">
                    <img src={Search} className='pl-8 pr-6'  alt="Search icon" />

                    <input type="search" className=''  placeholder='Search items, collections, and accounts' />
                </div>
            </header>
        </>
    )   
 }

export default Header