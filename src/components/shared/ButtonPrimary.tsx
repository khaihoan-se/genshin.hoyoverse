import classNames from 'classnames'
import Link from 'next/link';
import React from 'react'

interface ButtonPrimaryProps {
   className?: string;
   href?: string;
   children?: React.ReactNode;
}

const ButtonPrimary = React.forwardRef<HTMLButtonElement, ButtonPrimaryProps>(
   (props, ref) => {
      
      const { className, href, children } = props

      return (
         <Link href={href}>
            <button
               className={classNames(
                  'bg__gradient--primary relative font-roboto text-white text-xs font-bold text-center rounded-md cursor-pointer',
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