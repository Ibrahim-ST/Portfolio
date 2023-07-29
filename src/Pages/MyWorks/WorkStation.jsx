/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import workstation from "../../assets/workstation.png";
import ws1 from "../../assets/ws1.png";
import ws2 from "../../assets/ws2.png";
import ws3 from "../../assets/ws3.png";
import ws4 from "../../assets/ws4.png";
import Tech from "../../Components/Tech";
import PrimaryButton from "../../Components/PrimaryButton";


const WorkStation = () => {
    return (
        <>
      <div
        data-aos="zoom-out-up"
        className="my-5 card lg:card-side bg-base-100 shadow-xl"
      >
        <div className="sm:w-1/2  px-5">
          <figure data-aos="zoom-in-down">
            <img
              src={workstation}
              alt="Album"
              className="rounded py-2 w-64 h-64 object-top hover:object-bottom  duration-1000 transition-all"
            />
          </figure>
          <p
            data-aos="zoom-in-down"
            className="flex justify-center my-2 hover:cursor-pointer"
          >
            <a onClick={() => window.workStation_modal.showModal()}>
              <PrimaryButton btnText={"View gallery"}></PrimaryButton>
            </a>
          </p>
        </div>
        <div className="card-body ">
          <h2 data-aos="zoom-in-left" className="card-title ">
            Work Station 
          </h2>
          <p data-aos="zoom-in-left" className="sm:w-2/3">
          Work station is a website that provides information about career opportunities to various kinds of job seekers.
          </p>
          <div data-aos="zoom-in-left" className="flex gap-2 flex-wrap ">
            <a href="https://work-station-ibrahim.netlify.app/">
              <PrimaryButton btnText={"Live Preview"}></PrimaryButton>
            </a>
            <a href="https://github.com/Ibrahim-ST/Work-Station">
              <PrimaryButton btnText={"Client Side"}></PrimaryButton>
            </a> 
          </div>
          <div>
            <Tech
              first={"React"}
              second={"Javascript"}
              third={"Tailwind"}
              fourth={"HTML"}
              fifth={"CSS"}
            ></Tech>
          </div>
        </div>
      </div>

      {/* Work Station modal */}
      <dialog id="workStation_modal" className="modal">
        <form
          method="dialog"
          className="modal-box min-h-full w-11/12 sm:max-w-4xl "
        >
          <h3 className="font-bold text-lg text-center mb-2">
            Work Station!
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <img className="h-auto max-w-full rounded-xl" src={ws1} alt="" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src={ws2} alt="" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src={ws3} alt="" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src={ws4} alt="" />
            </div>
          </div>
          <div className="modal-action">
            <button className="btn">X</button>
          </div>
        </form>
      </dialog>
    </>
    );
};

export default WorkStation;

