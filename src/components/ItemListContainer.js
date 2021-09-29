import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import { getFirestore } from "../firebase/Firebase";



export const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const { categoryId } = useParams()

    useEffect(() => {
        const baseDeDatos = getFirestore()
        const consultaBaseDeDatos = baseDeDatos.collection('items')
        const conditionQuery = categoryId ?
            consultaBaseDeDatos.where('categoryId', '==', categoryId)
            :
            consultaBaseDeDatos

        conditionQuery.get()
            .then(data => {
                if (data.size === 0) {
                    
                }
                setProductos(data.docs.map(item => ({ id: item.id, ...item.data() })))
                
            })

    }, [categoryId])



    return (
        <div>
            <ItemList items={productos} />
        </div>
    )
}

export default ItemListContainer
