import React from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList'

export const ItemListContainer = (props) => {
    const onAdd = (count) => {
        console.log(`la cantidad es : ${count}`)
        alert(`la cantidad es : ${count}`)
      };
    return (
        <div>
         <itemList/>   
    <ItemCount stock="5" initial="1" onAdd={onAdd}/>
        </div>
    )
}

export default ItemListContainer
