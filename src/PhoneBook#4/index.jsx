import React from 'react';
import IndexHeader from './Hader/'
import IndexBody from './Body/'
import IndexFooter from './Footer/'

export default class IndexPhoneBook4 extends React.Component {
	
	render() {
		return (
			<div>
				<h2>PhoneBook #4</h2>
				<IndexHeader />
				<IndexBody />
				<IndexFooter />
			</div>
		);
	}
}
