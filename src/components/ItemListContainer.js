import React from 'react'
import ItemCount from './ItemCount';

export const ItemListContainer = (props) => {
    return (
        <div>
            { props.saludar}
            
    <ItemCount stock="5" initial="1"/>
        </div>
    )
}

export default ItemListContainer
