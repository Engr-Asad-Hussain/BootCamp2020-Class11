import '../App.css';
import logo from '../logo.png';

function Home() {
    return (
        <div>
            <div className="home-container">
                <img src={logo} alt="logo"/>
                <h1>Happy Shopping</h1>
            </div>
            <div id="text-center">
                <span style={{ backgroundColor: '#dbf3ac' }}>STAY SAFE AND SHOP FROM THE COMFORT OF YOUR HOME | FREE SHIPPING NATION WIDE | #HAPPYSHOPPING</span>
            </div>
        </div>
    );
}
export default Home;