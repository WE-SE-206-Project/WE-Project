  
import React from 'react';
import '../css/footer.css';


class Footer extends React.Component{

    render(){
        return(
            <div>
                <div id="footer">
                    <div id="footer-top-button-div">
                        <a href="#top" className="animate-going-top"><button id="footer-top-button" className="mt3">
                            <i className="fas fa-arrow-up"></i>
                        </button></a>
                    </div>
                    <div id="upper-footer-subscribe">
                        <h2 className="white">Subscribe to our Newsletter</h2>
                        <br></br>
                        <input placeholder="Enter your Email" id="subscribe-input-email"></input>
                        <button id="subscribe-btn">Subscribe</button>
                    </div>
                   
                    <div id="upper-footer">
                    
                        <ul>
                            <p className="white">About Us</p>
                            <li><a className="upper-footer-ul-li" >Terms & conditions</a></li>
                            <li><a className="upper-footer-ul-li" >Privacy agreement</a></li>
                        </ul>
                        <ul>
                            <p className="white">Customer Service</p>


                            <li><a href="#top" className="upper-footer-ul-li" >Contact Us</a></li>
                            <li><a href="#refund-policy" className="upper-footer-ul-li" >Refund Policy</a></li>
                            <li><a href="#return-policy" className="upper-footer-ul-li" >Return Policy</a></li>
                            <li><a href="#top" className="upper-footer-ul-li">Warranty Policy</a></li>



                        </ul>
                        <ul>
                            <p className="white">Sell With us</p>
                            <li><a href="#top" className="upper-footer-ul-li" >Sell on Shopify</a></li>
                        </ul>
                        <ul>
                            <p className="white">Tracking</p>
                            <li><a href="#top" className="upper-footer-ul-li">Track your order</a></li>
                        </ul>
                        <ul id="social">
                            <p className="white">Social</p>
                            <i className="fab fa-facebook-f blue pa2 social-icons"></i>
                            <i className="fab fa-instagram orange pa2 social-icons"></i>
                            <i className="fab fa-youtube dark-red social-icons"></i>
                        </ul>
                       
                    </div>
                    <br/>
                    <hr className="b--black"/>
                    <div id="lower-footer"> 
                        <p className="moon-gray b">© 2020 Shopify.com.pk. All Rights Reserved.</p>
                        <div id="cash-icons">
                            <p className="moon-gray" >Payment methods</p>
                            <i className="fab fa-cc-visa yellow mh2 f3"></i>
                            <i className="fab fa-cc-paypal light-blue f3"></i>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}
export default Footer;