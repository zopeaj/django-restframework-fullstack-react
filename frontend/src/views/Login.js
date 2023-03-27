import { useState, useEffect, Fragment } from "react";
import { useGetCustomerLogin } from "../data/customer/api/customerApi";



const Login = () => {

  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleUsernameChange = (e) => {

  };

  const handlePasswordChange = (e) => {

  };



  useEffect(() => {
      document.title = "FullStackApp::Login"
  }, []);

  return (
    <Fragment>
      <div>
        <h1>Login </h1>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Username: </label>
              <br />
              <input type="text" placeholder="Please enter username" required/>
            </div>
            <div>
              <label>Password: </label>
              <br />
              <input type="password" placeholder="Please enter password" required/>
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </Fragment>
  )
}

export default Login;
