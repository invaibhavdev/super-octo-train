import React from 'react'
import PropTypes from 'prop-types'
import classes from './Button.module.css'

const Button = (props) => {
  return (
    <button className={classes.default} {...props}>
      {props.children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.any
}
export default Button
