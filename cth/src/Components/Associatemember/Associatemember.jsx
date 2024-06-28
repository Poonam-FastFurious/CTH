import { Link } from "react-router-dom";

function Associatemember() {
  return (
    <>
      <section className="bg-white pt-16 pb-14 md:pt-[130px] md:pb-[120px] relative">
        <div className="theme-container w-full mx-auto">
          <div className="flex flex-col justify-center items-center w-full">
            <h1 className="font-medium text-white border border-buisness-red bg-buisness-red px-5 rounded-[30px] py-1 w-fit">
              Associated Members
            </h1>
            <h2 className="text-main-black font-semibold text-16 sm:text-3xl pt-5">
              Experience Associated Members
            </h2>
          </div>
          <div className="grid gap-[30px] grid-cols-3 md:grid-cols-6 lg:grid-cols-12 mt-10 md:mt-[70px]">
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
              className="col-span-3"
            >
              <div className="col-span-3 border border-buisness-red bg-white">
                <div className="flex justify-center items-center relative group/main overflow-hidden">
                  <img
                    src="https://quomodothemes.website/html/quland-html/assets/images/home-three/teams/1.webp"
                    alt=""
                    className="w-full object-cover rounded-lg overflow-hidden"
                  />

                  <div className="flex bg-buisness-red absolute bottom-5 translate-y-16 group-hover/main:translate-y-0 transition-all duration-300 rounded-md overflow-hidden">
                    <Link
                      to="#"
                      target="blank"
                      aria-label="facebook"
                      className="group w-10 h-10 flex justify-center items-center overflow-hidden relative before:inline-block before:absolute before:z-0 before:w-full before:h-full before:bg-white before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300"
                    >
                      <svg
                        className="relative z-10"
                        width="11"
                        height="16"
                        viewBox="0 0 11 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="group-hover:fill-buisness-red"
                          d="M10.6667 0H8.55556C5.79413 0 3.55556 2.23857 3.55556 5V6.22222H0V9.77778H3.55556V16H7.11111V9.77778H10.6667V6.22222H7.11111V4.55556C7.11111 4.00327 7.55883 3.55556 8.11111 3.55556H10.6667V0Z"
                          fill="white"
                        ></path>
                      </svg>
                    </Link>
                    <Link
                      to="#"
                      target="blank"
                      aria-label="twitter"
                      className="group w-10 h-10 flex justify-center items-center overflow-hidden relative before:inline-block before:absolute before:z-0 before:w-full before:h-full before:bg-white before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300"
                    >
                      <svg
                        className="relative z-10"
                        width="17"
                        height="15"
                        viewBox="0 0 17 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="group-hover:fill-buisness-red"
                          d="M11.5668 0C9.63779 0 8.07406 1.642 8.07406 3.6675C8.07406 3.97357 8.10976 4.27089 8.17704 4.5551C6.32228 4.5551 3.52859 4.18011 1.19541 1.84256C0.885157 1.53172 0.313054 1.73955 0.334575 2.1782C0.680352 9.2262 3.69878 11.2821 5.25319 11.41C4.24944 12.4014 2.79138 13.1839 1.32419 13.5351C0.936969 13.6278 0.841313 14.0517 1.21995 14.1748C2.2698 14.5163 3.7725 14.6478 4.58135 14.67C10.3034 14.67 14.9542 9.85378 15.0577 3.87132C15.809 3.38276 16.2902 2.32199 16.5606 1.57052C16.6264 1.38751 16.3265 1.17427 16.1469 1.24902C15.5857 1.48266 14.8732 1.53804 14.2663 1.34029C13.6258 0.521946 12.6543 0 11.5668 0Z"
                          fill="white"
                        ></path>
                      </svg>
                    </Link>
                    <Link
                      to="#"
                      target="blank"
                      aria-label="instagram"
                      className="group w-10 h-10 flex justify-center items-center overflow-hidden relative before:inline-block before:absolute before:z-0 before:w-full before:h-full before:bg-white before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300"
                    >
                      <svg
                        className="relative z-10"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="group-hover:fill-buisness-red"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.56934 0C2.80791 0 0.569336 2.23858 0.569336 5V9.33C0.569336 12.0914 2.80792 14.33 5.56934 14.33H9.89934C12.6608 14.33 14.8993 12.0914 14.8993 9.33V5C14.8993 2.23858 12.6608 0 9.89933 0H5.56934ZM12.0334 3.58233C12.4291 3.58233 12.7499 3.26154 12.7499 2.86583C12.7499 2.47012 12.4291 2.14933 12.0334 2.14933C11.6377 2.14933 11.3169 2.47012 11.3169 2.86583C11.3169 3.26154 11.6377 3.58233 12.0334 3.58233ZM11.3169 7.16502C11.3169 9.14358 9.71291 10.7475 7.73435 10.7475C5.75579 10.7475 4.15185 9.14358 4.15185 7.16502C4.15185 5.18646 5.75579 3.58252 7.73435 3.58252C9.71291 3.58252 11.3169 5.18646 11.3169 7.16502ZM7.73454 9.31425C8.92168 9.31425 9.88404 8.35189 9.88404 7.16475C9.88404 5.97762 8.92168 5.01525 7.73454 5.01525C6.54741 5.01525 5.58504 5.97762 5.58504 7.16475C5.58504 8.35189 6.54741 9.31425 7.73454 9.31425Z"
                          fill="white"
                        ></path>
                      </svg>
                    </Link>
                    <Link
                      to="#"
                      target="blank"
                      aria-label="dribble"
                      className="group w-10 h-10 flex justify-center items-center overflow-hidden relative before:inline-block before:absolute before:z-0 before:w-full before:h-full before:bg-white before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300"
                    >
                      <svg
                        className="relative z-10"
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="group-hover:fill-buisness-red"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.968753 8.16852C1.3202 10.6761 2.96959 12.7675 5.21595 13.7416C5.31427 11.7206 5.73159 9.77884 6.42092 7.95977C5.6861 7.81945 4.92517 7.74572 4.14551 7.74572C3.04198 7.74572 1.97613 7.89342 0.968753 8.16852ZM6.27698 14.1053C6.84824 14.252 7.44703 14.33 8.06403 14.33C10.1206 14.33 11.9747 13.4636 13.2814 12.0759C11.8551 10.2641 9.82956 8.88853 7.47551 8.21147C6.75912 10.0592 6.34161 12.0411 6.27698 14.1053ZM13.9721 11.2198C14.765 10.0668 15.229 8.67009 15.229 7.165C15.229 7.0389 15.2258 6.91356 15.2193 6.78906C14.4565 6.92722 13.6692 6.99948 12.8644 6.99948C11.2888 6.99948 9.78041 6.72248 8.39159 6.21657C8.21662 6.54406 8.05151 6.87697 7.89663 7.21496C10.3292 7.94113 12.4408 9.3553 13.9721 11.2198ZM15.0835 5.72129C14.7111 3.90088 13.6483 2.33192 12.1806 1.29989C10.9206 2.47864 9.82691 3.81285 8.93454 5.26896C10.1582 5.69289 11.4819 5.92473 12.8644 5.92473C13.6243 5.92473 14.3663 5.8547 15.0835 5.72129ZM11.2196 0.730487C10.2675 0.262702 9.19644 0 8.06403 0C6.40492 0 4.87752 0.563911 3.66304 1.51052C4.75951 2.93208 6.2221 4.09151 7.92282 4.86481C8.83048 3.35221 9.94128 1.96311 11.2196 0.730487ZM2.86484 2.2349C1.66558 3.4992 0.92259 5.20056 0.899582 7.07527C1.93493 6.81151 3.02324 6.67097 4.14551 6.67097C5.06971 6.67097 5.9708 6.76628 6.8382 6.94719C7.01093 6.55986 7.19623 6.1788 7.39363 5.80445C5.59834 4.97229 4.04546 3.74276 2.86484 2.2349Z"
                          fill="white"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </div>
                <h1 className="text-22 font-normal text-black mt-6 white_card_title px-4">
                  <Link to="#"> Steven N. Manning</Link>
                </h1>

                <div className=" flex ml-[12px] items-center gap-[8px]">
                  <svg
                    width="22"
                    height="17"
                    viewBox="0 0 22 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.5999 3.45088V3.95088H13.0999H15.6803C16.2414 3.95088 16.7285 4.44357 16.7285 4.96196V5.97307C16.7232 5.97306 16.7178 5.97305 16.7124 5.97305C15.4541 5.97305 14.284 6.34623 13.3072 6.98044H1.21423V4.96196C1.21423 4.44357 1.70136 3.95088 2.26245 3.95088H4.8428H5.3428V3.45088V1.9398C5.3428 1.4214 5.82994 0.928711 6.39102 0.928711H11.5517C12.1128 0.928711 12.5999 1.4214 12.5999 1.9398V3.45088ZM11.0357 3.95088H11.5357V3.45088V2.44349V1.94349H11.0357H6.90709H6.40709V2.44349V3.45088V3.95088H6.90709H11.0357ZM12.5678 12.0137C12.5678 9.79564 14.4099 7.98044 16.7124 7.98044C19.0149 7.98044 20.8571 9.79564 20.8571 12.0137C20.8571 14.2317 19.0149 16.0469 16.7124 16.0469C14.4099 16.0469 12.5678 14.2317 12.5678 12.0137ZM18.4635 13.0174C18.9004 13.0174 19.2767 12.6673 19.2767 12.2117V11.8157C19.2767 11.3601 18.9004 11.01 18.4635 11.01H17.7285V9.80121C17.7285 9.34559 17.3522 8.99553 16.9153 8.99553H16.5099C16.073 8.99553 15.6967 9.34559 15.6967 9.80121V12.2117C15.6967 12.6673 16.073 13.0174 16.5099 13.0174H18.4635ZM7.42316 11.0026H10.6257C10.5674 11.3303 10.5357 11.6678 10.5357 12.0137C10.5357 12.7227 10.6636 13.4016 10.8946 14.0322H2.26245C1.70136 14.0322 1.21423 13.5395 1.21423 13.0211V8.98783H6.40709V9.99891C6.40709 10.5647 6.8734 11.0026 7.42316 11.0026Z"
                      fill="black"
                      stroke="black"
                    />
                  </svg>
                  <span className=" mt-1 "> Marketing Head at Xyz</span>
                </div>
                <div className=" flex ml-[12px] items-center gap-[8px]">
                  <svg
                    width="16"
                    height="14"
                    viewBox="0 0 16 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.01611 0.213867C3.90232 0.213867 0.714233 2.97 0.714233 6.69268C0.714233 8.6398 1.58705 10.3225 3.00776 11.4848C3.25307 11.6871 3.20254 11.8042 3.24426 13.053C3.24754 13.1405 3.27412 13.2259 3.32168 13.3018C3.36924 13.3777 3.43633 13.4417 3.51711 13.4884C3.59788 13.5351 3.68989 13.5629 3.78509 13.5695C3.8803 13.5761 3.97581 13.5612 4.06331 13.5262C5.6177 12.8987 5.63767 12.8491 5.90119 12.9148C10.4045 14.0511 15.2857 11.4091 15.2857 6.69268C15.2857 2.97 12.1302 0.213867 8.01611 0.213867ZM12.4005 5.19962L10.2559 8.31205C10.1749 8.42908 10.0684 8.52953 9.9431 8.60708C9.8178 8.68463 9.67637 8.73762 9.52768 8.76272C9.37899 8.78783 9.22625 8.78451 9.07903 8.75298C8.9318 8.72145 8.79327 8.66238 8.67211 8.57947L6.96585 7.40878C6.88957 7.35634 6.79679 7.32799 6.70145 7.32799C6.6061 7.32799 6.51332 7.35634 6.43704 7.40878L4.1347 9.00956C3.82741 9.22313 3.42493 8.88568 3.63204 8.58755L5.77663 5.47513C5.85758 5.35806 5.96405 5.25759 6.08936 5.18001C6.21466 5.10244 6.3561 5.04944 6.5048 5.02433C6.6535 4.99922 6.80625 5.00255 6.95349 5.0341C7.10072 5.06566 7.23925 5.12476 7.36039 5.2077L9.06607 6.37813C9.14235 6.43057 9.23512 6.45892 9.33047 6.45892C9.42582 6.45892 9.51859 6.43057 9.59487 6.37813L11.8984 4.77896C12.2051 4.56405 12.6076 4.90123 12.4005 5.19962Z"
                      fill="black"
                    />
                  </svg>

                  <span className=" mt-1 ">237 Sessions (28 Reviews)</span>
                </div>
                <div className="flex  ml-[12px]  gap-[25px] ">
                  <p className="text-black mt-1  ">Experience</p>
                  <p className="text-black mt-1  ">Experience</p>
                </div>
                <div className="flex  ml-[12px]  gap-[70px] ">
                  <p className="text-black mt-1  ">8year</p>
                  <p className="text-black mt-1  ">100%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-[70px] sm:py-[130px] w-full bg-[#E7DDCD]">
        <div className="theme-container w-full mx-auto">
          <h1 className="px-5 bg-orange/10 border border-orange/20 text-orange font-medium rounded-[30px] w-fit mx-auto">
            Video Testimonials
          </h1>
          <h2 className="max-w-[623px] font-semibold text-10 sm:text-24 text-main-black text-center mx-auto mt-5">
            Hear From Our Happy Customers
          </h2>

          <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-[30px] my-[70px]">
            <div className="col-span-4 p-2.5 rounded-[20px] bg-white group">
              <div className="rounded-[10px] overflow-hidden relative w-fit h-fit">
                <img
                  src="https://www.techsmith.com/blog/wp-content/uploads/2021/02/video-thumbnails-hero-1.png"
                  alt=""
                  className="w-full object-cover rounded-[10px] group-hover:scale-110 transition-all duration-300 relative z-0"
                />
              </div>

              <h3 className="case_card_title text-black text-20 font-semibold pt-1 pb-5 mx-5 border-b border-green-dark/10">
                <Link to="#" className="font-inter">
                  Lorem ipsum dolor sit amet consectetur.
                </Link>
              </h3>
              <div className="mx-5 mt-6 mb-3 flex items-center justify-between">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex">
                    <img
                      src="https://readymadeui.com/profile_2.webp"
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="ml-4 text-left">
                      <p className="text-sm font-bold text-gray-800">
                        John Doe
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5">
                        johndoe23@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-4 p-2.5 rounded-[20px] bg-white group">
              <div className="rounded-[10px] overflow-hidden relative w-fit h-fit">
                <img
                  src="https://www.techsmith.com/blog/wp-content/uploads/2021/02/video-thumbnails-hero-1.png"
                  alt=""
                  className="w-full object-cover rounded-[10px] group-hover:scale-110 transition-all duration-300 relative z-0"
                />
              </div>

              <h3 className="case_card_title text-black text-20 font-semibold pt-1 pb-5 mx-5 border-b border-green-dark/10 ">
                <Link to="#" className="font-inter">
                  Lorem ipsum dolor sit amet consectetur.
                </Link>
              </h3>
              <div className="mx-5 mt-6 mb-3 flex items-center justify-between">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex">
                    <img
                      src="https://readymadeui.com/profile_2.webp"
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="ml-4 text-left">
                      <p className="text-sm font-bold text-gray-800">
                        John Doe
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5">
                        johndoe23@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-4 p-2.5 rounded-[20px] bg-white group">
              <div className="rounded-[10px] overflow-hidden relative w-fit h-fit">
                <img
                  src="https://www.techsmith.com/blog/wp-content/uploads/2021/02/video-thumbnails-hero-1.png"
                  alt=""
                  className="w-full object-cover rounded-[10px] group-hover:scale-110 transition-all duration-300 relative z-0"
                />
              </div>

              <h3 className="case_card_title text-black text-20 font-semibold pt-1 pb-5 mx-5 border-b border-green-dark/10">
                <Link to="#" className="font-inter">
                  Lorem ipsum dolor sit amet consectetur.
                </Link>
              </h3>
              <div className="mx-5 mt-6 mb-3 flex items-center justify-between">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex">
                    <img
                      src="https://readymadeui.com/profile_2.webp"
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="ml-4 text-left">
                      <p className="text-sm font-bold text-gray-800">
                        John Doe
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5">
                        johndoe23@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link to="#">
            <div className="home-two-btn-white-rev group border-buisness-red  hover:border-buisness-red transition-all duration-500 w-fit mx-auto">
              <span className="text-base  text-main-black transition-all duration-300 font-semibold font-inter relative z-10 py-0.5">
                Learn More
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
                  className="group-hover:stroke-main-black stroke-main-black transition-all duration-300"
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
      </section>
    </>
  );
}

export default Associatemember;
