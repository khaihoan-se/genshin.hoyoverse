import React from 'react'
import Image from '../shared/Image'

const MenuItem = () => {
    return (
        <div className='menu--item--active my-4 relative w-10 h-10 cursor-pointer z-50 flex items-center'>
            <div className='relative w-10 h-10'>
                <Image src='/menu-item.png' layout='fill' objectFit='contain' alt='logo' className='w-full h-full' />
            </div>
            <span className='absolute left-14 py-[3px] px-4 bg-white text-black'>Home</span>
        </div>
    )
}

export default MenuItem