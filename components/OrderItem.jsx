import React, {useContext} from "react";
import AppContext from "@context/AppContext.js";
import "@styles/OrderItem.scss";
import iconClose from "@icons/icon_close.png";

const OrderItem = ({product, indexValue}) => {

    const { removeFromCart } = useContext(AppContext);

    const handleRemove = index => {
        removeFromCart(index);
    }

    return (
        <div className="OrderItem">
            <figure>
                <img src={product.images[0]} alt={product.title} />
            </figure>
            <p>{product.title}</p>
            <p>{product.price}</p>
            <img src={iconClose} alt="close" onClick={() => handleRemove(indexValue)} className="removeIcon" />
        </div>
    );
};

export default OrderItem;
