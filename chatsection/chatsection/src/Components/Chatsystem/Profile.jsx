function Profile() {
  return (
    <>
      <div className="user-profile-sidebar h-[100vh] bg-gray-100 shadow overflow-y-hidden mb-[85px] lg:mb-0 dark:bg-zinc-800 border-l-4 border-gray-50 dark:border-zinc-600 -data-[theme-color=red]:dark:bg-zinc-700 absolute xl:relative top-0 bottom-0">
        <div className="px-6 pt-6">
          <div className="text-end">
            <button
              type="button"
              className="text-2xl text-gray-500 border-0 btn dark:text-gray-200"
              id="user-profile-hide"
            >
              <i className="ri-close-line"></i>
            </button>
          </div>
        </div>

        <div className="p-6 text-center border-b border-gray-100 dark:border-zinc-600">
          <div className="mb-4">
            <img
              src="https://themesbrand.com/chatvia-tailwind/layouts/assets/images/avatar-1.jpg"
              className="w-24 h-24 p-1 mx-auto border border-gray-100 rounded-full dark:border-zinc-800"
              alt=""
            />
          </div>

          <h5 className="mb-1 text-16 dark:text-gray-50">Rahul Raj</h5>
          <h5 className="mb-0 truncate text-14 ltr:block rtl:hidden">
            <a href="#" className="text-gray-500 dark:text-gray-50">
              <i className=" ltr:ml-1 rtl:mr-1 ri-record-circle-fill text-10  text-green-500 "></i>
              Active
            </a>
          </h5>
        </div>

        <div className="p-6 h-[550px]" data-simplebar="">
          <div>
            <p className="mb-6 text-gray-500 dark:text-gray-300">
              If several languages coalesce, the grammar of the resulting
              language is more simple and regular than that of the individual.
            </p>
          </div>

          <div data-tw-accordion="collapse">
            <div className="text-gray-700 accordion-item">
              <h2>
                <button
                  type="button"
                  className="flex items-center justify-between w-full px-3 py-2 font-medium text-left border border-gray-100 rounded-t accordion-header group active dark:border-b-zinc-600  dark:border-zinc-600"
                >
                  <span className="m-0 text-[14px] dark:text-gray-50 font-semibold ltr:block rtl:hidden">
                    <i className="mr-2 align-middle ri-user-2-line d-inline-block"></i>
                    About
                  </span>

                  <i className="mdi mdi-chevron-down text-lg group-[.active]:rotate-180 dark:text-gray-50"></i>
                </button>
              </h2>

              <div className="block bg-white border border-t-0 border-gray-100 accordion-body dark:bg-transparent dark:border-zinc-600">
                <div className="p-5">
                  <div>
                    <p className="mb-1 text-gray-500 dark:text-gray-300">
                      Name
                    </p>
                    <h5 className="text-sm dark:text-gray-50">Rahul raj</h5>
                  </div>
                  <div className="mt-5">
                    <p className="mb-1 text-gray-500 dark:text-gray-300">
                      Email
                    </p>
                    <h5 className="text-sm dark:text-gray-50">
                      rahul@gmail.com
                    </h5>
                  </div>
                  <div className="mt-5">
                    <p className="mb-1 text-gray-500 dark:text-gray-300">
                      Time
                    </p>
                    <h5 className="text-sm dark:text-gray-50">11:40 PM</h5>
                  </div>
                  <div className="mt-5">
                    <p className="mb-1 text-gray-500 dark:text-gray-300">
                      Location
                    </p>
                    <h5 className="text-sm dark:text-gray-50">India</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
