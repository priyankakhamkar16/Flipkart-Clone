import React from 'react';
import '../assets/styles/Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-row">
        <div className="footer-column">
          <h3>ABOUT</h3>
          <ul>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Flipkart Stories</li>
            <li>Press</li>
            <li>Corporate Information</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>GROUP COMPANIES</h3>
          <ul>
            <li>Myntra</li>
            <li>Cleartrip</li>
            <li>Shopsy</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>HELP</h3>
          <ul>
            <li>Payments</li>
            <li>Shipping</li>
            <li>Cancellation & Returns</li>
            <li>FAQ</li>
            <li>Report Infringement</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>CONSUMER POLICY</h3>
          <ul>
            <li>Cancellation & Returns</li>
            <li>Terms Of Use</li>
            <li>Security</li>
            <li>Privacy</li>
            <li>Sitemap</li>
            <li>Grievance Redressal</li>
            <li>EPR Compliance</li>
          </ul>
        </div>
        <div className="footer-column footer-address">
          <h3>Mail Us:</h3>
          <p>Flipkart Internet Private Limited,</p>
          <p>Buildings Alyssa, Begonia &</p>
          <p>Clove Embassy Tech Village,</p>
          <p>Outer Ring Road, Devarabeesanahalli Village,</p>
          <p>Bengaluru, 560103, Karnataka, India</p>
        </div>
        <div className="footer-column footer-address">
          <h3>Registered Office Address:</h3>
          <p>Flipkart Internet Private Limited,</p>
          <p>Buildings Alyssa, Begonia &</p>
          <p>Clove Embassy Tech Village,</p>
          <p>Outer Ring Road, Devarabeesanahalli Village,</p>
          <p>Bengaluru, 560103, Karnataka, India</p>
          <p>CIN : U51109KA2012PTC066107</p>
          <p>Telephone: 044-45614700 / 044-67415800</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-links">
          <span>Become a Seller</span>
          <span>Advertise</span>
          <span>Gift Cards</span>
          <span>Help Center</span>
        </div>
        <p>© 2007-2024 Flipkart.com</p>
      </div>
    </div>
  );
}

export default Footer;
