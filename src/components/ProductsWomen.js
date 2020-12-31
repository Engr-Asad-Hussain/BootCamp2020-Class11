import React from 'react';
import items from '../items.json';
import { Link } from 'react-router-dom';

function ProductsMen() {
    // console.log(items);
    
    function totalItems() {
        let count = 0;
        let womenItems = [];
        let array = Object.keys(items);
        array.forEach( (element) =>{
            // console.log(element)
            if ( items[element].gender === "female") {
                count ++;
                womenItems.push(element);
            }
        })
        return [count, womenItems];
    }

    return (
        <div>
            <div className="header">
                <h1>Women Shoes</h1>
                <p>{totalItems()[0]} items found in Women Shoes</p>
            </div>
            <ul className="env-product">
            {totalItems()[1].map( (object, index)=>{    
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
export default ProductsMen;
/*
<Link to={`/products/${items[object].name.replace(/ +/g, "-").toLowerCase()}`}>
$ is the placeholder. It means the item comes in { } will be placed in /products/itemName
items[object].name will return key from shoe.json file
.replace(/ +/g, "-") will replace space with "-" symbol
.toLowerCase() will convert this string into lower case
*/


/*
function totalItems() {
        let count = 0;
        let array = Object.keys(items);
        array.forEach( (element) =>{
            // console.log(items[element].gender)
            if ( items[element].gender === "male") {
                count ++;
            }
        })
        console.log(count);
    }
    */