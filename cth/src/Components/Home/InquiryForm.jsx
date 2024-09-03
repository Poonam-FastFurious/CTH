import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function InquiryForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name, value) => {
    let errorMsg = "";

    switch (name) {
      case "firstName":
      case "lastName":
        if (!/^[a-zA-Z]+$/.test(value)) {
          errorMsg = `${
            name === "firstName" ? "First" : "Last"
          } Name must contain only letters`;
        }
        break;

      case "email":
        if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value)) {
          errorMsg = "Invalid email address";
        }
        break;

      default:
        break;
    }

    setFormErrors({
      ...formErrors,
      [name]: errorMsg,
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "contactNumber") {
      const onlyNums = value.replace(/[^0-9]/g, "");
      if (onlyNums.length > 10) return; // Prevent entering more than 10 digits
      setFormData({
        ...formData,
        [name]: onlyNums,
      });
    } else {
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
    }

    // Clear the error for the current field when it's updated
    setFormErrors({
      ...formErrors,
      [name]: "",
    });

    // Validate the field
    validateField(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(formErrors).some((error) => error !== "")) {
      alert("Please fix the errors in the form");
      return;
    }

    setIsSubmitting(true);

    const smtpParams = {
      host: "smtp.elasticemail.com",
      username: "cthdotcom@gmail.com",
      password: "0E28D8EEF9BE55FAD22DBBD66C6AE0624800",
      fromEmail: "cthdotcom@gmail.com",
      toEmail: "cthdotcom@gmail.com",
      ccEmail: "rahulkumarofficial36@gmail.com",
      subject: "New Contact Form Submission",
      body: `
        Name: ${formData.firstName} ${formData.lastName}
        Email: ${formData.email}
        Phone Number: ${formData.contactNumber}
        Message: ${formData.message}
      `,
    };

    window.Email.send({
      Host: smtpParams.host,
      Username: smtpParams.username,
      Password: smtpParams.password,
      To: smtpParams.toEmail,
      From: smtpParams.fromEmail,
      Subject: smtpParams.subject,
      Body: smtpParams.body,
      Cc: smtpParams.ccEmail,
    }).then(
      (message) => {
        console.log("Email send response:", message);
        toast.success("Email sent successfully", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        setFormData({
          firstName: "",
          lastName: "",
          contactNumber: "",
          email: "",
          message: "",
        });

        // Clear form errors
        setFormErrors({});

        setIsSubmitting(false);
      },
      (error) => {
        console.error("Error sending email:", error);
        toast.error("Error sending email");
        setIsSubmitting(false);
      }
    );
  };

  return (
    <>
      <section className="xl:py-[90px] " style={{ backgroundColor: "#FFFBF0" }}>
        <div className=" w-full mx-auto container ">
          <div className=" font-[sans-serif]  h-auto">
            <div className="grid lg:grid-cols-4 items-center max-lg:justify-center gap-6 h-full sm:p-12 p-8 max-sm:p-4">
              <div className="z-10 relative lg:col-span-2">
                <svg
                  width="auto"
                  height="541"
                  viewBox="0 0 665 541"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_518_346)">
                    <path
                      d="M135.517 251.409C135.517 251.409 155.111 256.201 162.33 271.35C169.55 286.498 197.546 296.177 197.546 296.177C197.546 296.177 201.171 321.792 197.546 321.351C193.92 320.91 144.329 307.731 137.629 299.125C130.93 290.518 135.501 251.409 135.501 251.409H135.517Z"
                      fill="#E4E0FF"
                    />
                    <path
                      d="M288.405 35.4669C288.405 35.4669 318.418 45.0668 359.655 44.783C376.963 44.6569 372.329 46.2963 374.252 55.2183C376.159 64.1561 352.704 73.0624 331.975 72.4161C311.246 71.7856 286.056 70.3511 282.226 62.6901C278.395 55.0292 288.405 35.4512 288.405 35.4512V35.4669Z"
                      fill="#775732"
                    />
                    <path
                      d="M231.815 106.985C231.815 106.985 203.835 61.3345 214.113 52.6647C232.319 37.2955 277.67 29.1143 290.581 36.4443C294.521 38.6827 292.409 55.0134 291.211 58.6705C274.392 110.264 317.615 110.343 282.226 114.473C246.837 118.618 231.815 106.985 231.815 106.985Z"
                      fill="#775732"
                    />
                    <path
                      d="M243.165 23.3135L235.582 41.2206C235.582 41.2206 240.122 47.9357 247.2 45.7289C254.278 43.522 256.201 37.6581 256.201 37.6581L243.165 23.3135Z"
                      fill="#FFC09C"
                    />
                    <path
                      d="M243.842 24.1962C243.842 24.1962 242.455 24.1332 242.077 23.3765C241.714 22.6041 243.59 14.7698 244.331 14.423C245.088 14.0762 246.538 14.155 247.121 15.4318C247.72 16.6929 243.827 24.1962 243.827 24.1962H243.842Z"
                      fill="#FFD8BC"
                    />
                    <path
                      d="M273.477 15.2738C273.477 15.2738 273.777 20.4599 272.863 23.3761C271.964 26.2923 267.834 27.3485 264.729 35.7188C264.098 37.4212 257.21 43.695 254.278 43.5374C250.1 43.3009 246.475 41.362 245.403 40.4005C244.331 39.4389 241.352 37.6104 242.755 25.1258C243.196 21.2165 251.188 2.50551 252.717 2.15872C254.246 1.81193 274.124 5.73699 273.462 15.2895L273.477 15.2738Z"
                      fill="#FFD8BC"
                    />
                    <path
                      d="M252.717 2.14374C252.717 2.14374 250.983 0.83539 248.398 4.58705C246.632 7.15647 245.198 17.6706 245.119 18.4115C245.04 19.1681 244.804 20.6341 244.804 20.6341C244.804 20.6341 246.238 19.9878 247.027 19.042C247.815 18.0962 248.918 11.7909 252.307 8.8589C255.696 5.92693 257.998 4.98113 256.374 3.16836C254.751 1.35558 252.717 2.14374 252.717 2.14374Z"
                      fill="#775732"
                    />
                    <path
                      d="M270.861 4.60244C266.242 0.0626149 258.66 -0.504864 255.476 0.299064C252.292 1.10299 251.645 4.35023 251.645 4.35023L254.483 6.09995C253.222 6.82507 252.528 7.77086 252.323 8.84277C250.006 21.3115 264.54 25.9459 272.563 26.072C277.718 26.1509 278.679 21.7529 278.679 21.7529C278.679 21.7529 275.495 9.15803 270.861 4.60244Z"
                      fill="#775732"
                    />
                    <path
                      d="M247.2 14.659C247.2 14.659 252.559 15.5103 255.05 12.1054C257.541 8.68475 252.244 6.19415 251.645 6.46212C251.046 6.7301 247.2 14.6748 247.2 14.6748V14.659Z"
                      fill="#775732"
                    />
                    <path
                      d="M27.6331 513.615H664.47C664.47 513.615 659.158 477.155 626.055 478.731C592.952 480.307 608.053 439.78 566.359 401.302C535.621 372.928 469.778 372.392 431.662 409.64C393.546 446.889 215.059 398.543 163.134 426.917C111.194 455.291 131.687 482.089 93.8546 477.36C56.0227 472.631 30.8015 494.731 27.6488 513.631L27.6331 513.615Z"
                      fill="#B08D57"
                    />
                    <path
                      d="M359.655 44.7839V49.4183C359.655 49.4183 364.29 54.2103 366.56 54.6832C368.83 55.1561 374.725 55.2349 374.725 55.2349C374.725 55.2349 375.671 52.965 373.779 52.4133C371.903 51.8616 368.751 50.7109 368.751 50.7109L368.12 49.4183H386.09C386.09 49.4183 386.09 48.0942 385.145 47.7001C384.199 47.306 376.27 44.8785 375.103 44.7208C373.937 44.5632 359.64 44.7839 359.64 44.7839H359.655Z"
                      fill="#FFD8BC"
                    />
                    <path
                      d="M136.116 540.807C181.012 540.807 217.407 536.121 217.407 530.34C217.407 524.559 181.012 519.873 136.116 519.873C91.2201 519.873 54.8247 524.559 54.8247 530.34C54.8247 536.121 91.2201 540.807 136.116 540.807Z"
                      fill="#E4E0FF"
                    />
                    <path
                      d="M540.87 540.807C585.766 540.807 622.161 536.121 622.161 530.34C622.161 524.559 585.766 519.873 540.87 519.873C495.974 519.873 459.579 524.559 459.579 530.34C459.579 536.121 495.974 540.807 540.87 540.807Z"
                      fill="#E4E0FF"
                    />
                    <path
                      d="M499.712 510.463V86.5091C499.712 84.7679 498.301 83.3564 496.559 83.3564L183.91 83.3564C182.169 83.3564 180.758 84.7679 180.758 86.5091V510.463C180.758 512.204 182.169 513.615 183.91 513.615H496.559C498.301 513.615 499.712 512.204 499.712 510.463Z"
                      fill="#CA9352"
                    />
                    <path
                      d="M483.917 497.804V102.887L200.304 102.887V497.804H483.917Z"
                      fill="#775732"
                    />
                    <path
                      d="M480.197 494.1V102.887L200.304 102.887V494.1H480.197Z"
                      fill="white"
                    />
                    <path
                      d="M396.116 83.3562L395.596 80.7237L395.343 79.4784L394.524 75.3327L390.851 56.8266C389.937 52.2079 387.477 49.1025 384.719 49.1025H295.782C293.024 49.1025 290.565 52.2079 289.635 56.8266L285.962 75.3327L285.142 79.4784L284.89 80.7237L284.37 83.3562L283.03 90.1186H397.471L396.116 83.3562ZM340.235 70.5249C337.492 70.5249 335.254 68.3022 335.254 65.5437C335.254 62.7851 337.492 60.5467 340.235 60.5467C342.978 60.5467 345.232 62.7851 345.232 65.5437C345.232 68.3022 342.993 70.5249 340.235 70.5249Z"
                      fill="#CA9352"
                    />
                    <path
                      d="M396.116 83.3563H284.37L284.89 80.7238L285.142 79.4785H395.343L395.596 80.7238L396.116 83.3563Z"
                      fill="#775732"
                    />
                    <path
                      d="M393.531 217.438H230.633V244.725H393.531V217.438Z"
                      fill="#A3896B"
                    />
                    <path
                      d="M445.376 217.438H417.916V244.898H445.376V217.438Z"
                      fill="#E4E0FF"
                    />
                    <path
                      d="M393.531 284.827H230.633V312.113H393.531V284.827Z"
                      fill="#A3896B"
                    />
                    <path
                      d="M445.376 284.827H417.916V312.287H445.376V284.827Z"
                      fill="#E4E0FF"
                    />
                    <path
                      d="M393.531 352.215H230.633V379.501H393.531V352.215Z"
                      fill="#A3896B"
                    />
                    <path
                      d="M445.376 352.215H417.916V379.674H445.376V352.215Z"
                      fill="#E4E0FF"
                    />
                    <path
                      d="M393.531 419.603H230.633V446.889H393.531V419.603Z"
                      fill="#A3896B"
                    />
                    <path
                      d="M445.376 419.603H417.916V447.062H445.376V419.603Z"
                      fill="#E4E0FF"
                    />
                    <path
                      d="M396.19 121.873L236.258 152.815L241.441 179.605L401.373 148.662L396.19 121.873Z"
                      fill="#E4E0FF"
                    />
                    <path
                      d="M231.515 53.9267C228.631 48.3307 216.209 46.644 210.456 57.2054C198.192 79.7154 206.751 107.821 213.435 121.929C222.105 140.199 265.801 150.729 265.801 150.729C265.801 150.729 270.262 135.108 269.946 133.831C269.631 132.554 232.95 120.858 236.97 82.6001C238.341 69.6111 234.81 60.3108 231.515 53.9267Z"
                      fill="#775732"
                    />
                    <path
                      d="M266.699 147.529C266.699 147.529 269.789 149.626 273.777 150.729C277.765 151.848 286.529 149.358 286.86 148.617C287.176 147.86 286.64 137.236 285.079 136.495C283.519 135.754 269.962 133.831 269.962 133.831L266.715 147.529H266.699Z"
                      fill="#FFD8BC"
                    />
                    <path
                      d="M584.755 456.332H496.985C494.384 456.332 492.272 454.204 492.272 451.618C492.272 449.018 494.4 446.905 496.985 446.905H584.755C587.356 446.905 589.468 449.033 589.468 451.618C589.468 454.219 587.34 456.332 584.755 456.332Z"
                      fill="#FFBB00"
                    />
                    <path
                      d="M515.901 456.332H506.837V526.211H515.901V456.332Z"
                      fill="#4A3D6D"
                    />
                    <path
                      d="M575.407 456.332H566.344V526.211H575.407V456.332Z"
                      fill="#4A3D6D"
                    />
                    <path
                      d="M61.8079 329.389C61.8079 329.389 68.5073 335.915 74.0402 336.262C79.5731 336.593 84.7592 331.801 84.7592 331.801L76.5465 324.865L61.8079 329.389Z"
                      fill="#FFBF9D"
                    />
                    <path
                      d="M159.146 517.73C157.097 517.572 156.671 519.274 150.461 517.335C150.35 517.32 150.24 517.288 150.145 517.241C150.145 517.241 133.263 429.676 122.008 388.534C117.61 434.846 111.352 517.241 111.352 517.241C111.242 517.288 111.147 517.32 111.037 517.335C104.826 519.259 104.385 517.572 102.335 517.73C101.342 517.808 89.9296 425.388 95.2733 363.754L148.002 361.547C156.451 423.134 160.202 517.793 159.146 517.73Z"
                      fill="#775732"
                    />
                    <path
                      d="M150.271 515.112C150.271 515.112 149.988 522.726 150.681 525.154C151.375 527.565 156.971 527.912 158.531 528.59C160.092 529.268 163.513 530.939 171.741 531.916C174.058 532.184 174.374 530.529 171.583 529.094C162.315 524.365 159.335 516.358 159.335 516.358L150.287 515.112H150.271Z"
                      fill="#321707"
                    />
                    <path
                      d="M111.336 515.112C111.336 515.112 111.62 522.726 110.926 525.154C110.233 527.565 104.637 527.912 103.076 528.59C101.516 529.268 98.095 530.939 89.8665 531.916C87.5493 532.184 87.2341 530.529 90.0242 529.094C99.293 524.365 102.272 516.358 102.272 516.358L111.32 515.112H111.336Z"
                      fill="#321707"
                    />
                    <path
                      d="M153.645 359.34C153.534 361.295 151.911 362.414 150.019 362.966C143.225 364.983 123.253 366.733 108.956 366.985C100.144 367.143 93.4921 366.749 93.366 365.504C92.5936 357.433 91.6478 349.078 90.6389 340.771C85.6892 300.039 78.8007 259.653 82.4105 257.62C98.2683 248.682 118.146 249.659 135.501 251.409C142.358 252.103 150.571 271.349 150.13 290.88C149.562 315.502 154.354 345.201 153.613 359.34H153.645Z"
                      fill="#E4E0FF"
                    />
                    <path
                      d="M108.12 234.983C108.12 234.983 106.702 235.346 106.103 234.699C105.504 234.037 104.984 225.588 105.646 225.021C106.292 224.453 107.774 224.091 108.767 225.178C109.76 226.266 108.136 234.999 108.136 234.999L108.12 234.983Z"
                      fill="#FFD8BC"
                    />
                    <path
                      d="M114.3 258.029C112.376 257.43 110.895 256.106 109.996 255.144C109.397 254.498 109.113 253.631 109.208 252.748L110.8 238.483L128.581 237.348L128.881 253.284C126.359 258.281 119.202 259.558 114.3 258.029Z"
                      fill="#FFC09C"
                    />
                    <path
                      d="M135.17 216.95C135.17 216.95 137.219 219.725 135.281 224.926C132.238 233.045 134.745 231.169 132.632 240.154C132.191 242.014 128.439 249.076 125.192 250.92C121.377 253.095 116.002 251.393 114.631 250.747C113.259 250.116 109.713 249.186 107.317 236.197C106.56 232.13 108.877 210.881 110.312 210.077C111.746 209.258 132.932 207.13 135.17 216.934V216.95Z"
                      fill="#FFD8BC"
                    />
                    <path
                      d="M110.312 210.093C110.312 210.093 108.483 209.936 108.183 213.183C107.884 216.446 107.506 227.985 107.648 228.757C107.789 229.545 107.726 231.169 107.726 231.169C107.726 231.169 108.735 231.169 109.255 229.987C109.776 228.804 109.445 220.923 111.967 216.95C114.473 212.978 116.491 211.307 114.315 209.983C112.14 208.659 110.327 210.077 110.327 210.077L110.312 210.093Z"
                      fill="#775732"
                    />
                    <path
                      d="M11.9643 306.061L23.172 274.439L173.554 328.35L162.346 359.971L11.9643 306.061Z"
                      fill="#A3896B"
                    />
                    <path
                      d="M15.1328 297.107L19.9878 283.393L170.385 337.303L165.515 351.017L15.1328 297.107Z"
                      fill="#775732"
                    />
                    <path
                      d="M162.346 359.971L173.554 328.35L192.706 344.05L200.793 350.67L211.859 359.734L197.561 359.797L187.11 359.86L162.346 359.971Z"
                      fill="#FFBF9D"
                    />
                    <path
                      d="M197.561 359.797L200.793 350.67L211.859 359.734L197.561 359.797Z"
                      fill="#775732"
                    />
                    <path
                      d="M17.7337 308.109L6.08461 303.979C1.33986 302.292 -1.15074 297.075 0.535936 292.314L6.22648 276.283C6.27377 276.141 6.33683 275.999 6.39988 275.857C7.91316 272.279 11.9801 270.466 15.6845 271.79L28.9572 276.504L20.9179 299.14L17.7337 308.125V308.109Z"
                      fill="#E4E0FF"
                    />
                    <path
                      d="M20.9179 299.124L9.28457 294.994C4.53981 293.308 2.04921 288.09 3.73589 283.33L6.39988 275.826C7.91316 272.248 11.9801 270.435 15.6845 271.759L28.9572 276.472L20.9179 299.109V299.124Z"
                      fill="#EFEDFF"
                    />
                    <path
                      d="M82.4262 257.619C82.4262 257.619 37.2959 291.447 37.6585 300.905C38.021 310.363 45.4298 323.73 57.4572 330.792C57.4572 330.792 66.2689 334.481 72.3062 327.687C72.3062 327.687 62.2335 308.929 63.8256 307.337C66.9467 304.215 95.494 291.29 95.494 291.29C95.494 291.29 105.393 258.486 82.4262 257.619Z"
                      fill="#E4E0FF"
                    />
                    <path
                      d="M110.643 215.137C110.643 215.137 111.084 224.374 118.13 220.922C120.321 219.85 122.985 220.512 124.388 222.514C127.147 226.455 128.991 228.615 132.68 226.03C136.368 223.429 135.076 229.482 139.805 227.165C142.815 225.683 142.138 222.593 140.293 220.717C139.773 220.181 139.537 219.425 139.584 218.684C139.789 215.783 139.615 209.021 133.688 207.933C132.806 207.776 132.018 207.823 131.308 207.965C129.622 208.312 127.888 207.744 126.879 206.341C125.003 203.756 121.283 200.651 114.757 202.369C100.207 206.199 106.229 222.956 107.648 228.772C108.593 232.682 110.658 215.137 110.658 215.137H110.643Z"
                      fill="#775732"
                    />
                    <path
                      d="M529.379 184.856C529.379 184.856 522.837 201.281 529.725 208.028C536.614 214.774 548.862 206.294 549.902 205.253C550.943 204.213 529.379 184.84 529.379 184.84V184.856Z"
                      fill="#FFD8BC"
                    />
                    <path
                      d="M528.985 302.939C528.985 302.939 504.851 297.217 505.482 303.806C511.692 368.562 519.101 446.543 519.873 447.063C522.695 448.97 525.501 446.243 525.595 446.212C525.595 446.212 535.7 320.972 529 302.939H528.985Z"
                      fill="#FFBF9D"
                    />
                    <path
                      d="M562.623 306.486C562.623 306.486 539.688 297.028 539.278 303.633C535.18 368.562 530.183 446.732 530.86 447.363C533.335 449.695 536.535 447.441 536.646 447.426C536.646 447.426 566.407 325.355 562.639 306.486H562.623Z"
                      fill="#FFBF9D"
                    />
                    <path
                      d="M559.786 219.772C555.893 217.959 550.911 216.036 544.89 214.491C545.552 214.066 527.471 215.232 529.095 214.87C522.285 216.651 517.304 218.889 513.489 220.907C511.314 222.058 516.39 224.391 516.689 226.834L527.992 277.56L510.069 292.724C510.069 294.853 513.552 296.602 516.295 296.586L529.016 296.555C533.587 296.177 535.92 294.317 536.772 292.504C537.938 293.954 540.176 295.231 543.912 295.53H556.633C559.376 295.53 557.721 301.347 557.721 299.219L548.121 277.198L560.621 228.647C561.173 225.258 562.907 221.222 559.786 219.772Z"
                      fill="#A3896B"
                    />
                    <path
                      d="M520.725 239.287C520.725 239.287 505.45 280.224 471.795 356.834C471.795 356.834 512.717 392.475 590.319 367.758C590.319 367.758 580.042 298.037 552.472 263.547L520.709 239.287H520.725Z"
                      fill="#A3896B"
                    />
                    <path
                      d="M460.194 189.759C456.505 182.902 442.208 184.163 442.208 183.012C442.208 181.861 442.444 180.71 443.815 180.474C445.203 180.238 466.184 179.544 466.877 180.474C467.571 181.404 469.037 186.291 469.037 186.291C469.037 186.291 461.313 191.855 460.194 189.759Z"
                      fill="#FFD8BC"
                    />
                    <path
                      d="M541.075 170.448C541.075 170.448 521.765 173.554 530.057 193.62C538.726 214.554 537.765 218.432 532.657 236.686C528.464 251.677 526.51 269.079 542.51 274.912C558.651 280.791 589.327 265.044 581.934 237.332C577.11 219.22 573.878 223.035 570.19 207.429C567.747 197.104 569.67 189.459 564.736 180.71C560.196 172.671 552.724 168.368 541.091 170.448H541.075Z"
                      fill="#4A3D6D"
                    />
                    <path
                      d="M519.085 441.861C519.085 441.861 504.993 444.509 504.646 445.786L504.299 447.063H527.188C527.188 447.063 527.771 446.353 527.188 443.705C526.604 441.057 526.258 440.474 525.8 440.474C525.343 440.474 519.085 441.845 519.085 441.845V441.861Z"
                      fill="#383266"
                    />
                    <path
                      d="M532.027 441.861C532.027 441.861 517.935 444.509 517.588 445.786L517.241 447.063H540.129C540.129 447.063 540.712 446.353 540.129 443.705C539.546 441.057 539.199 440.474 538.742 440.474C538.285 440.474 532.027 441.845 532.027 441.845V441.861Z"
                      fill="#383266"
                    />
                    <path
                      d="M520.725 239.286C520.725 239.286 479.835 235.141 475.547 230.632C471.259 226.14 459.153 189.695 460.194 189.758C461.234 189.821 470.96 184.966 471.795 185.66C472.647 186.353 485.1 218.179 489.939 218.873C494.778 219.566 527.992 215.169 527.992 215.169L520.725 239.286Z"
                      fill="#A3896B"
                    />
                    <path
                      d="M467.965 152.163H440.505V179.623H467.965V152.163Z"
                      fill="#E4E0FF"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_518_346">
                      <rect width="664.47" height="540.807" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="border lg:col-span-2 border-purple/10  rounded-[10px] p-4 md:p-[50px]">
                <h1 className="text-[30px] tracking-normal font-bold text-main-black pb-6 poppins-font">
                  Query Form
                </h1>
                <form
                  className="mt-8 grid sm:grid-cols-2 gap-6"
                  onSubmit={handleSubmit}
                >
                  <div>
                    <label className="text-gray-800 text-sm block mb-2 poppins-font">
                      First Name
                    </label>
                    <input
                      required
                      type="text"
                      name="firstName"
                      placeholder="Enter Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-[#007bff]"
                    />
                    {formErrors.firstName && (
                      <p className="text-red-600 text-sm">
                        {formErrors.firstName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="text-gray-800 text-sm block mb-2 poppins-font">
                      Last Name
                    </label>
                    <input
                      required
                      type="text"
                      name="lastName"
                      placeholder="Enter Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-[#007bff]"
                    />
                    {formErrors.lastName && (
                      <p className="text-red-600 text-sm">
                        {formErrors.lastName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="text-gray-800 text-sm block mb-2 poppins-font">
                      Mobile Number
                    </label>
                    <input
                      required
                      type="text"
                      name="contactNumber"
                      placeholder="Phone No."
                      value={formData.contactNumber}
                      onChange={handleChange}
                      className="w-full rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-[#007bff]"
                    />
                    {formErrors.contactNumber && (
                      <p className="text-red-600 text-sm">
                        {formErrors.contactNumber}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="text-gray-800 text-sm block mb-2 poppins-font">
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-[#007bff]"
                    />
                    {formErrors.email && (
                      <p className="text-red-600 text-sm">{formErrors.email}</p>
                    )}
                  </div>

                  <div className="col-span-full">
                    <label className="text-gray-800 text-sm block mb-2 poppins-font">
                      Message*
                    </label>
                    <textarea
                      required
                      name="message"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      className="w-full rounded-md px-4 border border-gray-300 text-sm pt-3 outline-[#007bff]"
                    ></textarea>
                  </div>
                  <div className="flex items-center col-span-full">
                    <input
                      id="checkbox1"
                      type="checkbox"
                      className="w-4 h-4 mr-3 shrink-0"
                    />
                    <label
                      htmlFor="checkbox1"
                      className="text-sm text-gray-500 poppins-font"
                    >
                      I agree to the
                      <Link to="#" className="underline">
                        Terms and Conditions
                      </Link>
                      and
                      <Link to="#" className="underline">
                        Privacy Policy
                      </Link>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="text-white w-max bg-[#B08D57] hover:bg-buisness-red tracking-wide rounded-md text-sm px-6 py-3 mt-4 poppins-font"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default InquiryForm;
