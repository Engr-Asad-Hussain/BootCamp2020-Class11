import { Link } from 'react-router-dom';

function NavigationBar() {
    return (
        <div>
            <Link to="./">Home</Link>
            <Link to="./about">About</Link>
            <Link to="./products">Product</Link>
        </div>
    );
}
export default NavigationBar;