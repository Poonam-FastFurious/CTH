function AddContact() {
  return (
    <>
      <div className="tab-content">
        <div>
          <div className="p-6 pb-0">
            <div className="ltr:float-right rtl:float-left">
              <div className="relative">
                <button
                  type="button"
                  className="px-4 text-lg text-gray-500 group/tag"
                  data-tw-toggle="modal"
                  data-tw-target="#modal-id2"
                >
                  <i className="mr-1 ri-user-add-line ms-0 dark:text-violet-200"></i>
                  <span className="absolute items-center hidden mb-6 top-8 group-hover/tag:flex ltr:-left-4 rtl:-right-8"></span>
                </button>
              </div>
            </div>
            <h4 className="mb-6 dark:text-gray-50">Add User</h4>

            <div
              className="relative z-50 hidden modal"
              id="modal-id2"
              aria-modal="true"
              role="modal-fifth"
            >
              <div className="fixed inset-0 z-50 overflow-hidden">
                <div className="absolute inset-0 transition-opacity bg-black bg-opacity-50 modal-overlay"></div>
                <div className="flex items-center justify-center max-w-lg min-h-screen p-4 mx-auto text-center animate-translate">
                  <div className="relative w-full max-w-lg my-8 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl -top-10 dark:bg-zinc-700">
                    <div className="bg-violet-800/10 dark:bg-zinc-700">
                      <div className="flex items-center justify-between p-4 border-b border-gray-100 ">
                        <h5
                          className="mb-0 text-gray-800 text-16 dark:text-gray-50"
                          id="addgroup-exampleModaL"
                        >
                          Add Contact
                        </h5>
                        <button
                          type="button"
                          className="absolute top-3 ltr:right-2.5 rtl:left-2.5 text-gray-400 border-transparent hover:bg-gray-50/50/50 hover:text-gray-900 rounded-lg text-sm px-2 py-1 ml-auto inline-flex items-center  dark:text-gray-100"
                          data-tw-dismiss="modal"
                        >
                          <i className="text-xl text-gray-500 mdi mdi-close dark:text-zinc-100/60"></i>
                        </button>
                      </div>
                      <div className="p-4">
                        <form>
                          <div className="mb-5 ltr:text-left rtl:text-right">
                            <label className="block mb-2 dark:text-gray-300">
                              Email
                            </label>
                            <input
                              type="text"
                              className="py-1.5 bg-transparent border-gray-100 rounded placeholder:text-13 w-full focus:border-violet-500 focus:ring-0 focus:ring-offset-0  dark:placeholder:text-gray-300"
                              id="addgroupname-input1"
                              placeholder="Enter Email"
                            />
                          </div>

                          <div className="mb-5 ltr:text-left rtl:text-right">
                            <label className="block mb-2 dark:text-gray-300">
                              Invatation Message
                            </label>
                            <textarea
                              className="w-full bg-transparent border-gray-100 rounded placeholder:text-13 focus:border-violet-500 focus:ring-0 focus:ring-offset-0  dark:placeholder:text-gray-300"
                              id="addgroupdescription-input1"
                              rows="3"
                              placeholder="Enter Message"
                            ></textarea>
                          </div>
                        </form>
                      </div>
                      <div className="flex justify-end p-4 border-t border-gray-100 ">
                        <div>
                          <button
                            type="button"
                            className="border-0 btn hover:underline text-violet-500  group-data-[theme-color=red]:text-red-500"
                            data-tw-dismiss="modal"
                          >
                            Close
                          </button>
                          <button
                            type="button"
                            className="text-white border-transparent btn bg-violet-500 hover:bg-violet-600 0  group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=red]:hover:bg-red-600"
                          >
                            Invite Contact
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-1 mt-5 mb-5 bg-slate-100  group-data-[theme-color=red]:bg-red-50 rounded   group-data-[theme-color=red]:">
              <span
                className="bg-slate-100  group-data-[theme-color=red]:bg-red-50 pe-1 ps-3   group-data-[theme-color=red]:"
                id="basic-addon"
              >
                <i className="text-lg text-gray-700 ri-search-line search-icon dark:text-gray-200"></i>
              </span>
              <input
                type="text"
                className="border-0 bg-slate-100  group-data-[theme-color=red]:bg-red-50   group-data-[theme-color=red]: placeholder:text-[14px] focus:ring-offset-0 focus:outline-none focus:ring-0 placeholder:dark:text-gray-300"
                placeholder="Search users.."
                aria-describedby="basic-addon"
              />
            </div>
          </div>

          <div className="h-[80vh]" data-simplebar="">
            <div className="p-6">
              <div>
                <div className="p-3 font-bold text-violet-500  group-data-[theme-color=red]:text-red-500">
                  A
                </div>

                <ul className="list-unstyled contact-list">
                  <li className="px-5 py-[15px]">
                    <div className="flex items-center">
                      <div className="flex-grow">
                        <h5 className="m-0 text-gray-700 text-14 dark:text-gray-50">
                          Albert Rodarte
                        </h5>
                      </div>
                      <div className="relative flex-shrink-0 dropdown">
                        <button
                          className="p-0 text-gray-400 border-0 btn dropdown-toggle dark:text-gray-300"
                          type="button"
                          data-bs-toggle="dropdown"
                          id="dropdownMenuButtonB"
                        >
                          <i className="text-lg ri-more-2-fill"></i>
                        </button>
                      </div>
                    </div>
                  </li>

                  <li className="px-5 py-[15px]">
                    <div className="flex items-center">
                      <div className="flex-grow">
                        <h5 className="m-0 text-gray-700 text-14 dark:text-gray-50">
                          Allison Etter
                        </h5>
                      </div>
                      <div className="relative flex-shrink-0 dropdown">
                        <button
                          className="p-0 text-gray-400 border-0 btn dropdown-toggle dark:text-gray-300"
                          type="button"
                          data-bs-toggle="dropdown"
                          id="dropdownMenuButtonC"
                        >
                          <i className="text-lg ri-more-2-fill"></i>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-3">
                <div className="p-3 font-bold text-violet-500  group-data-[theme-color=red]:text-red-500">
                  C
                </div>

                <ul className="list-unstyled contact-list">
                  <li className="px-5 py-[15px]">
                    <div className="flex items-center">
                      <div className="flex-grow">
                        <h5 className="m-0 text-gray-700 text-14 dark:text-gray-50">
                          Craig Smiley
                        </h5>
                      </div>
                      <div className="relative flex-shrink-0 dropdown">
                        <button
                          className="p-0 text-gray-400 border-0 btn dropdown-toggle dark:text-gray-300"
                          type="button"
                          data-bs-toggle="dropdown"
                          id="dropdownMenuButtonD"
                        >
                          <i className="text-lg ri-more-2-fill"></i>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-3">
                <div className="p-3 font-bold text-violet-500  group-data-[theme-color=red]:text-red-500">
                  D
                </div>

                <ul className="list-unstyled contact-list">
                  <li className="px-5 py-[15px]">
                    <div className="flex items-center">
                      <div className="flex-grow">
                        <h5 className="m-0 text-gray-700 text-14 dark:text-gray-50">
                          Daniel Clay
                        </h5>
                      </div>
                      <div className="relative flex-shrink-0 dropdown">
                        <button
                          className="p-0 text-gray-400 border-0 btn dropdown-toggle dark:text-gray-300"
                          type="button"
                          data-bs-toggle="dropdown"
                          id="dropdownMenuButtonEM"
                        >
                          <i className="text-lg ri-more-2-fill"></i>
                        </button>
                      </div>
                    </div>
                  </li>

                  <li className="px-5 py-[15px]">
                    <div className="flex items-center">
                      <div className="flex-grow">
                        <h5 className="m-0 text-gray-700 text-14 dark:text-gray-50">
                          Doris Brown
                        </h5>
                      </div>

                      <div className="relative flex-shrink-0 dropdown">
                        <button
                          className="p-0 text-gray-400 border-0 btn dropdown-toggle dark:text-gray-300"
                          type="button"
                          data-bs-toggle="dropdown"
                          id="dropdownMenuButtonES"
                        >
                          <i className="text-lg ri-more-2-fill"></i>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-3">
                <div className="p-3 font-bold text-violet-500  group-data-[theme-color=red]:text-red-500">
                  I
                </div>

                <ul className="list-unstyled contact-list">
                  <li className="px-5 py-[15px]">
                    <div className="flex items-center">
                      <div className="flex-grow">
                        <h5 className="m-0 text-gray-700 text-14 dark:text-gray-50">
                          Iris Wells
                        </h5>
                      </div>
                      <div className="relative flex-shrink-0 dropdown">
                        <button
                          className="p-0 text-gray-400 border-0 btn dropdown-toggle dark:text-gray-300"
                          type="button"
                          data-bs-toggle="dropdown"
                          id="dropdownMenuButtonF"
                        >
                          <i className="text-lg ri-more-2-fill"></i>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-3">
                <div className="p-3 font-bold text-violet-500  group-data-[theme-color=red]:text-red-500">
                  J
                </div>

                <ul className="list-unstyled contact-list">
                  <li className="px-5 py-[15px]">
                    <div className="flex items-center">
                      <div className="flex-grow">
                        <h5 className="m-0 text-gray-700 text-14 dark:text-gray-50">
                          Juan Flakes
                        </h5>
                      </div>
                      <div className="relative flex-shrink-0 dropdown">
                        <button
                          className="p-0 text-gray-400 border-0 btn dropdown-toggle dark:text-gray-300"
                          type="button"
                          data-bs-toggle="dropdown"
                          id="dropdownMenuButtonG"
                        >
                          <i className="text-lg ri-more-2-fill"></i>
                        </button>
                      </div>
                    </div>
                  </li>

                  <li className="px-5 py-[15px]">
                    <div className="flex items-center">
                      <div className="flex-grow">
                        <h5 className="m-0 text-gray-700 text-14 dark:text-gray-50">
                          John Hall
                        </h5>
                      </div>
                      <div className="relative flex-shrink-0 dropdown">
                        <button
                          className="p-0 text-gray-400 border-0 btn dropdown-toggle dark:text-gray-300"
                          type="button"
                          data-bs-toggle="dropdown"
                          id="dropdownMenuButtonH"
                        >
                          <i className="text-lg ri-more-2-fill"></i>
                        </button>
                      </div>
                    </div>
                  </li>

                  <li className="px-5 py-[15px]">
                    <div className="flex items-center">
                      <div className="flex-grow">
                        <h5 className="m-0 text-gray-700 text-14 dark:text-gray-50">
                          Joy Southern
                        </h5>
                      </div>
                      <div className="relative flex-shrink-0 dropdown">
                        <button
                          className="p-0 text-gray-400 border-0 btn dropdown-toggle dark:text-gray-300"
                          type="button"
                          data-bs-toggle="dropdown"
                          id="dropdownMenuButtonI"
                        >
                          <i className="text-lg ri-more-2-fill"></i>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-3">
                <div className="p-3 font-bold text-violet-500  group-data-[theme-color=red]:text-red-500">
                  M
                </div>

                <ul className="list-unstyled contact-list">
                  <li className="px-5 py-[15px]">
                    <div className="flex items-center">
                      <div className="flex-grow">
                        <h5 className="m-0 text-gray-700 text-14 dark:text-gray-50">
                          Mary Farmer
                        </h5>
                      </div>
                      <div className="relative flex-shrink-0 dropdown">
                        <button
                          className="p-0 text-gray-400 border-0 btn dropdown-toggle dark:text-gray-300"
                          type="button"
                          data-bs-toggle="dropdown"
                          id="dropdownMenuButtonJ"
                        >
                          <i className="text-lg ri-more-2-fill"></i>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="px-5 py-[15px]">
                    <div className="flex items-center">
                      <div className="flex-grow">
                        <h5 className="m-0 text-gray-700 text-14 dark:text-gray-50">
                          Mark Messer
                        </h5>
                      </div>
                      <div className="relative flex-shrink-0 dropdown">
                        <button
                          className="p-0 text-gray-400 border-0 btn dropdown-toggle dark:text-gray-300"
                          type="button"
                          data-bs-toggle="dropdown"
                          id="dropdownMenuButtonK"
                        >
                          <i className="text-lg ri-more-2-fill"></i>
                        </button>
                      </div>
                    </div>
                  </li>

                  <li className="px-5 py-[15px]">
                    <div className="flex items-center">
                      <div className="flex-grow">
                        <h5 className="m-0 text-gray-700 text-14 dark:text-gray-50">
                          Michael Hinton
                        </h5>
                      </div>

                      <div className="relative flex-shrink-0 dropdown">
                        <button
                          className="p-0 text-gray-400 border-0 btn dropdown-toggle dark:text-gray-300"
                          type="button"
                          data-bs-toggle="dropdown"
                          id="dropdownMenuButtonL"
                        >
                          <i className="text-lg ri-more-2-fill"></i>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-3">
                <div className="p-3 font-bold text-violet-500  group-data-[theme-color=red]:text-red-500">
                  O
                </div>

                <ul className="list-unstyled contact-list">
                  <li className="px-5 py-[15px]">
                    <div className="flex items-center">
                      <div className="flex-grow">
                        <h5 className="m-0 text-gray-700 text-14 dark:text-gray-50">
                          Ossie Wilson
                        </h5>
                      </div>
                      <div className="relative flex-shrink-0 dropdown">
                        <button
                          className="p-0 text-gray-400 border-0 btn dropdown-toggle dark:text-gray-300"
                          type="button"
                          data-bs-toggle="dropdown"
                          id="dropdownMenuButtonM"
                        >
                          <i className="text-lg ri-more-2-fill"></i>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-3">
                <div className="p-3 font-bold text-violet-500  group-data-[theme-color=red]:text-red-500">
                  P
                </div>

                <ul className="list-unstyled contact-list">
                  <li className="px-5 py-[15px]">
                    <div className="flex items-center">
                      <div className="flex-grow">
                        <h5 className="m-0 text-gray-700 text-14 dark:text-gray-50">
                          Phillis Griffin
                        </h5>
                      </div>

                      <div className="relative flex-shrink-0 dropdown">
                        <button
                          className="p-0 text-gray-400 border-0 btn dropdown-toggle dark:text-gray-300"
                          type="button"
                          data-bs-toggle="dropdown"
                          id="dropdownMenuButtonN"
                        >
                          <i className="text-lg ri-more-2-fill"></i>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="px-5 py-[15px]">
                    <div className="flex items-center">
                      <div className="flex-grow">
                        <h5 className="m-0 text-gray-700 text-14 dark:text-gray-50">
                          Paul Haynes
                        </h5>
                      </div>

                      <div className="relative flex-shrink-0 dropdown">
                        <button
                          className="p-0 text-gray-400 border-0 btn dropdown-toggle dark:text-gray-300"
                          type="button"
                          data-bs-toggle="dropdown"
                          id="dropdownMenuButtonO"
                        >
                          <i className="text-lg ri-more-2-fill"></i>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-3">
                <div className="p-3 font-bold text-violet-500  group-data-[theme-color=red]:text-red-500">
                  R
                </div>

                <ul className="list-unstyled contact-list">
                  <li className="px-5 py-[15px]">
                    <div className="flex items-center">
                      <div className="flex-grow">
                        <h5 className="m-0 text-gray-700 text-14 dark:text-gray-50">
                          Rocky Jackson
                        </h5>
                      </div>

                      <div className="relative flex-shrink-0 dropdown">
                        <button
                          className="p-0 text-gray-400 border-0 btn dropdown-toggle dark:text-gray-300"
                          type="button"
                          data-bs-toggle="dropdown"
                          id="dropdownMenuButtonP"
                        >
                          <i className="text-lg ri-more-2-fill"></i>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-3">
                <div className="p-3 font-bold text-violet-500  group-data-[theme-color=red]:text-red-500">
                  S
                </div>

                <ul className="list-unstyled contact-list">
                  <li className="px-5 py-[15px]">
                    <div className="flex items-center">
                      <div className="flex-grow">
                        <h5 className="m-0 text-gray-700 text-14 dark:text-gray-50">
                          Sara Muller
                        </h5>
                      </div>

                      <div className="relative flex-shrink-0 dropdown">
                        <button
                          className="p-0 text-gray-400 border-0 btn dropdown-toggle dark:text-gray-300"
                          type="button"
                          data-bs-toggle="dropdown"
                          id="dropdownMenuButtonQ"
                        >
                          <i className="text-lg ri-more-2-fill"></i>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="px-5 py-[15px]">
                    <div className="flex items-center">
                      <div className="flex-grow">
                        <h5 className="m-0 text-gray-700 text-14 dark:text-gray-50">
                          Simon Velez
                        </h5>
                      </div>

                      <div className="relative flex-shrink-0 dropdown">
                        <button
                          className="p-0 text-gray-400 border-0 btn dropdown-toggle dark:text-gray-300"
                          type="button"
                          data-bs-toggle="dropdown"
                          id="dropdownMenuButtonR"
                        >
                          <i className="text-lg ri-more-2-fill"></i>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="px-5 py-[15px]">
                    <div className="flex items-center">
                      <div className="flex-grow">
                        <h5 className="m-0 text-gray-700 text-14 dark:text-gray-50">
                          Steve Walker
                        </h5>
                      </div>

                      <div className="relative flex-shrink-0 dropdown">
                        <button
                          className="p-0 text-gray-400 border-0 btn dropdown-toggle dark:text-gray-300"
                          type="button"
                          data-bs-toggle="dropdown"
                          id="dropdownMenuButtonS"
                        >
                          <i className="text-lg ri-more-2-fill"></i>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddContact;
