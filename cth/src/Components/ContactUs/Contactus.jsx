/* eslint-disable react/no-unescaped-entities */
import { FaHome } from "react-icons/fa";
import { MdCall, MdOutlineMailLock } from "react-icons/md";
import InquiryForm from "../Home/InquiryForm";

function Contactus() {
  return (
    <>
      <section id="h1-breadcrumb">
        <div className="h1-breadcrumb w-full h-fit overflow-hidden relative bg-main-gray pb-16 md:pb-24">
          <div
            className="win-grid win-grid-bg w-full h-full absolute left-0 top-0 z-0 overflow-hidden"
            id="win-grid"
          >
            <img
              src="https://s3-alpha-sig.figma.com/img/636d/7466/ea3240b95aa43cf0523aa8977ce9e858?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qo9V-XrJluLXSULN4sAaFcpABzwDSklok-3qvUvdOTrFzSbk29XEmlkgfTRJdczB1TdykK0W3LSX9Cldh25vwar4GNp2JsDxwYKmfdDFGMLiX5c4rruzE~yRbZVs1fW5JRlf74vyVWzO3xfsCgP2ttbjQ49Umq0q5otAh7xj6fmOFnM0HFNsd5otMdHGGTRKjuP7ruXF-84l5m76fDqVKs6zegvLtAXq7B4SLuw8uFYNeT3NJk59WJG9HKJtuVw6hF9~MMKys6Su6OmWuwCTGZZv2V6GxLuLh9MEOkW4cqNABby7zO-8r6BYC7kTmiRYIqBPP~Llzr2TjTIHOXZWew__"
              alt=""
              className=" w-full "
            />
          </div>
          <div className="absolute left-1/4 w-full top-[300px] overflow-hidden z-0 pointer-events-none">
            <div className="flex justify-center">
              <img src="assets/images/home-one-hero-circle-shadow.svg" alt="" />
            </div>
          </div>
          <div className="theme-container mx-auto h-fit w-fit relative z-20">
            <div className="mt-[120px] md:mt-[272px] w-fit mx-auto relative z-10">
              <h1 className="text-main-black text-34 sm:text-48 font-semibold w-full text-center">
                Contact
              </h1>
              <div className="flex gap-5 items-center justify-center mt-4">
                <a
                  href="#"
                  className="home-two-nav-item leading-5 relative text-18 font-inter text-paragraph transition-all duration-300 hover:text-purple"
                >
                  Home
                </a>
                <svg
                  width="6"
                  height="12"
                  viewBox="0 0 6 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L5 6L1 11"
                    stroke="#794AFF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <a
                  href="#"
                  className="home-two-nav-item leading-5 relative text-18 font-inter text-paragraph transition-all duration-300 hover:text-purple"
                >
                  contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center gap-x-4 gap-y-2 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row ">
            <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4 border p-8 bg-[#A3896B]">
              <div className=" flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 ">
                <FaHome className="text-6xl text-white" />
              </div>
              <h4 className="text-lg font-medium text-white mb-3 capitalize">
                Address
              </h4>
              <p className="text-sm font-normal text-white">
                Lorem ipsum dolor sit amet consectetur. Sit mauris
              </p>
            </div>
            <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4 border p-8 bg-[#A3896B]">
              <div className=" flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 ">
                <MdOutlineMailLock className="text-6xl text-white" />
              </div>
              <h4 className="text-lg font-medium text-white mb-3 capitalize">
                Email Us
              </h4>
              <p className="text-sm font-normal text-white">
                info@provenonline.in
                <br />
                info@provenonline.in
              </p>
            </div>
            <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4  border p-8 bg-[#A3896B]">
              <div className=" flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 ">
                <MdCall className="text-6xl text-white" />
              </div>
              <h4 className="text-lg font-medium text-white mb-3 capitalize">
                Call Us
              </h4>
              <p className="text-sm font-normal text-white">
                1800-532-3367
                <br />
                1800-532-3367
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-col items-center">
        <h2 className="sm:text-48 text-[40px] font-semibold text-main-black  text-center lg:w-[685px] w-full">
          FEEL FREE TO TALK TO US
        </h2>
        <p className=" w-[40%] mx-auto text-center mb-[50px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
          quibusdam, impedit alias sunt animi consequuntur dicta praesentium
          laudantium ipsa! Recusandae dignissimos velit maxime culpa.
        </p>
      </div>
      <InquiryForm />
      <section className="relative mt-16 md:mt-[130px]">
        <div className="w-full relative z-10">
          <div className="theme-container mx-auto">
            <div className="flex justify-center items-center relative">
              <div className="grid grid-cols-6 xl:grid-cols-11 w-full relative z-10 gap-y-5 xl:gap-[118px]">
                {/* <div className="col-span-6 xl:col-span-5 sm:pr-5">
                  <h1 className="py-0.5 px-5 bg-purple/5 border-purple/10 border rounded-[30px] font-medium text-purple w-fit mx-auto xl:mx-0">
                    FAQs
                  </h1>
                  <h2 className="text-24 sm:text-48 font-semibold text-main-black mt-5 max-w-[720px] mb-14 mx-auto xl:mx-0 text-center xl:text-left">
                    Have Any Questions On Mind? Questions & Answer here
                  </h2>
                  <div className="w-full relative">
                    <img
                      className="w-full rounded-xl"
                      src="assets/images/faq-1.webp"
                      alt=""
                    />
                    <div className="w-10 px-2 sm:w-16 md:w-[100px] aspect-square rounded-lg bg-it-blue top-2 right-2 sm:-top-5 sm:-right-5 absolute flex justify-center items-center">
                      <svg
                        width="64"
                        height="45"
                        viewBox="0 0 64 45"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.5136 0H48.4158L27.9021 30.4053H0L20.5136 0Z"
                          fill="white"
                        ></path>
                        <path
                          d="M21.7364 33.2233L13.791 45H43.0167L63.5303 14.5947H41.96L29.3917 33.2233H21.7364Z"
                          fill="white"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div> */}
                <div className="col-span-6">
                  <div
                    data-aos="fade-up"
                    className="flex flex-col gap-2.5 w-full"
                  >
                    <div
                      className="py-5 px-2 md:px-9 w-full rounded-[10px] service-faq-toggler overflow-hidden transition-all duration-300 max-h-fit h-fit border border-purple/10 bg-purple/5"
                      name="faq-1"
                    >
                      <div className="w-full flex justify-between items-center pointer-events-none h-fit">
                        <h1 className="font-semibold sm:text-18 text-main-black">
                          What is digital marketing?
                        </h1>
                        <svg
                          width="19"
                          height="10"
                          viewBox="0 0 19 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 2L9.5 8L17 2"
                            stroke="#794AFF"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </div>
                      <p className="mt-3.5 text-paragraph pointer-events-none h-fit">
                        However, link building isn't merely about quantity;
                        quality and relevance are paramount. High-quality links
                        from reputable websites carry more weight in search
                        engine algorithms, contributing significantly to a
                        website's overall SEO performance.
                      </p>
                    </div>

                    <div
                      className="py-5 px-2 md:px-9 w-full rounded-[10px] service-faq-toggler overflow-hidden transition-all duration-300 max-h-fit border border-purple/10"
                      name="faq-2"
                    >
                      <div className="w-full flex justify-between items-center pointer-events-none">
                        <h1 className="font-semibold sm:text-18 text-main-black">
                          Why is digital marketing important?
                        </h1>
                        <svg
                          width="19"
                          height="10"
                          viewBox="0 0 19 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 2L9.5 8L17 2"
                            stroke="#794AFF"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </div>
                      <p className="mt-3.5 text-paragraph pointer-events-none">
                        However, link building isn't merely about quantity;
                        quality and relevance are paramount. High-quality links
                        from reputable websites carry more weight in search
                        engine algorithms, contributing significantly to a
                        website's overall SEO performance.
                      </p>
                    </div>

                    <div
                      className="py-5 px-2 md:px-9 w-full rounded-[10px] service-faq-toggler overflow-hidden transition-all duration-300 max-h-fit h-fit border border-purple/10"
                      name="faq-3"
                    >
                      <div className="w-full flex justify-between items-center pointer-events-none h-fit">
                        <h1 className="font-semibold sm:text-18 text-main-black">
                          What are the key components of digital marketing?
                        </h1>
                        <svg
                          width="19"
                          height="10"
                          viewBox="0 0 19 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 2L9.5 8L17 2"
                            stroke="#794AFF"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </div>
                      <p className="mt-3.5 text-paragraph pointer-events-none h-fit">
                        However, link building isn't merely about quantity;
                        quality and relevance are paramount. High-quality links
                        from reputable websites carry more weight in search
                        engine algorithms, contributing significantly to a
                        website's overall SEO performance.
                      </p>
                    </div>

                    <div
                      className="py-5 px-2 md:px-9 w-full rounded-[10px] service-faq-toggler overflow-hidden transition-all duration-300 max-h-fit border border-purple/10"
                      name="faq-4"
                    >
                      <div className="w-full flex justify-between items-center pointer-events-none">
                        <h1 className="font-semibold sm:text-18 text-main-black">
                          What is Search Engine Optimization (SEO)?
                        </h1>
                        <svg
                          width="19"
                          height="10"
                          viewBox="0 0 19 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 2L9.5 8L17 2"
                            stroke="#794AFF"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </div>
                      <p className="mt-3.5 text-paragraph pointer-events-none">
                        However, link building isn't merely about quantity;
                        quality and relevance are paramount. High-quality links
                        from reputable websites carry more weight in search
                        engine algorithms, contributing significantly to a
                        website's overall SEO performance.
                      </p>
                    </div>

                    <div
                      className="py-5 px-2 md:px-9 w-full rounded-[10px] service-faq-toggler overflow-hidden transition-all duration-300 max-h-fit border border-purple/10"
                      name="faq-5"
                    >
                      <div className="w-full flex justify-between items-center pointer-events-none">
                        <h1 className="font-semibold sm:text-18 text-main-black">
                          What is Pay-Per-Click Advertising (PPC)?
                        </h1>
                        <svg
                          width="19"
                          height="10"
                          viewBox="0 0 19 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 2L9.5 8L17 2"
                            stroke="#794AFF"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </div>
                      <p className="mt-3.5 text-paragraph pointer-events-none">
                        However, link building isn't merely about quantity;
                        quality and relevance are paramount. High-quality links
                        from reputable websites carry more weight in search
                        engine algorithms, contributing significantly to a
                        website's overall SEO performance.
                      </p>
                    </div>

                    <div
                      className="py-5 px-2 md:px-9 w-full rounded-[10px] service-faq-toggler overflow-hidden transition-all duration-300 max-h-fit border border-purple/10"
                      name="faq-6"
                    >
                      <div className="w-full flex justify-between items-center pointer-events-none">
                        <h1 className="font-semibold sm:text-18 text-main-black">
                          What is Social Media Marketing (SMM)?
                        </h1>
                        <svg
                          width="19"
                          height="10"
                          viewBox="0 0 19 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 2L9.5 8L17 2"
                            stroke="#794AFF"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </div>
                      <p className="mt-3.5 text-paragraph pointer-events-none">
                        However, link building isn't merely about quantity;
                        quality and relevance are paramount. High-quality links
                        from reputable websites carry more weight in search
                        engine algorithms, contributing significantly to a
                        website's overall SEO performance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contactus;
