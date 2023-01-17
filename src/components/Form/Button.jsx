import React from 'react'

const Button = (props) => {
  return (
    <button {...props} onClick={props.button}>
        {props.children}
    </button>
  )
}

export default Button
