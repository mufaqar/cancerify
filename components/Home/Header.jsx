"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import HeaderNavContent from "../header/HeaderNavContent";


const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    // <!-- Main Header-->
    <header
      className={`main-header header-style-two alternate2 bg-theme-color ${
        navbar ? "fixed-header animated slideInDown" : ""
      }`}
    >
      <div className="auto-container">
        {/* <!-- Main box --> */}
        <div className="main-box">
          {/* <!--Nav Outer --> */}
          <div className="nav-outer">
            <div className="logo-box">
              <div className="logo">
                <Link href="/">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 262 352"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M177.959 220.495C177.959 220.495 177.93 220.408 177.959 220.379L208.123 190.252C252.003 146.404 252.54 74.6635 207.992 31.4971C186.581 10.7552 158.813 0.355286 131.016 0.355286C130.972 0.355286 130.943 0.3988 130.943 0.442315C130.943 0.3988 130.914 0.355286 130.871 0.355286C103.073 0.355286 75.3051 10.7552 53.8947 31.4971C9.34641 74.6635 9.88349 146.404 53.764 190.252L83.9274 220.379C83.9274 220.379 83.9564 220.466 83.9274 220.495L0.0129027 304.333C0.0129027 304.333 -0.0161284 304.42 0.0129027 304.449L46.8691 351.27C46.8691 351.27 46.9562 351.299 46.9853 351.27L130.929 267.389C130.929 267.389 130.943 267.36 130.943 267.346C130.943 267.36 130.943 267.375 130.958 267.389L214.901 351.27C214.901 351.27 214.988 351.299 215.017 351.27L261.874 304.449C261.874 304.449 261.903 304.376 261.874 304.333L177.959 220.495ZM130.958 173.485C130.958 173.485 130.943 173.514 130.943 173.543C130.943 173.514 130.943 173.499 130.929 173.485C113.249 155.774 85.6547 136.309 86.9466 108.083C87.9917 85.3825 108.299 66.7439 130.871 66.7003H131.016C153.588 66.7439 173.895 85.3825 174.94 108.083C176.232 136.309 148.638 155.774 130.958 173.485Z"
                      fill="white"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            {/* End .logo-box */}

            <HeaderNavContent />
            {/* <!-- Main Menu End--> */}
          </div>
          {/* End .nav-outer */}

          <div className="outer-box">
            <div className="btn-box">
              <Link href="/contact" className="theme-btn btn-style-five">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
