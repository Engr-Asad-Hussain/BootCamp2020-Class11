import react from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import ProductsMen from './components/ProductsMen';
import ProductsWomen from './components/ProductsWomen';
import ProductItems from './components/ProductItems';
import NavigationBar from './components/NavigationBar';


function RoutesConfig() {
    return (
        <Router>
            <NavigationBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />

                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductItems />} />
                
                <Route path="/products/men" element={<ProductsMen />} />
                <Route path="/products/men/:id" element={<ProductItems />} />
                
                <Route path="/products/women" element={<ProductsWomen />} />
                <Route path="/products/women/:id" element={<ProductItems />} />
            </Routes>
        </Router>
    );
}
export default RoutesConfig;