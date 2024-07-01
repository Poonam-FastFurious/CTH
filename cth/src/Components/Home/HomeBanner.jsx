function HomeBanner() {
  return (
    <>
      <main className="w-full">
        <section className="w-full py-3  overflow-hidden bg-white">
          <img
            src="https://quomodothemes.website/html/quland-html/assets/images/home-five/hero/bg.webp"
            alt=""
            className="w-full object-cover absolute top-0 z-0 buisness-dark-black min-h-[520px]"
          />

          <div className="theme-container relative z-10 w-full mx-auto">
            <div className="grid grid-cols-7 lg:grid-cols-12 pt-[113px] xl:pt-[213px] pb-[114px]">
              <div className="col-span-7">
                <div className=" h5_hero_slider">
                  <div className="">
                    <div className=" pb-4">
                      <div className="flex gap-2.5 relative z-10 px-3 sm:px-6 py-1.5 sm:py-3 rounded-[40px] border border-white/10 bg-white/5 items-center w-fit">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_460_23214)">
                            <path
                              d="M9.99955 10.9371L0.0498047 7.62184C0.131053 7.4156 0.315423 7.26529 0.534167 7.23435L6.68714 6.32812L9.99955 10.9371Z"
                              fill="#FEC461"
                            ></path>
                            <path
                              d="M10.0002 10.937V16.6775L4.49725 19.6149C4.28475 19.7274 4.03195 19.709 3.83789 19.5649L10.0002 10.937Z"
                              fill="#F7B84E"
                            ></path>
                            <path
                              d="M10.0005 10.937L3.83784 19.5646C3.64753 19.4243 3.55035 19.1837 3.59128 18.9431L4.64094 12.7248L10.0005 10.937Z"
                              fill="#FEC461"
                            ></path>
                            <path
                              d="M10 10.9368L4.64079 12.7246L0.190595 8.31813C0.0190365 8.14938 -0.0437743 7.89595 0.0312237 7.66814C0.0377861 7.65252 0.0405985 7.63658 0.0502858 7.62158L10 10.9368Z"
                              fill="#F7B84E"
                            ></path>
                            <path
                              d="M9.99992 0.312012V10.9367L6.6875 6.32748L9.44055 0.665128C9.54368 0.449196 9.76242 0.312012 9.99992 0.312012Z"
                              fill="#FEC461"
                            ></path>
                            <path
                              d="M13.3124 6.32748L10 10.9367V0.312012C10.2375 0.312012 10.4562 0.449196 10.5594 0.665128L13.3124 6.32748Z"
                              fill="#F7B84E"
                            ></path>
                            <path
                              d="M19.9497 7.62167L10 10.9369L13.3124 6.32764L19.4654 7.23386C19.6841 7.26511 19.8685 7.41511 19.9497 7.62167Z"
                              fill="#FEC461"
                            ></path>
                            <path
                              d="M19.8123 8.31813L15.3592 12.7246L10 10.9368L19.9497 7.62158C19.9591 7.63689 19.9622 7.65283 19.9688 7.66814C20.0435 7.89626 19.981 8.14938 19.8123 8.31813Z"
                              fill="#F7B84E"
                            ></path>
                            <path
                              d="M16.1623 19.5646L10 10.937L15.3592 12.7248L16.4092 18.9431C16.4498 19.184 16.353 19.4243 16.1623 19.5646Z"
                              fill="#FEC461"
                            ></path>
                            <path
                              d="M16.1623 19.5646C15.9686 19.7087 15.7155 19.7274 15.5033 19.6146L10 16.6775V10.937L16.1623 19.5646Z"
                              fill="#F7B84E"
                            ></path>
                          </g>
                          <defs>
                            <clippath id="clip0_460_23214">
                              <rect width="20" height="20" fill="white"></rect>
                            </clippath>
                          </defs>
                        </svg>
                        <span className="font-semibold text-18 sm:text-20 text-white">
                          Lorem ipsum dolor sit.
                        </span>
                      </div>
                      <h1 className="font-semibold text-24 sm:text-48 xl:text-75 text-white mt-4 sm:mt-8">
                        Lorem ipsum dolor sit amet consectetur. Lorem, ipsum.
                      </h1>
                      {/* <div className="flex flex-col sm:flex-row gap-8 pt-5 sm:pt-11">
                        <Link to="/Aboutus">
                          <div className="home-two-btn-bg group bg-buisness-red border-buisness-red py-3 sm:py-[15px]">
                            <span className=" text-base group-hover:text-buisness-red text-white transition-all duration-300 font-semibold font-inter relative z-10">
                              Explore Service
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
                                className="group-hover:stroke-buisness-red stroke-white transition-all duration-300"
                                d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                          </div>
                        </Link>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-7 xl:col-span-5 w-full h-full flex xl:flex-col items-end justify-end xl:justify-center gap-2">
                <button className="group h5-hero-prev border border-white/15 w-[30px] h-[30px] rounded-full flex items-center justify-center bg-white/10 overflow-hidden before:inline-block before:w-11 before:h-11 before:border-[1.5px] before:border-buisness-red before:bg-buisness-red relative before:absolute before:z-0 before:-right-12 hover:before:right-0 before:transition-all before:duration-300">
                  <svg
                    className="relative z-10 pointer-events-none"
                    width="12"
                    height="10"
                    viewBox="0 0 12 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.75 9L1 5.25M1 5.25L4.75 1.5M1 5.25L11 5.25"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
                <button className="group rotate-180 h5-hero-next border border-white/15 w-[30px] h-[30px] rounded-full flex items-center justify-center bg-white/10 overflow-hidden before:inline-block before:w-11 before:h-11 before:border-[1.5px] before:border-buisness-red before:bg-buisness-red relative before:absolute before:z-0 before:-right-12 hover:before:right-0 before:transition-all before:duration-300">
                  <svg
                    className="relative z-10 pointer-events-none"
                    width="12"
                    height="10"
                    viewBox="0 0 12 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.75 9L1 5.25M1 5.25L4.75 1.5M1 5.25L11 5.25"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default HomeBanner;
