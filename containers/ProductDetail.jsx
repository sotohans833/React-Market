import React from 'react';
import ProductInfo from '@components/ProductInfo';
import useGetProducts from '@hooks/useGetProducts';
import '@styles/ProductDetail.scss';
import iconClose from '@icons/icon_close.png';
const API = "https://api.escuelajs.co/api/v1/products";

const ProductDetail = () => {
	const products = useGetProducts(API);
	return (
		<aside className="ProductDetail">
		<div className="ProductDetail-close">
			<img src={iconClose} alt="close" />
		</div>
		{products.map(product => (
			<ProductInfo product={product} key={product.id} />
		))}
		</aside>
	);
}

export default ProductDetail;
