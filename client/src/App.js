//dependency--libraries
import './App.css';
import { Link, Route } from 'react-router-dom'
import FormDeposit from './component/FormDeposit';
import FormWithdraw from './component/FormWithdraw';
import FormAlldata from './component/FormAlldata';
import { Signup } from './component/FormSignup';
import Signin from './component/FormSignin';
import FormProfile from './component/FormProfile';
import { UserContext } from './UserContext';
import { useContext } from 'react'
import AuthProvider from './AuthContext';
import FormHome from './component/FormHome';
import Privateroute from './privateroute';
import Nav  from './nav/navbar';
import FormSuccess from './component/FormSuccess';
import FormAdmin from './component/FormAdmin';
//internal files



function App() {

  const  userA  = useContext(UserContext);

  return (
   <>  
       {userA && 
         <>
           <p className="emailuser">{userA.email}</p>
          </>       
        }
    <div className="App">
        <h1> easy bank </h1>
        <p> safe and convinience </p>
    </div>
    <div>
      <AuthProvider>
      <Nav/> 
      <Route exact path ='/'         component = { FormHome }/>
      <Route exact path ='/allData'  component = { FormAlldata }/>
      <Route exact path ='/signup'   component = { Signup }/>
      <Route exact path ='/signin'   component = { Signin }/>
      <Route exact path ='/success'  component = { FormSuccess }/>
      <Route exact path ='/staff'    component = { FormAdmin }/>
      <Route exact path ='/profile'  component = { FormProfile }/>
      <Privateroute exact path ='/deposit'  component = { FormDeposit }/>
      <Privateroute exact path ='/withdraw' component = { FormWithdraw }/>      
      </AuthProvider>
    </div>
    <footer>
           <p className='mb-1'>license: MITxPRO</p>
           <p className='mb-1'>developer: Brent K.</p>
       </footer>
  </>
  );
}

export default App;
