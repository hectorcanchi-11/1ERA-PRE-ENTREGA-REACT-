import { Link } from 'react-router-dom'
import cart from '../assets/carrito.png'
import { useContext } from "react";
import { ItemsContext } from "../context/ItemsContext";

export const CartWidget = () =>{

    const {items} = useContext(ItemsContext);

    const quantity=items.reduce((acc, act) => acc + act.quantity, 0)

    return (<Link to = "/cart">
    <img src={cart} alt="" height={26}/> <span className='cantidad'>{quantity}</span>
    </Link>) 
}