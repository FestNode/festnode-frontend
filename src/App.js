import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import Login from './component/Auth/Login';
import Events from './component/Events/Events';
import SecureHome from './component/Home/SecureHome';
import SuperAdminDashboard from './component/Home/SuperAdminDashboard';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/events' element={<Events />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/home' element={<SecureHome />} />
        <Route exact path='/superAdminDashboard' element={<SuperAdminDashboard />} />
        {/* <Route exact path='/product/:id' element={<ProductDetails />} />
        <Route exact path='/products' element={<ProductsPage />} />
        <Route path='/products/:keyword' element={<ProductsPage />} />
        <Route path='/login' element={<LoginSignup />} />
        <Route path='/account' element={<ProtectedRoute><Account /></ProtectedRoute>} />
        <Route path='/profile/update' element={<ProtectedRoute><UpdateProfile /></ProtectedRoute>} />
        <Route path='/password/update' element={<ProtectedRoute><UpdatePassword /></ProtectedRoute>} />
        <Route path='/password/forgot' element={<ForgotPassword />} />
        <Route path='/password/reset/:token' element={<ResetPassword />} />
        <Route path='/cart' element={<ProtectedRoute><Cart /></ProtectedRoute>} />
        <Route path='/checkout' element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
        <Route path='/checkout/confirm' element={<ProtectedRoute><ConfirmOrder /></ProtectedRoute>} />
        <Route path='/process/payment' element={<ProtectedRoute><Payment /></ProtectedRoute>} />
        <Route path='/success' element={<OrderPlaced />} />
        <Route path='/fail' element={<OrderFailed />} />
        <Route path='/orders' element={<ProtectedRoute><Orders /></ProtectedRoute>} />
        <Route path='/orders/:id' element={<ProtectedRoute><OrderDetails /></ProtectedRoute>} />
        <Route path='/admin/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path='/admin/users' element={<ProtectedRoute><Users /></ProtectedRoute>} />
        <Route path='/admin/products' element={<ProtectedRoute><ProductList /></ProtectedRoute>} />
        <Route path='/admin/orders' element={<ProtectedRoute><AdminOrders /></ProtectedRoute>} /> */}
        

      </Routes>    
    </Router>
  );
}

export default App;
