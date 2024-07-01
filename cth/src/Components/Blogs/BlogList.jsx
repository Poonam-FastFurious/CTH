import { Link } from "react-router-dom";

function BlogList() {
  return (
    <>
      <div>
        <section id="h1-breadcrumb">
          <div className="h1-breadcrumb w-full h-fit overflow-hidden relative bg-main-gray pb-16 md:pb-24">
            <div
              className="win-grid win-grid-bg w-full h-full absolute left-0 top-0 z-0"
              id="win-grid"
            >
              <img
                src="https://s3-alpha-sig.figma.com/img/7478/8db9/71641caa490608c8980ee5dd2ec60aa5?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h1rKYDwdjLIzfoZ1-qmK12iN-2naOBMspJxfpcA9e9DsNJ3vbRCwXDaedbnw4JaitB3I5lHxA8Ciy-C3gfkL3A8oT7d1s1vinwntaM5UPCqkXZx79daGJuUL4TH0khFmVhcwPXFAoWpaq0p6d7BSfPXLqDkmBo-35TQh4Bi5pFKoWHv3M4Ef-Orio~7rp3uU~NwbDFlB178UVn9k9ze5pJaTxxDg6hl6RzkRSlc1tzf60YHiIG4v0i7hj3tyFzjfwOOKq9qrKGVn2Wn-jyjdjhIF5jFNjupI1F5M-SGdnOA9ddyWOvyNILzgTXv6b07PDAheUewyiYNq-Oeq8OGCDw__"
                alt=""
              />
            </div>
            <div className="absolute left-1/4 w-full top-[300px] overflow-hidden z-0 pointer-events-none"></div>
            <div className="theme-container mx-auto h-fit w-fit relative z-10">
              <div className="mt-[120px] md:mt-[272px] w-fit mx-auto relative z-10">
                <h1 className="text-white text-34 font-semibold w-full text-center max-w-[624px]">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </h1>
              </div>
            </div>
          </div>
        </section>
        <div className="max-w-5xl max-lg:max-w-2xl mx-auto">
          <div className="flex flex-col justify-center  w-full">
            <h2 className="text-[#A3896B] font-semibold text-[40px] sm:text-3xl pt-5">
              Blogs
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-md:justify-center mt-12 ">
            <div className="max-w-lg mx-auto ">
              <div className="bg-[#A3896B]  shadow-md border border-gray-200 rounded-lg max-w-sm mb-5 p-4">
                <Link to="#">
                  <img
                    className="rounded-t-lg"
                    src="https://flowbite.com/docs/images/blog/image-1.jpg"
                    alt=""
                  />
                </Link>
                <div className="p-5">
                  <Link to="#">
                    <h5 className="text-white text-md tracking-tight mb-2">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </h5>
                    <div className="flex flex-wrap items-center gap-3">
                      <img
                        src="https://readymadeui.com/team-1.webp"
                        className="w-9 h-9 rounded-full"
                      />
                      <p className="text-xs text-white">BY JOHN DOE</p>
                      <p className="text-xs text-white">25 Sep 2023</p>
                    </div>
                  </Link>
                  <p className="font-normal text-white mb-3">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Assumenda labore non ratione dolores nihil?
                  </p>
                  <Link
                    className="text-white   bg-[#89580A]   font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                    to="/blog"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
            <div className="max-w-lg mx-auto ">
              <div className="bg-[#A3896B]  shadow-md border border-gray-200 rounded-lg max-w-sm mb-5 p-4">
                <Link to="#">
                  <img
                    className="rounded-t-lg"
                    src="https://flowbite.com/docs/images/blog/image-1.jpg"
                    alt=""
                  />
                </Link>
                <div className="p-5">
                  <Link to="#">
                    <h5 className="text-white text-md tracking-tight mb-2">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </h5>
                    <div className="flex flex-wrap items-center gap-3">
                      <img
                        src="https://readymadeui.com/team-1.webp"
                        className="w-9 h-9 rounded-full"
                      />
                      <p className="text-xs text-white">BY JOHN DOE</p>
                      <p className="text-xs text-white">25 Sep 2023</p>
                    </div>
                  </Link>
                  <p className="font-normal text-white mb-3">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quae saepe officiis est nisi alias. Lorem ipsum dolor sit.
                  </p>
                  <Link
                    className="text-white   bg-[#89580A]   font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                    to="/blog"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
            <div className="max-w-lg mx-auto ">
              <div className="bg-[#A3896B]  shadow-md border border-gray-200 rounded-lg max-w-sm mb-5 p-4">
                <Link to="#">
                  <img
                    className="rounded-t-lg"
                    src="https://flowbite.com/docs/images/blog/image-1.jpg"
                    alt=""
                  />
                </Link>
                <div className="p-5">
                  <Link to="#">
                    <h5 className="text-white text-md tracking-tight mb-2">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </h5>
                    <div className="flex flex-wrap items-center gap-3">
                      <img
                        src="https://readymadeui.com/team-1.webp"
                        className="w-9 h-9 rounded-full"
                      />
                      <p className="text-xs text-white">BY JOHN DOE</p>
                      <p className="text-xs text-white">25 Sep 2023</p>
                    </div>
                  </Link>
                  <p className="font-normal text-white mb-3">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quae saepe officiis est nisi alias. Lorem ipsum dolor sit.
                  </p>
                  <Link
                    className="text-white   bg-[#89580A]   font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                    to="/blog"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
            <div className="max-w-lg mx-auto ">
              <div className="bg-[#A3896B]  shadow-md border border-gray-200 rounded-lg max-w-sm mb-5 p-4">
                <Link to="#">
                  <img
                    className="rounded-t-lg"
                    src="https://flowbite.com/docs/images/blog/image-1.jpg"
                    alt=""
                  />
                </Link>
                <div className="p-5">
                  <Link to="#">
                    <h5 className="text-white text-md tracking-tight mb-2">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </h5>
                    <div className="flex flex-wrap items-center gap-3">
                      <img
                        src="https://readymadeui.com/team-1.webp"
                        className="w-9 h-9 rounded-full"
                      />
                      <p className="text-xs text-white">BY JOHN DOE</p>
                      <p className="text-xs text-white">25 Sep 2023</p>
                    </div>
                  </Link>
                  <p className="font-normal text-white mb-3">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quae saepe officiis est nisi alias. Lorem ipsum dolor sit.
                  </p>
                  <Link
                    className="text-white   bg-[#89580A]   font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                    to="/blog"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
            <div className="max-w-lg mx-auto ">
              <div className="bg-[#A3896B]  shadow-md border border-gray-200 rounded-lg max-w-sm mb-5 p-4">
                <Link to="#">
                  <img
                    className="rounded-t-lg"
                    src="https://flowbite.com/docs/images/blog/image-1.jpg"
                    alt=""
                  />
                </Link>
                <div className="p-5">
                  <Link to="#">
                    <h5 className="text-white text-md tracking-tight mb-2">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </h5>
                    <div className="flex flex-wrap items-center gap-3">
                      <img
                        src="https://readymadeui.com/team-1.webp"
                        className="w-9 h-9 rounded-full"
                      />
                      <p className="text-xs text-white">BY JOHN DOE</p>
                      <p className="text-xs text-white">25 Sep 2023</p>
                    </div>
                  </Link>
                  <p className="font-normal text-white mb-3">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quae saepe officiis est nisi alias. Lorem ipsum dolor sit.
                  </p>
                  <Link
                    className="text-white   bg-[#89580A]   font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                    to="/blog"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
            <div className="max-w-lg mx-auto ">
              <div className="bg-[#A3896B]  shadow-md border border-gray-200 rounded-lg max-w-sm mb-5 p-4">
                <Link to="#">
                  <img
                    className="rounded-t-lg"
                    src="https://flowbite.com/docs/images/blog/image-1.jpg"
                    alt=""
                  />
                </Link>
                <div className="p-5">
                  <Link to="#">
                    <h5 className="text-white text-md tracking-tight mb-2">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </h5>
                    <div className="flex flex-wrap items-center gap-3">
                      <img
                        src="https://readymadeui.com/team-1.webp"
                        className="w-9 h-9 rounded-full"
                      />
                      <p className="text-xs text-white">BY JOHN DOE</p>
                      <p className="text-xs text-white">25 Sep 2023</p>
                    </div>
                  </Link>
                  <p className="font-normal text-white mb-3">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quae saepe officiis est nisi alias. Lorem ipsum dolor sit.
                  </p>
                  <Link
                    className="text-white   bg-[#89580A]   font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                    to="/blog"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
            <div className="max-w-lg mx-auto ">
              <div className="bg-[#A3896B]  shadow-md border border-gray-200 rounded-lg max-w-sm mb-5 p-4">
                <Link to="#">
                  <img
                    className="rounded-t-lg"
                    src="https://flowbite.com/docs/images/blog/image-1.jpg"
                    alt=""
                  />
                </Link>
                <div className="p-5">
                  <Link to="#">
                    <h5 className="text-white text-md tracking-tight mb-2">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </h5>
                    <div className="flex flex-wrap items-center gap-3">
                      <img
                        src="https://readymadeui.com/team-1.webp"
                        className="w-9 h-9 rounded-full"
                      />
                      <p className="text-xs text-white">BY JOHN DOE</p>
                      <p className="text-xs text-white">25 Sep 2023</p>
                    </div>
                  </Link>
                  <p className="font-normal text-white mb-3">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quae saepe officiis est nisi alias. Lorem ipsum dolor sit.
                  </p>
                  <Link
                    className="text-white   bg-[#89580A]   font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                    to="/blog"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
            <div className="max-w-lg mx-auto ">
              <div className="bg-[#A3896B]  shadow-md border border-gray-200 rounded-lg max-w-sm mb-5 p-4">
                <Link to="#">
                  <img
                    className="rounded-t-lg"
                    src="https://flowbite.com/docs/images/blog/image-1.jpg"
                    alt=""
                  />
                </Link>
                <div className="p-5">
                  <Link to="#">
                    <h5 className="text-white text-md tracking-tight mb-2">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </h5>
                    <div className="flex flex-wrap items-center gap-3">
                      <img
                        src="https://readymadeui.com/team-1.webp"
                        className="w-9 h-9 rounded-full"
                      />
                      <p className="text-xs text-white">BY JOHN DOE</p>
                      <p className="text-xs text-white">25 Sep 2023</p>
                    </div>
                  </Link>
                  <p className="font-normal text-white mb-3">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quae saepe officiis est nisi alias. Lorem ipsum dolor sit.
                  </p>
                  <Link
                    className="text-white   bg-[#89580A]   font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                    to="/blog"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
            <div className="max-w-lg mx-auto ">
              <div className="bg-[#A3896B]  shadow-md border border-gray-200 rounded-lg max-w-sm mb-5 p-4">
                <Link to="#">
                  <img
                    className="rounded-t-lg"
                    src="https://flowbite.com/docs/images/blog/image-1.jpg"
                    alt=""
                  />
                </Link>
                <div className="p-5">
                  <Link to="#">
                    <h5 className="text-white text-md tracking-tight mb-2">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </h5>
                    <div className="flex flex-wrap items-center gap-3">
                      <img
                        src="https://readymadeui.com/team-1.webp"
                        className="w-9 h-9 rounded-full"
                      />
                      <p className="text-xs text-white">BY JOHN DOE</p>
                      <p className="text-xs text-white">25 Sep 2023</p>
                    </div>
                  </Link>
                  <p className="font-normal text-white mb-3">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quae saepe officiis est nisi alias. Lorem ipsum dolor sit.
                  </p>
                  <Link
                    className="text-white   bg-[#89580A]   font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                    to="/blog"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogList;
