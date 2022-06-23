import React from 'react'
import Image from '@/components/shared/Image'
import { DOWNLOAD } from '@/constants';

const DownloadBanner = () => {
    return (
        <div className='download__grid md:grid hidden mt-4 gap-x-2 gap-y-2 w-[23%] '>
            {DOWNLOAD.map((download) => (
                <div className='w-[150px] h-[62px] bg-transparent rounded-md relative active__color--download cursor-pointer'>
                    <Image src={download.pathImage} layout='fill' objectFit='fill' alt='background' className='w-full h-full rounded-md' />
                </div>
            ))}
        </div>
    );
}

export default React.memo(DownloadBanner)
