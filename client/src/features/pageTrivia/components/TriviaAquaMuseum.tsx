import React, { FC } from 'react';
import FormTriviaAquaMuseum from './FormTriviaAquaMuseum';

const TriviaAquaMuseum: FC = () => {
    return (
        <>
            <div style={{ backgroundImage: `url('/backgroundTrivia1.png')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', minHeight: '100vh' }} className="flex flex-col justify-start pt-28 items-center ">
                <div className="mt-0 mb-2">
                    <img className='w-20 h-20 mx-auto my-auto rounded-sm' src="/aquaAvatar.png" alt="Avatar de Aqua" />
                </div>
                <FormTriviaAquaMuseum />
            </div>

        </>
    )
}

export default TriviaAquaMuseum