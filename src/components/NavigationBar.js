import { Link } from 'react-router-dom';

function NavigationBar() {
    return (
        <div className="nav">
            <hr/>
            <span>
                <Link className="nav-links" to="./">HOME</Link>
            </span>
            <span>
                <Link className="nav-links" to="./about">ABOUT</Link>
            </span>
            <span className="dropdown">
                <Link className="dropbtn" to="./products">PRODUCTS</Link>
                <div className="dropdown-content">
                    <Link to="./products/men">Mens Shoes</Link>
                    <Link to="./products/women">Women Shoes</Link>
                </div>
            </span>
            <hr/>
        </div>
    );
}
export default NavigationBar;