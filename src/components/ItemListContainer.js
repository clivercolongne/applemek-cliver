import React from 'react'
import ItemCount from './components/ItemCount';

export const ItemListContainer = (props) => {
    return (
        <div>
            { props.saludar}
<ItemCount/>
        </div>
    )
}

export default ItemListContainer
