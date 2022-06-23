import React from 'react'
import Image from '../shared/Image'
import MenuItem from '../shared/MenuItem'

const MenuCl = () => {
    return (
        <div className='menu--line absolute h-full left-16 z-50 flex items-center justify-center flex-col'>
            <div className='w-[1px] h-[70vh] bg-[#fff] absolute opacity-30'></div>
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            {/* <div className='my-4 relative w-10 h-10 cursor-pointer z-50'>
                <Image src='/menu-item.png' layout='fill' objectFit='contain' alt='logo' className='w-full h-full' />
                <Image src='/menu-item-active.png' layout='fill' objectFit='contain' alt='logo' className='w-16 h-16' />
            </div>
            <div className='my-4 relative w-10 h-10 cursor-pointer z-50'>
                <Image src='/menu-item.png' layout='fill' objectFit='contain' alt='logo' className='w-full h-full' />
            </div>
            <div className='my-4 relative w-10 h-10 cursor-pointer z-50'>
                <Image src='/menu-item.png' layout='fill' objectFit='contain' alt='logo' className='w-full h-full' />
            </div>
            <div className='my-4 relative w-10 h-10 cursor-pointer z-50'>
                <Image src='/menu-item.png' layout='fill' objectFit='contain' alt='logo' className='w-full h-full' />
            </div>
            <div className='my-4 relative w-10 h-10 cursor-pointer z-50'>
                <Image src='/menu-item.png' layout='fill' objectFit='contain' alt='logo' className='w-full h-full' />
            </div>
            <div className='my-4 relative w-10 h-10 cursor-pointer z-50'>
                <Image src='/menu-item.png' layout='fill' objectFit='contain' alt='logo' className='w-full h-full' />
            </div> */}
        </div>
    )
}

export default MenuCl