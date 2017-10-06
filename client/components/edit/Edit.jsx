import React from 'react';
import $ from 'jquery';
// const User = require('../../db/sql/models/User.js')

// when this is rendered it will look something like this:
// <Edit field="picture">
//   Add your picture here (prompt message accessed by props.children)
// </Edit>

class Edit extends React.Component {
	constructor(props) {
		super(props);
		//I'm not sure if I need this line or not
		this.editProf = this.editProf.bind(this);
	}

	editProf() {
		const change = prompt(this.props.children);
		$.ajax({
			url: '/update',
			type: 'PUT',
			data: {
				this.props.field: change
			},
			success: (result) => {
				console.log('result from PUT req: ', result);
			},
			error: (err) => {
				console.error(err);
			}
		});
		// User.update(
		// 	{this.props.field: change},
		// 	{where: {name: /*access username here*/}}
		// ).then(result => {
		// 	console.log('result of update: ', result);
		// }).catch(err => {
		// 	console.error('update error: ', err);
		// });
	}

	render() {
		return (
			<div>
			  <button type="button" onClick={this.editProf}></button>
			</div>
		);
	}
}

export default React;