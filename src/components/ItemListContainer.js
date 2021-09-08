import React, {useState, useEffect} from 'react'
import ItemList from './ItemList'

  const items = [
    {id:1,nombre:"iphone 7 plus", descripcion:"el iphone 7 plus esta en exelente estado", stock:2, precio:50000,pictureUrl:'https://s.yimg.com/uu/api/res/1.2/XyfcaIr4wNMfbbdwMdIVCw--~B/aD03ODg7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://o.aolcdn.com/hss/storage/midas/17535de39889849e408e23953ad793d/204335506/iphone-7-plus-primeras-impresiones-016.JPG'},
    {id:2,nombre:"iphone 8 plus", descripcion:"el iphone 8 plus esta en exelente estado", stock:4,precio:70000,pictureUrl:'https://d2r9epyceweg5n.cloudfront.net/stores/001/116/601/products/img_15281-ca776a5094ab91426715844576436548-1024-1024.jpg'},
    {id:3,nombre:"iphone 11 ", descripcion:"el iphone 11 esta en exelente estado", stock:2,precio:120000,pictureUrl:'https://phantom-elmundo.unidadeditorial.es/cce598daa945159bd9dcf5eb8b266751/crop/43x212/1675x1300/resize/1200/f/webp/assets/multimedia/imagenes/2019/09/17/15687111586913.jpg'},
    {id:4,nombre:"iphone 6 ", descripcion:"el iphone 6 esta en exelente estado", stock:6,precio:20000 ,pictureUrl: 'https://i.blogs.es/1a6888/650_1000_iphone-6-1/1366_2000.png'}
  ]
export const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        
        let tarea = new Promise((resolve, reject) => {
            setTimeout(() => {
                
                items && items.length ? resolve(items) : reject("error 404 ")

            }, 2000);
            
            
        });
          tarea.then((resolve)=>{setProductos(resolve)})
    }, [])

    return (
        <div>
         <ItemList items={productos}/>   
        </div>
    )
}

export default ItemListContainer
