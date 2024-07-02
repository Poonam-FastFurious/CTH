import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
function Sidmenu() {
  return (
    <div className="flex">
      <div className="sidebar-menu   w-full lg:w-[75px] shadow  lg:flex-col flex flex-row justify-between items-center fixed lg:relative z-40 bottom-0 bg-white  ">
        <div className="hidden lg:my-5 lg:block">
          <Link to="#" className="block ">
            <span>
              <img src={logo} alt="" className="h-[30px]" />
            </span>
          </Link>

          <Link to="index.html" className="hidden dark:block">
            <span>
              <img src={logo} alt="" className="h-[30px]" />
            </span>
          </Link>
        </div>

        <div className="w-full mx-auto lg:my-auto">
          <ul
            id="tabs"
            className="flex flex-row justify-center w-full lg:flex-col lg:flex nav-tabs"
          >
            <li className="flex-grow lg:flex-grow-0">
              <Link
                to="#second"
                className="tab-button active relative flex items-center justify-center mx-auto h-14 w-14 leading-[14px] group/tab my-2 rounded-lg"
              >
                <div className="absolute items-center hidden -top-10 ltr:left-0 group-hover/tab:flex rtl:right-0">
                  <div className="absolute -bottom-1 left-[40%] w-3 h-3 rotate-45 bg-black"></div>
                  <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black rounded shadow-lg">
                    Chats
                  </span>
                </div>
                <i className="text-2xl ri-message-3-line"></i>
              </Link>
            </li>
            <li className="flex-grow lg:flex-grow-0">
              <Link
                to="#third"
                className="tab-button relative flex items-center justify-center mx-auto h-14 w-14 leading-[14px] group/tab my-2 rounded-lg"
              >
                <div className="absolute items-center hidden -top-10 ltr:left-0 group-hover/tab:flex rtl:right-0">
                  <div className="absolute -bottom-1 left-[40%] w-3 h-3 rotate-45 bg-black"></div>
                  <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black rounded shadow-lg">
                    Groups
                  </span>
                </div>
                <i className="text-2xl ri-group-line"></i>
              </Link>
            </li>
            <li className="flex-grow lg:flex-grow-0">
              <Link
                to="#fourth"
                className="tab-button relative flex items-center justify-center mx-auto h-14 w-14 leading-[14px] group/tab my-2 rounded-lg"
              >
                <div className="absolute items-center hidden -top-10 ltr:left-0 group-hover/tab:flex rtl:right-0">
                  <div className="absolute -bottom-1 left-[40%] w-3 h-3 rotate-45 bg-black"></div>
                  <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black rounded shadow-lg">
                    Contacts
                  </span>
                </div>
                <i className="text-2xl ri-contacts-line"></i>
              </Link>
            </li>
            <li className="flex-grow lg:flex-grow-0">
              <Link
                to="#fifth"
                className="tab-button relative flex items-center justify-center mx-auto h-14 w-14 leading-[14px] group/tab my-2 rounded-lg"
              >
                <div className="absolute items-center hidden -top-10 ltr:left-0 group-hover/tab:flex rtl:right-0">
                  <div className="absolute -bottom-1 left-[40%] w-3 h-3 rotate-45 bg-black"></div>
                  <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black rounded shadow-lg">
                    Settings
                  </span>
                </div>
                <i className="text-2xl ri-settings-2-line"></i>
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-20 my-5 lg:w-auto">
          <ul className="lg:block">
            <li className="relative lg:mt-4 dropdown lg:dropup">
              <Link
                to="#"
                className="dropdown-toggle"
                id="dropdownButton2"
                data-bs-toggle="dropdown"
              >
                <img
                  src="https://themesbrand.com/chatvia-tailwind/layouts/assets/images/avatar-1.jpg"
                  alt=""
                  className="w-10 h-10 p-1 mx-auto rounded-full bg-gray-50 dark:bg-zinc-700"
                />
              </Link>

              <ul
                className="absolute z-40 hidden float-left w-40 py-2 mx-4 mb-12 text-left list-none bg-white border-none rounded-lg shadow-lg dropdown-menu bg-clip-padding dark:bg-zinc-700"
                aria-labelledby="dropdownButton2"
              >
                <li>
                  <Link
                    className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/30 dark:text-gray-100 /50 ltr:text-left rtl:text-right"
                    to="#"
                  >
                    Profile
                    <i className="text-gray-500 rtl:float-left ltr:float-right ri-profile-line text-16"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/30 dark:text-gray-100 /50 ltr:text-left rtl:text-right"
                    to="#"
                  >
                    Setting
                    <i className="text-gray-500 rtl:float-left ltr:float-right ri-settings-3-line text-16"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/30 dark:text-gray-100 /50 ltr:text-left rtl:text-right"
                    to="auth-lock-screen.html"
                  >
                    Lock Screen
                    <i className="text-gray-500 rtl:float-left ltr:float-right ri-git-repository-private-line text-16"></i>
                  </Link>
                </li>
                <li className="my-2 border-b border-gray-100/20"></li>
                <li>
                  <Link
                    className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/30 dark:text-gray-100 /50 ltr:text-left rtl:text-right"
                    to="auth-login.html"
                  >
                    Log out
                    <i className="text-gray-500 rtl:float-left ltr:float-right ri-logout-circle-r-line text-16"></i>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="chat-leftsidebar lg:w-[380px] bg-slate-50 /20    overflow-y-hidden  h-screen lg:mb-0   ">
        <div>
          <div className="tab-content active">
            <div>
              <div className="px-6 pt-6">
                <h4 className="mb-0 text-gray-700 dark:text-gray-50">Chats</h4>

                <div className="py-1 mt-5 mb-5 rounded bg-slate-100  group-data-[theme-color=red]:bg-red-50   group-data-[theme-color=red]:">
                  <span
                    className="bg-slate-100  group-data-[theme-color=red]:bg-red-50 pe-1 ps-3   group-data-[theme-color=red]:"
                    id="basic-addon1"
                  >
                    <i className="text-lg text-gray-400 ri-search-line search-icon dark:text-gray-200"></i>
                  </span>
                  <input
                    type="text"
                    className="border-0  bg-slate-100  placeholder:text-[14px] focus:ring-offset-0 focus:outline-none focus:ring-0   group-data-[theme-color=red]: placeholder:text-gray-400"
                    placeholder="Search messages or users"
                    aria-label="Search messages or users"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>

              <div className="px-6 pb-6" dir="ltr">
                <div
                  className="owl-carousel owl-theme"
                  id="user-status-carousel"
                >
                  <div className="text-center">
                    <a
                      href="#"
                      className="block p-2 mt-4 rounded bg-slate-100  group-data-[theme-color=red]:bg-red-50   group-data-[theme-color=red]:"
                    >
                      <div className="absolute inset-0 text-center">
                        <img
                          src="https://themesbrand.com/chatvia-tailwind/layouts/assets/images/avatar-2.jpg"
                          alt="user-img"
                          className="mx-auto rounded-full w-9 h-9"
                        />
                        <span className="absolute w-2.5 h-2.5 0 border-2 border-white rounded-full top-7 lg:right-5 dark:border-zinc-600"></span>
                      </div>

                      <h5 className="mt-4 mb-0 truncate text-13 dark:text-gray-50">
                        Patrick
                      </h5>
                    </a>
                  </div>
                  <div className="text-center">
                    <a
                      href="#"
                      className="block p-2 mt-4 rounded bg-slate-100  group-data-[theme-color=red]:bg-red-50   group-data-[theme-color=red]:"
                    >
                      <div className="absolute inset-0 block text-center">
                        <img
                          src="https://themesbrand.com/chatvia-tailwind/layouts/assets/images/avatar-4.jpg"
                          alt="user-img"
                          className="mx-auto rounded-full w-9 h-9"
                        />
                        <span className="absolute w-2.5 h-2.5 0 border-2 border-white rounded-full top-7 lg:right-5 dark:border-zinc-600"></span>
                      </div>

                      <h5 className="mt-4 mb-0 truncate text-13 dark:text-gray-50">
                        Doris
                      </h5>
                    </a>
                  </div>

                  <div className="text-center">
                    <a
                      href="#"
                      className="block p-2 mt-4 rounded bg-slate-100  group-data-[theme-color=red]:bg-red-50   group-data-[theme-color=red]:"
                    >
                      <div className="absolute inset-0 block text-center">
                        <img
                          src="https://themesbrand.com/chatvia-tailwind/layouts/assets/images/avatar-5.jpg"
                          alt="user-img"
                          className="mx-auto rounded-full w-9 h-9"
                        />
                        <span className="absolute w-2.5 h-2.5 0 border-2 border-white rounded-full top-7 lg:right-5 dark:border-zinc-600"></span>
                      </div>

                      <h5 className="mt-4 mb-0 truncate text-13 dark:text-gray-50">
                        Emily
                      </h5>
                    </a>
                  </div>

                  <div className="text-center">
                    <a
                      href="#"
                      className="block p-2 mt-4 rounded bg-slate-100  group-data-[theme-color=red]:bg-red-50   group-data-[theme-color=red]:"
                    >
                      <div className="absolute inset-0 block text-center">
                        <img
                          src="https://themesbrand.com/chatvia-tailwind/layouts/assets/images/avatar-6.jpg"
                          alt="user-img"
                          className="mx-auto rounded-full w-9 h-9"
                        />
                        <span className="absolute w-2.5 h-2.5 0 border-2 border-white rounded-full top-7 lg:right-5 dark:border-zinc-600"></span>
                      </div>

                      <h5 className="mt-4 mb-0 truncate text-13 dark:text-gray-50">
                        Steve
                      </h5>
                    </a>
                  </div>

                  <div className="text-center">
                    <a
                      href="#"
                      className="block p-2 mt-4 rounded bg-slate-100  group-data-[theme-color=red]:bg-red-50   group-data-[theme-color=red]:"
                    >
                      <div className="absolute inset-0 block mx-auto rounded-full w-9 h-9 bg-violet-500/20 0/20 group-data-[theme-color=red]:bg-red-500/20">
                        <span className="font-medium leading-9 text-violet-500  group-data-[theme-color=red]:text-red-500">
                          T
                        </span>
                        <span className="absolute w-2.5 h-2.5 0 border-2 border-white rounded-full top-7 lg:right-1 dark:border-zinc-600"></span>
                      </div>
                      <h5 className="mt-4 mb-0 truncate text-13 dark:text-gray-50">
                        Teresa
                      </h5>
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="px-6 mb-4 text-16 dark:text-gray-50">Recent</h5>

                <div className="h-[610px] px-2" data-simplebar="">
                  <ul className="chat-user-list">
                    <li className="px-5 py-[15px] hover:bg-slate-100 hover:/50 group-data-[theme-color=red]:hover:bg-red-50/50 transition-all ease-in-out border-b border-white/20 dark:border-zinc-700   group-data-[theme-color=red]: dark:hover:border-zinc-700">
                      <a href="#">
                        <div className="flex">
                          <div className="relative self-center ltr:mr-3 rtl:ml-3">
                            <img
                              src="https://themesbrand.com/chatvia-tailwind/layouts/assets/images/avatar-2.jpg"
                              className="rounded-full w-9 h-9"
                              alt=""
                            />
                            <span className="absolute w-2.5 h-2.5 0 border-2 border-white rounded-full top-7 ltr:right-1 rtl:left-1 dark:border-zinc-600"></span>
                          </div>

                          <div className="flex-grow overflow-hidden">
                            <h5 className="mb-1 text-base truncate dark:text-gray-50">
                              Patrick Hendricks
                            </h5>
                            <p className="mb-0 text-gray-500 truncate dark:text-gray-300 text-14">
                              Hey! there Im available
                            </p>
                          </div>
                          <div className="text-gray-500 text-11 dark:text-gray-300">
                            05 min
                          </div>
                        </div>
                      </a>
                    </li>

                    <li className="unread px-5 py-[15px] hover:bg-slate-100 hover:/50 group-data-[theme-color=red]:hover:bg-red-50/50 transition-all ease-in-out border-b border-white/20 dark:border-zinc-700   group-data-[theme-color=red]: dark:hover:border-zinc-700">
                      <a href="#">
                        <div className="relative flex">
                          <div className="relative self-center ltr:mr-3 rtl:ml-3">
                            <img
                              src="https://themesbrand.com/chatvia-tailwind/layouts/assets/images/avatar-3.jpg"
                              className="rounded-full w-9 h-9"
                              alt=""
                            />
                            <span className="absolute w-2.5 h-2.5 bg-yellow-500 border-2 border-white rounded-full top-7 ltr:right-1 rtl:left-1 dark:border-zinc-600"></span>
                          </div>
                          <div className="flex-grow overflow-hidden">
                            <h5 className="mb-1 text-base truncate dark:text-gray-50">
                              Mark Messer
                            </h5>
                            <p className="mb-0 text-gray-800 truncate dark:text-gray-300 text-14">
                              <i className="align-middle ri-image-fill me-1 ms-0"></i>
                              Images
                            </p>
                          </div>
                          <div className="text-gray-500 text-11 dark:text-gray-300">
                            12 min
                          </div>
                          <div className="absolute bottom-0 ltr:right-0 rtl:left-0">
                            <span className="px-2 py-1 text-red-500 rounded-full bg-red-500/20 text-11">
                              02
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>

                    <li className="px-5 py-[15px] hover:bg-slate-100 hover:/50 group-data-[theme-color=red]:hover:bg-red-50/50 transition-all ease-in-out border-b border-white/20 dark:border-zinc-700   group-data-[theme-color=red]: dark:hover:border-zinc-700">
                      <a href="#">
                        <div className="flex">
                          <div className="relative self-center ltr:mr-3 rtl:ml-3">
                            <div className="flex items-center justify-center rounded-full w-9 h-9 bg-violet-500/20 0/20 group-data-[theme-color=red]:bg-red-500/20">
                              <span className="text-violet-500  group-data-[theme-color=red]:text-red-500">
                                G
                              </span>
                            </div>
                          </div>
                          <div className="flex-grow overflow-hidden">
                            <h5 className="mb-1 text-base truncate dark:text-gray-50">
                              General
                            </h5>
                            <p className="mb-0 text-gray-500 truncate dark:text-gray-300 text-14">
                              This theme is awesome!
                            </p>
                          </div>
                          <div className="text-gray-500 text-11 dark:text-gray-300">
                            20 min
                          </div>
                        </div>
                      </a>
                    </li>

                    <li className="px-5 py-[15px] border-b border-white/20 dark:border-zinc-700 bg-slate-100 /50 group-data-[theme-color=red]:bg-red-50/50   group-data-[theme-color=red]:">
                      <a href="#">
                        <div className="flex">
                          <div className="relative self-center ltr:mr-3 rtl:ml-3">
                            <img
                              src="https://themesbrand.com/chatvia-tailwind/layouts/assets/images/avatar-4.jpg"
                              className="rounded-full w-9 h-9"
                              alt=""
                            />
                            <span className="absolute w-2.5 h-2.5 0 border-2 border-white rounded-full top-7 ltr:right-1 rtl:left-1 dark:border-zinc-600"></span>
                          </div>
                          <div className="flex-grow overflow-hidden">
                            <h5 className="mb-1 text-base truncate dark:text-gray-50">
                              Doris Brown
                            </h5>
                            <p className="text-gray-500 dark:text-gray-300 text-14">
                              Nice to meet you
                            </p>
                          </div>
                          <div className="text-gray-500 text-11 dark:text-gray-300">
                            10:12 AM
                          </div>
                        </div>
                      </a>
                    </li>

                    <li className="unread px-5 py-[15px] hover:bg-slate-100 hover:/50 group-data-[theme-color=red]:hover:bg-red-50/50 transition-all ease-in-out border-b border-white/20 dark:border-zinc-700   group-data-[theme-color=red]: dark:hover:border-zinc-700">
                      <a href="#">
                        <div className="relative flex ">
                          <div className="relative self-center ltr:mr-3 rtl:ml-3">
                            <div className="flex items-center justify-center rounded-full w-9 h-9 bg-violet-500/20 0/20 group-data-[theme-color=red]:bg-red-500/20">
                              <span className="text-violet-500  group-data-[theme-color=red]:text-red-500">
                                D
                              </span>
                            </div>
                          </div>
                          <div className="flex-grow overflow-hidden">
                            <h5 className="mb-1 text-base truncate dark:text-gray-50">
                              Designer
                            </h5>
                            <p className="mb-0 text-gray-800 truncate dark:text-gray-300 text-14">
                              Next meeting tomorrow 10.00AM
                            </p>
                          </div>
                          <div className="text-gray-500 text-11 dark:text-gray-300">
                            12:01 PM
                          </div>
                          <div className="absolute bottom-0 ltr:right-0 rtl:left-0">
                            <span className="px-2 py-1 text-red-500 rounded-full bg-red-500/20 text-11">
                              01
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>

                    <li className="px-5 py-[15px] hover:bg-slate-100 hover:/50 group-data-[theme-color=red]:hover:bg-red-50/50 transition-all ease-in-out border-b border-white/20 dark:border-zinc-700   group-data-[theme-color=red]: dark:hover:border-zinc-700">
                      <a href="#">
                        <div className="flex">
                          <div className="relative self-center ltr:mr-3 rtl:ml-3">
                            <img
                              src="https://themesbrand.com/chatvia-tailwind/layouts/assets/images/avatar-6.jpg"
                              className="rounded-full w-9 h-9"
                              alt=""
                            />
                            <span className="absolute w-2.5 h-2.5 bg-yellow-500 border-2 border-white rounded-full top-7 ltr:right-1 rtl:left-1 dark:border-zinc-600"></span>
                          </div>
                          <div className="flex-grow overflow-hidden">
                            <h5 className="mb-1 text-base truncate dark:text-gray-50">
                              Steve Walker
                            </h5>
                            <p className="text-gray-500 truncate dark:text-gray-300 text-14">
                              <i className="align-middle ri-file-text-fill me-1 ms-0"></i>
                              Admin-A.zip
                            </p>
                          </div>
                          <div className="text-gray-500 text-11 dark:text-gray-300">
                            03:20 PM
                          </div>
                        </div>
                      </a>
                    </li>

                    <li className="typing px-5 py-[15px] hover:bg-slate-100 hover:/50 group-data-[theme-color=red]:hover:bg-red-50/50 transition-all ease-in-out border-b border-white/20 dark:border-zinc-700   group-data-[theme-color=red]: dark:hover:border-zinc-700">
                      <a href="#">
                        <div className="flex">
                          <div className="relative self-center ltr:mr-3 rtl:ml-3">
                            <div className="flex items-center justify-center rounded-full w-9 h-9 bg-violet-500/20 0/20 group-data-[theme-color=red]:bg-red-500/20">
                              <span className="text-violet-500  group-data-[theme-color=red]:text-red-500">
                                A
                              </span>
                            </div>
                            <span className="absolute w-2.5 h-2.5 bg-yellow-500 border-2 border-white rounded-full top-7 ltr:right-1 rtl:left-1 dark:border-zinc-600"></span>
                          </div>
                          <div className="flex-grow overflow-hidden">
                            <h5 className="mb-1 text-base truncate dark:text-gray-50">
                              Albert Rodarte
                            </h5>
                            <div className="flex items-end gap-2 mb-0 text-violet-500  group-data-[theme-color=red]:text-red-500 text-14">
                              <p className="mb-0">typing</p>

                              <div className="animate-typing flex gap-0.5">
                                <p className="w-1 h-1 mb-1 rounded-full dot bg-violet-500 0 group-data-[theme-color=red]:bg-red-500 animate-bounce"></p>
                                <p className="w-1 h-1 mb-1 rounded-full dot-2 bg-violet-500 0 group-data-[theme-color=red]:bg-red-500 "></p>
                                <p className="w-1 h-1 mb-1 rounded-full dot-3 bg-violet-500 0 group-data-[theme-color=red]:bg-red-500 animate-bounce"></p>
                              </div>
                            </div>
                          </div>
                          <div className="text-gray-500 text-11 dark:text-gray-300">
                            04:56 PM
                          </div>
                        </div>
                      </a>
                    </li>

                    <li className="px-5 py-[15px] hover:bg-slate-100 hover:/50 group-data-[theme-color=red]:hover:bg-red-50/50 transition-all ease-in-out border-b border-white/20 dark:border-zinc-700   group-data-[theme-color=red]: dark:hover:border-zinc-700">
                      <a href="#">
                        <div className="flex">
                          <div className="relative self-center ltr:mr-3 rtl:ml-3">
                            <div className="flex items-center justify-center rounded-full w-9 h-9 bg-violet-500/20 0/20 group-data-[theme-color=red]:bg-red-500/20">
                              <span className="text-violet-500  group-data-[theme-color=red]:text-red-500">
                                M
                              </span>
                            </div>
                            <span className="absolute w-2.5 h-2.5 0 border-2 border-white rounded-full top-7 ltr:right-1 rtl:left-1 dark:border-zinc-600"></span>
                          </div>
                          <div className="flex-grow overflow-hidden">
                            <h5 className="mb-1 text-base truncate dark:text-gray-50">
                              Mirta George
                            </h5>
                            <p className="mb-0 text-gray-500 truncate dark:text-gray-300 text-14">
                              Yeah everything is fine
                            </p>
                          </div>
                          <div className="text-gray-500 text-11 dark:text-gray-300">
                            12/07
                          </div>
                        </div>
                      </a>
                    </li>

                    <li className="px-5 py-[15px] hover:bg-slate-100 hover:/50 group-data-[theme-color=red]:hover:bg-red-50/50 transition-all ease-in-out border-b border-white/20 dark:border-zinc-700   group-data-[theme-color=red]: dark:hover:border-zinc-700">
                      <a href="#">
                        <div className="flex">
                          <div className="relative self-center ltr:mr-3 rtl:ml-3">
                            <img
                              src="https://themesbrand.com/chatvia-tailwind/layouts/assets/images/avatar-7.jpg"
                              className="rounded-full w-9 h-9"
                              alt=""
                            />
                            <span className="absolute w-2.5 h-2.5 0 border-2 border-white rounded-full top-7 ltr:right-1 rtl:left-1 dark:border-zinc-600"></span>
                          </div>
                          <div className="flex-grow overflow-hidden">
                            <h5 className="mb-1 text-base truncate dark:text-gray-50">
                              Paul Haynes
                            </h5>
                            <p className="mb-0 text-gray-500 truncate dark:text-gray-300 text-14">
                              Good morning
                            </p>
                          </div>
                          <div className="text-gray-500 text-11 dark:text-gray-300">
                            12/07
                          </div>
                        </div>
                      </a>
                    </li>

                    <li className="px-5 py-[15px] hover:bg-slate-100 hover:/50 group-data-[theme-color=red]:hover:bg-red-50/50 transition-all ease-in-out border-b border-white/20 dark:border-zinc-700   group-data-[theme-color=red]: dark:hover:border-zinc-700">
                      <a href="#">
                        <div className="flex">
                          <div className="relative self-center ltr:mr-3 rtl:ml-3">
                            <div className="flex items-center justify-center rounded-full w-9 h-9 bg-violet-500/20 0/20 group-data-[theme-color=red]:bg-red-500/20">
                              <span className="text-violet-500  group-data-[theme-color=red]:text-red-500">
                                J
                              </span>
                            </div>
                            <span className="absolute w-2.5 h-2.5 bg-yellow-500 border-2 border-white rounded-full top-7 ltr:right-1 rtl:left-1 dark:border-zinc-600"></span>
                          </div>
                          <div className="flex-grow overflow-hidden">
                            <h5 className="mb-1 text-base truncate dark:text-gray-50">
                              Jonathan Miller
                            </h5>
                            <p className="mb-0 text-gray-500 truncate dark:text-gray-300 text-14">
                              Hi, How are you?
                            </p>
                          </div>
                          <div className="text-gray-500 text-11 dark:text-gray-300">
                            12/07
                          </div>
                        </div>
                      </a>
                    </li>

                    <li className="px-5 py-[15px] hover:bg-slate-100 hover:/50 group-data-[theme-color=red]:hover:bg-red-50/50 transition-all ease-in-out border-b border-white/20 dark:border-zinc-700   group-data-[theme-color=red]: dark:hover:border-zinc-700">
                      <a href="#">
                        <div className="flex">
                          <div className="relative self-center ltr:mr-3 rtl:ml-3">
                            <img
                              src="https://themesbrand.com/chatvia-tailwind/layouts/assets/images/avatar-8.jpg"
                              className="rounded-full w-9 h-9"
                              alt=""
                            />
                            <span className="absolute w-2.5 h-2.5 0 border-2 border-white rounded-full top-7 ltr:right-1 rtl:left-1 dark:border-zinc-600"></span>
                          </div>
                          <div className="flex-grow overflow-hidden">
                            <h5 className="mb-1 text-base truncate dark:text-gray-50">
                              Ossie Wilson
                            </h5>
                            <p className="mb-0 text-gray-500 truncate dark:text-gray-300 text-14">
                              Ive finished it! See you so
                            </p>
                          </div>
                          <div className="text-gray-500 text-11 dark:text-gray-300">
                            11/07
                          </div>
                        </div>
                      </a>
                    </li>

                    <li className="px-5 py-[15px] hover:bg-slate-100 hover:/50 group-data-[theme-color=red]:hover:bg-red-50/50 transition-all ease-in-out border-b border-white/20 dark:border-zinc-700   group-data-[theme-color=red]: dark:hover:border-zinc-700">
                      <a href="#">
                        <div className="flex">
                          <div className="relative self-center ltr:mr-3 rtl:ml-3">
                            <div className="flex items-center justify-center rounded-full w-9 h-9 bg-violet-500/20 0/20 group-data-[theme-color=red]:bg-red-500/20">
                              <span className="text-violet-500  group-data-[theme-color=red]:text-red-500">
                                S
                              </span>
                            </div>
                            <span className="absolute w-2.5 h-2.5 bg-yellow-500 border-2 border-white rounded-full top-7 ltr:right-1 rtl:left-1 dark:border-zinc-600"></span>
                          </div>
                          <div className="flex-grow overflow-hidden">
                            <h5 className="mb-1 text-base truncate dark:text-gray-50">
                              Sara Muller
                            </h5>
                            <p className="mb-0 text-gray-500 truncate dark:text-gray-300 text-14">
                              Wow that great
                            </p>
                          </div>
                          <div className="text-gray-500 text-11 dark:text-gray-300">
                            11/07
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidmenu;
