import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { object, string } from 'zod';

const schema = object({
    name: string().nonempty({ message: 'El nombre es requerido' }).regex(/^[^\d]+$/, { message: 'El nombre no debe contener números' }),
    // age: number().nonnegative({ message: 'La edad debe ser un número positivo' }),
    email: string().email({ message: 'El email no es válido' }),
    password: string().min(6, { message: 'La contraseña debe tener al menos 6 caracteres' }),
});

const RegisterForm = () => {

    const [success, setSuccess] = useState(null);

    const { handleSubmit, control, formState: { errors }, reset } = useForm({


        resolver: zodResolver(schema)
    });

    const onSubmit = (data) => {
        console.log(data);

        reset({ name: '', email: '', password: '' });

        setSuccess('Application was submitted!');
        setTimeout(() => {
            setSuccess(null);
        }, 3000);
    };

    const errorMessages = Object.values(errors).map(error => error.message);

    const messageAnimation = {
        hidden: { y: 30, opacity: 0 },
        animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
    };

    const formFields = [
        { name: 'Usuario', type: 'text' },
        { name: 'email', type: 'text' },
        { name: 'contraseña', type: 'password' },
        { name: 'confirmar tu contraseña', type: 'password' },
    ];

    return (

        <form className='h-72 w-60 bg-slate-400 bg-opacity-70 text-center flex flex-col relative pt-10 mt-10 mx-auto rounded-sm' onSubmit={handleSubmit(onSubmit)}>
            {formFields.map(({ name, type }, index) => (
                <div className='flex flex-col p-2' key={index}>

                    <Controller
                        name={name}
                        control={control}
                        defaultValue={type === 'number' ? 0 : ''}
                        render={({ field }) => (

                            <input className='rounded-md leading-[14px] p-1 mx-3 h-auto bg-stone-50 opacity-65'
                                {...field}
                                type={type}
                                placeholder={` ${name.toLocaleLowerCase()}`}
                                value={field.value}
                                onChange={(e) => field.onChange(type === 'number' ? parseInt(e.target.value, 10) : e.target.value)}
                            />
                        )}
                    />
                </div>
            ))}


            <div className='flex flex-row justify-center p-5 gap-10'>

                <button className="h-8 w-auto py-1 px-2 bg-cyan-700 rounded-md text-secondary cursor-pointer hover:bg-tertiary hover:text-primary">Registrarse</button>

            </div>

            {errorMessages.length > 0 && errorMessages.map((message, index) => (
                <div key={index} variants={messageAnimation} initial="hidden" animate="animate" exit="hidden">{message}</div>
            ))}
            {success && <div variants={messageAnimation} initial="hidden" animate="animate" exit="hidden">{success}</div>}

        </form>
    );
};

export default RegisterForm; 