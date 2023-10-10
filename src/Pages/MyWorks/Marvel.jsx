/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import marvel from "../../assets/marvel.png";
import mp1 from "../../assets/mp1.png";
import mp2 from "../../assets/mp2.png";
import mp3 from "../../assets/mp3.png"; 
import Tech from "../../Components/Tech";
import PrimaryButton from "../../Components/PrimaryButton";


const Marvel = () => {
    return (
        <>
      <div
        data-aos="zoom-out-up"
        className="my-5 card lg:card-side bg-base-100 shadow-xl"
      >
        <div className="sm:w-1/2  px-5">
          <figure data-aos="zoom-in-down">
            <img
              src={marvel}
              alt="Album"
              className="rounded py-2 w-64 h-64 object-top hover:object-bottom  duration-1000 transition-all"
            />
          </figure>
          <p
            data-aos="zoom-in-down"
            className="flex justify-center my-2 hover:cursor-pointer"
          >
            <a onClick={() => window.Marvel_production_modal.showModal()}>
              <PrimaryButton btnText={"View gallery"}></PrimaryButton>
            </a>
          </p>
        </div>
        <div className="card-body ">
          <h2 data-aos="zoom-in-left" className="card-title ">
            Marvel Production
          </h2>
          <p data-aos="zoom-in-left" className="sm:w-2/3">
          Marvel Production is a captivating movie collection website that houses an extensive library of thrilling and action-packed films from the renowned Marvel Universe.  
          </p>
          <div data-aos="zoom-in-left" className="flex gap-2 flex-wrap ">
            <a href="https://marvel-production.netlify.app/">
              <PrimaryButton btnText={"Live Preview"}></PrimaryButton>
            </a>
            <a href="https://github.com/Ibrahim-ST/marvel-production">
              <PrimaryButton btnText={"Client Side"}></PrimaryButton>
            </a> 
          </div>
          <div>
            <Tech               
              first={"Tailwind"}
              third={"HTML"}
              fifth={"CSS"}
            ></Tech>
          </div>
        </div>
      </div>

      {/* Marvel production modal */}
      <dialog id="Marvel_production_modal" className="modal">
        <form
          method="dialog"
          className="modal-box min-h-full w-11/12 sm:max-w-4xl "
        >
          <h3 className="font-bold text-lg text-center mb-2">
          Marvel Production!
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <img className="h-auto max-w-full rounded-xl" src={mp1} alt="" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src={mp2} alt="" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src={mp3} alt="" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src={mp1} alt="" />
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

export default Marvel;

