import React from 'react'
import './LoginForm.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginForm = () => {
    return (
        <div className='bg-dark wrapper d-flex align-items-center justify-content-center w-100'>
            <div className='login'>
                <h2 className='mb-3'>Login Form</h2>
                <form className='needs-validation'>
                    <div className="form-group mb-2 was-validated">
                        <label htmlfor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" placeholder="name@example.com" required/>
                        <div className='invalid-feedback'>Please enter your email</div>
                    </div>
                    <div className="form-group mb-2 was-validated">
                        <label htmlfor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" placeholder="********" required/>
                        <div className='invalid-feedback'>Please enter your password</div>
                    </div>
                    <div className="form-group mb-2">
                        <input type="checkbox" className="form-check-input mx-1"/>Remember me
                    </div>
                    <button type='submit' className='btn btn-success w-100 mt-2'>SIGN IN</button>
                </form>
            </div>
        </div>
    )
}

export default LoginForm
