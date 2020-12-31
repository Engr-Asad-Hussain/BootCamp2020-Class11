import { Link } from 'react-router-dom';

function NavigationBar() {
    return (
        <div className="nav">
            <span>
                <Link className="nav-links" to="./">Home</Link>
            </span>
            <span>
                <Link className="nav-links" to="./about">About</Link>
            </span>
            <span>
                <Link className="nav-links" to="./products">Product</Link>
            </span>
        </div>
    );
}
export default NavigationBar;