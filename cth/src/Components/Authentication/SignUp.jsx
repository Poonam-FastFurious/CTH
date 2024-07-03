import { Link } from "react-router-dom";
import image from "../../assets/loginimage.png";
import { useState } from "react";
function SignUp() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center py-24 bg-white md:h-auto  ">
        <div className="grid md:grid-cols-2 items-center gap-y-8 max-w-7xl w-full shadow-[0_2px_13px_-6px_rgba(0,0,0,0.4)] m-6 rounded-xl relative overflow-hidden">
          <div className="max-md:order-1 p-4 bg-[#FFFFE7] h-full">
            <img
              src={image}
              alt="login-image"
              className="lg:max-w-[90%] w-full h-full object-contain block mx-auto"
            />
          </div>

          <div className="flex flex-col justify-center  sm:h-auto p-4">
            <div className="max-w-md w-full mx-auto border border-gray-300 rounded-2xl p-8 shadow-xl">
              <form>
                <div className="mb-12  container w-[80%] mx-auto flex justify-between">
                  <button className="text-gray-800 text-[20px] font-bold">
                    <Link to="/Login"> Sign in</Link>
                  </button>
                  <button className="text-gray-800 text-[20px] font-bold">
                    <Link to="/Signup">
                      Sign up
                      <hr className=" h-1 w-[100%] bg-[#B08D57]" />
                    </Link>
                  </button>
                </div>

                {step === 1 && (
                  <div className="space-y-6">
                    <div className="grid sm:grid-cols-3 gap-8">
                      <div>
                        <label className="text-gray-800 text-sm mb-2 block">
                          First Name
                        </label>
                        <input
                          name="name"
                          type="text"
                          className="border w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-[#B08D57] transition-all"
                          placeholder="Enter name"
                        />
                      </div>
                      <div>
                        <label className="text-gray-800 text-sm mb-2 block">
                          Middle Name*
                        </label>
                        <input
                          name="mname"
                          type="text"
                          className="border w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-[#B08D57] transition-all"
                          placeholder="Enter middle name"
                        />
                      </div>
                      <div>
                        <label className="text-gray-800 text-sm mb-2 block">
                          Last Name
                        </label>
                        <input
                          name="lname"
                          type="text"
                          className="border w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-[#B08D57] transition-all"
                          placeholder="Enter last name"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-gray-800 text-sm mb-2 block">
                        Contact Number *
                      </label>
                      <input
                        name="contact"
                        type="text"
                        className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-[#B08D57]"
                        placeholder="Enter Contact Number *"
                      />
                    </div>
                    <div>
                      <label className="text-gray-800 text-sm mb-2 block">
                        Email Address *
                      </label>
                      <input
                        name="email"
                        type="email"
                        className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-[#B08D57]"
                        placeholder="Enter Email Address *"
                      />
                    </div>
                    <div>
                      <label className="text-gray-800 text-sm mb-2 block">
                        Linkedin Profile
                      </label>
                      <input
                        name="linkedin"
                        type="text"
                        className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-[#B08D57]"
                        placeholder="Enter Linkedin Profile"
                      />
                    </div>
                    <div className="!mt-12">
                      <button
                        type="button"
                        onClick={nextStep}
                        className="w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-buisness-red hover:bg-buisness-red focus:outline-none"
                      >
                        Next
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
                  </div>
                )}
                {step === 2 && (
                  <div className="space-y-5">
                    <div>
                      <label className="text-gray-800 text-sm mb-2 block">
                        Address
                      </label>
                      <input
                        name="address"
                        type="text"
                        className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-[#B08D57]"
                        placeholder="Enter Address"
                      />
                    </div>
                    <div>
                      <label className="text-gray-800 text-sm mb-2 block">
                        Skills
                      </label>
                      <input
                        name="skills"
                        type="text"
                        className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-[#B08D57]"
                        placeholder="Enter Skills"
                      />
                    </div>
                    <div>
                      <label className="text-gray-800 text-sm mb-2 block">
                        Academic Projects
                      </label>
                      <input
                        name="projects"
                        type="text"
                        className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-[#B08D57]"
                        placeholder="Enter Academic Projects"
                      />
                    </div>
                    <div>
                      <label className="text-gray-800 text-sm mb-2 block">
                        Honours & Certifications
                      </label>
                      <input
                        name="honours"
                        type="text"
                        className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md  outline-[#B08D57]"
                        placeholder="Enter Honours & Certifications"
                      />
                    </div>

                    <div className="flex ">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 shrink-0 text-[#B08D57]  border-gray-300 rounded"
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

                    <div className="!mt-12 flex justify-between">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-[#B08D57] hover:bg-buisness-red focus:outline-none"
                      >
                        Previous
                      </button>
                      <button
                        type="submit"
                        className="py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-buisness-red hover:bg-buisness-red focus:outline-none"
                      >
                        Create an account
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center p-4 py-24">
        <div className="max-w-xl w-full mx-auto  shadow-xl p-8 relative mt-12 border rounded">
          <form>
            <div className="mb-12  container w-[80%] mx-auto flex justify-between">
              <button className="text-gray-800 text-[20px] font-bold">
                <Link to="/Login"> Sign in</Link>
              </button>
              <button className="text-gray-800 text-[20px] font-bold">
                <Link to="/Signup">
                  Sign up
                  <hr className=" h-1 w-[100%] bg-[#B08D57]" />
                </Link>
              </button>
            </div>

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
                  className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-[#B08D57]"
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
                  className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-[#B08D57]"
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
                  className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-[#B08D57]"
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
                  className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-[#B08D57]"
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
                  className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-[#B08D57]"
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
                  className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-[#B08D57]"
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
                  className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-[#B08D57]"
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
