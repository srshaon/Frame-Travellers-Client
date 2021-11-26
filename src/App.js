
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import LogIn from './components/LogIn/LogIn';
import Register from './components/Register/Register';
import AuthProvider from './context/AuthProvider';
import AddNewService from './components/AddNewService/AddNewService';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import BookNow from './components/BookNow/BookNow';
import MyOrders from './components/MyOrders/MyOrders';
import AllOrders from './components/AllOrders/AllOrders';
import NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <LogIn></LogIn>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <PrivateRoute path='/addnewservice'>
              <AddNewService></AddNewService>
            </PrivateRoute>
            <PrivateRoute path='/myorders'>
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path='/allorders'>
              <AllOrders></AllOrders>
            </PrivateRoute>
            <PrivateRoute exact path='/booknow/:_id'>
              <BookNow></BookNow>
            </PrivateRoute>
            {/* -------has to be last Route--------- */}
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
