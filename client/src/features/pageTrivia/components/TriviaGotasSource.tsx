import React, { FC } from 'react';
import FormTriviaGotasSource from './FormTriviaGotasSource';

const TriviaGotasSource: FC = () => {
    return (
        <>
            <div style={{ backgroundImage: `url('/backgroundTrivia2.png')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', minHeight: '100vh' }} className="flex flex-col justify-start pt-28 items-center ">
                <div className="mt-0 mb-2">
                    {/* <p>TriviaGotasSource</p> */}
                    <img className='w-20 h-20 mx-auto my-auto rounded-sm' src="/gotasAvatar.png" alt="Avatar de Dr. Gotas" />
                </div>
                <FormTriviaGotasSource />
            </div>

        </>
    )
}

export default TriviaGotasSource