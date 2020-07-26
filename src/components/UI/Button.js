import React from 'react';
import classes from './Button.module.css';

export default (props) => {
	return(
		<button className={classes.default} {...props}>
			{props.children}
		</button>
	)
}