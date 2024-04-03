import React, { FC } from 'react';
import FormTriviaAqua from './FormTriviaAqua';

const TriviaAquaMuseum: FC = () => {
    return (
        <>
            <div style={{ backgroundImage: `url('/backgroundTrivia1.png')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', minHeight: '100vh' }} className="flex flex-col justify-center items-center ">
                <div className="mt-0 mb-2">
                    <p>TriviaAquaMuseum</p>
                    <img className='w-20 h-20 mx-auto my-auto rounded-sm' src="/aquaAvatar.png" alt="" />
                </div>
                <FormTriviaAqua />
            </div>

        </>
    )
}

export default TriviaAquaMuseum