import React, { FC } from 'react';
import FormTriviaEcoMuseum from './FormTriviaEcoMuseum';

const TriviaEcoMuseum: FC = () => {
    return (
        <>
            <div style={{ backgroundImage: `url('/backgroundTrivia1.png')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', minHeight: '100vh' }} className="flex flex-col justify-start pt-28 items-center ">
            <div className="mt-0 mb-2">
                    <img className='w-20 h-20 mx-auto my-auto rounded-sm' src="/ecoAvatar.png" alt="Avatar de Eco" />
                </div>
                <FormTriviaEcoMuseum />
            </div>

        </>
    )
}

export default TriviaEcoMuseum