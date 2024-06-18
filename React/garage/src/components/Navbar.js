import {Link} from 'react-router-dom'

export const Navbar = () => {
    return(
        <nav>
            <div className = "row bg-black text-white">
                <p className = "mx-3 col-4">CAR REPAIR <span className = "display-6 opacity-75">&#127950;</span> </p>
                <p className = "m-3 col-6">WORKING HOURS 8:00AM - 6:00PM</p>
            </div>
            <div className = " p-3">
                <div className = "float-end text-white rounded-4 bg-black">
                    <button className = "btn text-white">SIGN UP</button>
                    <button className = "btn text-white">LOG IN</button>
                </div>
                <div className = "mt-2">
                    <Link to='/' className = "link-offset-2 link-underline link-underline-opacity-0 p-3 text-dark opacity-50"
                        href="homepage.html">HOME</Link>
                    <Link to='/aboutus' className = "link-offset-2 link-underline link-underline-opacity-0 p-3 text-dark opacity-50"
                        href="aboutus.html">ABOUT US</Link>
                    <Link to='/feedback' className = "link-offset-2 link-underline link-underline-opacity-0 p-3 text-dark opacity-50"
                        href="feedback.html">FEEDBACK</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;