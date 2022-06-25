import React from 'react'
import TitleSection from '@/components/shared/TitleSection'
import Image from '@/components/shared/Image'
import Card from '@/components/shared/Card'
import { PRODUCTS_HOME } from '@/constants'
import Link from 'next/link'

const HomeProducts = () => {
    return (
        <React.Fragment>
            <div className='w-full md:px-16 px-4 py-20 bg-black relative'>
                <TitleSection title='Products' />
                
                <div className='w-full h-full grid__products mt-40'>
                    {
                        PRODUCTS_HOME.map((product, index) => (
                            <Card key={index} coverImage={product.coverImage} description={product.description} name={product.name} price={product.price} />
                        ))
                    }
                </div>
                <div className='mt-16 w-full flex items-center justify-center'>
                    <Link href='/products'>
                        <div className='px-4 py-2 bg-[#cca574] rounded-md w-[130px] flex items-center justify-center'>Xem Thêm</div>
                    </Link>
                </div>
            </div>
        </React.Fragment>
    )
}

export default React.memo(HomeProducts)