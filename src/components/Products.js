import items from '../items.json';
import ItemsOfProducts from './Items-Of-Product';

function Products() {
    // console.log(items);

    return (
        <div>
            <div className="header">
                <h1>Mens & Women Shoes</h1>
                <p>{Object.keys(items).length} items found in Products</p>
            </div>
            <ItemsOfProducts/>
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