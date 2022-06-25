import React from 'react'

const HomeBannerVideo = () => {
    return (
        <React.Fragment>
            <div className='w-full h-[100vh] py-10 bg-black relative rounded-2xl'>
               <div className='w-full h-full relative rounded-2xl overflow-hidden'>
                    <video src='/3e78e80.mp4' poster="/47f71d4.jpeg" loop muted className='w-full h-full object-cover' autoPlay>
                        Your browser does not support the audio element.
                    </video>
                    <div className="absolute inset-0 flex flex-col justify-center px-4 banner__overlay--white md:px-12"></div>
                    <div className='absolute md:left-16 left-4 top-1/2 -translate-y-1/2 text-black md:text-lg text-sm md:w-[60%] w-[90%]'>
                        <h3 className='text-[#0072ce] text-xl'>WHAT IS GENSHIN IMPACT?</h3>
                        <h2 className='text-2xl mb-6'>Welcome to the beautiful fantasy world of Teyvat</h2>
                        <p className='mb-4'>You and your sibling traveled to Teyvat from another world. Separated on arrival, and now stranded here, you set about searching for answers from The Seven — the gods of each element.</p>
                        <p className='mb-4'>Joined by Paimon, a kind-hearted sprite guide, your mission takes you through beautiful forests, bustling towns and treacherous dungeons. And while your journey may put you into the path of merciless foes and fiendish puzzles you can count on over 30 playable allies to join your custom party of four, harnessing the power of the elements to overcome all obstacles.</p>
                        <p>Along the way, you will freely explore this wondrous world, join forces with a diverse range of characters, and unravel the countless mysteries that Teyvat holds.</p>
                    </div>
               </div>
            </div>
        </React.Fragment>
    );
}

export default React.memo(HomeBannerVideo)
