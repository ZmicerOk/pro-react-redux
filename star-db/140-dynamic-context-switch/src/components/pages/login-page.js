import React from 'react';

const LoginPage = ({ isLoggedIn, onLogin}) =>{
    return (
        <div className = 'jumbotron'>
        <p>Login to the secret page!!!</p>
        <button className='btn btn-primary'
        onclick = {onLogin}
        >Login</button>
        </div>
    );
};
export default LoginPage;