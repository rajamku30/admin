import {StyleContainer} from './components/Styles';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import {connect} from "react-redux";

//public pages
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
//coreui-librray import css
import './scss/style.scss';
//login page loader css
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
//public & private route config
import AuthRoute from './components/AuthRoute';
import BasicRoute from './components/BasicRoute';
//admin template entry file
import TheLayout from './core/TheLayout';

function App({checked}) {
  return (
    <Router>
      {checked &&
          <Switch>
             <BasicRoute exact path="/signup">
               <Signup/>
             </BasicRoute>
             <BasicRoute exact path="/login">
               <Login/>
             </BasicRoute>

             <AuthRoute exact path="/admin">
               <TheLayout />
             </AuthRoute>
             <AuthRoute exact path="/admin/dashboard">
               <TheLayout />
             </AuthRoute>
             <AuthRoute exact path="/admin/liquildity">
               <TheLayout />
             </AuthRoute>
             <AuthRoute exact path="/admin/intraday">
               <TheLayout />
             </AuthRoute>

             <Route path="/">
             <StyleContainer>
               <Home/>
              </StyleContainer>
             </Route>

          </Switch>
      }
    </Router>  
  );
}

const mapStateToProps = ({session}) => ({
  checked: session.checked
});

export default connect(mapStateToProps)(App);
