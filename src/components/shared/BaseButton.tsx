import classNames from 'classnames'
import Link from 'next/link';
import React from 'react'

interface ButtonPrimaryProps {
   className?: string;
   href?: string;
   children?: string;
}

const ButtonPrimary = React.forwardRef<HTMLButtonElement, ButtonPrimaryProps>(
    (props, ref) => {
        
        const { className, href, children } = props

        return (
            <Link href={href}>
                <button
                className={classNames(
                    'relative font-roboto text-white text-xs font-bold text-center rounded-md cursor-pointer border-[1px] border-[#9b99ad] hover:border-[#fff]',
                    className
                )}
                ref={ref}
                >
                {children}
                </button>
            </Link>
        )
    }
)
export default ButtonPrimary
