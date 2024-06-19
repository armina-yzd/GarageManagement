import "./styles/feedbackstyle.css";
import {Link} from 'react-router-dom';

export const Feedback = () => {
    return (
        <div>
            <div className = "row bg-black text-white">
                <p className = "mx-3 col-4">CAR REPAIR <span className = "display-6 opacity-75">&#127950;</span> </p>
                <p className = "m-3 col-6">WORKING HOURS 8:00AM - 6:00PM</p>
            </div>
            <div className = " p-3">
                <div className = "float-end text-white rounded-4 bg-black">
                <Link to='/login' class="btn text-white">&nbsp;SIGN UP&nbsp;&nbsp;/&nbsp;&nbsp;LOG IN &nbsp;</Link>  
               </div>
                <div className = "mt-2">
                    <Link to='/' className = "link-offset-2 link-underline link-underline-opacity-0 p-3 text-dark opacity-50">HOME</Link>
                    <Link to='/aboutus' className = "link-offset-2 link-underline link-underline-opacity-0 p-3 text-dark opacity-50">ABOUT US</Link>
                    <Link to='/feedback' className = "link-offset-2 link-underline link-underline-opacity-0 p-3 text-dark">FEEDBACK</Link>
                </div>
            </div>
            <div className="mb-5">
                <div className="text-center pb-5 text-dark mt-5">
                    <h5> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur cum officiis sit unde quaerat dolore quae dolorem perferendis delectus laborum quisquam accusamus atque commodi nisi maxime error, debitis et deleniti.</h5>


                </div>
                <div className="wrapper">

                    <div className="cols">
                        <div className="col" ontouchstart="this.classNameList.toggle('hover');">
                            <div className="container containerfeedback">
                                <div className="front" style={{ backgroundImage: `url(./assets/servis.jpg)` }} >
                                    <div className="inner">
                                        <p className="pp">SERVICES</p>
                                    </div>
                                </div>
                                <div className="back" style={{ backgroundImage: `url(./assets/black.jpeg)` }}>
                                    <div className="inner">

                                        <p className="pp">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

                                        <h1>USERS COMMENTS</h1>

                                        <button className=" classNamebutton btn btn-primary "> <i className="bi bi-bag"></i>SEE</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col" ontouchstart="this.classNameList.toggle('hover');">
                            <div className="container containerfeedback">
                                <div className="front" style={{ backgroundImage: `url(./assets/carwashh.png)` }}>
                                    <div className="inner">
                                        <p className="pp">CARWASH</p>
                                    </div>
                                </div>
                                <div className="back" style={{ backgroundImage: `url(./assets/black.jpeg)` }}>
                                    <div className="inner">
                                        <p className="pp">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

                                        <h1>USERS COMMENTS</h1>

                                        <button className="classNamebutton btn btn-primary"> <i className="bi bi-bag"></i>SEE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col" ontouchstart="this.classNameList.toggle('hover');">
                            <div className="container containerfeedback">
                                <div className="front" style={{ backgroundImage: `url(./assets/repairr.jpg)` }}>
                                    <div className="inner">
                                        <p className="pp">REPAIR</p>
                                    </div>
                                </div>
                                <div className="back" style={{ backgroundImage: `url(./assets/black.jpeg)` }}>
                                    <div className="inner">
                                        <p className="pp">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

                                        <h1>USERS COMMENTS</h1>

                                        <button className="classNamebutton btn btn-primary"> <i className="bi bi-bag"></i>SEE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
            <div className="pt-5 text-center  bg-dark-subtle">
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

export default Feedback;