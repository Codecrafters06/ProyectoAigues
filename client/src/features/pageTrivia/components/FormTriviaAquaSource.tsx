import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Trivia {
    _id: string;
    question: string;
    correctAnswer: string;
    incorrectAnswers: string[];
}


const FormTriviaAqua: React.FC = () => {
    const [trivia, setTrivia] = useState<Trivia | null>(null);

    useEffect(() => {
        const fetchTrivia = async () => {
            try {
                const response = await axios.get<Trivia>('/trivia/random');
                console.log('Trivia fetched:', response.data);
                setTrivia(response.data);
            } catch (error) {
                console.error('Error fetching trivia:', error);
            }
        };

        fetchTrivia();
    }, []);

    useEffect(() => {
        console.log('Trivia state:', trivia); // Verificar el estado de la trivia
    }, [trivia]);

    return (
        <div className='h-80 w-60 bg-slate-400 bg-opacity-70 text-center flex flex-col relative rounded-sm'>
            {trivia && (
                <>
                    <h4 className='font-bold text-center px-10 py-4'>
                        {trivia.question}
                    </h4>
                    <section className='flex flex-col p-5'>
                        <button className='rounded-md leading-[14px] p-1 mx-3 h-auto bg-stone-50 opacity-65'>{trivia.correctAnswer}</button>
                        {trivia.incorrectAnswers.map((answer, index) => (
                            <button key={index} className='rounded-md leading-[14px] p-1 m-3 h-auto bg-stone-50 opacity-65'>{answer}</button>
                        ))}
                    </section>
                    <footer className='bg-opacity-30 bg-cyan-700 h-12 absolute bottom-0 w-full flex justify-center items-center'>
                        <button className='h-8 w-auto py-1 px-2 bg-cyan-700 rounded-md'>Comprobar</button>
                    </footer>
                </>

            // <footer className='bg-opacity-30 bg-cyan-700 h-12 absolute bottom-0 w-full flex flex-row justify-center items-center'>
            //     <p className='text-lg text-auto items-center text-3xl'>✅</p>
            //     <button className='h-8 w-auto p-1 bg-cyan-700 rounded-md opacity-85'>Siguiente</button>
            // </footer>
            
            )}
        </div>

    )
}

export default FormTriviaAqua