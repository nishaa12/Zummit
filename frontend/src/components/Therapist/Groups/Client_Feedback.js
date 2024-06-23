import React from "react";

const Client_Feedback = ({toggleHandler}) => {
  return (
    <div className="w-[90%] p-5">
      <div className="flex gap-5 items-center">
        <svg
          width="14"
          height="14"
          viewBox="0 0 22 22"
          fill="none"
          onClick={toggleHandler}
          className="cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.6667 10.8333H3.33333M11.3333 1.5L2 10.8333L11.3333 20.1667"
            stroke="black"
            stroke-width="2.66667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <h1>Existing Client</h1>
        <h1>Substance Recovery</h1>
        <h1>Client Intake response</h1>
      </div>
      <div className="flex gap-5 p-5 w-[90%]">
        {/* left */}
        <div>
          <div className="flex gap-2 bg-white border border-[#B4F0FF] rounded-md px-4 py-2">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.1504 19.5C15.5687 19.5 19.1504 15.9183 19.1504 11.5C19.1504 7.08172 15.5687 3.5 11.1504 3.5C6.73211 3.5 3.15039 7.08172 3.15039 11.5C3.15039 15.9183 6.73211 19.5 11.1504 19.5Z"
                stroke="#787579"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21.1508 21.4999L16.8008 17.1499"
                stroke="#787579"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <input type="text" placeholder="search" />
          </div>
          <div className="flex flex-col gap-2 mt-2 p-2 shadow-md rounded-md bg-white">
            <p>R. Raghuwaran</p>
            <p>Age: 28</p>
            <p>Gender:Male</p>
            <p>Relation status: Single</p>
            <p>Education: Undergraduate</p>
            <p>Occupation: Lawyer</p>
            <p>Location: Hindupur</p>
            <p>Emergency contact: 9848687521</p>
            <div>
            <p>G.Shankher</p>
            <p>G.Shankher</p>
            <p>G.Shankher</p>
            <p>G.Shankher</p>
            </div>
          </div>
        </div>
        {/* right */}
        <div className="bg-[#B4F0FF] p-2 rounded-md shadow-md w-[60%]">
        
        </div>
      </div>
    </div>
  );
};

export default Client_Feedback;
