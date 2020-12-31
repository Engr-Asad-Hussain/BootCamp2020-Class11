import items from '../items.json';
import { Link } from 'react-router-dom';

function Products() {
    // console.log(items);

    return (
        <div>
            <div className="header">
                <h1>Mens Shoes</h1>
                <p>{Object.keys(items).length} items found in Men's Shoes</p>
            </div>
            <ul className="env-product">
            {Object.keys(items).map( (object, index)=>{
                return (
                    <div key={index} className="items-product">
                        <Link to={`/products/${object}`}>
                            <img src={items[object].img} alt="shoe" height={260} width={215} />
                        </Link>
                        <div className="title-product">
                            <li>
                                <Link to={`/products/${object}`}>
                                    {items[object].name.toLowerCase()}
                                </Link>
                            </li>
                        </div>
                        <div className="rupees-product">
                            <li>Rs. {items[object].price.toLocaleString()}</li>
                        </div>
                        <div className="footer-product">
                            <li><s>Rs. {items[object].previous_price.toLocaleString()}</s></li>
                            <li>{items[object].country}</li>
                        </div>
                    </div>
                );
            })}
            </ul>
        </div>
    );
}
export default Products;
/*
<Link to={`/products/${items[object].name.replace(/ +/g, "-").toLowerCase()}`}>
$ is the placeholder. It means the item comes in { } will be placed in /products/itemName
items[object].name will return key from shoe.json file
.replace(/ +/g, "-") will replace space with "-" symbol
.toLowerCase() will convert this string into lower case
*/