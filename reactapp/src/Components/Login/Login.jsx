import React, { useState } from 'react';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import './Login.css';

const Login = () => {
    const initialValues = {
        username: '',
        email: '',
        password: ''
    };

    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors.validate(formValues);
    };

    const validate = (values) => {

    }

    return (
        <div className='login'>
            <h1>Member Login</h1>

            <div className='top'>
                <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        name='username'
                        placeholder='Username'
                        value={formValues.username}
                        onChange={handleChange}
                    />

                    <input
                        type='email'
                        name='email'
                        placeholder='Email'
                        value={formValues.email}
                        onChange={handleChange}
                    />

                    <input
                        type='password'
                        name='password'
                        placeholder='Password'
                        value={formValues.password}
                        onChange={handleChange}
                    />
                </form>
            </div>

            <button>Sign In</button>

            <div className='bottom'>
                <CheckBoxOutlinedIcon /> <span className='item'>Remember me</span>
                <span className='item'>Forgot password?</span>
            </div>
        </div>
    )
}

export default Login;
