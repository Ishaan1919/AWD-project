import React, { Component } from 'react';
import './App.css';
import Person from './Person';
class Person1 extends Component {
	render() {
		return (
			<div className="App">
				<Person name="Big Chungus" age="12">
           My Hobbies : I forgor 💀 {/* Some Additional Data */}
				</Person>
			</div>
		);
	}
}
export default Person1;