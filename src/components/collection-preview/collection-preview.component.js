import React from 'react';
import CollectionItem from '../collection-item/component.collection-item';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => {
	return (
		<div className='collection-preview'>
			<h1>{title.toUpperCase()}</h1>
			<div className='preview'>
				{console.log(items)}
				{items
					.filter((item, i) => i < 4)
					.map(({ id, ...otherItemProps }) => (
						<CollectionItem key={id} {...otherItemProps}></CollectionItem>
					))}
			</div>
		</div>
	);
};

export default CollectionPreview;
