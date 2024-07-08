import React from 'react';
import './Register.css';

const Register = () => {
    return (
        <div className='register'>
            <h1>Register</h1>
            
            <div className='top'>
                <form>
                    <input type='text' name='fullname' placeholder='Full Name' />
                    <input type='text' name='username' placeholder='Username' />
                    <input type='email' name='email' placeholder='Email' />
                    <input type='password' name='password' placeholder='Password' />
                    <input type='password' name='password' placeholder='Confirm Password' />
                </form>
            </div>

            <button>Submit</button>
        </div>
    )
}

export default Register;