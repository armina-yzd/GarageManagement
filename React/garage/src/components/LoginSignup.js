import "./styles/loginstyle.css";
import {Link} from 'react-router-dom'


export const LoginSignup = () => {
  return (
    <div>
      
      <div className="pt-5 text-center" style={{background: "rgb(66, 66, 66)"}}>
       
        <div>
          <Link to='/' className="link-offset-2 link-underline link-underline-opacity-0 p-3 text-white opacity-50">HOME</Link>
          <Link to='/aboutus' className="link-offset-2 link-underline link-underline-opacity-0 p-3 text-white opacity-50">ABOUT US</Link>
          <Link to='/feedback' className="link-offset-2 link-underline link-underline-opacity-0 p-3 text-white opacity-50">FEEDBACK</Link>
        </div>
      </div>

      <div className="bodydiv">
        <div className="container containerjr">
          <input type="checkbox" id="flip" />
          <div className="cover">
            <img src="assets/frontImg.jpg" alt="" />
            <div className="text">
              <span className="text-1">Garage Management <br /> does not have</span>
              <span className="text-2">another branch</span>
            </div>

          </div>
          <div className="forms">
            <div className="form-content">
              <div className="login-form">
                <div className="title">Log In</div>
                <form action="#">
                  <div className="input-boxes">
                    <div className="input-box">
                      <i className="fas fa-envelope"></i>
                      <input type="text" placeholder="Enter your national ID" required />
                    </div>
                    <div className="input-box">
                      <i className="fas fa-lock"></i>
                      <input type="password" placeholder="Enter your password" required />
                    </div>
                    <div className="text"><a href="#">Forgot password?</a></div>
                    <div className="button input-box">
                      <input type="submit" value="Submit" />
                    </div>
                    <div className="text sign-up-text">Don't have an account? <label htmlFor="flip">Sign Up now</label></div>
                  </div>
                </form>
              </div>
              <div className="signup-form">
                <div className="title">Sign Up</div>
                <form action="#" className="row">
                  <div className="input-boxes">
                  
                    <div className="input-box">
                      <i className="fas fa-user"></i>
                      <input type="text" placeholder="Enter your first name" required />
                    </div>
                    <div className="input-box">
                      <i className="fas fa-user"></i>
                      <input type="text" placeholder="Enter your last name" required />
                    </div>
                    <div className="input-box">
                      <i className="fas fa-user"></i>
                      <input type="text" placeholder="Enter your national ID" required />
                    </div>
                    <div className="input-box">
                      <i className="fas fa-envelope"></i>
                      <input type="text" placeholder="Enter your email" required />
                    </div>
                    <div className="input-box">
                      <i className="fas fa-lock"></i>
                      <input type="password" placeholder="Enter your password" required />
                    </div>
                    <div className="button input-box">
                      <input type="submit" value="Submit" />
                    </div>
                    <div className="text sign-up-text">Already have an account? <label htmlFor="flip">Log In now</label></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup;