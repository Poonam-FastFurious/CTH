import { Link } from "react-router-dom";

function Gallery() {
  return (
    <>
      <section className="bg-white   md:pb-[120px] relative">
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
                <img
                  src="assets/images/home-one-hero-circle-shadow.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="theme-container mx-auto h-auto w-fit relative z-10">
              <div className="mt-[120px] md:mt-[272px] w-auto mx-auto relative z-10">
                <h1 className="text-main-black text-34 sm:text-48 font-semibold w-full text-center">
                  Gallery
                </h1>
                <div className="flex gap-5 items-center justify-center mt-4">
                  <Link
                    to="/"
                    className="home-two-nav-item leading-5 relative text-18 font-inter text-paragraph transition-all duration-300 hover:text-purple"
                  >
                    Home
                  </Link>
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
                  <Link
                    href="/Contact"
                    className="home-two-nav-item leading-5 relative text-18 font-inter text-paragraph transition-all duration-300 hover:text-purple"
                  >
                    Gallery
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="theme-container w-full mx-auto">
          <div className="grid gap-[30px] grid-cols-3 md:grid-cols-6 lg:grid-cols-12 mt-10 md:mt-[70px] bg-[#E7DDCD] p-12">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="col-span-4"
            >
              <div className="flex justify-center items-center relative group/main overflow-hidden">
                <img
                  src="https://s3-alpha-sig.figma.com/img/9efe/c51a/84546c8c9128c609f1b2e01b00998ef7?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UcvQCKvWLTH2y99EN7Qv7F-dfDll6-MXtgWtZMJcp0dVWMTeA7zUE~sYNuWPIL2OneP64x1e1qJLhH7dsVacJwzr4OJH2ZOvYuwEqF2Gfly7AaFKYIi87LBTw-pE61diyz~7fxWBan2yqb7aTW7a9Zwmmy2wulDfc7Amt8Opb4c3A5lfPb4Fs0bBOkYbZd2dUuaRt-s1ZaGiojByLEVNIeNfHIKTkJ2i8hq7ESJnaBf9nDwCtxA6QM6SWOmqDkzaI6dhlr-OCvJvYGWjncF1hrXOSajEpLzVCOrFtUYL6WMGksHqplX1zIxJpGp-tAHrpobtJ5C03K7xu0KivX7KnA__"
                  alt=""
                  className="w-full h-90 object-cover rounded-lg overflow-hidden"
                />
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="col-span-4"
            >
              <div className="flex justify-center items-center relative group/main overflow-hidden">
                <img
                  src="https://s3-alpha-sig.figma.com/img/9efe/c51a/84546c8c9128c609f1b2e01b00998ef7?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UcvQCKvWLTH2y99EN7Qv7F-dfDll6-MXtgWtZMJcp0dVWMTeA7zUE~sYNuWPIL2OneP64x1e1qJLhH7dsVacJwzr4OJH2ZOvYuwEqF2Gfly7AaFKYIi87LBTw-pE61diyz~7fxWBan2yqb7aTW7a9Zwmmy2wulDfc7Amt8Opb4c3A5lfPb4Fs0bBOkYbZd2dUuaRt-s1ZaGiojByLEVNIeNfHIKTkJ2i8hq7ESJnaBf9nDwCtxA6QM6SWOmqDkzaI6dhlr-OCvJvYGWjncF1hrXOSajEpLzVCOrFtUYL6WMGksHqplX1zIxJpGp-tAHrpobtJ5C03K7xu0KivX7KnA__"
                  alt=""
                  className="w-full h-90 object-cover rounded-lg overflow-hidden"
                />
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="col-span-4"
            >
              <div className="flex justify-center items-center relative group/main overflow-hidden">
                <img
                  src="https://s3-alpha-sig.figma.com/img/9efe/c51a/84546c8c9128c609f1b2e01b00998ef7?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UcvQCKvWLTH2y99EN7Qv7F-dfDll6-MXtgWtZMJcp0dVWMTeA7zUE~sYNuWPIL2OneP64x1e1qJLhH7dsVacJwzr4OJH2ZOvYuwEqF2Gfly7AaFKYIi87LBTw-pE61diyz~7fxWBan2yqb7aTW7a9Zwmmy2wulDfc7Amt8Opb4c3A5lfPb4Fs0bBOkYbZd2dUuaRt-s1ZaGiojByLEVNIeNfHIKTkJ2i8hq7ESJnaBf9nDwCtxA6QM6SWOmqDkzaI6dhlr-OCvJvYGWjncF1hrXOSajEpLzVCOrFtUYL6WMGksHqplX1zIxJpGp-tAHrpobtJ5C03K7xu0KivX7KnA__"
                  alt=""
                  className="w-full h-90 object-cover rounded-lg overflow-hidden"
                />
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="col-span-4"
            >
              <div className="flex justify-center items-center relative group/main overflow-hidden">
                <img
                  src="https://s3-alpha-sig.figma.com/img/9efe/c51a/84546c8c9128c609f1b2e01b00998ef7?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UcvQCKvWLTH2y99EN7Qv7F-dfDll6-MXtgWtZMJcp0dVWMTeA7zUE~sYNuWPIL2OneP64x1e1qJLhH7dsVacJwzr4OJH2ZOvYuwEqF2Gfly7AaFKYIi87LBTw-pE61diyz~7fxWBan2yqb7aTW7a9Zwmmy2wulDfc7Amt8Opb4c3A5lfPb4Fs0bBOkYbZd2dUuaRt-s1ZaGiojByLEVNIeNfHIKTkJ2i8hq7ESJnaBf9nDwCtxA6QM6SWOmqDkzaI6dhlr-OCvJvYGWjncF1hrXOSajEpLzVCOrFtUYL6WMGksHqplX1zIxJpGp-tAHrpobtJ5C03K7xu0KivX7KnA__"
                  alt=""
                  className="w-full h-90 object-cover rounded-lg overflow-hidden"
                />
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="col-span-4"
            >
              <div className="flex justify-center items-center relative group/main overflow-hidden">
                <img
                  src="https://s3-alpha-sig.figma.com/img/9efe/c51a/84546c8c9128c609f1b2e01b00998ef7?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UcvQCKvWLTH2y99EN7Qv7F-dfDll6-MXtgWtZMJcp0dVWMTeA7zUE~sYNuWPIL2OneP64x1e1qJLhH7dsVacJwzr4OJH2ZOvYuwEqF2Gfly7AaFKYIi87LBTw-pE61diyz~7fxWBan2yqb7aTW7a9Zwmmy2wulDfc7Amt8Opb4c3A5lfPb4Fs0bBOkYbZd2dUuaRt-s1ZaGiojByLEVNIeNfHIKTkJ2i8hq7ESJnaBf9nDwCtxA6QM6SWOmqDkzaI6dhlr-OCvJvYGWjncF1hrXOSajEpLzVCOrFtUYL6WMGksHqplX1zIxJpGp-tAHrpobtJ5C03K7xu0KivX7KnA__"
                  alt=""
                  className="w-full h-90 object-cover rounded-lg overflow-hidden"
                />
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="col-span-4"
            >
              <div className="flex justify-center items-center relative group/main overflow-hidden">
                <img
                  src="https://s3-alpha-sig.figma.com/img/9efe/c51a/84546c8c9128c609f1b2e01b00998ef7?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UcvQCKvWLTH2y99EN7Qv7F-dfDll6-MXtgWtZMJcp0dVWMTeA7zUE~sYNuWPIL2OneP64x1e1qJLhH7dsVacJwzr4OJH2ZOvYuwEqF2Gfly7AaFKYIi87LBTw-pE61diyz~7fxWBan2yqb7aTW7a9Zwmmy2wulDfc7Amt8Opb4c3A5lfPb4Fs0bBOkYbZd2dUuaRt-s1ZaGiojByLEVNIeNfHIKTkJ2i8hq7ESJnaBf9nDwCtxA6QM6SWOmqDkzaI6dhlr-OCvJvYGWjncF1hrXOSajEpLzVCOrFtUYL6WMGksHqplX1zIxJpGp-tAHrpobtJ5C03K7xu0KivX7KnA__"
                  alt=""
                  className="w-full h-90 object-cover rounded-lg overflow-hidden"
                />
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="col-span-4"
            >
              <div className="flex justify-center items-center relative group/main overflow-hidden">
                <img
                  src="https://s3-alpha-sig.figma.com/img/9efe/c51a/84546c8c9128c609f1b2e01b00998ef7?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UcvQCKvWLTH2y99EN7Qv7F-dfDll6-MXtgWtZMJcp0dVWMTeA7zUE~sYNuWPIL2OneP64x1e1qJLhH7dsVacJwzr4OJH2ZOvYuwEqF2Gfly7AaFKYIi87LBTw-pE61diyz~7fxWBan2yqb7aTW7a9Zwmmy2wulDfc7Amt8Opb4c3A5lfPb4Fs0bBOkYbZd2dUuaRt-s1ZaGiojByLEVNIeNfHIKTkJ2i8hq7ESJnaBf9nDwCtxA6QM6SWOmqDkzaI6dhlr-OCvJvYGWjncF1hrXOSajEpLzVCOrFtUYL6WMGksHqplX1zIxJpGp-tAHrpobtJ5C03K7xu0KivX7KnA__"
                  alt=""
                  className="w-full h-90 object-cover rounded-lg overflow-hidden"
                />
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="col-span-4"
            >
              <div className="flex justify-center items-center relative group/main overflow-hidden">
                <img
                  src="https://s3-alpha-sig.figma.com/img/9efe/c51a/84546c8c9128c609f1b2e01b00998ef7?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UcvQCKvWLTH2y99EN7Qv7F-dfDll6-MXtgWtZMJcp0dVWMTeA7zUE~sYNuWPIL2OneP64x1e1qJLhH7dsVacJwzr4OJH2ZOvYuwEqF2Gfly7AaFKYIi87LBTw-pE61diyz~7fxWBan2yqb7aTW7a9Zwmmy2wulDfc7Amt8Opb4c3A5lfPb4Fs0bBOkYbZd2dUuaRt-s1ZaGiojByLEVNIeNfHIKTkJ2i8hq7ESJnaBf9nDwCtxA6QM6SWOmqDkzaI6dhlr-OCvJvYGWjncF1hrXOSajEpLzVCOrFtUYL6WMGksHqplX1zIxJpGp-tAHrpobtJ5C03K7xu0KivX7KnA__"
                  alt=""
                  className="w-full h-90 object-cover rounded-lg overflow-hidden"
                />
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="col-span-4"
            >
              <div className="flex justify-center items-center relative group/main overflow-hidden">
                <img
                  src="https://s3-alpha-sig.figma.com/img/9efe/c51a/84546c8c9128c609f1b2e01b00998ef7?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UcvQCKvWLTH2y99EN7Qv7F-dfDll6-MXtgWtZMJcp0dVWMTeA7zUE~sYNuWPIL2OneP64x1e1qJLhH7dsVacJwzr4OJH2ZOvYuwEqF2Gfly7AaFKYIi87LBTw-pE61diyz~7fxWBan2yqb7aTW7a9Zwmmy2wulDfc7Amt8Opb4c3A5lfPb4Fs0bBOkYbZd2dUuaRt-s1ZaGiojByLEVNIeNfHIKTkJ2i8hq7ESJnaBf9nDwCtxA6QM6SWOmqDkzaI6dhlr-OCvJvYGWjncF1hrXOSajEpLzVCOrFtUYL6WMGksHqplX1zIxJpGp-tAHrpobtJ5C03K7xu0KivX7KnA__"
                  alt=""
                  className="w-full h-90 object-cover rounded-lg overflow-hidden"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;
