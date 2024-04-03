import React, { FC } from 'react';
import FormTriviaDrGotas from './FormTriviaDrGotas';

const TriviaGotasMuseum: FC = () => {
    return (
        <>
            <div style={{ backgroundImage: `url('/backgroundTrivia1.png')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', minHeight: '100vh' }} className="flex flex-col justify-center items-center ">
                <div className="mt-0 mb-2">
                    <p>TriviaGotasMuseum</p>
                    <img className='w-20 h-20 mx-auto my-auto rounded-sm' src="/gotasAvatar.png" alt="" />
                </div>
                <FormTriviaDrGotas />
            </div>

        </>
    )
}

export default TriviaGotasMuseum