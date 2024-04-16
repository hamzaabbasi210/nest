import React from "react";
import "./Footer.css";
import Services from "../servicess/Services";
import logo from "../../assets/logo.svg";
import { CiLocationOn } from "react-icons/ci";
import { FaHeadset } from "react-icons/fa";
import { BsSend } from "react-icons/bs";
import { Link } from "react-router-dom";
import appstore from "../../assets/app-store.jpg";
import googlestore from "../../assets/google-store.jpg";
import payment from "../../assets/payment-method.png";
function Footer() {
  return (
    <>
      <Services />
      <div className="footer-container mb-48 mt-12">
        <div className="container-fluid">
          <div className="footer-content">
            <div className="row footer-data ">
              <div className="footer-col mt-4  ">
                <div className="img">
                  <img src={logo} alt="" />
                </div>
                <div className="company-info mt-4 ">
                  <p>Awesome grocery store website template</p>

                  <h1>
                    <CiLocationOn />
                    <span>address:</span> 5171 W Campbell Ave undefined Kent,
                    Utah 53127 United States
                  </h1>

                  <h1>
                    <FaHeadset />
                    <span>Call Us:</span> (+91) - 540-025-124553
                  </h1>

                  <h1>
                    <BsSend />
                    <span>Email:</span> sale@Nest.com
                  </h1>
                </div>
              </div>
              <div className="footer-col mt-4">
                <div className="hd">Account</div>
                <div className="links">
                  <ul>
                    <li>
                      <Link>Sign In</Link>
                    </li>
                    <li>
                      <Link>View Cart</Link>
                    </li>
                    <li>
                      <Link>My Wishlist</Link>
                    </li>
                    <li>
                      <Link>Track My Order</Link>
                    </li>
                    <li>
                      <Link>Help Ticket</Link>
                    </li>
                    <li>
                      <Link>Shipping Details</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-col mt-4">
                <div className="hd">Company</div>
                <div className="links">
                  <ul>
                    <li>
                      <Link>About Us</Link>
                    </li>
                    <li>
                      <Link>Delivery Information</Link>
                    </li>
                    <li>
                      <Link>Privacy Policy</Link>
                    </li>
                    <li>
                      <Link>Terms & Conditions</Link>
                    </li>
                    <li>
                      <Link>Contact Us</Link>
                    </li>
                    <li>
                      <Link>Support Center</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-col mt-4">
                <div className="hd">Corporate</div>
                <div className="links">
                  <ul>
                    <li>
                      <Link>Become a Vendor</Link>
                    </li>
                    <li>
                      <Link>Affiliate Program</Link>
                    </li>
                    <li>
                      <Link>Farm Business</Link>
                    </li>
                    <li>
                      <Link>Farm Careers</Link>
                    </li>
                    <li>
                      <Link>Our Suppliers</Link>
                    </li>
                    <li>
                      <Link>Accessibility</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-col mt-4">
                <div className="hd">Popular</div>
                <div className="links">
                  <ul>
                    <li>
                      <Link>Milk & Flavoured Milk</Link>
                    </li>
                    <li>
                      <Link>Butter and Margarine</Link>
                    </li>
                    <li>
                      <Link>Eggs Substitutes</Link>
                    </li>
                    <li>
                      <Link>Marmalades</Link>
                    </li>
                    <li>
                      <Link>Sour Cream and Dips</Link>
                    </li>
                    <li>
                      <Link>Tea & Kombucha</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-col mt-4">
                <div className="hd">Install App</div>
                <div className="links mt-4">
                  <p>From App Store or Google Play</p>

                  <div className="row imgs my-4">
                    <div className="col-6 pr-0">
                      <img src={appstore} alt="" />
                    </div>
                    <div className="col-6 pl-0">
                      <img src={googlestore} alt="" />
                    </div>
                  </div>

                  <p>Secured Payment Gateways</p>
                  <div className="mt-4">
                    <img src={payment} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
