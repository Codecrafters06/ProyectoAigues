import React, { FC } from 'react';
import FormTriviaAquaSource from './FormTriviaAquaSource';

const TriviaAquaSource: FC = () => {
    return (
        <>
            <div style={{ backgroundImage: `url('/backgroundTrivia2.png')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', minHeight: '100vh' }} className="flex flex-col justify-center items-center ">
                <div className="mt-0 mb-2">
                    {/* <p>TriviaAquaSource</p> */}
                    <img className='w-20 h-20 mx-auto my-auto rounded-sm' src="/aquaAvatar.png" alt="" />
                </div>
                <FormTriviaAquaSource />
            </div>

        </>
    )
}

export default TriviaAquaSource