import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail'
import { getFirestore } from "../firebase/Firebase";




function ItemDetailConteiner({ item }) {

    const { id } = useParams()
    const [itemDetail, setItemDetail] = useState({});


    useEffect(() => {
        const db = getFirestore()
        db.collection('items').doc(id).get()
            .then(resp => {
                if (resp.exists) {
                    setItemDetail({ id: resp.id, ...resp.data() })
                }
            })

    }, [])


    return (
        <div>
            <ItemDetail item={itemDetail} />
        </div>
    )
}
export default ItemDetailConteiner