import React from 'react';
const person = props => {
	return (
		<div>
			<p>
				I am a {props.name} and i am {props.age} year old!{' '}
			</p>
			<p> {props.children} </p>
		</div>
	);
};
export default person;