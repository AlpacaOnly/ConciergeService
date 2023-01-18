import React from 'react'

const inputClass =
	'w-full block resize rounded-lg bg-input_bg mt-2 p-2 border border-input_border focus:border-zinc-00 focus:bg-gray-300 focus:outline-none';

const Textarea = (props) => {
  return (
    <textarea rows={props.rows} className={inputClass}>
    </textarea>
  )
}

export default Textarea;