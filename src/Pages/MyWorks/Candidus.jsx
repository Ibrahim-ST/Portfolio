
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import candidus from "../../assets/candidus.png";
import cd1 from "../../assets/cd1.png";
import cd2 from "../../assets/cd2.png";
import cd3 from "../../assets/cd3.png"; 
import cd4 from "../../assets/cd4.png"; 
import Tech from "../../Components/Tech";
import PrimaryButton from "../../Components/PrimaryButton";


const Candidus = () => {
    return (
        <>
      <div
        data-aos="zoom-out-up"
        className="my-5 card lg:card-side bg-base-100 shadow-xl"
      >
        <div className="sm:w-1/2  px-5">
          <figure data-aos="zoom-in-down">
            <img
              src={candidus}
              alt="Album"
              className="rounded py-2 w-64 h-64 object-top hover:object-bottom  duration-1000 transition-all"
            />
          </figure>
          <p
            data-aos="zoom-in-down"
            className="flex justify-center my-2 hover:cursor-pointer"
          >
            <a onClick={() => window.candidus_modal.showModal()}>
              <PrimaryButton btnText={"View gallery"}></PrimaryButton>
            </a>
          </p>
        </div>
        <div className="card-body ">
          <h2 data-aos="zoom-in-left" className="card-title ">
          Candidus
          </h2>
          <p data-aos="zoom-in-left" className="sm:w-2/3">
          Discover the most informative blockchain news source, featuring daily articles and videos. Stay ahead with the latest updates on blockchain technology's potential and real-world applications across industries.
          </p>
          <div data-aos="zoom-in-left" className="flex gap-2 flex-wrap ">
            <a href="https://ibrahim-st.github.io/candidus/">
              <PrimaryButton btnText={"Live Preview"}></PrimaryButton>
            </a>
            <a href="https://github.com/Ibrahim-ST/candidus">
              <PrimaryButton btnText={"Client Side"}></PrimaryButton>
            </a> 
          </div>
          <div>
            <Tech               
              first={"HTML"} 
              fourth={"CSS"}
            ></Tech>
          </div>
        </div>
      </div>

      {/* Candidus modal */}
      <dialog id="candidus_modal" className="modal">
        <form
          method="dialog"
          className="modal-box min-h-full w-11/12 sm:max-w-4xl "
        >
          <h3 className="font-bold text-lg text-center mb-2">
          Candidus!
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <img className="h-auto max-w-full rounded-xl" src={cd1} alt="" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src={cd2} alt="" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src={cd3} alt="" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src={cd4} alt="" />
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

export default Candidus;

