import React, { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { isLogin } from "../utlity/utility";
import { Logout, readUserProfile } from "../apiRequest/ApiRequest";
import { useNavigate } from "react-router-dom";
import avatar from '/avatar.png'


const NavBar = () => {
  const navigate = useNavigate()
  const [sideBar, setSidebar] = useState(false)
  const [hideIcon, setHideIcon] = useState(false)
  const [image, setImage] = useState(undefined)

  //active-nav

  const closemenu = () => {
    setSidebar(false)
    setHideIcon(false)
  }
  const openmenu = () => {
    setSidebar(true)
    setHideIcon(true)
  }

  const logoutHandler = () => {
    Logout()
    // sessionStorage.clear()
    //localStorage.clear()
    navigate('/', { replace: true })
    window.location.reload()

  }





  useEffect(() => {
    (async () => {
      const res = await readUserProfile()
     
      setImage(res.image) 
    })()
  }, [])











  return (
    <div id="header">


      <div className="container">
        {
          isLogin() ? (<nav>
            <Link to='/'> <img src="/vite.svg" className="logo" alt="" /></Link>
            <ul id="sidemenu" className={`${sideBar ? 'open' : 'close'}`}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
             {
              image?( <li><Link to="/profile"> <img className="avatar" src={image} alt="" /> </Link></li>):( <li><Link to="/profile"> <img className="avatar" src={avatar} alt="" /> </Link></li>)
             }
             
             
              <li><button className="btn btn-outline-primary" onClick={logoutHandler}>Logout</button></li>

              <i style={{ color: 'wheat' }} className={`icon fas fa-times  ${hideIcon ? '' : 'hideIcon'} `} onClick={closemenu} ></i>
            </ul>
            <i style={{ color: 'wheat' }} className={`icon fas fa-bars ${hideIcon ? 'hideIcon' : ''}`} onClick={openmenu}></i>
          </nav>
          ) : (
            <nav>
              <Link to='/'> <img src="/vite.svg" className="logo" alt="" /></Link>
              <ul id="sidemenu" className={`${sideBar ? 'open' : 'close'}`}>
                <li><Link to="/">Home</Link></li>

                <li><Link className="btn btn-outline-primary" to="/signup">Create Account</Link></li>
                <li><Link to="/login">Login</Link></li>
                <i style={{ color: 'wheat' }} className={`icon fas fa-times  ${hideIcon ? '' : 'hideIcon'} `} onClick={closemenu} ></i>
              </ul>
              <i style={{ color: 'wheat' }} className={`icon fas fa-bars ${hideIcon ? 'hideIcon' : ''}`} onClick={openmenu}></i>
            </nav>
          )}

      </div>
    </div>
  )
};

export default NavBar;