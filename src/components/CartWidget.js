import React, { useContext } from 'react'
import { CartContext } from "../context/CartContext";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from "react-router-dom"


function CartWidget() {


    const { itemTotales } = useContext(CartContext)
    return (
        <div >
            <Link to="/cart">

                <ShoppingCartIcon HomeIcon style={{ fontSize: 70, color: "grey" }} />
                <span className="badge badge-warning" id="lblCartCount">
                    {itemTotales()}
                </span>
            </Link>

        </div>
    )
}

export default CartWidget
