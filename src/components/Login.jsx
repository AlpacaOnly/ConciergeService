import React, {useState} from 'react';
import LoginImg from '../assets/amico.png';
import {Input} from './Form';
import {login} from "../contexts/api/auth";
import {me} from "../contexts/api/users";
import {useNavigate} from "react-router-dom";

export default function Login() {
    const [email, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const LoginHandle = async () => {

        let [data, error] = await login(email, password);

        if (error) {
            if (error['response']['status'] === 400) alert('Неправильный логин или пароль');
        } else {
            let token = data['auth_token']
            localStorage.setItem('token', token);

            const {response} = await me(token)

            if (response) {
                localStorage.setItem('user', JSON.stringify(response));
                navigate('/');
            }
        }
    };

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-fill'>
            <div className='hidden sm:block'>
                <div className='flex justify-center my-64'>
                    <img className='w-4/6 h-4/6 object-cover' src={LoginImg} alt=''/>
                </div>
            </div>

            <div className='bg-gray-800 flex flex-col justify-center'>
                <form
                    className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'
                    onSubmit={(e) => e.preventDefault()}
                >
                    <h2 className='text-4xl text-white font-bold text-center'>ВОЙТИ</h2>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <Input set={setLogin} label='Логин'/>
                    </div>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <Input type='password' label='Пароль' set={setPassword}/>
                    </div>
                    <div className='flex justify-between text-gray-400 py-2'>
                        <p className='flex items-center'>
                            <input className='mr-2' type='checkbox'/> Запомнить{' '}
                        </p>
                        <p>Забыли пароль?</p>
                    </div>
                    <button
                        className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/20 text-white font-semibold rounded-lg'
                        onClick={LoginHandle}
                    >
                        Войти
                    </button>
                </form>
            </div>
        </div>
    );
}

