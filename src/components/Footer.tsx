import { CiFacebook } from "react-icons/ci";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa6";
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2024 Travel Website. All rights reserved.</p>
        <p>Follow us on:</p>
        <ul className="social-links">
          <li>
            <Link href="#" >
            < CiFacebook/>
            </Link>
          </li>
          <li>
            <Link href="#" >
              <span><RiTwitterXFill/></span>
            </Link>
          </li>
          <li>
            <Link href="#" >
              <span><FaLinkedinIn /></span>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
