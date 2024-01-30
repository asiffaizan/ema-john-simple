import './App.css';
import Header from './components/Header/Header';
import ManageInventory from './components/ManageInventory/ManageInventory';
import NotFound from './components/NotFound/NotFound';
import Review from './components/Review/Review';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router ,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Routes>
          <Route exact path={`/`} element={<Shop/>}></Route>
          <Route path={`/shop`} element={<Shop/>}></Route>
          <Route path='/review' element={<Review/>}></Route>
          <Route path='/manage-inventory' element={<ManageInventory/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
