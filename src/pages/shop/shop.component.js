import React, { useState } from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

const ShopPage = () => {
	const [collections, setCollections] = useState(SHOP_DATA);

	// console.log(collections);

	return (
		<div className='shop-page'>
			{collections.map(({ id, ...collectionProps }) => (
				<CollectionPreview key={id} {...collectionProps}></CollectionPreview>
			))}
		</div>
	);
};

export default ShopPage;
