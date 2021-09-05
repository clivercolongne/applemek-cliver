



function ItemDetail({item}) {
    return (
        <div>
             <div>
        <label>Soy el detalle</label>
        <div className='card w-50'>
            <div className="container">
                <label>{item.nombre}</label>
            </div>
            <div className="container">
                <img  src={item.pictureUrl} className="w-25" />
                <br/>
                <label>{item.descripcion}</label>
            </div>
            <div className="container">
                <label>{item.precio}</label>
            </div>
        </div>
        </div>
        </div>
    )
}

export default ItemDetail


