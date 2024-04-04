import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface Question {
    pregunta: string;
    respuestas: {
        correcta: string;
        incorrectas: string[];
    };
}


const FormTriviaAquaMuseum: React.FC = () => {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [shuffledAnswers, setShuffledAnswers] = useState<string[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTrivia = async () => {
            try {
                const response = await axios.get('http://localhost:3005/trivia/1');
                setQuestions(response.data.preguntas);
            } catch (error) {
                console.error('Error fetching trivia:', error);
            }
        };

        fetchTrivia();
    }, []);

    // useEffect(() => {
    //     axios
    //     .get('http://localhost:3005/trivia/1')
    //     .then((response) => {
    //         setQuestions(response.data.preguntas);
    //     }) 
    //     .catch ((error) => {
    //         console.error('Error fetching trivia:', error);
    //     });
    // }, []);

    useEffect(() => {
        if (questions.length > 0) {
            const currentQuestion = questions[currentQuestionIndex];
            const allAnswers = [currentQuestion.respuestas.correcta, ...currentQuestion.respuestas.incorrectas];
            const shuffled = shuffleArray(allAnswers);
            setShuffledAnswers(shuffled);
        }
    }, [currentQuestionIndex, questions]);

    const shuffleArray = (array: string[]) => {
        return array.sort(() => Math.random() - 0.5);
    };

    const handleAnswerSelection = (answer: string) => {
        setSelectedAnswer(answer);
        if (answer === currentQuestion.respuestas.correcta) {
            if (currentQuestionIndex === questions.length - 1) {
                navigate('/avatars');
            } else {
                setCurrentQuestionIndex(prevIndex => prevIndex + 1);
                setSelectedAnswer(null);
            }
        }
    };

    const currentQuestion = questions[currentQuestionIndex];


    return (
        <div className='h-80 w-60 bg-slate-400 bg-opacity-70 text-center flex flex-col relative roun'>
            <h4 className='font-bold text-center px-10 py-4'>
                {currentQuestion.pregunta}
            </h4>

            <section className='flex flex-col p-5'>
                {shuffledAnswers.map((answer, index) => (
                    <button
                        key={index}
                        className='rounded-md leading-[14px] p-1 mx-3 h-auto bg-stone-50 opacity-65'
                        onClick={() => handleAnswerSelection(answer)}
                    >
                        {answer}
                    </button>
                ))}
            </section>

            <footer className='bg-opacity-30 bg-cyan-700 h-12 absolute bottom-0 w-full flex justify-center items-center'>
                <button
                    className={`block w-full p-2 mt-2 border ${selectedAnswer === currentQuestion.respuestas.correcta ? 'bg-gray-300' : ''
                        }`}
                    onClick={() => handleAnswerSelection(currentQuestion.respuestas.correcta)}
                >
                    {currentQuestion.respuestas.correcta}
                </button>
            </footer>
        </div>
    );
};

export default FormTriviaAquaMuseum