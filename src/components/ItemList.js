import React from 'react'
import Item from './Item'





const ItemList = ({ items }) => {

  return (
    <div>
      <h1>MIS PRODUCTOS</h1>
      <ul>
        {items.map((item) => {
          return <Item key={item.id} item={item} />
        })}
      </ul>

    </div>
  )
}

export default ItemList
