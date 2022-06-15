import React from 'react'

const HomeBanner = () => {
    return (
        <div className='w-full h-[450px] bg-slate-400'>
            <img src="https://cdn.boosteroid.com/media/boostore/5f2d51015411771af72e61b0bcd1ea41.jpg" alt="" className='w-full h-full object-cover' />
        </div>
    )
}

export default React.memo(HomeBanner)