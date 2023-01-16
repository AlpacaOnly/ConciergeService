import React from 'react'

const inputClass="rounded-lg bg-input_bg mt-2 p-2 border border-input_border focus:border-zinc-00 focus:bg-gray-300 focus:outline-none"

const Select = () => {
  return (
    <>
        <select className={inputClass}>
        <option value="Компания">Компания</option>
        <option value="Физическое лицо">Физическое лицо</option>\
        </select>
    </>
  )
}

export default Select;