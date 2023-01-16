import React from 'react'

const inputClass="rounded-lg bg-input_bg mt-2 p-2 border border-input_border focus:border-zinc-00 focus:bg-gray-300 focus:outline-none"

const Select = ({options}) => {
    
  return (
    <>
        <select className={inputClass}>
        {
            //@ts-ignore
            options.map((option) => (
            <option key={option.value}>{option.option}</option>
            ))
        }
        </select>
    </>
  )
}

export default Select;