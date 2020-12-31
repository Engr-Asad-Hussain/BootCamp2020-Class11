import react, { useState } from 'react';
import items from '../items.json';
import { useParams } from 'react-router-dom';

function ProductItems() {
    let [count, setCount] = useState(1);
    const [btn, setBtn] = useState(true);
    const { id } = useParams();
    console.log(id);
    return (
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
    );
}
export default ProductItems;