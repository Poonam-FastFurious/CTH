/* eslint-disable react/no-unescaped-entities */

function Header() {
  return (
    <>
      <header
        className="py-6 px-4 mx-auto w-full fixed top-0 z-50 border-b border-white/10 justify-center items-center transition-all duration-300 ease-in-out hidden xl:flex"
        id="h5-header"
      >
        <div className="w-full max-w-[1619px] relative flex justify-between items-center">
          <div className="flex gap-28 items-center">
            <a href="#">
              <img
                src="https://quomodothemes.website/html/quland-html/assets/images/home-five/logo.svg"
                alt="logo"
              />
            </a>
            <ul className="flex gap-10 text-white text-base leading-5 font-medium font-inter">
              <li className="group">
                <a
                  href="#"
                  className="home-two-nav-item leading-5 relative before:content-['Home'] before:text-buisness-red before:border-buisness-red transition-all ease-out duration-300 hover:text-buisness-red flex gap-2 items-center"
                >
                  Home
                  <svg
                    className="transition-all duration-300 group-hover:rotate-180"
                    width="10"
                    height="10"
                    viewBox="0 0 19 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 2L9.5 8L17 2"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  className="home-two-nav-item relative before:content-['Company'] before:text-buisness-red before:border-buisness-red transition-all ease-out duration-300 hover:text-buisness-red"
                  href="about.html"
                >
                  Company
                </a>
              </li>
              <li>
                <a
                  className="home-two-nav-item relative before:content-['Services'] before:text-buisness-red before:border-buisness-red transition-all ease-out duration-300 hover:text-buisness-red"
                  href="service.html"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  className="home-two-nav-item relative before:content-['Blogs'] before:text-buisness-red before:border-buisness-red transition-all ease-out duration-300 hover:text-buisness-red"
                  href="blog.html"
                >
                  Blogs
                </a>
              </li>
              <li className="group relative">
                <a
                  href="#"
                  className="home-two-nav-item relative before:content-['Pages'] before:text-buisness-red before:border-buisness-red transition-all ease-out duration-300 hover:text-buisness-red flex items-center gap-2"
                >
                  Pages
                  <svg
                    className="transition-all duration-300 group-hover:rotate-180"
                    width="10"
                    height="10"
                    viewBox="0 0 19 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 2L9.5 8L17 2"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </a>
                <div className="absolute px-2 -left-7 h-0 group-hover:h-[320px] overflow-hidden top-5 transition-all duration-700">
                  <ul className="max-h-fit min-w-[200px] bg-buisness-light-black border-t-buisness-light-black border border-white/10 mt-[36px] transition-all duration-300 overflow-hidden px-5 top-20 pb-4 rounded-b-md">
                    <li className="relative py-1">
                      <a
                        className="home-two-nav-item leading-5 relative text-white hover:text-buisness-red before:border-buisness-red w-fit"
                        href="projects.html"
                      >
                        Projects
                      </a>
                    </li>
                    <li className="relative py-1">
                      <a
                        className="home-two-nav-item leading-5 relative text-white hover:text-buisness-red before:border-buisness-red w-fit"
                        href="project-details.html"
                      >
                        Project Details
                      </a>
                    </li>
                    <li className="relative py-1">
                      <a
                        className="home-two-nav-item leading-5 relative text-white hover:text-buisness-red before:border-buisness-red w-fit"
                        href="service-details.html"
                      >
                        Service Details
                      </a>
                    </li>
                    <li className="relative py-1">
                      <a
                        className="home-two-nav-item leading-5 relative text-white hover:text-buisness-red before:border-buisness-red w-fit"
                        href="blog-details.html"
                      >
                        Blog Details
                      </a>
                    </li>
                    <li className="relative py-1">
                      <a
                        className="home-two-nav-item leading-5 relative text-white hover:text-buisness-red before:border-buisness-red w-fit"
                        href="pricing.html"
                      >
                        Pricing
                      </a>
                    </li>
                    <li className="relative py-1">
                      <a
                        className="home-two-nav-item leading-5 relative text-white hover:text-buisness-red before:border-buisness-red w-fit"
                        href="team-members.html"
                      >
                        Team Members
                      </a>
                    </li>
                    <li className="relative py-1">
                      <a
                        className="home-two-nav-item leading-5 relative text-white hover:text-buisness-red before:border-buisness-red w-fit"
                        href="faq.html"
                      >
                        FAQ'S
                      </a>
                    </li>
                    <li className="relative py-1">
                      <a
                        className="home-two-nav-item leading-5 relative text-white hover:text-buisness-red before:border-buisness-red w-fit"
                        href="course-details.html"
                      >
                        Course Details
                      </a>
                    </li>
                    <li className="relative py-1">
                      <a
                        className="home-two-nav-item leading-5 relative text-white hover:text-buisness-red before:border-buisness-red w-fit"
                        href="cart.html"
                      >
                        Cart
                      </a>
                    </li>
                    <li className="relative py-1">
                      <a
                        className="home-two-nav-item leading-5 relative text-white hover:text-buisness-red before:border-buisness-red w-fit"
                        href="checkout.html"
                      >
                        Checkout
                      </a>
                    </li>
                    <li className="relative py-1">
                      <a
                        className="home-two-nav-item leading-5 relative text-white hover:text-buisness-red before:border-buisness-red w-fit"
                        href="404.html"
                      >
                        Not Found
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a
                  className="home-two-nav-item relative before:content-['Contact'] before:text-buisness-red before:border-buisness-red transition-all ease-out duration-300 hover:text-buisness-red"
                  href="contact.html"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="flex gap-7 items-center">
            <a href="#" className="flex gap-2.5 group">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.77762 11.9424C2.8296 10.2893 2.37185 8.93948 2.09584 7.57121C1.68762 5.54758 2.62181 3.57081 4.16938 2.30947C4.82345 1.77638 5.57323 1.95852 5.96 2.6524L6.83318 4.21891C7.52529 5.46057 7.87134 6.08139 7.8027 6.73959C7.73407 7.39779 7.26737 7.93386 6.33397 9.00601L3.77762 11.9424ZM3.77762 11.9424C5.69651 15.2883 8.70784 18.3013 12.0576 20.2224M12.0576 20.2224C13.7107 21.1704 15.0605 21.6282 16.4288 21.9042C18.4524 22.3124 20.4292 21.3782 21.6905 19.8306C22.2236 19.1766 22.0415 18.4268 21.3476 18.04L19.7811 17.1668C18.5394 16.4747 17.9186 16.1287 17.2604 16.1973C16.6022 16.2659 16.0661 16.7326 14.994 17.666L12.0576 20.2224Z"
                  stroke="#D90A2C"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M22 5L12 5M22 5C22 4.43982 20.604 3.39322 20.25 3M22 5C22 5.56018 20.604 6.60678 20.25 7M12 5C12 4.43982 13.396 3.39322 13.75 3M12 5C12 5.56018 13.396 6.60678 13.75 7"
                  stroke="#D90A2C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span className="font-bold text-base leading-5 tracking-tight text-white">
                Call : 000 (123) 456 88
              </span>
            </a>
            <a href="contact.html">
              <div className="home-two-btn-bg py-2.5 group bg-buisness-red border-buisness-red">
                <span className="text-base text-white group-hover:text-buisness-red transition-all duration-300 font-semibold font-inter relative z-10">
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
                    className="group-hover:stroke-buisness-red transition-all duration-300"
                    d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </header>
      <header className="flex xl:hidden flex-col relative">
        <div className="h-16 bg-buisness-light-black flex items-center justify-between fixed top-0 left-0 z-50 w-full px-2.5">
          <a href="#" aria-label="logo">
            <img
              src="https://quomodothemes.website/html/quland-html/https://quomodothemes.website/html/quland-html/assets/images/home-five/logo.svg"
              alt="logo"
            />
          </a>
          <button
            aria-label="mobile-Menu"
            className="text-white text-48 w-6 h-6 toggle_nav_menu"
            id="mobile_nav_toggle_menu"
          >
            <svg
              className="pointer-events-none transition-all duration-300 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="#ffff"
                d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
              ></path>
            </svg>
            <svg
              className="pointer-events-none hidden transition-all duration-300"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path
                fill="#ffff"
                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
              ></path>
            </svg>
          </button>
        </div>
        <div className="transition-all duration-300">
          <div
            className="w-full h-screen fixed bg-black/80 z-40 -left-full transition-all duration-300 delay-150"
            id="mobile-nav-div-overlay"
          ></div>
          <div
            className="fixed h-screen overflow-y-scroll bg-buisness-light-black w-full top-16 -left-full z-50 transition-all duration-300 delay-0"
            id="mobile-nav-div"
          >
            <div className="flex gap-28 flex-col pl-5 pt-5">
              <ul className="flex gap-5 flex-col text-white text-base leading-5 font-medium font-inter">
                <li>
                  <a
                    href="#"
                    className="home-two-nav-item leading-5 relative before:content-['Home'] before:text-buisness-red before:border-buisness-red transition-all ease-out duration-300 hover:text-buisness-red w-fit m-nav-dropdown flex gap-2 items-center"
                  >
                    Home
                    <svg
                      className="pointer-events-none"
                      width="10"
                      height="10"
                      viewBox="0 0 19 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 2L9.5 8L17 2"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </a>
                  <ul className="mobile-sub-nav h-[150px] overflow-hidden transition-all duration-300 pl-5 pt-4">
                    <li className="relative pb-1">
                      <a
                        className="home-two-nav-item leading-5 relative hover:text-buisness-red before:border-buisness-red w-fit py-1"
                        href="index-1.html"
                      >
                        Digital Marketing
                      </a>
                    </li>
                    <li className="relative py-1">
                      <a
                        className="home-two-nav-item leading-5 relative hover:text-buisness-red before:border-buisness-red w-fit py-1"
                        href="index-2.html"
                      >
                        SEO Agency
                      </a>
                    </li>
                    <li className="relative py-1">
                      <a
                        className="home-two-nav-item leading-5 relative hover:text-buisness-red before:border-buisness-red w-fit py-1"
                        href="index-3.html"
                      >
                        Creative Agency
                      </a>
                    </li>
                    <li className="relative py-1">
                      <a
                        className="home-two-nav-item leading-5 relative hover:text-buisness-red before:border-buisness-red w-fit"
                        href="index-4.html"
                      >
                        AI Software
                      </a>
                    </li>
                    <li className="relative py-1">
                      <a
                        className="home-two-nav-item leading-5 relative hover:text-buisness-red before:border-buisness-red w-fit"
                        href="index-5.html"
                      >
                        Business Consulting
                      </a>
                    </li>
                    <li className="relative py-1">
                      <a
                        className="home-two-nav-item leading-5 relative hover:text-buisness-red before:border-buisness-red w-fit"
                        href="index-6.html"
                      >
                        ELearning
                      </a>
                    </li>
                    <li className="relative py-1">
                      <a
                        className="home-two-nav-item leading-5 relative hover:text-buisness-red before:border-buisness-red w-fit"
                        href="index-7.html"
                      >
                        IT Business
                      </a>
                    </li>
                    <li className="relative py-1">
                      <a
                        className="home-two-nav-item leading-5 relative hover:text-buisness-red before:border-buisness-red w-fit"
                        href="index-8.html"
                      >
                        Saas
                      </a>
                    </li>
                    <li className="relative py-1">
                      <a
                        className="home-two-nav-item leading-5 relative hover:text-buisness-red before:border-buisness-red w-fit"
                        href="index-9.html"
                      >
                        App Landing
                      </a>
                    </li>
                    <li className="relative py-1">
                      <a
                        className="home-two-nav-item leading-5 relative hover:text-buisness-red before:border-buisness-red w-fit"
                        href="index-10.html"
                      >
                        Personal Portfolio
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    className="home-two-nav-item relative before:content-['Company'] before:text-buisness-red before:border-buisness-red transition-all ease-out duration-300 hover:text-buisness-red w-fit"
                    href="#"
                  >
                    Company
                  </a>
                </li>
                <li>
                  <a
                    className="home-two-nav-item relative before:content-['Services'] before:text-buisness-red before:border-buisness-red transition-all ease-out duration-300 hover:text-buisness-red w-fit"
                    href="#"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    className="home-two-nav-item relative before:content-['Blogs'] before:text-buisness-red before:border-buisness-red transition-all ease-out duration-300 hover:text-buisness-red w-fit"
                    href="#"
                  >
                    Blogs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="home-two-nav-item relative before:content-['Pages'] before:text-buisness-red before:border-buisness-red transition-all ease-out duration-300 hover:text-buisness-red w-fit m-nav-dropdown flex gap-2 items-center"
                  >
                    Pages
                    <svg
                      className="pointer-events-none"
                      width="10"
                      height="10"
                      viewBox="0 0 19 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 2L9.5 8L17 2"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </a>
                  <ul className="mobile-sub-nav h-[150px] overflow-hidden transition-all duration-300 pl-5 pt-4">
                    <li className="relative pb-1">
                      <a
                        className="home-two-nav-item leading-5 relative hover:text-buisness-red before:border-buisness-red w-fit py-1"
                        href="projects.html"
                      >
                        Projects
                      </a>
                    </li>
                    <li className="relative py-1">
                      <a
                        className="home-two-nav-item leading-5 relative hover:text-buisness-red before:border-buisness-red w-fit py-1"
                        href="project-details.html"
                      >
                        Projects Details
                      </a>
                    </li>
                    <li className="relative py-1">
                      <a
                        className="home-two-nav-item leading-5 relative hover:text-buisness-red before:border-buisness-red w-fit py-1"
                        href="service-details.html"
                      >
                        Service Details
                      </a>
                    </li>
                    <li className="relative py-1">
                      <a
                        className="home-two-nav-item leading-5 relative hover:text-buisness-red before:border-buisness-red w-fit"
                        href="blog-details.html"
                      >
                        Blog Details
                      </a>
                    </li>
                    <li className="relative py-1">
                      <a
                        className="home-two-nav-item leading-5 relative hover:text-buisness-red before:border-buisness-red w-fit"
                        href="team-members.html"
                      >
                        Team Members
                      </a>
                    </li>
                    <li className="relative py-1">
                      <a
                        className="home-two-nav-item leading-5 relative hover:text-buisness-red before:border-buisness-red w-fit"
                        href="faq.html"
                      >
                        FAQ's
                      </a>
                    </li>
                    <li className="relative py-1">
                      <a
                        className="home-two-nav-item leading-5 relative hover:text-buisness-red before:border-buisness-red w-fit"
                        href="pricing.html"
                      >
                        Pricing
                      </a>
                    </li>
                    <li className="relative py-1">
                      <a
                        className="home-two-nav-item leading-5 relative hover:text-buisness-red before:border-buisness-red w-fit"
                        href="course-details.html"
                      >
                        Course Details
                      </a>
                    </li>
                    <li className="relative py-1">
                      <a
                        className="home-two-nav-item leading-5 relative hover:text-buisness-red before:border-buisness-red w-fit"
                        href="cart.html"
                      >
                        Cart
                      </a>
                    </li>
                    <li className="relative py-1">
                      <a
                        className="home-two-nav-item leading-5 relative hover:text-buisness-red before:border-buisness-red w-fit"
                        href="checkout.html"
                      >
                        Checkout
                      </a>
                    </li>
                    <li className="relative py-1">
                      <a
                        className="home-two-nav-item leading-5 relative hover:text-buisness-red before:border-buisness-red w-fit"
                        href="404.html"
                      >
                        Not Found
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    className="home-two-nav-item relative before:content-['Contact'] before:text-buisness-red before:border-buisness-red transition-all ease-out duration-300 hover:text-buisness-red w-fit"
                    href="#"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex gap-5 flex-col pl-5 mt-5">
              <a href="#" className="flex gap-2.5 group">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.77762 11.9424C2.8296 10.2893 2.37185 8.93948 2.09584 7.57121C1.68762 5.54758 2.62181 3.57081 4.16938 2.30947C4.82345 1.77638 5.57323 1.95852 5.96 2.6524L6.83318 4.21891C7.52529 5.46057 7.87134 6.08139 7.8027 6.73959C7.73407 7.39779 7.26737 7.93386 6.33397 9.00601L3.77762 11.9424ZM3.77762 11.9424C5.69651 15.2883 8.70784 18.3013 12.0576 20.2224M12.0576 20.2224C13.7107 21.1704 15.0605 21.6282 16.4288 21.9042C18.4524 22.3124 20.4292 21.3782 21.6905 19.8306C22.2236 19.1766 22.0415 18.4268 21.3476 18.04L19.7811 17.1668C18.5394 16.4747 17.9186 16.1287 17.2604 16.1973C16.6022 16.2659 16.0661 16.7326 14.994 17.666L12.0576 20.2224Z"
                    stroke="#D90A2C"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M22 5L12 5M22 5C22 4.43982 20.604 3.39322 20.25 3M22 5C22 5.56018 20.604 6.60678 20.25 7M12 5C12 4.43982 13.396 3.39322 13.75 3M12 5C12 5.56018 13.396 6.60678 13.75 7"
                    stroke="#D90A2C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span className="font-bold text-base leading-5 tracking-tight text-white">
                  Call : 000 (123) 456 88
                </span>
              </a>
              <a href="contact.html">
                <div className="home-two-btn-bg py-2.5 group bg-buisness-red border-buisness-red w-fit">
                  <span className="text-base text-white group-hover:text-buisness-red transition-all duration-300 font-semibold font-inter relative z-10">
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
                      className="group-hover:stroke-buisness-red transition-all duration-300"
                      d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
