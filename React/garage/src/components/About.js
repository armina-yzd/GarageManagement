import {Link} from 'react-router-dom';


export const About = () => {
    return (
        <div>
            <div className = "row bg-black text-white">
                <p className = "mx-3 col-4">CAR REPAIR <span className = "display-6 opacity-75">&#127950;</span> </p>
                <p className = "m-3 col-6">WORKING HOURS 8:00AM - 6:00PM</p>
            </div>
            <div className = " p-3">
                <div className = "float-end text-white rounded-4 bg-black">
                <Link to='/login' className="btn text-white">&nbsp;SIGN UP&nbsp;&nbsp;/&nbsp;&nbsp;LOG IN &nbsp;</Link>  
               </div>
                <div className = "mt-2">
                    <Link to='/' className = "link-offset-2 link-underline link-underline-opacity-0 p-3 text-dark opacity-50">HOME</Link>
                    <Link to='/aboutus' className = "link-offset-2 link-underline link-underline-opacity-0 p-3 text-dark">ABOUT US</Link>
                    <Link to='/feedback' className = "link-offset-2 link-underline link-underline-opacity-0 p-3 text-dark opacity-50">FEEDBACK</Link>
                </div>
            </div>
            <div className="row ">
                <img className="col-md-8" src="./assets/179020210129170225.jpeg" alt="" />
                <div className="col-md-4 px-5 py-5">
                    <h3 className="fw-bold">Professional Car Services Since 1990</h3>
                    <p className="my-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, officia! Dolore expedita dicta animi natus provident fugiat illum minus eaque, repudiandae aut rem pariatur dolorum iste porro incidunt? Asperiores, corrupti!</p>
                </div>
            </div>
            <div className="row text-center">
                <div className="col-4">

                    <img className="col-12" src="./assets/car-wash-icon-isolated-on-white-background-vector-2.jpeg" alt="" />
                    <h2 className="fw-bold">Car Wash</h2>
                </div>
                <div className="col-4">
                    <img className="col-12 p-5" src="./assets/3151600.png" alt="" />
                    <h2 className="fw-bold">Repairs</h2>

                </div>
                <div className="col-4">
                    <img className="col-12 p-5" src="./assets/2052385.png" alt="" />
                    <h2 className="fw-bold">Services</h2>

                </div>
            </div>

            <div className="bg-dark-subtle mt-5 row ">
                <img className="col-md-6" src="./assets/shutterstock_1124428316-1024x682.webp" alt="" />

                <div className="col-md-6 text-center mt-5 ">
                    <h3>VEHICLE SERVICES</h3>
                    <p className="pt-3">You can trust your vehicle to us <br /> these are some of our services</p>

                    <div className="row justify-content-center position-relative mt-5 pb-5">
                        <div className="col-3"> Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                        <div className="col-3"> Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                        <div className="col-3"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. </div>

                    </div>
                </div>

            </div>

<div className="pt-5 mt-5 pb-2 text-center  bg-black text-white">
                <h1>100% Result Guarantee</h1>
                <p >we offer full service auto repair and maintenance</p>
                <div className="d-flex text-center justify-content-center">

                    <p>if you need consultation you can contact us +98 111 111 1111 </p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone mt-1 ms-1"
                        viewBox="0 0 16 16">
                        <path
                            d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                    </svg>
                </div>

            </div>
        </div>
    )
}

export default About;