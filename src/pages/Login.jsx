import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LoginRequest } from '../apiRequest/ApiRequest';
import toast, { Toaster } from 'react-hot-toast';




const title = 'Login'
const socialTttle = 'Login with Social Media'



const Login = () => {
    const [errorMessage, setErrorMessage] = useState('')
    const [form, setForm] = useState({ email: '', password: '' })
    const location = useLocation()
    const navigate = useNavigate()

    const from = location?.state?.from?.pathname || '/'


    const formOnchange = (key, value) => {
        setForm(data => ({
            ...data,
            [key]: value
        }))
    }

    const handleSubmit = async () => {

        //  console.log(form.email)
        //    console.log(form.password)
        const response = await LoginRequest(form.email, form.password)

        if (response) {
            toast.success('6 digit code has been send to your email.')
            navigate('/otp')
        } else {
            toast.error('Invalid email or password.')

        }
    }


    return (
        <>
            <Toaster />
            <div className='vh-100 section-bg'  >

                <div className='login-section padding-tb '>
                    <div className="container">
                        <div className="account-wrapper ">
                            <h3 className="title">{title}</h3>
                            <form action="" onSubmit={(e) => e.preventDefault()} className='account-form' >
                                <div className="form-group">
                                    <input type="text" onChange={(e) => formOnchange('email', e.target.value)} name='email' id='email' placeholder='Email Address*' required />
                                </div>
                                <div className="form-group">
                                    <input type="password" onChange={(e) => formOnchange('password', e.target.value)} autoComplete={'true'} name='password' id='password' placeholder='Password here*' required />
                                </div>

                                {/* showing error message  */}
                                <div>
                                    {
                                        errorMessage && (
                                            <div className="error-message text-danger mb-1">
                                                {errorMessage}
                                            </div>
                                        )
                                    }
                                </div>


                                <div className="form-group">
                                    <div className="d-flex justify-content-between flex-wrap pt-sm-2">
                                        <div className="checkgroup">
                                            <input type="checkbox" name='remember' id='remember' />
                                            <label htmlFor="remember">Remember Me</label>
                                        </div>
                                        <Link to={'/forgetpass'}>Forget Password? </Link>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <button onClick={handleSubmit} type='submit' className='d-block lab-btn'>
                                        <span>Login Now</span>
                                    </button>
                                </div>


                            </form>


                            {/* account bottom */}
                            <div className="account-bottom">

                                <span className='d-block cate pt-10'>
                                    Don't Hanve an Account? <Link to={'/sign-up'}>Sign up</Link>
                                </span>

                            </div>


                        </div>
                    </div>
                </div>

            </div>

        </>
    );
};

export default Login;

//12345678
//abcd229@gmail.com