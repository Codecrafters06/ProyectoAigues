import React from 'react'

const FormTriviaAqua = () => {
    return (
        <div className='h-80 w-60 bg-slate-400 bg-opacity-70 text-center flex flex-col relative roun'>
            <h4 className='font-bold text-center px-10 py-4'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. ?
            </h4>

            <section className='flex flex-col p-5'>
                <button className='rounded-md leading-[14px] p-1 mx-3 h-auto bg-stone-50 opacity-65'>Lorem ipsum dolor, </button>
                <button className='rounded-md leading-[14px] p-1 m-3 h-auto bg-stone-50 opacity-65'>sit amet consectetur </button>
                <button className='rounded-md leading-[14px] p-1 mx-3 h-auto bg-stone-50 opacity-65'>Dolorem itaque debitis earum </button>
            </section>

            <footer className='bg-opacity-30 bg-cyan-700 h-12 absolute bottom-0 w-full flex justify-center items-center'>
                <button className='h-8 w-auto p-1 bg-cyan-700 rounded-md'>Comprobar</button>
            </footer>
            {/* <footer className='bg-opacity-30 bg-cyan-700 h-12 absolute bottom-0 w-full flex flex-row justify-center items-center'>
                <p className='text-lg text-auto items-center text-3xl'>✅</p>
                <button className='h-8 w-auto p-1 bg-cyan-700 rounded-md opacity-85'>Siguiente</button>
            </footer> */}
        </div>

    )
}

export default FormTriviaAqua