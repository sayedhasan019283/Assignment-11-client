
import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import { ToastContainer } from 'react-toastify';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import SingleProduct from './components/SingleProduct/SingleProduct';
import 'react-toastify/dist/ReactToastify.css';
import ManageInvenrory from './components/ManageInvetories/ManageInvenrory';
import AddInventory from './components/AddInventory/AddInventory';
import NotFound from './components/NotFoundPage/NotFound';
import MyItems from './components/MyItems/MyItems';
import Blogs from './components/Blogs/Blogs';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/inventory/:inventoryId' element={<PrivateRoute><SingleProduct></SingleProduct></PrivateRoute>}></Route>
        <Route path='/manage-inventories' element={<PrivateRoute><ManageInvenrory></ManageInvenrory></PrivateRoute>}></Route>
        <Route path='/add-inventory-item' element={<PrivateRoute><AddInventory></AddInventory></PrivateRoute>}></Route>
        <Route path='/my-items' element={<PrivateRoute><MyItems></MyItems></PrivateRoute>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes >
      <ToastContainer />
      <Footer></Footer>

    </div >
  );
}

export default App;
