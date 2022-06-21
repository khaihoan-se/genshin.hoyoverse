import Link from 'next/link'
import React from 'react'
import classNames from 'classnames'
import Image from '@/components/shared/Image'

interface LogoProps {
    className?: string;
}
const Logo: React.FC<LogoProps> = ({ className }) => {
    return (
        <Link href='/'>
            <div className={classNames(
                'relative cursor-pointer',
                className
            )}>
                <Image src='/Genshin_Impact_logo.svg' layout='fill' objectFit='contain' alt='logo' />
            </div>
        </Link>
    )
}

export default React.memo(Logo)