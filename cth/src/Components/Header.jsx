/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="xl:flex w-full justify-center h-24 bg-white fixed top-0 z-20 hidden  shadow-md">
        <div className="px-[70px] w-full">
          <header className="flex justify-between py-6 mx-auto items-center h-full w-full relative">
            <div className="flex gap-24 items-center">
              <Link to="/">
                <img src="assets/images/home-eight/logo.svg" alt="logo" />
              </Link>
            </div>
            <ul className="flex gap-10 text-main-black text-base leading-5 font-medium font-inter h-fit items-center">
              <li className="group">
                <Link
                  className="home-two-nav-item leading-5 relative  w-fit before:h-[20px] flex items-center gap-2  delay-150"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="associatedMembers"
                  className="home-two-nav-item relative "
                >
                  Associated Members
                </Link>
              </li>
              <li>
                <Link className="home-two-nav-item relative " to="bloglist">
                  Blogs
                </Link>
              </li>
              <li className="group relative">
                <Link
                  to="#"
                  className="home-two-nav-item relative  flex items-center gap-2  delay-150"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link className="home-two-nav-item relative" to="contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link className="home-two-nav-item relative " to="AboutUs">
                  About us
                </Link>
              </li>
            </ul>
            <div className="flex gap-7 items-center">
              <Link to="/Login">
                <div
                  className="home-two-btn-white-rev home-two-btn-white-rev-sm group bg-transparent border-[#101828]/10"
                  style={{ backgroundColor: "#B08D57" }}
                >
                  <span className="text-base  text-main-black transition-all duration-300 font-semibold font-inter relative z-10">
                    Log In
                  </span>
                  <svg
                    className="relative z-10"
                    width="7"
                    height="12"
                    viewBox="0 0 7 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className=" stroke-main-black transition-all duration-300"
                      d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </Link>
              <Link to="blog">
                <div
                  className="home-two-btn-white-rev home-two-btn-white-rev-sm group bg-transparent border-[#101828]/100  "
                  style={{ backgroundColor: "#B08D57" }}
                >
                  <span className="text-base  text-main-black transition-all duration-300 font-semibold font-inter relative z-10">
                    Get Started
                  </span>
                  <svg
                    className="relative z-10"
                    width="7"
                    height="12"
                    viewBox="0 0 7 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="  stroke-main-black transition-all duration-300"
                      d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </Link>
            </div>
          </header>
        </div>
      </div>

      <header className="flex xl:hidden flex-col relative">
        <div className="h-16 bg-white flex items-center justify-between fixed top-0 left-0 z-50 w-full px-2.5">
          <Link to="#" aria-label="logo">
            <img src="assets/images/home-two/logo.svg" alt="logo" />
          </Link>
          <button
            aria-label="mobile-Menu"
            className="text-main-black text-48 w-6 h-6 toggle_nav_menu"
            id="mobile_nav_toggle_menu"
          >
            <svg
              className="pointer-events-none transition-all duration-300"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path>
            </svg>
            <svg
              className="pointer-events-none hidden transition-all duration-300"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"></path>
            </svg>
          </button>
        </div>
        <div className="transition-all duration-300">
          <div
            className="w-full h-screen fixed bg-black/80 z-40 -left-full transition-all duration-300 delay-150"
            id="mobile-nav-div-overlay"
          ></div>
          <div
            className="fixed h-screen overflow-y-scroll bg-white w-full top-16 -left-full z-50 transition-all duration-300 delay-0"
            id="mobile-nav-div"
          >
            <div className="flex gap-28 flex-col pl-5 pt-5">
              <ul className="flex gap-5 flex-col text-paragraph text-base leading-5 font-medium font-inter">
                <li className="group relative">
                  <Link className="home-two-nav-item leading-5 relative before:content-['Home'] w-fit m-nav-dropdown">
                    Home
                  </Link>
                  <ul className="mobile-sub-nav h-[150px] overflow-hidden transition-all duration-300 pl-5 pt-4">
                    <li className="relative pb-1">
                      <Link
                        className="home-two-nav-item leading-5 relative hover:text-white w-fit py-1"
                        to="index-1"
                      >
                        Digital Marketing
                      </Link>
                    </li>
                    <li className="relative py-1">
                      <Link
                        className="home-two-nav-item leading-5 relative hover:text-blue-sass w-fit py-1"
                        to="index-2"
                      >
                        SEO Agency
                      </Link>
                    </li>
                    <li className="relative py-1">
                      <Link
                        className="home-two-nav-item leading-5 relative hover:text-blue-sass w-fit py-1"
                        to="index-3"
                      >
                        Creative Agency
                      </Link>
                    </li>
                    <li className="relative py-1">
                      <Link
                        className="home-two-nav-item leading-5 relative hover:text-blue-sass w-fit"
                        to="index-4"
                      >
                        AI Software
                      </Link>
                    </li>
                    <li className="relative py-1">
                      <Link
                        className="home-two-nav-item leading-5 relative hover:text-blue-sass w-fit"
                        to="index-5"
                      >
                        Business Consulting
                      </Link>
                    </li>
                    <li className="relative py-1">
                      <Link
                        className="home-two-nav-item leading-5 relative hover:text-blue-sass w-fit"
                        to="index-6"
                      >
                        ELearning
                      </Link>
                    </li>
                    <li className="relative py-1">
                      <Link
                        className="home-two-nav-item leading-5 relative hover:text-blue-sass w-fit"
                        to="index-7"
                      >
                        IT Business
                      </Link>
                    </li>
                    <li className="relative py-1">
                      <Link
                        className="home-two-nav-item leading-5 relative hover:text-blue-sass w-fit"
                        to="index-8"
                      >
                        Saas
                      </Link>
                    </li>
                    <li className="relative py-1">
                      <Link
                        className="home-two-nav-item leading-5 relative hover:text-blue-sass w-fit"
                        to="index-9"
                      >
                        App Landing
                      </Link>
                    </li>
                    <li className="relative py-1">
                      <Link
                        className="home-two-nav-item leading-5 relative hover:text-blue-sass w-fit"
                        to="index-10"
                      >
                        Personal Portfolio
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    className="home-two-nav-item relative before:content-['Company'] w-fit"
                    to="about"
                  >
                    Company
                  </Link>
                </li>
                <li>
                  <Link
                    className="home-two-nav-item relative before:content-['Services'] w-fit"
                    to="service"
                  >
                    Services
                  </Link>
                </li>
                <li className="home-two-nav-item relative before:content-['Blogs'] w-fit">
                  <Link to="blog">Blogs</Link>
                </li>
                <li className="">
                  <Link
                    to="#"
                    className="home-two-nav-item relative  w-fit m-nav-dropdown"
                  >
                    Gallery
                  </Link>
                  <ul className="mobile-sub-nav h-[150px] overflow-hidden transition-all duration-300 pl-5 pt-4">
                    <li className="relative pb-1">
                      <Link
                        className="home-two-nav-item leading-5 relative hover:text-blue-sass w-fit py-1"
                        to="projects"
                      >
                        Projects
                      </Link>
                    </li>
                    <li className="relative py-1">
                      <Link
                        className="home-two-nav-item leading-5 relative hover:text-blue-sass w-fit py-1"
                        to="project-details"
                      >
                        Projects Details
                      </Link>
                    </li>
                    <li className="relative py-1">
                      <Link
                        className="home-two-nav-item leading-5 relative hover:text-blue-sass w-fit py-1"
                        to="service-details"
                      >
                        Service Details
                      </Link>
                    </li>
                    <li className="relative py-1">
                      <Link
                        className="home-two-nav-item leading-5 relative hover:text-blue-sass w-fit"
                        to="blog-details"
                      >
                        Blog Details
                      </Link>
                    </li>
                    <li className="relative py-1">
                      <Link
                        className="home-two-nav-item leading-5 relative hover:text-blue-sass w-fit"
                        to="team-members"
                      >
                        Team Members
                      </Link>
                    </li>
                    <li className="relative py-1">
                      <Link
                        className="home-two-nav-item leading-5 relative hover:text-blue-sass w-fit"
                        to="faq"
                      >
                        FAQ's
                      </Link>
                    </li>
                    <li className="relative py-1">
                      <Link
                        className="home-two-nav-item leading-5 relative hover:text-blue-sass w-fit"
                        to="pricing"
                      >
                        Pricing
                      </Link>
                    </li>
                    <li className="relative py-1">
                      <Link
                        className="home-two-nav-item leading-5 relative hover:text-blue-sass w-fit"
                        to="team-members"
                      >
                        Team Members
                      </Link>
                    </li>
                    <li className="relative py-1">
                      <Link
                        className="home-two-nav-item leading-5 relative hover:text-blue-sass w-fit"
                        to="course-details"
                      >
                        Course Details
                      </Link>
                    </li>
                    <li className="relative py-1">
                      <Link
                        className="home-two-nav-item leading-5 relative hover:text-blue-sass w-fit"
                        to="cart"
                      >
                        Cart
                      </Link>
                    </li>
                    <li className="relative py-1">
                      <Link
                        className="home-two-nav-item leading-5 relative hover:text-blue-sass w-fit"
                        to="checkout"
                      >
                        Checkout
                      </Link>
                    </li>
                    <li className="relative py-1">
                      <Link
                        className="home-two-nav-item leading-5 relative hover:text-blue-sass w-fit"
                        to="404"
                      >
                        Not Found
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    className="home-two-nav-item relative before:content-['Contact'] w-fit"
                    to="contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex gap-5 flex-col pl-5 mt-5">
              <Link to="#" className="flex gap-2.5 group">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.77762 11.9424C2.8296 10.2893 2.37185 8.93948 2.09584 7.57121C1.68762 5.54758 2.62181 3.57081 4.16938 2.30947C4.82345 1.77638 5.57323 1.95852 5.96 2.6524L6.83318 4.21891C7.52529 5.46057 7.87134 6.08139 7.8027 6.73959C7.73407 7.39779 7.26737 7.93386 6.33397 9.00601L3.77762 11.9424ZM3.77762 11.9424C5.69651 15.2883 8.70784 18.3013 12.0576 20.2224M12.0576 20.2224C13.7107 21.1704 15.0605 21.6282 16.4288 21.9042C18.4524 22.3124 20.4292 21.3782 21.6905 19.8306C22.2236 19.1766 22.0415 18.4268 21.3476 18.04L19.7811 17.1668C18.5394 16.4747 17.9186 16.1287 17.2604 16.1973C16.6022 16.2659 16.0661 16.7326 14.994 17.666L12.0576 20.2224Z"
                    stroke="#5D51F2"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M22 5L12 5M22 5C22 4.43982 20.604 3.39322 20.25 3M22 5C22 5.56018 20.604 6.60678 20.25 7M12 5C12 4.43982 13.396 3.39322 13.75 3M12 5C12 5.56018 13.396 6.60678 13.75 7"
                    stroke="#5D51F2"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span className="font-bold text-base leading-5 tracking-tight text-main-black">
                  Call : 000 (123) 456 88
                </span>
              </Link>
              <Link to="#">
                <div className="home-two-btn-bg py-2.5 group bg-blue-seo border-blue-seo w-fit">
                  <span className="text-base text-white group-hover:text-blue-seo transition-all duration-300 font-semibold font-inter relative z-10">
                    Contact US
                  </span>
                  <svg
                    className="relative z-10"
                    width="7"
                    height="12"
                    viewBox="0 0 7 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="group-hover:stroke-blue-seo transition-all duration-300"
                      d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
