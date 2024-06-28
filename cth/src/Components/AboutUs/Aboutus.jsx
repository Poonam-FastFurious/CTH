import { Link } from "react-router-dom";

function Aboutus() {
  return (
    <>
      <section id="h1-breadcrumb">
        <div className="h1-breadcrumb w-full h-auto overflow-hidden relative bg-main-gray  ">
          <img
            src="https://s3-alpha-sig.figma.com/img/08f5/6b66/955db31e4ef94a065ce2a976e0869fb0?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mIU2dmXhUlgXQxI~wOmz64WVvn3MIvRyRQGTalaRNyftD8CBas9ZeIecK2B-8T-3DqEE5NsxDw04VTEWwOtE17jzVSbvGdVUNEf6qdNO~XYGAnZDgoyDLcbcdJW4OAa2XIjD~8ukUxxVBGompoxj7YPoxppVR9T~kCJzkKS8fKXnfwKvTm58TLvESGYCONhwuE13kv4FjCYf2lPsHAzxmiaozVr1e2m3pj73dQNwG4i5-a0vrF0KOkJ4I4ZXaIESgzXuyhhF4HhGvm5cSR3ybwvH3CbL6Z1DScDbqNQcBAP0JDcgiQU-gNP9VkJdR8fPSsTfOIk0ynK4YuEFc2OeGw__"
            alt=""
          />
        </div>
      </section>
      <section className="w-full py-16 md:py-[130px]">
        <div className="theme-container mx-auto w-full">
          <div className="grid grid-cols-6 lg:grid-cols-12 gap-10 lg:gap-0 h-fit">
            <div className="col-span-6 lg:pr-[87px] flex h-full items-center">
              <div className="">
                <div className="py-1.5 md:py-3 px-5 rounded-[30px] border-[1.2px] border-blue-seo/30 w-fit bg-blue-seo/10">
                  <h1 className="text-base tracking-tight font-medium text-purple leading-5">
                    About us
                  </h1>
                </div>
                <h1 className="text-24 md:text-48 font-semibold text-main-black mt-2.5 md:mt-5">
                  Who We Are?
                </h1>
                <p className="mt-5 md:mt-10 text-paragraph">
                  Lorem ipsum dolor sit amet consectetur. Eget pellentesque
                  ornare aliquam vestibulum sodales at sed. Molestie scelerisque
                  ut ornare dictum elementum id. Id consequat augue non cras
                  pellentesque sit turpis. Mattis nulla et et ut dui enim tellus
                  praesent. Maecenas vel adipiscing ut ultrices dictumst. Tortor
                  phasellus arcu id magna.
                </p>
                <hr className="mt-10 border-purple/10" />
                {/* <div className="w-full grid grid-cols-1 sm:grid-cols-2 mt-[50px] gap-8 md:gap-[70px]">
                  <div data-aos="fade-left" className="grid-cols-1">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z"
                        fill="#5D51F2"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.4605 6.40802C14.7874 6.66232 14.8463 7.13353 14.592 7.46049L10.585 12.6123C9.9613 13.4143 8.78809 13.5183 8.03296 12.8387L5.49828 10.5575C5.1904 10.2804 5.16544 9.80619 5.44254 9.49831C5.71963 9.19043 6.19385 9.16547 6.50173 9.44256L9.03641 11.7238C9.14429 11.8209 9.31189 11.806 9.40099 11.6914L13.408 6.53958C13.6623 6.21262 14.1335 6.15372 14.4605 6.40802Z"
                        fill="white"
                      ></path>
                    </svg>
                    <h1 className="text-18 text-main-black font-semibold mt-4">
                      Expert Team Member
                    </h1>
                    <p className="text-paragraph mt-3">
                      An SEO Optimization agency is company that specializes
                    </p>
                  </div>
                  <div
                    data-aos="fade-left"
                    data-aos-delay="100"
                    className="grid-cols-1"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z"
                        fill="#5D51F2"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.4605 6.40802C14.7874 6.66232 14.8463 7.13353 14.592 7.46049L10.585 12.6123C9.9613 13.4143 8.78809 13.5183 8.03296 12.8387L5.49828 10.5575C5.1904 10.2804 5.16544 9.80619 5.44254 9.49831C5.71963 9.19043 6.19385 9.16547 6.50173 9.44256L9.03641 11.7238C9.14429 11.8209 9.31189 11.806 9.40099 11.6914L13.408 6.53958C13.6623 6.21262 14.1335 6.15372 14.4605 6.40802Z"
                        fill="white"
                      ></path>
                    </svg>
                    <h1 className="text-18 text-main-black font-semibold mt-4">
                      Custom SEO Support
                    </h1>
                    <p className="text-paragraph mt-3">
                      These agencies typically offer range of services aimed
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="col-span-6 relative flex flex-col sm:flex-row justify-end items-center">
              <div className="relative col-span-6 flex flex-col sm:flex-row justify-center items-center gap-[30px]">
                <svg
                  className="absolute z-0 -top-16 max-w-full"
                  width="465"
                  height="465"
                  viewBox="0 0 465 465"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="232.5"
                    cy="232.5"
                    r="231.9"
                    stroke="#161519"
                    strokeOpacity="0.07"
                    strokeWidth="1.2"
                  ></circle>
                </svg>
                <img
                  data-aos="fade-left"
                  src="https://quomodothemes.website/html/quland-html/assets/images/home-five/hero/about1.webp"
                  alt=""
                  className="relative z-10 hidden sm:block"
                />
                <img
                  data-aos="fade-left"
                  data-aos-delay="100"
                  src="https://quomodothemes.website/html/quland-html/assets/images/home-five/hero/about2.webp"
                  alt=""
                  className="relative z-10"
                />
                <div className="bg-buisness-red p-[30px] rounded-2xl absolute z-10 bottom-8 w-[295px]">
                  <img
                    src="https://quomodothemes.website/html/quland-html/assets/images/home-five/hero/about-card-shape.webp"
                    alt=""
                    className="absolute right-2 top-bottom-moving"
                  />
                  <div className="flex items-center gap-2.5">
                    <svg
                      width="11"
                      height="12"
                      viewBox="0 0 11 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.28753 7.01343L8.90454 1.36956M8.90454 1.36956L3.26066 1.75255M8.90454 1.36956L1.01321 10.4099"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span className="text-sm text-white leading-8">
                      We have
                    </span>
                  </div>
                  <h1
                    className="text-[27px] leading-[35px] text-white font-semibold tracking-tight max-w-[170px]"
                    data-scroll-qs="scroll"
                    data-count-qs="25"
                    data-type-qs="+ Years of Experience"
                    data-speed-qs="1000"
                  >
                    25+ Years of Experience
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-16 md:pt-[94px] md:pb-[130px] items-center">
        <div className="theme-container mx-auto w-full">
          <div className="grid grid-cols-6 lg:grid-cols-12 box-border">
            <div className="col-span-5 relative flex flex-col sm:flex-row justify-end w-full overflow-hidden">
              <img
                src="https://s3-alpha-sig.figma.com/img/3fe8/e864/9e7fef84f017ca158ad38697ca99a027?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WY-VMKA1x0o5-fCyM~EAzICDVViDqvdkSLCwdJlpv6ZslveOswpdYj20WnrMEvziaO7oy9pEvSOJbw0sMOmp16bZDrn25Diy1agKa6R2tj79nDlUYhIqNTj9VQyKcqKvPvBVJZbdgi5GsW5vfRtfEcQKaO7qtOtcPP-Kj~wAUGkwJ-ocr9QNx4ktaZ~c7smifjjQR9bBeazfQUtkTxh6dPw~r4Yf0J69vd6VowF2XVGWz7jiWhugjQEUw~iCCyBe8Qqn9vbaPW7xbFiERDI4JFTBdt55aWtSdSINYzqimEA6B~iBXmFzQC1JLtfOjM6cx7DYYkEAbJnMFsgHYMyHqw__"
                alt="img"
                className="mt-9 w-full max-w-[630px]"
              />
            </div>
            <div className="col-span-6 ml-16 flex justify-center flex-col">
              <h1 className="text-24 md:text-48 font-semibold text-main-black mt-2.5 md:mt-5">
                Compliance Townhall
              </h1>
              <p className="mt-5 md:mt-10 text-paragraph pb-10">
                Lorem ipsum dolor sit amet consectetur. Vel aliquet vitae id in
                ut ut nulla cursus. Nibh vulputate varius sit lobortis amet enim
                pharetra vel. Nunc magna interdum odio eu netus velit facilisi.
                Id pellentesque mattis dictumst maecenas etiam sit quis. Feugiat
                dolor habitant diam lacus pharetra lectus tristique diam.
              </p>
              <a href="projects.html"></a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-[70px] sm:py-[130px] w-full bg-[#A3896B]">
        <div className="theme-container w-full mx-auto">
          <h2 className="max-w-[623px] font-semibold text-10 sm:text-24 text-main-black text-center mx-auto mt-5">
            Our Founder Stories
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
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum libero fugit maxime cupiditate consequatur,
                    distinctio accusantium. Deleniti, distinctio accusamus
                    possimus tenetur quidem dolorum modi ut?
                  </p>
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
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum libero fugit maxime cupiditate consequatur,
                    distinctio accusantium. Deleniti, distinctio accusamus
                    possimus tenetur quidem dolorum modi ut?
                  </p>
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
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum libero fugit maxime cupiditate consequatur,
                    distinctio accusantium. Deleniti, distinctio accusamus
                    possimus tenetur quidem dolorum modi ut?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative md:mt-12 ">
        <div className="w-full pb-16 md:pb-[30px] relative z-10 ">
          <div className="theme-container mx-auto">
            <div className="flex justify-center items-center px-4 md:px-0 py-10 md:py-20 relative rounded-3xl overflow-hidden bg-[#F6F4F1]">
              <div className="max-w-[850px] w-full flex justify-center items-center flex-col relative z-10">
                <h1 className="py-0.5 px-5 bg-purple/5 border-buisness-red border rounded-[30px] font-medium text-blue-seo">
                  FAQs
                </h1>
                <h2 className="text-24 sm:text-48 font-semibold text-main-black mt-5">
                  Asked Questions & Answer
                </h2>
                <div className="flex flex-col gap-2.5 w-full mt-5 md:mt-10 p-0 sm:p-5">
                  <div
                    data-aos="fade-up"
                    className="py-5 px-2 md:px-9 w-full rounded-[10px] service-faq-toggler overflow-hidden transition-all duration-300 max-h-fit h-fit border border-buisness-red bg-purple/5"
                    name="faq-1"
                  >
                    <div className="w-full flex justify-between items-center pointer-events-none h-fit">
                      <h1 className="font-semibold sm:text-18 text-main-black">
                        What is CTH and why is it the best Community?
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
                          stroke="#89580A"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <p className="mt-3.5 text-paragraph pointer-events-none h-fit">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Consequatur perferendis aspernatur, accusantium, ullam
                      tempora in deleniti vel minus illo, tenetur dicta? Earum
                      ipsam sit maiores?
                    </p>
                  </div>

                  <div
                    data-aos="fade-up"
                    className="py-5 px-2 md:px-9 w-full rounded-[10px] service-faq-toggler overflow-hidden transition-all duration-300 max-h-fit h-fit border border-buisness-red bg-purple/5"
                    name="faq-1"
                  >
                    <div className="w-full flex justify-between items-center pointer-events-none h-fit">
                      <h1 className="font-semibold sm:text-18 text-main-black">
                        What is CTH and why is it the best Community?
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
                          stroke="#89580A"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <p className="mt-3.5 text-paragraph pointer-events-none h-fit">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Consequatur perferendis aspernatur, accusantium, ullam
                      tempora in deleniti vel minus illo, tenetur dicta? Earum
                      ipsam sit maiores?
                    </p>
                  </div>

                  <div
                    data-aos="fade-up"
                    className="py-5 px-2 md:px-9 w-full rounded-[10px] service-faq-toggler overflow-hidden transition-all duration-300 max-h-fit h-fit border border-buisness-red bg-purple/5"
                    name="faq-1"
                  >
                    <div className="w-full flex justify-between items-center pointer-events-none h-fit">
                      <h1 className="font-semibold sm:text-18 text-main-black">
                        What is CTH and why is it the best Community?
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
                          stroke="#89580A"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <p className="mt-3.5 text-paragraph pointer-events-none h-fit">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Consequatur perferendis aspernatur, accusantium, ullam
                      tempora in deleniti vel minus illo, tenetur dicta? Earum
                      ipsam sit maiores?
                    </p>
                  </div>

                  <div
                    data-aos="fade-up"
                    className="py-5 px-2 md:px-9 w-full rounded-[10px] service-faq-toggler overflow-hidden transition-all duration-300 max-h-fit h-fit border border-buisness-red bg-purple/5"
                    name="faq-1"
                  >
                    <div className="w-full flex justify-between items-center pointer-events-none h-fit">
                      <h1 className="font-semibold sm:text-18 text-main-black">
                        What is CTH and why is it the best Community?
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
                          stroke="#89580A"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <p className="mt-3.5 text-paragraph pointer-events-none h-fit">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Consequatur perferendis aspernatur, accusantium, ullam
                      tempora in deleniti vel minus illo, tenetur dicta? Earum
                      ipsam sit maiores?
                    </p>
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

export default Aboutus;
