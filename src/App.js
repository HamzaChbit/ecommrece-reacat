
import "./navbar/navbar.css"
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { Shop } from './pages/Shop/Shop.jsx';
import { Navbar } from './navbar/navbar';
import {Cart} from "./pages/cart/Cart.jsx"
import {ShopContextProvider} from "./context/context.jsx"



function App() {
  return (

    <div className="HOME">
<ShopContextProvider>
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/my-ecommerce" element={ <Shop/>}      />
          <Route path="/Cart" element={ <Cart/>}      />
        </Routes>
      </Router>
      </ShopContextProvider>
         
   


      
    </div>
  );
}

export default App;
