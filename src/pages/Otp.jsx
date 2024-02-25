import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getEmail } from '../utlity/utility';
import { VerifyUserOtp } from '../apiRequest/ApiRequest';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';




const title = 'Verify Otp'
const socialTttle = 'Login with Social Media'
const btnText = 'Login Now'


const Otp = () => {

    
    const [errorMessage, setErrorMessage] = useState('')
    const [emailValue, setEmalValue] = useState('')

    const location = useLocation()
    const navigate = useNavigate()

    //  const from = location?.state?.from?.pathname || '/'

    const formHandler = async (e) => {
        e.preventDefault()

        const form = e.target
        //  console.log(form.password)
        const email = form.email.value
        const otp = form.otp.value


        VerifyUserOtp(email, otp)

            .then((res) => {
                console.log(res)
                if (res) {
                    navigate('/products')
                    window.location.reload()
                } else {
                    toast.error('Please enter valid OTP.')
                }
                // 
            })
            .catch(err => {
                const errorMsg = err.messsage

                setErrorMessage('Please provide valid email and password.')
            })


    }


    useEffect(() => {
        const email = getEmail()
        setEmalValue(email)

    }, [])


    return (
        <>
            <Toaster />
            <div className='vh-100 section-bg'  >

                <div className='login-section padding-tb '>
                    <div className="container">
                        <div className="account-wrapper ">
                            <h3 className="title">{title}</h3>
                            <form action="" className='account-form' onSubmit={formHandler}>
                                <div className="form-group">
                                    <input type="text" name='email' defaultValue={emailValue} id='email' required />
                                </div>
                                <div className="form-group">
                                    <input type="password" autoComplete={'true'} name='otp' id='otp' placeholder='Otp here*' required />
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
                                    <button type='submit' className='d-block lab-btn'>
                                        <span>{btnText}</span>
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

export default Otp;

//12345678
//abcd229@gmail.com