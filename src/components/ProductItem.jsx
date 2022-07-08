import React, { useContext } from 'react';
import "@styles/ProductItem.scss";
import AppContext from '@context/AppContext';
import addToCartImage from "@icons/bt_add_to_cart.svg";
import addedInCartImage from "@icons/bt_added_to_cart.svg";

const ProductItem = ({product}) => {
	const { addToCart, removeFromCart, state } = useContext(AppContext);
	const added = () => state.cart.some((item) => item.id === product.id);
	console.log(added());
	const handleClick = item => {
		added() ? removeFromCart(item) : addToCart(item);
	}

    return (
      <div className="ProductItem">
        <img
          src={product.images}
          alt={product.title}
        />
        <div className="product-info">
          <div>
            <p>${product.price}</p>
            <p>{product.title}</p>
          </div>
          <figure onClick={() => handleClick(product)}>
            {added() ? (
              <img src={addedInCartImage} className="add-in-cart" />
            ) : (
              <img src={addToCartImage} className="add-to-cart" />
            )}
          </figure>
        </div>
      </div>
    );
}

export default ProductItem;