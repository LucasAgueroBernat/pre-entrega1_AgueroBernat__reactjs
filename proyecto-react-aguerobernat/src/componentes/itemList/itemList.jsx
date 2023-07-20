import ItemCard from "../ItemCard/itemCard"



const itemList =({productos}) => {

    return (
        <div className="container">
            <h2>Item List Container</h2>
            <hr />

            <div className='row'>
                {
                    productos.map((prod)=> <ItemCard key={prod.id} item={prod}/>)
                }
            </div>
        </div>
    )                
}

export default itemList