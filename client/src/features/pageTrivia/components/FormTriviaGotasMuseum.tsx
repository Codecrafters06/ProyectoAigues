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

const context = new AudioContext();

function jsNota(frecuencia: number) {
    const o = context.createOscillator();
    const g = context.createGain();
    o.connect(g);
    o.type = "triangle";
    o.frequency.value = frecuencia;
    g.connect(context.destination);
    o.start(0);
    g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 2.5);
}

const FormTriviaGotasMuseum: React.FC = () => {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [shuffledAnswers, setShuffledAnswers] = useState<string[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTrivia = async () => {
            try {
                const response = await axios.get('http://localhost:3005/trivia/5');
                console.log(response.data);

                setQuestions(response.data.data.preguntas);
            } catch (error) {
                console.error('Error fetching trivia:', error);
            }
        };

        fetchTrivia();
    }, []);

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
            jsNota(261.626);
            setTimeout(() => {
            setCurrentQuestionIndex(prevIndex => {
                if (prevIndex === questions.length - 1) {
                    navigate('/avatars');
                    return prevIndex;
                }
                return prevIndex + 1;
            });
            setSelectedAnswer(null);
        }, 1500);
        } else {
            jsNota(195.998);
        }
    };

    const currentQuestion = questions[currentQuestionIndex];


    return (
        <>
            <div className='h-auto w-80 bg-slate-400 bg-opacity-80 rounded-s text-center flex flex-col relative roun'>
                <h4 className='font-bold text-center px-8 py-4'>
                    {currentQuestion && currentQuestion.pregunta}
                </h4>

                <section className='flex flex-col p-5 gap-3'>
                    {shuffledAnswers.map((answer, index) => (
                        <button
                            key={index}
                            className='rounded-md leading-[14px] p-5 mx-3 h-auto bg-stone-50 opacity-65'
                            onClick={() => handleAnswerSelection(answer)}
                        >
                            {answer}
                        </button>
                    ))}
                </section>

                <footer className='bg-opacity-30 bg-cyan-700 h-16 bottom-0 w-full flex justify-center items-center'>
                    {selectedAnswer !== null && (
                        <img
                            className='h-14'
                            src={selectedAnswer === currentQuestion.respuestas.correcta ? './sonrriente-2.png' : './icon512x.png'}
                            alt='avatares de respuesta'
                        />
                    )}
                </footer>
            </div>
        </>
    );
};

export default FormTriviaGotasMuseum