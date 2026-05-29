import React from 'react';
import './Footer.css';
import logoImg from '../../assets/logo.png';
import qr1 from '../../assets/Location 1.png';
import qr2 from '../../assets/Location 2.png';

const LocationIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f05023" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f05023" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.52 2 2 0 0 1 3.6 1.37h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f05023" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);
const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
);
const WhatsappIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
);
const YoutubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
);


const Footer = () => {
  return (
    <footer className="footerSection">
      <div className="footerCtaBlock">
        <div className="footerCtaLeft">
          <h2 className="footerCtaTitle">Your Solutions <span>Start Here!</span></h2>
          <p className="footerCtaDesc">
            Tell us what you need, and we'll get in touch with the perfect solution
          </p>
        </div>
        <div className="footerCtaRight">
          <button className="footerCtaBtn">Enquiry Now &rarr;</button>
        </div>
      </div>

      <div className="footerMain">
        {/* Column 1: Logo & QR */}
        <div className="footerCol footerColBrand">
          <img src={logoImg} alt="NextSkill Logo" className="footerLogo" />
          <div className="footerQRs">
            <img src={qr1} alt="Location 1 QR" className="footerQrImg" />
            <img src={qr2} alt="Location 2 QR" className="footerQrImg" />
          </div>
        </div>

        {/* Column 2: Services */}
        <div className="footerCol">
          <h4 className="footerHeading">Services</h4>
          <ul className="footerLinks">
            <li><a href="#">Web Development</a></li>
            <li><a href="#">Mobile App Development</a></li>
            <li><a href="#">Branding</a></li>
            <li><a href="#">Graphic Designing</a></li>
            <li><a href="#">UI UX Design</a></li>
            <li><a href="#">Digital Marketing</a></li>
          </ul>
        </div>

        {/* Column 3: Education */}
        <div className="footerCol">
          <h4 className="footerHeading">Education</h4>
          <ul className="footerLinks">
            <li><a href="#">Academy</a></li>
            <li><a href="#">Internship</a></li>
          </ul>
        </div>

        {/* Column 4: Quick Links */}
        <div className="footerCol">
          <h4 className="footerHeading">Quick Links</h4>
          <ul className="footerLinks">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 5: Contact */}
        <div className="footerCol footerColContact">
          <h4 className="footerHeading">For more details</h4>
          <ul className="footerContactList">
            <li>
              <span className="contactIcon"><LocationIcon /></span>
              <span>Pankaja Mill Road, Ramanathapuram<br/>(Opp New Indian Express),<br/>Coimbatore-641045</span>
            </li>
            <li>
              <span className="contactIcon"><PhoneIcon /></span>
              <div className="contactPhones">
                <span>+91 9876543213</span>
                <span>+91 9876543234</span>
              </div>
            </li>
            <li>
              <span className="contactIcon"><MailIcon /></span>
              <span>nextskilltechnologies@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footerBottom">
        <div className="footerBottomLeft">
          <a href="#">Terms of Use*</a>
          <a href="#">Privacy Policy*</a>
        </div>
        <div className="footerBottomRight">
          <span className="followUsText">Follow us</span>
          <div className="socialIcons">
            <a href="#" className="socialIcon"><FacebookIcon /></a>
            <a href="#" className="socialIcon"><LinkedinIcon /></a>
            <a href="#" className="socialIcon"><TwitterIcon /></a>
            <a href="#" className="socialIcon"><WhatsappIcon /></a>
            <a href="#" className="socialIcon"><YoutubeIcon /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
