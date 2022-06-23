import Logo from '@/components/shared/Logo'
import { MENU } from '@/constants'
import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { FiShoppingCart } from 'react-icons/fi'

const Header = () => {
    const router = useRouter();

    const isActive = (url: string) => {
        if(router.pathname === url) return true
    }

    return (
        <div className='h-20 w-full fixed top-0 left-0 right-0 z-50 transition duration-500 bg-gradient-to-b from-black/80 via-black/60 to-transparent'>
            {/* <button onClick={toggle}>{playing ? "Pause" : "Play"}</button> */}
            <div className='md:px-16 px-4 h-full w-full flex items-center justify-between'>
                {/* Logo */}
                <Logo className='w-[150px] h-[54px]' />
                {/* Menu */}
                <ul className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] h-full md:flex hidden'>
                    {MENU.map((menu, index) => (
                        <Link href={`${menu.path}`} key={index}>
                            <li className={classNames(
                                'flex items-center justify-center mx-4 cursor-pointer text-[1.1em] text-white hover:text-[#cca574] font-normal relative',
                                isActive(`${menu.path}`) && 'text-[#cca574] active__menu'
                            )}>
                                <span>{menu.page}</span>
                                {menu.subMenu && <MdKeyboardArrowDown className='text-xl' />}
                            </li>
                        </Link>
                    ))}
                </ul>
                {/* Tools */}
                <div className='flex items-center'>
                    <div className='mr-6 cursor-pointer hover:text-[#cca574] relative'>
                        <FiShoppingCart className='text-2xl' />
                        <span className='absolute top-[-10px] right-[-13px] w-[20px] h-[20px] rounded-full bg-[#cca574] flex items-center justify-center p-[5px] text-[#fff] text-xs'>5</span>
                    </div>
                    <Link href='/download'>
                        <div className='header__button w-[115px] h-10 bg-[#cca574] rounded-md cursor-pointer flex items-center justify-center'>
                            Download
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header