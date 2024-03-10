import React from 'react'
import Item from './Item'
import './itemListPost.css'

const ItemList = ({productos}) => {

  return (
    <div className='itemListContainer'>
        {
            productos.map((producto)=>
                (
                    <Item key={producto.id} producto={producto}/>
                )
            )
        }
    </div>
  )
}

export default ItemList


