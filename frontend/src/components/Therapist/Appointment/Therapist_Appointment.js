import React from "react";
import Therapist_SideBar from "../Therapist_SideBar";
import Appointment from "./Appointment";

const Therapist_Appointment = () => {
  return (
    <div className="flex bg-[#F2FCFF]">
      <Therapist_SideBar />
      <Appointment />
    </div>
  );
};

export default Therapist_Appointment;
