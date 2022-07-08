import React from 'react';
import '@styles/ProductInfo.scss';
import addToCart from "@icons/bt_add_to_cart.svg";

const ProductInfo = ({product}) => {
	return (
		<>
			<img src= {product.images[0]} alt="bike" />
			<div className="ProductInfo">
				<p>{product.price}</p>
				<p>{product.title}</p>
				<p>{product.description}</p>
				<button className="primary-button add-to-cart-button">
					<img src={addToCart} alt={product.title} />
					Add to cart
				</button>
			</div>
		</>
	);
}

export default ProductInfo;