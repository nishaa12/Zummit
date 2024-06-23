import React from "react";

const Schedules = () => {
  const data = [
    {
      
    }
  ]
  return (
    <div className="p-5 w-[90%] ">
      {/* Header */}
      <div className="flex justify-between text-lg ">
        <div className="flex items-center gap-8">
          <h1 className="border px-4 py-2 text-[#00677F] cursor-pointer border-[#00677F] rounded-md font-medium">
            Today
          </h1>
          {/* icons */}
          <div className="flex gap-4">
            <svg
              width="12"
              height="19"
              viewBox="0 0 12 19"
              className="cursor-pointer"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 17.5L2 9.5L10 1.5"
                stroke="#121014"
                stroke-width="2.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <svg
              width="12"
              height="19"
              viewBox="0 0 12 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer"
            >
              <path
                d="M2 17.5L10 9.5L2 1.5"
                stroke="#121014"
                stroke-width="2.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <h1 className="text-[#00677F]">Feb 2024</h1>
          <h1 className="cursor-pointer">Group</h1>
          <h1 className="cursor-pointer">Individual</h1>
        </div>
        <div>
          <h1 className="text-white bg-[#00677F] p-2 rounded-md cursor-pointer">
            Customize Schedules
          </h1>
        </div>
      </div>
      {/* Schedules */}
      <div className="my-5">
        <div className="flex ">
          <div className=" w-[5rem] border-b "></div>
          <div className=" flex flex-col gap-2 rounded-md w-[8rem] font-semibold text-center p-2">
            <h1>MON</h1>
            <p>19 FEB 2024</p>
          </div>
          <div className=" flex flex-col gap-2 rounded-md w-[9rem] font-semibold text-center p-2">
            <h1>TUE</h1>
            <p>19 FEB 2024</p>
          </div>
          <div className=" flex flex-col gap-2 rounded-md w-[9rem] font-semibold text-center p-2">
            <h1>WED</h1>
            <p>19 FEB 2024</p>
          </div>
          <div className=" flex flex-col gap-2 rounded-md w-[9rem] font-semibold text-center p-2">
            <h1>THU</h1>
            <p>19 FEB 2024</p>
          </div>
          <div className=" flex flex-col gap-2 rounded-md w-[9rem] font-semibold text-center p-2">
            <h1>FRI</h1>
            <p>19 FEB 2024</p>
          </div>
          <div className=" flex flex-col gap-2 rounded-md w-[9rem] font-semibold text-center p-2">
            <h1>SAT</h1>
            <p>19 FEB 2024</p>
          </div>
          <div className=" flex flex-col gap-2 rounded-md w-[9rem] font-semibold text-center p-2">
            <h1>SUN</h1>
            <p>19 FEB 2024</p>
          </div>
        </div>
        <div className="flex font-medium ">
          <div className=" w-[5rem] border-b flex justify-center items-center">9:00 AM</div>
          <div className=" flex flex-col gap-2 rounded-md w-[8rem] font-semibold p-2"></div>
          <div className=" flex flex-col gap-2 rounded-md w-[9rem] font-semibold p-2"></div>
          <div className=" flex flex-col gap-2 rounded-md w-[9rem] font-semibold p-2"></div>
          <div className=" flex flex-col gap-2 rounded-md w-[9rem] font-semibold p-2"></div>
          <div className=" flex flex-col gap-2 rounded-md w-[9rem] font-semibold p-2"></div>
          <div className=" flex flex-col gap-2 rounded-md w-[9rem] font-semibold p-2"></div>
          <div className=" text-sm flex flex-col gap-2 rounded-md w-[9rem] font-semibold px-4 py-2 bg-[#B4F0FF]">
            <p>Imperdiet magna aliquet consequat dictum velit ac </p>
            <div className="flex gap-2">
              <button className="rounded-md bg-[#00677F] text-white px-2 py-1">
                Join
              </button>
              <button className="px-2 py-1 text-[#00677F] border border-[#00677F] rounded-md ">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedules;
