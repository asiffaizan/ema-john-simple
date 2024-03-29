import './App.css';
import Header from './components/Header/Header';
import ManageInventory from './components/ManageInventory/ManageInventory';
import NotFound from './components/NotFound/NotFound';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Review from './components/Review/Review';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router ,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Routes>
          <Route exact path={`/`} element={<Shop/>}/>
          <Route path={`/shop`} element={<Shop/>}/>
          <Route path='/review' element={<Review/>}/>
          <Route path='/manage-inventory' element={<ManageInventory/>}/>
          <Route path='/product/:productKey' element={<ProductDetails/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
