import { Link } from "react-router-dom";

function SignUp() {
  return (
    <>
      <div className="flex flex-col justify-center p-4 py-24">
        <div className="max-w-xl w-full mx-auto  shadow-xl p-8 relative mt-12 border rounded">
          <form>
            <div className="space-y-6">
              <div className="grid sm:grid-cols-3 gap-8">
                <div>
                  <label className="text-gray-800 text-sm mb-2 block">
                    First Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    className=" border w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-[#B08D57] transition-all"
                    placeholder="Enter name"
                  />
                </div>
                <div>
                  <label className="text-gray-800 text-sm mb-2 block">
                    Middle Name*
                  </label>
                  <input
                    name="lname"
                    type="text"
                    className="border w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-[#B08D57] transition-all"
                    placeholder="Enter last name"
                  />
                </div>
                <div>
                  <label className="text-gray-800 text-sm mb-2 block">
                    Last Name
                  </label>
                  <input
                    name="lname"
                    type="text"
                    className=" border w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-[#B08D57] transition-all"
                    placeholder="Enter last name"
                  />
                </div>
                <div></div>
              </div>
              <div>
                <label className="text-gray-800 text-sm mb-2 block">
                  Contact Number *
                </label>
                <input
                  name="email"
                  type="text"
                  className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                  placeholder="Enter Contact Number *"
                />
              </div>
              <div>
                <label className="text-gray-800 text-sm mb-2 block">
                  Email Address *
                </label>
                <input
                  name="password"
                  type="password"
                  className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                  placeholder="Enter Email Address *"
                />
              </div>
              <div>
                <label className="text-gray-800 text-sm mb-2 block">
                  Linkedin Profile
                </label>
                <input
                  name="Linkedin Profile"
                  type="text"
                  className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                  placeholder="Enter Linkedin Profile"
                />
              </div>
              <div>
                <label className="text-gray-800 text-sm mb-2 block">
                  Address
                </label>
                <input
                  name="Address"
                  type="text"
                  className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                  placeholder="Enter Address"
                />
              </div>
              <div>
                <label className="text-gray-800 text-sm mb-2 block">
                  Skills
                </label>
                <input
                  name="Skills"
                  type="text"
                  className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                  placeholder="Enter Skills"
                />
              </div>
              <div>
                <label className="text-gray-800 text-sm mb-2 block">
                  Academic Projects
                </label>
                <input
                  name="Academic Projects"
                  type="text"
                  className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                  placeholder="Enter Academic Projects"
                />
              </div>
              <div>
                <label className="text-gray-800 text-sm mb-2 block">
                  Honours & Certifications
                </label>
                <input
                  name="Honours & Certifications"
                  type="text"
                  className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                  placeholder="Enter Honours & Certifications"
                />
              </div>

              <div className="flex ">
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
                  Are you agree to CTH
                  <Link
                    to="#"
                    className="text-[#B08D57] font-semibold hover:underline ml-1"
                  >
                    Terms of Condition and Privacy Policy.
                  </Link>
                </label>
              </div>
            </div>

            <div className="!mt-12">
              <button
                type="button"
                className="w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-buisness-red hover:bg-buisness-red focus:outline-none"
              >
                Create an account
              </button>
            </div>
            <p className="text-gray-800 text-sm mt-6 text-center">
              Already have an account?
              <Link
                to="#"
                className="text-[#B08D57] font-semibold hover:underline ml-1"
              >
                Login here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
