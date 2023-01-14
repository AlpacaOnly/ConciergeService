import React from 'react';

const inputClass =
	'rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none';

export const Input = ({ type, label, set }) => {
	return (
		<>
			{label && <label>{label}</label>}
			<input
				type={type}
				className={inputClass}
				onChange={(e) => set(e.target.value)}
			/>
		</>
	);
};
