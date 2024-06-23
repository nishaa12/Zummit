import React, { useState } from "react";
import profile_img from "../../images/Therapist-Profile-img.png";
const Proflie = () => {
  const profile = {
    name: "Ragini Meyer",
    email: "ragini.meyer@gmail.com",
    phone: "09874656123",
    dateofBirth: "5 May 2024",
    address: "Tortor fames amet lectus morbi aliquam.",
  };

  const [toggleAbout, setToggleAbout] = useState(true);
  const [togglePassword, setTogglePassword] = useState(false);
  const [toggleExpertise, setToggleExpertise] = useState(false);

  const handleToggleAbout = () => {
    setToggleAbout(true);
    setTogglePassword(false);
    setToggleExpertise(false);
  };
  const handleTogglePassword = () => {
    setTogglePassword(true);
    setToggleAbout(false);
    setToggleExpertise(false);
  };
  const handleToggleExpertise = () => {
    setToggleExpertise(true);
    setTogglePassword(false);
    setToggleAbout(false);
  };
  return (
    <div className="w-full m-10 ">
      <div className="flex w-[90%] justify-between items-center">
        <h1 className="text-2xl ">Profile</h1>
        <div className="p-2 rounded-full ">
          <svg
            width="45"
            height="45"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="48" height="48" rx="24" fill="white" />
            <path
              d="M26.306 36.0003C26.0716 36.4044 25.7351 36.7399 25.3303 36.973C24.9255 37.2062 24.4665 37.3289 23.9993 37.3289C23.5322 37.3289 23.0732 37.2062 22.6684 36.973C22.2636 36.7399 21.9271 36.4044 21.6927 36.0003M37.3327 30.667H10.666C11.7269 30.667 12.7443 30.2456 13.4944 29.4954C14.2446 28.7453 14.666 27.7279 14.666 26.667V20.0003C14.666 17.525 15.6493 15.151 17.3997 13.4007C19.15 11.6503 21.524 10.667 23.9993 10.667C26.4747 10.667 28.8487 11.6503 30.599 13.4007C32.3494 15.151 33.3327 17.525 33.3327 20.0003V26.667C33.3327 27.7279 33.7541 28.7453 34.5043 29.4954C35.2544 30.2456 36.2718 30.667 37.3327 30.667Z"
              stroke="#0190B1"
              stroke-width="2.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <rect x="29" y="8" width="8" height="8" rx="4" fill="#B00202" />
          </svg>
        </div>
      </div>
      <div className="w-[90%] text-lg mb-4 rounded-md bg-white px-10 py-3">
        <div className="flex items-end gap-8">
          <img className="h-36" src={profile_img} alt="" />
          <div>
            <h1>Dr. Jordan Patel</h1>
            <h1>Therapist</h1>
            <h1>Dr.JordanPatel@gmail.com</h1>
          </div>
        </div>
        <div className="flex mt-10 gap-10 items-center">
          <button
            onClick={handleToggleAbout}
            className={`px-4 py-2 rounded-md ${
              toggleAbout ? "text-white bg-[#00677F]" : "text-black bg-white"
            }`}
          >
            About
          </button>
          <button
            onClick={handleTogglePassword}
            className={`px-4 py-2 rounded-md ${
              togglePassword ? "text-white bg-[#00677F]" : "text-black bg-white"
            }`}
          >
            Password
          </button>
          <button
            onClick={handleToggleExpertise}
            className={`px-4 py-2 rounded-md ${
              toggleExpertise ? "text-white bg-[#00677F]" : "text-black bg-white"
            }`}
          >
            Expertise
          </button>
        </div>
      </div>
      <div className="p-4 w-[90%] rounded-md bg-white ">
        {toggleAbout ? (
            <>
            <div className="flex mb-2 justify-end items-center">
              <button className="px-2 rounded-md text-white text-lg  bg-[#00677F]">
                Edit
              </button>
            </div>
            <div className="bg-[#ffffff] text-sm flex  justify-between rounded-lg w-full p-2 ">
              <div className="flex flex-col gap-5 w-full">
                <div className="flex gap-20">
                  <h1 className="w-[20%]">Name</h1>
                  <input
                    className="p-1 w-[80%] rounded-md outline-none border bg-[#FBFCFD]"
                    type="text"
                    value={profile.name}
                  />
                </div>
                <div className="flex gap-20">
                  <h1 className="w-[20%]">Email</h1>
                  <input
                    className="p-1 w-[80%] rounded-md outline-none border bg-[#FBFCFD]"
                    type="text"
                    value={profile.email}
                  />
                </div>
                <div className="flex gap-20">
                  <h1 className="w-[20%]">Mobile</h1>
                  <input
                    className="p-1 w-[80%] rounded-md outline-none border bg-[#FBFCFD]"
                    type="text"
                    value={profile.phone}
                  />
                </div>
                <div className="flex gap-20">
                  <h1 className="w-[20%]">Date of birth</h1>
                  <input
                    className="p-1 w-[80%] rounded-md outline-none border bg-[#FBFCFD]"
                    type="text"
                    value={profile.dateofBirth}
                  />
                </div>
                <div className="flex gap-20">
                  <h1 className="w-[20%]">Address</h1>
                  <input
                    className="p-1 w-[80%] rounded-md outline-none border bg-[#FBFCFD]"
                    type="text"
                    value={profile.address}
                  />
                </div>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
        {togglePassword ? (
         <>
         {" "}
         <div className="flex mb-2 justify-end items-center">
           <button className="px-2 rounded-md text-white text-lg  bg-[#00677F]">
             save
           </button>
         </div>
         <div className="bg-[#ffffff] text-sm flex  justify-between rounded-lg w-full p-2 ">
           <div className="flex flex-col gap-5 w-full">
             <div className="flex gap-20">
               <h1 className="w-[20%]">Current Passowrd</h1>
               <input
                 className="p-1 w-[80%] rounded-md outline-none border bg-[#FBFCFD]"
                 type="Password"
                 value={profile.name}
               />
             </div>
             <div className="flex gap-20">
               <h1 className="w-[20%]">New Password</h1>
               <input
                 className="p-1 w-[80%] rounded-md outline-none border bg-[#FBFCFD]"
                 type="password"
                 value={profile.email}
               />
             </div>
             <div className="flex gap-20">
               <h1 className="w-[20%]">Retype Password</h1>
               <input
                 className="p-1 w-[80%] rounded-md outline-none border bg-[#FBFCFD]"
                 type="password"
                 value={profile.phone}
               />
             </div>
           </div>
         </div>
       </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Proflie;
