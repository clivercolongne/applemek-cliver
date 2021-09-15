import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'

export const items = [
    { id: 1, categoryId: "celular", nombre: "iphone 7 plus", descripcion: "el iphone 7 plus esta en exelente estado", stock: 2, precio: 50000, pictureUrl: 'https://s.yimg.com/uu/api/res/1.2/XyfcaIr4wNMfbbdwMdIVCw--~B/aD03ODg7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://o.aolcdn.com/hss/storage/midas/17535de39889849e408e23953ad793d/204335506/iphone-7-plus-primeras-impresiones-016.JPG' },
    { id: 2, categoryId: "celular", nombre: "iphone 8 plus", descripcion: "el iphone 8 plus esta en exelente estado", stock: 4, precio: 70000, pictureUrl: 'https://d2r9epyceweg5n.cloudfront.net/stores/001/116/601/products/img_15281-ca776a5094ab91426715844576436548-1024-1024.jpg' },
    { id: 3, categoryId: "celular", nombre: "iphone 11 ", descripcion: "el iphone 11 esta en exelente estado", stock: 2, precio: 120000, pictureUrl: 'https://phantom-elmundo.unidadeditorial.es/cce598daa945159bd9dcf5eb8b266751/crop/43x212/1675x1300/resize/1200/f/webp/assets/multimedia/imagenes/2019/09/17/15687111586913.jpg' },
    { id: 4, categoryId: "celular", nombre: "iphone 6 ", descripcion: "el iphone 6 esta en exelente estado", stock: 6, precio: 20000, pictureUrl: 'https://i.blogs.es/1a6888/650_1000_iphone-6-1/1366_2000.png' },
    { id: 5, categoryId: "computadora", nombre: "samsung plus 2", descripcion: "Es un portátil con pantalla estándar de 15,6 pulgadas y resolución nativa FHD. Su diseño no ha cambiado demasiado frente a generaciones anteriores. Mantiene una clara inspiración en los MacBook Pro de Apple, aunque vemos una nueva bisagra, biseles reducidos en los laterales y una rebaja de peso hasta los 1,8 kg.", stock: 2, precio: 150000, pictureUrl: 'https://www.muycomputer.com/wp-content/uploads/2021/01/Samsung_Notebook_Plus2_portada-1000x600.jpg' },
    { id: 6, categoryId: "computadora", nombre: "lenovo i3 v130", descripcion: "Notebook V130-15IKB Lenovo con Windows 10 Home, tarjeta gráfica compartida Intel HD Graphics 620, WiFi 802.11ac, Bluetooth 4.1, Lector de tarjetas SD 4 en 1.", stock: 2, precio: 120000, pictureUrl: 'https://yuhmak.vteximg.com.br/arquivos/ids/156541/E0000013648-NOTEBOOK-LENOVO-i3-V130-15IKB-4G256SSD-W10.jpg?v=637359544778670000' },
    { id: 7, categoryId: "accesorios", nombre: "funda para iphone xs", descripcion: "Funda ecológica de paja de trigo, biodegradable, suave, flexible,funda para celular con múltiples funciones", stock: 10, precio: 1000, pictureUrl: 'https://ueeshop.ly200-cdn.com/u_file/UPAH/UPAH151/1908/products/29/66cd18f64f.jpg' },
    { id: 8, categoryId: "accesorios", nombre: "airpods", descripcion: "Su diseño a medida se ajusta a la forma del oido y ofrece un aislamiento ideal para la cancelación activa de ruido. Es como si dentro de tus oídos solo hubiera música.", stock: 2, precio: 5000, pictureUrl: 'https://www.ventasrosario.com.ar/wp-content/uploads/2019/09/Apple-AirPods-2-with-Wireless-Charging-Case-MRXJ2ZM-A-White-21032019-01-p.jpg' },
    { id: 9, categoryId: "accesorios", nombre: "cargador para celular", descripcion: "cargador para celular micro usb3.1 amp", stock: 15, precio: 1000, pictureUrl: 'https://apollo-virginia.akamaized.net/v1/files/7x5rpn3xhxy93-AR/image' },
    { id: 10, categoryId: "accesorios", nombre: "Vidrio Templado Para Samsung A51 Full Glue", descripcion: "l vidrio tiene pegamento en toda su extension o sea es full glue, que no es lo mismo que vidrio curvo 5d/10d etc,", stock: 20, precio: 500, pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_946659-MLA42366181220_062020-O.jpg' },
    { id: 11, categoryId: "tablet", nombre: "Galaxy Tab 6", descripcion: "el nuevo Galaxy Tab 6 que acaba de descubrirse a través de unos renders oficiales que definen muy claramente cómo será y qué podremos esperar de él. Y salvo por la relación de aspecto de la pantalla, que es algo más panorámica que el 4:3 de los iPad Pro, tiene un aire general, acabado y formas que nos recuerdan a los tablets presentados por Apple el año pasado.", stock: 2, precio: 50000, pictureUrl: 'https://d500.epimg.net/cincodias/imagenes/2019/07/18/tablets/1563434994_525321_1563435056_noticia_normal.jpg' },
    { id: 12, categoryId: "tablet", nombre: "ipad 10.2", descripcion: "El nuevo iPad combina una extraordinaria capacidad con una versatilidad y facilidad de uso inigualables.", stock: 2, precio: 67000, pictureUrl: 'http://medias.musimundo.com/medias/00406046-143516-143516-01-143516-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w1MjI1MnxpbWFnZS9qcGVnfGhjMC9oYWMvMTAyODM0OTc0NTU2NDYvMDA0MDYwNDYtMTQzNTE2LTE0MzUxNl8wMS0xNDM1MTZfMDEuanBnX3NpemU1MTV8MzA0NmMzNGFhZjUwMDY2YjY5MjU0MjlkMGJlYWMxODAxZjE5ODJhZmJlOTczZThmZjE2NTQxMjU5NjE2OTA4Yw' },
    { id: 13, categoryId: "tablet", nombre: "tablet Huawei MediaPad T3", descripcion: "Esta tablet es ideal para cada una de tus actividades: editar fotos, documentos, navegar por internet y ¡mucho más! Su diseño delgado, compacto y portátil es la combinación perfecta de rendimiento y versatilidad.", stock: 3, precio: 67000, pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_846872-MLA32649932432_102019-O.webp' },
    { id: 14, categoryId: "tablet", nombre: "Tablet Samsung Galaxy Tab A7", descripcion: "Pantalla de 8,7 , Peso 366 g, Cubierta metálica", stock: 1, precio: 43000, pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_636803-MLA46847342442_072021-O.webp' }
]

export const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([]);
    const { categoryId } = useParams()

    useEffect(() => {
        let tarea = new Promise((resolve, reject) => {
            setTimeout(() => {
    
                items && items.length ? resolve(items) : reject("error 404 ")
    
            }, 100);
    
    
        });
        if (categoryId ) {
            tarea.then((resolve) => { setProductos(resolve.filter( r => categoryId === r.categoryId)) })
        } else {
            tarea.then((resolve) => { setProductos(resolve) })
        }

    }, [categoryId])

    return (
        <div>
            <ItemList items={productos} />
        </div>
    )
}

export default ItemListContainer
