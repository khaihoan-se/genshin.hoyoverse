import { useEffect, useState } from 'react'
import Logo from '@/components/shared/Logo'
import ButtonPrimary from '@/components/shared/ButtonPrimary'
import BaseButton from '@/components/shared/BaseButton'
import classNames from 'classnames'
import { FiSearch, FiHelpCircle, FiAirplay, FiLogOut, FiX } from "react-icons/fi"
import Avatar from '../shared/Avatar'
import Module from '../shared/Module'
import Subscribe from '@/components/icons/Subscribe'

const Header = () => {
    const [isTop, setIsTop] = useState<boolean>(false);

    const [ isOpen, setIsOpen ] = useState<boolean>(false);

    useEffect(() => {
        const handleIsTop = () => {
            setIsTop(window.scrollY > 0);
        }
        document.addEventListener('scroll', handleIsTop);
    }, [])

    return (
        <header className={classNames(
            'bg__gradient px-12 tablet:px-4 w-full h-16 flex items-center justify-between fixed top-0 transition duration-500 z-50',
            isTop && 'bg-[#191b20]'
        )}>
            {/* Logo */}
            <div className='flex items-center'>
                {/* Logo */}
                <Logo className='w-[171px] h-[15px] mobile:w-[20px] mobile:h-[20px]' />
                {/* Line Center */}
                <span className='w-[1px] h-[28px] opacity-30 bg-white ml-4 mobile:hidden'></span>
                {/* Button */}
                <ButtonPrimary href='/auth/login' className='ml-4 px-[12px] py-[7px]'>
                    <Subscribe className='hidden tablet:block' />
                    <span className='tablet:hidden'>Subscribe and Play</span>
                </ButtonPrimary>
            </div>
            {/* Tools */}
            <div className='flex items-center'>
                <div className='mr-8 tablet:mr-6 cursor-pointer'>
                    <FiSearch className='text-2xl' />
                </div>
                <div className='mr-8 tablet:mr-6 cursor-pointer mobile:hidden'>
                    <FiHelpCircle className='text-2xl' />
                </div>
                <div className='mr-8 tablet:mr-6 cursor-pointer mobile:hidden'>
                    <FiAirplay className='text-2xl' />
                </div>
                <div className='mr-8 tablet:mr-6 cursor-pointer flex items-center mobile:hidden'>
                    <div className='w-[30px] h-[30px] p-[2px] border-[2px] border-[#5c35ee] rounded-full'>
                        <Avatar />
                    </div>
                    <span className='ml-2 max-w-[92px] font-medium leading-4 whitespace-nowrap overflow-hidden mobile:hidden'>Lê Khải Hoàn</span>
                </div>
                <div className='cursor-pointer mobile:hidden'
                    onClick={() => setIsOpen(true)}
                >
                    <FiLogOut className='text-2xl' />
                </div>
                <div className='w-[30px] h-[30px] p-[2px] border-[2px] border-[#5c35ee] rounded-full cursor-pointer items-center hidden mobile:flex'>
                    <Avatar />
                </div>
            </div>
            {isOpen && <Module>
                <div className='absolute top-4 right-4 cursor-pointer hover:rotate-90 transition-all duration-300 ease-linear'
                    onClick={() => setIsOpen(false)}
                >
                    <FiX className='text-xl' />
                </div>
                <h2 className='font-bold text-[34px] leading-10 text-center text-white'>Log out</h2>
                <p className='text-sm leading-4 text-[#9b99ad] mb-8 mt-4'>Are you sure you want to leave?</p>
                <div className='w-full mt-8 flex items-center'>
                    <BaseButton href='/' className='p-[12px] w-1/2 mr-[10px]'>Cancel</BaseButton>
                    <ButtonPrimary href='/' className='p-[12px] w-1/2'>Log out</ButtonPrimary>
                </div>
            </Module>}
        </header>
    )
}

export default Header