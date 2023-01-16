import React from 'react';

const inputClass =
	'rounded-lg bg-input_bg mt-2 p-2 border border-input_border focus:border-zinc-00 focus:bg-gray-300 focus:outline-none';

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
