import React from "react";
import admin_lady from "../../images/admin_lady.png";
import BellIcon from "../../images/SVG_files/BellIcon.svg"
const Proflie = () => {
  const profile = {
    name: "Ragini Meyer",
    email: "ragini.meyer@gmail.com",
    phone: "09874656123",
    dateofBirth: "5 May 2024",
    address: "Tortor fames amet lectus morbi aliquam.",
  };
  return (
    <div className="w-full m-10 ">
      <div className="flex w-[90%] justify-between items-center my-2">
        <div className="flex w-[90%] justify-between items-center">
          <h1 className="text-2xl ">Profile</h1>
          <div className="p-2 rounded-full ">
            <img src={BellIcon} alt=" BellIcon " />
          </div>
        </div>
        <button className="bg-[#0190B1] px-4 py-2 rounded-md text-white">Logout</button>
      </div>
      <div className="w-[90%] text-lg mb-4 rounded-md bg-white px-10 py-3">
        <div className="flex items-end gap-8">
          <img className="h-36" src={admin_lady} alt="" />
          <div>
            <h1>{profile.name}</h1>
            <h1>Admin</h1>
            <h1>{profile.email}</h1>
          </div>
        </div>
        <div className="flex mt-10 gap-10 items-center">
          <button className="px-4 py-2 rounded-md text-white bg-[#00677F]">About</button>
          <h1>Password</h1>
        </div>
      </div>
      <div className="p-4 w-[90%] rounded-md bg-white ">
        <div className="flex mb-2 justify-end items-center">
          <button className="px-2 rounded-md text-white text-lg  bg-[#00677F]">Edit</button>
        </div>
        <div className="bg-[#ffffff] text-sm flex flex-col gap-5  justify-between rounded-lg w-full p-2 ">
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
    </div>
  );
};

export default Proflie;
