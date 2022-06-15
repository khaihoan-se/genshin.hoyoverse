import React from 'react'
import Image from '@/components/shared/Image'

const Avatar = () => {
    return (
        <div className='relative w-full h-full'>
            <Image src='/avatar.jpeg' layout='fill' objectFit='contain' alt='avatar' className='rounded-full' />
        </div>
    )
}

export default React.memo(Avatar)