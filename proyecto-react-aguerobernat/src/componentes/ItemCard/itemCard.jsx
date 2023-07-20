import React from 'react'
import itemlist from "../itemList/itemList.jsx";
import itemCard from './itemCard.css'


const ItemCard = ({item}) => {

    return(
            <div  className='col-3 m-2'>
                            <h4>{item.nombre}</h4>
                            <img src={item.img} alt={item.img}/>
                            <p>{item.descripcion}</p>
                            <p>Precio:${item.precio}</p>
                            <button className='btn btn-primary' > Ver mas</button>
            </div>
    )
}

export default ItemCard