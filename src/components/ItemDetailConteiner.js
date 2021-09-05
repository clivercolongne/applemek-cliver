import {useState ,useEffect} from 'react'
import ItemDetail from './ItemDetail';
import items from './ItemListContainer'

  const getItem = new Promise((resuelto)=>{
      setTimeout(() => {
       resuelto(items)   
      }, 5000);
  })

function ItemDetailConteiner() {

    const [item, setItem] = useState()

    useEffect(() => {
       getItem
       .then(resp => setItem(resp))
    }, [])

    return (
        <>
         <ItemDetail item = {item}/>   
        </>
    )
}

export default ItemDetailConteiner
