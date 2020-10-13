import React from 'react';
import './menu-item.styes.scss';

const MenuItem = ({ title, imageUrl, size }) => (
	<div className={`${size} menu-item`}>
		<div
			className='background-image'
			style={{
				backgroundImage: `url(${imageUrl})`,
			}}
		></div>
		<div className='content'>
			<h1 className='title'>{title} </h1>
			<span className='subtitle'> This is a section</span>
		</div>
	</div>
);

export default MenuItem;
