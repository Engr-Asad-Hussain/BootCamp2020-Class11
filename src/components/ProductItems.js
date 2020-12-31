import { useState } from 'react';
import items from '../items.json';
import { useParams, Link } from 'react-router-dom';

function ProductItems() {
    let [count, setCount] = useState(1);
    const { id } = useParams();
    let randomNumber = Math.floor(Math.random() * Object.keys(items).length)
    // console.log(id);

    return (
        <div className="env">
            <div className="env-productitems">
                <img className="image-productitems" src={items[id].img} alt="shoe" height={300} width={300} />
                <div className="title-productitems">
                    <div className="name-productitems">{items[id].name.toLowerCase()}</div>
                    <div className="price-productitems">Rs. {items[id].price.toLocaleString()}</div>
                    <div className="pre-price-productitems"><s>Rs. {items[id].previous_price.toLocaleString()}</s></div>
                    <div className="cart-productitems">
                        <div className="quantity-productitems">Quantity:</div>
                        <div>
                            <button 
                                className="btn" 
                                onClick={()=>{
                                    setCount( ++count );
                                }}>
                                +
                            </button>
                            <span>{count}</span>
                            <button 
                                className={count > 1 ? "btn" : "btn-disabled"} 
                                onClick={()=>{
                                    setCount( --count);
                                }}
                                disabled={count > 1 ? false : true}>
                            -
                            </button>
                        </div>
                    </div>
                    <div className="foot-productionitems">
                        <button className="foot-btn-buy">Buy Now</button>
                        <button className="foot-btn-add">Add to Cart</button>
                    </div>
                </div>
            </div>
            <div className="recommended-env-productitems">
                <Link to={`/products/${Object.keys(items)[randomNumber]}`}>
                    <div className="items-product">
                        <p>Recommended</p>
                            <img src={items[Object.keys(items)[randomNumber]].img} alt="shoe" height={240} width={215} />
                        <div className="title-product">
                            <li>
                                {items[Object.keys(items)[randomNumber]].name.toLowerCase()}
                            </li>
                        </div>
                        <div className="rupees-product">
                            <li>Rs. {items[Object.keys(items)[randomNumber]].price.toLocaleString()}</li>
                        </div>
                        <div className="footer-product">
                            <li><s>Rs. {items[Object.keys(items)[randomNumber]].previous_price.toLocaleString()}</s></li>
                            <li>{items[Object.keys(items)[randomNumber]].country}</li>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}
export default ProductItems;