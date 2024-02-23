import React, { FC, useState } from 'react';
import SignUpService from '../../services/SignUpService';
import './SignUp.css';
import image1 from '../../assets/PlanifyLogo.jpg';


const SignUp: FC = () => {
  
  const[firstName, setFirstName]=useState<string>('');
  const[lastName, setLastName]=useState<string>('');
  const[username, setUsername]=useState<string>('');
  const[password, setPassword]=useState<string>('');
  const[email, setEmail]=useState<string>('');
  const[phoneNumber, setPhoneNumber]=useState<string>('');
  const[errorMessage, setErrorMessage] = useState<string>('');

  const handleSignUp = async () => {

    if(!firstName|| !lastName ||!username || !email || !phoneNumber || !password){
      setErrorMessage('Please fill in all fields.');
      return;
    }

    try{
      const signUpData = {firstName,lastName,username,password,email,phoneNumber};
      const success = await SignUpService.signUp(signUpData);

      if(success){
        console.log('User succesfully registered!');
      }else{
        console.error('Registration Failed.');
      }
    }catch(error){
      console.error('Error during registration:', error);
    }
  };

  return(
    <div className='signup-container'>
    <img src={image1} alt='planify logo' className='logo'/>
    <h2>Sign Up for Planify</h2>
    <form className="row g-3">
  <div className="col-md-4">
    <label htmlFor="validationDefault01" className="form-label">First name</label>
    <input type="text" className="form-control"  value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder='First Name' required/>
  </div>
  <div className="col-md-4">
    <label htmlFor="validationDefault02" className="form-label">Last name</label>
    <input type="text" className="form-control" value={lastName} onChange={(e)=> setLastName(e.target.value)} placeholder='Last Name' required/>
  </div>
  <div className="col-md-4">
    <label htmlFor="validationDefaultUsername" className="form-label">Username</label>
    <div className="input-group">
      <span className="input-group-text" id="inputGroupPrepend2">@</span>
      <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='UserName' required/>
    </div>
  </div>
  <div className="col-md-4">
    <label htmlFor="validationDefault03" className="form-label">Password</label>
    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' required/>
  </div>
  <div className="col-md-4">
    <label htmlFor="validationDefault04" className="form-label">Email</label>
    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email' required/>
  </div>
  <div className="col-md-4">
    <label htmlFor="validationDefault05" className="form-label">Phone Number</label>
    <input type="tel" className="form-control" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder='(123)456789' required/>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
      <label className="form-check-label" htmlFor="invalidCheck2">
        Agree to terms and conditions
      </label>
    </div>
  </div>
  <div className="col-12">
    <button className="btn btn-primary" type="submit" onClick={handleSignUp}>Sign Up</button>
  </div>
  </form>
  {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
</div>
  );

};

export default SignUp;
