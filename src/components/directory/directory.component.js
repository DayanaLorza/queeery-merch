import React, { useState } from 'react';

import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

const Directory = () => {
	const [sections, setSections] = useState([
		{
			title: 'hats',
			imageUrl: 'https://picsum.photos/id/39/600/400',
			id: 1,
			linkUrl: 'shop/hats',
		},
		{
			title: 'shirts',
			imageUrl: 'https://picsum.photos/id/418/600/400',
			id: 2,
			linkUrl: 'shop/shirts',
		},
		{
			title: 'swag',
			imageUrl: 'https://picsum.photos/id/250/600/400',
			id: 3,
			linkUrl: 'shop/swag',
		},
		{
			title: 'womens',
			imageUrl: 'https://picsum.photos/id/252/600/400',
			size: 'large',
			id: 4,
			linkUrl: 'shop/womens',
		},
		{
			title: 'mens',
			imageUrl: 'https://picsum.photos/id/26/600/400',
			size: 'large',
			id: 5,
			linkUrl: 'shop/mens',
		},
	]);

	return (
		<div className='directory-menu'>
			{sections.map(({ title, imageUrl, size, id, linkUrl }) => (
				<MenuItem key={id} title={title} size={size} imageUrl={imageUrl} />
			))}
		</div>
	);
};

export default Directory;
