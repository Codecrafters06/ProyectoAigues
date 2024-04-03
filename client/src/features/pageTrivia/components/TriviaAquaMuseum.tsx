import React, { FC, useState, useEffect } from 'react';
import FormTriviaAqua from './FormTriviaAqua';
import axios from 'axios';

interface Trivia {
    triviaId: string;
}


const TriviaAquaMuseum: React.FC = () => {
    const [trivias, setTrivias] = useState<Trivia[]>([]);

    useEffect(() => {
        const fetchTrivias = async () => {
            try {
                const response = await axios.get('/trivia');
                setTrivias(response.data);
            } catch (error) {
                console.error('Error fetching trivias:', error);
            }
        };

        fetchTrivias();
    }, []);


    return (
        <>
            <div style={{ backgroundImage: `url('/backgroundTrivia1.png')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', minHeight: '100vh' }} className="flex flex-col justify-center items-center ">
                <div className="mt-0 mb-2">
                    <img className='w-20 h-20 mx-auto my-auto rounded-sm' src="/aquaAvatar.png" alt="" />
                </div>
                <FormTriviaAqua />
            </div>

        </>
    )
}

export default TriviaAquaMuseum