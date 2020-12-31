import items from '../items.json';

function Products() {
    return (
        <div>
            <h1>Welcome to Product</h1>
            {Object.keys(items).map( (object, index)=>{
                console.log(object);
                return (
                    <div key={index}>
                        <h3>{object}</h3>
                        <li>{items[object].name}</li>
                        <img src={items[object].img} alt="shoe" height={150} width={150}/>
                    </div>
                );
            })}
        </div>
    );
}
export default Products;