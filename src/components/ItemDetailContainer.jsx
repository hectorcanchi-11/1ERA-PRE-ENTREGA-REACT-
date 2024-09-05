import { useEffect, useState, useContext } from 'react';
import {useParams} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import { getFirestore, getDoc , doc } from "firebase/firestore";
import { ItemCount } from './ItemCount';
import { ItemsContext } from '../context/ItemsContext';



export const ItemDetailContainer = () => {
    const [item,setItem]= useState ([])
    const [loading, setLoading] = useState(true)

    const {addItem} = useContext(ItemsContext)
    const {id}= useParams();

    useEffect(()=>{
        const db = getFirestore();
        const refDoc = doc(db,"items",id);

        getDoc (refDoc)
        .then((snapshot) => {
            setItem ({ ...snapshot.data(), id : snapshot.id});
        } )
        .finally(() => setLoading(false));
            
    },[id]); 

    const onAdd = (quantity) => {
        addItem ({...item,quantity})
    };



    if(loading) return "wait";

    return (<Container className='mt-4'>
        <h1>{item.nombre}</h1>
        <img src={item.image} height= {200}/>
        <h2>{item.category}</h2>
        <h3>{item.marca}</h3>
        <h3>$ {item.precio} Usd</h3>
        <br />
        <b>{item.stock}</b>
        <ItemCount stock = {item.stock} onAdd={onAdd}/>


    </Container>);
}