import React, { FC, useState } from 'react';
import image1 from '..//..//assets//PlanifyLogo.jpg'
import './Login.css';
import LoginService from '../../services/LoginService';

const Login: FC = () => {

  const [username, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] =useState<string>('');

  const handleLogin = async () => {

    if(!username || !password){
      setErrorMessage('Please fill in all fields.')
      return;
    }
  
    try{
      const loginData = {username,password};
      const success = await LoginService.signUp(loginData);
      
      if(success){
        console.log('User succesfully Logged in!');
      }else{
        console.error('Login Failed.');
      }
      console.log('Logging in with:', username, password);
      setErrorMessage('');
    }
    catch(error){
      console.error('Error during login:', error);
      setErrorMessage('Login failed. Please try again. ');
    }
  };

  return(
    <div className='login-container'>
    <img src={image1} alt='planify logo' className='logo'/>
    <h2>Login</h2>
    <form className="row g-3">
  <div className="col-md-6">
    <label htmlFor="validationDefaultUsername" className="form-label">Username</label>
    <div className="input-group">
      <span className="input-group-text" id="inputGroupPrepend2">@</span>
      <input type="text" className="form-control" value={username} onChange={(e) => setUserName(e.target.value)} placeholder='UserName' required/>
    </div>
  </div>
  <div className="col-md-6">
    <label htmlFor="validationDefault03" className="form-label">Password</label>
    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' required/>
  </div>
  <div className="col-12">
    <button className="btn btn-primary" type="submit" onClick={handleLogin}>Login</button>
  </div>
  </form>
  {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
</div>
  );

};

export default Login;
