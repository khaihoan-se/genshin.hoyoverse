import TitleSection from '@/components/shared/TitleSection';
import React from 'react';

const HomeCharacter = () => {
    return (
        <React.Fragment>
            <div className='w-full md:px-16 px-4 pt-20 bg-black'>
                <TitleSection title='Character Information' />
                <div>
                    Ch
                </div>
            </div>
        </React.Fragment>
    );
}

export default React.memo(HomeCharacter)
