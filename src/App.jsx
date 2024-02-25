import React, { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { Provider } from 'react-redux';
import store from './redux/store';
import FullscreenLoader from './components/FullScreenLoader';
import Header from './components/Header';
import Products from './pages/Porducts';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Otp from './pages/Otp';
import Profile from './pages/Profile';
import Form from './pages/Form';
import Edit from './pages/Edit';
import Footer from './components/Footer';

const App = () => {
   return (
      <Provider store={store}>
         <Fragment >

            <BrowserRouter>
            <Header />
               <Routes>

               <Route path="/" element={<Home />} />   
               <Route path="/products" element={<Products />} />   
               <Route path="/login" element={<Login />} />   
               <Route path="/profile" element={<Profile />} />   
               <Route path="/signup" element={<SignUp />} />   
               <Route path="/otp" element={<Otp />} />   
               <Route path="/create" element={<Form />} />   
               <Route path="/edit/:id" element={<Edit />} />   

               </Routes>
               <Footer />
            </BrowserRouter>
            <FullscreenLoader />
         </Fragment>
      </Provider>
   );
};

export default App;



















