function SignUp() {
  return (
    <>
      {/* <div className="flex flex-col justify-center items-center  bg-white md:h-screen">
        <div className="grid md:grid-cols-2 items-center gap-y-8 max-w-7xl w-full shadow-[0_2px_13px_-6px_rgba(0,0,0,0.4)] m-6 rounded-xl relative overflow-hidden">
          <div className="max-md:order-1 p-4 bg-gray-50 h-full">
            <img
              src="https://readymadeui.com/signin-image.webp"
              className="lg:max-w-[90%] w-full h-full object-contain block mx-auto"
              alt="login-image"
            />
          </div>

          <div className="flex flex-col justify-center font-[sans-serif] sm:h-screen p-4">
            <div className="max-w-md w-full mx-auto border border-gray-300 rounded-2xl p-8">
              <form>
                <div className="space-y-6">
                  <div>
                    <label className="text-gray-800 text-sm mb-2 block">
                      Email Id
                    </label>
                    <input
                      name="email"
                      type="text"
                      className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                      placeholder="Enter email"
                    />
                  </div>
                  <div>
                    <label className="text-gray-800 text-sm mb-2 block">
                      Password
                    </label>
                    <input
                      name="password"
                      type="password"
                      className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                      placeholder="Enter password"
                    />
                  </div>
                  <div>
                    <label className="text-gray-800 text-sm mb-2 block">
                      Confirm Password
                    </label>
                    <input
                      name="cpassword"
                      type="password"
                      className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                      placeholder="Enter confirm password"
                    />
                  </div>

                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="remember-me"
                      className="text-gray-800 ml-3 block text-sm"
                    >
                      I accept the{" "}
                      <a
                        href="javascript:void(0);"
                        className="text-blue-600 font-semibold hover:underline ml-1"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>

                <div className="!mt-12">
                  <button
                    type="button"
                    className="w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                  >
                    Create an account
                  </button>
                </div>
                <p className="text-gray-800 text-sm mt-6 text-center">
                  Already have an account?
                  <a
                    href="javascript:void(0);"
                    className="text-blue-600 font-semibold hover:underline ml-1"
                  >
                    Login here
                  </a>
                </p>
              </form>
            </div>
          </div>
          <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-blue-400 max-sm:hidden"></div>
        </div>
      </div> */}
      <div className="flex flex-col justify-center font-[sans-serif] p-4">
        <div className="max-w-md w-full mx-auto shadow-[0_2px_10px_-2px_rgba(195,169,50,0.5)] p-8 relative mt-12">
          <div className="bg-white w-24 h-24 border-[10px] p-1.5 absolute left-0 right-0 mx-auto -top-12 rounded-full overflow-hidden">
            <a href="javascript:void(0)">
              <img
                src="https://readymadeui.com/readymadeui-short.svg"
                alt="logo"
                className="w-full inline-block"
              />
            </a>
          </div>

          <form className="mt-12">
            <h3 className="text-xl font-bold  mb-8 text-center">
              Create free account
            </h3>
            <div className="space-y-4">
              <input
                name="name"
                type="text"
                className="bg-gray-100 w-full text-sm text-gray-800 px-4 py-4 focus:bg-transparent outline-orange-300 transition-all"
                placeholder="Enter name"
              />
              <input
                name="email"
                type="text"
                className="bg-gray-100 w-full text-sm text-gray-800 px-4 py-4 focus:bg-transparent outline-orange-300 transition-all"
                placeholder="Enter email"
              />
              <input
                name="password"
                type="password"
                className="bg-gray-100 w-full text-sm text-gray-800 px-4 py-4 focus:bg-transparent outline-orange-300 transition-all"
                placeholder="Enter password"
              />
              <input
                name="cpassword"
                type="password"
                className="bg-gray-100 w-full text-sm text-gray-800 px-4 py-4 focus:bg-transparent outline-orange-300 transition-all"
                placeholder="Enter confirm password"
              />
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 shrink-0 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-3 block text-sm text-gray-800"
                >
                  I accept the{" "}
                  <a
                    href="javascript:void(0);"
                    className=" font-semibold hover:underline ml-1"
                  >
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div>

            <div className="mt-8">
              <button
                type="button"
                className="w-full py-4 px-8 text-sm tracking-wide font-semibold text-white bg-orange-500 hover:bg-orange-600 focus:outline-none"
              >
                Create an account
              </button>
            </div>
            <p className="text-sm mt-8 text-center text-gray-800">
              Already have an account?{" "}
              <a
                href="javascript:void(0);"
                className="text-orange-500 font-semibold hover:underline ml-1"
              >
                Login here
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
