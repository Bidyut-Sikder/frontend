

   

import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getEmail } from '../utlity/utility';
import { UpdateUserProfile, VerifyUserOtp } from '../apiRequest/ApiRequest';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';




const title = 'Verify Otp'
const socialTttle = 'Login with Social Media'
const btnText = 'Login Now'


const Profile = () => {
    const [errorMessage, setErrorMessage] = useState('')
    const [form, setForm] = useState({image:'',password:''})

    const location = useLocation()
    const navigate = useNavigate()

 
    



const imgHandler = () => {

}

const passwordHander = () => {
    return 
}

const onchangeHandler= (key,value) =>{
setForm(prev=> ({
    ...prev,
    [key]: value
}))
}


const submitHandler = async() => {



if(form.image.length>0 && form.password.length>0){

  const res= await UpdateUserProfile(form)
  setForm({image:'',password:''})
  if(res){
    toast.success('Profile updated successfully.')
  }else{
    toast.error('Something went wrong.')
  }

 window.location.reload()
} else if(form.password.length>0){


    const res= await UpdateUserProfile({password:form.password})
    setForm({image:'',password:''})
    if(res){
        toast.success('Profile updated successfully.')
      }else{
        toast.error('Something went wrong.')
      }
      window.location.reload()
}else if(form.image.length>0){

  const res= await UpdateUserProfile({image:form.image})
  setForm({image:'',password:''})
  
  if(res){
    toast.success('Profile updated successfully.')
  }else{
    toast.error('Something went wrong.')
  }
  window.location.reload()
}else{
    toast.error('You change nothing.')

}


}
    



    return (
        <>
            <Toaster />
            <div className='vh-100 section-bg'  >

                <div className='login-section padding-tb '>
                    <div className="container">
                        <div className="account-wrappe ">
                            <h3 className="title">Change Image And Password</h3>
                           


                            <form action="" className='account-form' onSubmit={(e)=>e.preventDefault()}>
<div className="form-group">
    <label  htmlFor="">New IMG URL here</label>
    <input type="text" name='img' value={form.image} onChange={(e)=>onchangeHandler("image",e.target.value)} id='img'  />
</div>
<div className="form-group">
<label  htmlFor="">New Password here</label>
    <input type="text" value={form.password} onChange={(e)=>onchangeHandler("password",e.target.value)} autoComplete={'true'} name='otp' id='otp'   />
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
     
       
    </div>
</div>

<div className="form-group">
    <button onClick={submitHandler} type='submit' className='d-block lab-btn'>
        <span>{btnText}</span>
    </button>
</div>


</form>





                            
                          


                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Profile;

//12345678
//abcd229@gmail.com







// <form action="" className='account-form' onSubmit={formHandler}>
// <div className="form-group">
//     <label  htmlFor="">Img URL here</label>
//     <input type="text" name='email' defaultValue={emailValue} id='email' required />
// </div>
// <div className="form-group">
   
//     <input type="text" autoComplete={'true'} name='otp' id='otp' placeholder='New Password here' required />
// </div>

// {/* showing error message  */}
// <div>
//     {
//         errorMessage && (
//             <div className="error-message text-danger mb-1">
//                 {errorMessage}
//             </div>
//         )
//     }
// </div>


// <div className="form-group">
//     <div className="d-flex justify-content-between flex-wrap pt-sm-2">
//         <div className="checkgroup">
//             <input type="checkbox" name='remember' id='remember' />
//             <label htmlFor="remember">Remember Me</label>
//         </div>
//         <Link to={'/forgetpass'}>Forget Password? </Link>
//     </div>
// </div>

// <div className="form-group">
//     <button type='submit' className='d-block lab-btn'>
//         <span>{btnText}</span>
//     </button>
// </div>


// </form>







// <form>
// <div class="form-group">
//   <label for="exampleInputEmail1">Email address</label>
//   <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
//   <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
// </div>
// <div class="form-group">
//   <label for="exampleInputPassword1">Password</label>
//   <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
// </div>
// <div class="form-check">
//   <input type="checkbox" class="form-check-input" id="exampleCheck1" />
//   <label class="form-check-label" for="exampleCheck1">Check me out</label>
// </div>
// <button type="submit" class="btn btn-primary">Submit</button>
// </form>






