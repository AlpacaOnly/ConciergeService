import React from 'react'
import LoginImg from '../assets/amico.png'

export default function Login() {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-fill'>
            <div className='hidden sm:block'>
                <div className='flex justify-center my-64'>
                    <img className='w-4/6 h-4/6 object-cover' src={LoginImg} alt="" />
                </div>
            </div>

            <div className='bg-gray-800 flex flex-col justify-center'>
                <form className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'>
                    <h2 className='text-4xl text-white font-bold text-center'>ВОЙТИ</h2>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label>Почта</label>
                        <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" />
                    </div>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label>Пароль</label>
                        <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" />
                    </div>
                    <div className='flex justify-between text-gray-400 py-2'>
                        <p className='flex items-center'><input className='mr-2' type="checkbox" /> Запомнить </p>
                        <p>Забыли пароль?</p>
                    </div>
                    <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/20 text-white font-semibold rounded-lg'>Войти</button>
                </form>
            </div>
        </div>
    )
    
}