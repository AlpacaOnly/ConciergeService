import React, { useState } from 'react';
import LoginImg from '../assets/amico.png';
import { Input } from './Form';
import { sendData } from '../contexts';

export default function Login() {
	const [email, setLogin] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = async () => {
		await sendData(email, password);
	};

	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-fill'>
			<div className='hidden sm:block'>
				<div className='flex justify-center my-64'>
					<img className='w-4/6 h-4/6 object-cover' src={LoginImg} alt='' />
				</div>
			</div>

			<div className='bg-gray-800 flex flex-col justify-center'>
				<form
					className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'
					onSubmit={(e) => e.preventDefault()}
				>
					<h2 className='text-4xl text-white font-bold text-center'>ВОЙТИ</h2>
					<div className='flex flex-col text-gray-400 py-2'>
						<Input set={setLogin} label='Логин' />
					</div>
					<div className='flex flex-col text-gray-400 py-2'>
						<Input type='password' label='Пароль' set={setPassword} />
					</div>
					<div className='flex justify-between text-gray-400 py-2'>
						<p className='flex items-center'>
							<input className='mr-2' type='checkbox' /> Запомнить{' '}
						</p>
						<p>Забыли пароль?</p>
					</div>
					<button
						className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/20 text-white font-semibold rounded-lg'
						onClick={handleSubmit}
					>
						Войти
					</button>
				</form>
			</div>
		</div>
	);
}
