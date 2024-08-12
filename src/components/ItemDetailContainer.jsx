import { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import data from '../data/productos.json';



export const ItemDetailContainer = () => {
    const [item,setItem]= useState ([])
    const [loading, setLoading] = useState(true)
    const {id}= useParams();

    useEffect(()=>{
        new Promise((resolve) => setTimeout(() => resolve(data), 2000 ))
        .then((response)=>{
            const finded = response.find((i) => i.id === Number(id));
            setItem(finded);
        })
        .finally(() => setLoading(false));
            
    },[id]); 

    if(loading) return "wait";

    return (<Container className='mt-4'>
        <h1>{item.nombre}</h1>
        <img src={item.imagen_url} height= {200}/>
        <h2>{item.category}</h2>
        <h3>{item.marca}</h3>
        <h3>${item.precio}Usd</h3>
        







    </Container>);
}