import React, { useState } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { object, string } from 'zod';
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion';

interface FormData {
    fieldName: string;
    email: string;
    password: string;
}

const schema = object({
    fieldName: string().nonempty({ message: 'El nombre es requerido' }).regex(/^[A-Za-z]+$/, { message: 'El nombre no debe contener números' }),
    email: string().email({ message: 'El email no es válido' }),
    password: string().min(6, { message: 'La contraseña debe tener al menos 6 caracteres' }),
});

const LoginForm = () => {
    const [success, setSuccess] = useState<string | null>(null);
    const { handleSubmit, control, formState: { errors }, reset } = useForm<FormData>({
        resolver: zodResolver(schema)
    });
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data);
        reset({ fieldName: '', email: '', password: '' });
        setSuccess('¡ya vas a entrar!');
        setTimeout(() => {
            setSuccess(null);
            navigate('/intro');
        }, 3000);
    };

    const errorMessages = Object.values(errors)?.map(error => error?.message).filter(Boolean) ?? [];


    const messageAnimation = {
        hidden: { y: 30, opacity: 0 },
        animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
    };

    type FieldName = "fieldName" | "email" | "password" ;

    const formFields: { fieldName: FieldName, type: 'text' | 'password', placeholder: string }[] = [
        { fieldName: 'fieldName', type: 'text', placeholder: 'Nombre'  },
        { fieldName: 'email', type: 'text', placeholder: 'Correo electrónico' },
        { fieldName: 'password', type: 'password', placeholder: 'Contraseña' },
    ];

    return (

        <form className='h-72 w-60 bg-slate-400 bg-opacity-70 text-center flex flex-col relative pt-10 mt-10 mx-auto rounded-sm' onSubmit={handleSubmit(onSubmit)}>
            {formFields.map(({ fieldName, type, placeholder }, index) => (
                <div className='flex flex-col p-2' key={index}>

                    <Controller<FormData>
                        name={fieldName}
                        control={control}
                        defaultValue=''
                        render={({ field }) => (

                            <input className='rounded-md leading-[14px] p-1 mx-3 h-auto bg-stone-50 opacity-65'
                                {...field}
                                type={type}
                                placeholder={placeholder}
                                value={field.value}
                                onChange={(e) => field.onChange(e.target.value)}
                            />
                        )}
                    />
                </div>
            ))}

            <div className='flex flex-row justify-center gap-1'>
                <input type="checkbox" className='border border-secondary' />
                <p>Recuérdame</p>
            </div>

            <div className='flex flex-row justify-center p-8 gap-10'>

                <button className="h-8 w-auto py-1 px-2 bg-cyan-700 rounded-md text-secondary cursor-pointer hover:bg-tertiary hover:text-primary">LogIn</button>
                <Link to="/register"> <button className="h-8 w-auto py-1 px-2 bg-cyan-700 rounded-md text-secondary cursor-pointer hover:bg-tertiary hover:text-primary">Register</button></Link>

            </div>

            {errorMessages.length > 0 && errorMessages.map((message, index) => (
                <motion.div key={index} className="text-red-900 font-semibold w-60 bg-slate-400 bg-opacity-70 pb-0.5 rounded-sm" variants={messageAnimation} initial="hidden" animate="animate" exit="hidden">{message}</motion.div>
            ))}
            {success && <motion.div className="text-green-800 text-xl font-bold w-60 bg-slate-400 bg-opacity-70 pb-0.5 rounded-sm" variants={messageAnimation} initial="hidden" animate="animate" exit="hidden">{success}</motion.div>}
        </form>
    );
};

export default LoginForm;