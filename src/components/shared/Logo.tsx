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
                <Image src='/logo.svg' layout='fill' objectFit='contain' alt='logo' containerClassName='mobile:hidden' />
                <Image src='/logo-small.svg' layout='fill' objectFit='contain' alt='logo' containerClassName='hidden mobile:block' />
            </div>
        </Link>
    )
}

export default React.memo(Logo)