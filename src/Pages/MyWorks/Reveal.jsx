
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import reveal from "../../assets/reveal.png";
import rv1 from "../../assets/rv1.png";
import rv2 from "../../assets/rv2.png";
import rv3 from "../../assets/rv3.png"; 
import rv4 from "../../assets/rv4.png"; 
import Tech from "../../Components/Tech";
import PrimaryButton from "../../Components/PrimaryButton";


const Reveal = () => {
    return (
        <>
      <div
        data-aos="zoom-out-up"
        className="my-5 card lg:card-side bg-base-100 shadow-xl"
      >
        <div className="sm:w-1/2  px-5">
          <figure data-aos="zoom-in-down">
            <img
              src={reveal}
              alt="Album"
              className="rounded py-2 w-64 h-64 object-top hover:object-bottom  duration-1000 transition-all"
            />
          </figure>
          <p
            data-aos="zoom-in-down"
            className="flex justify-center my-2 hover:cursor-pointer"
          >
            <a onClick={() => window.reveal_modal.showModal()}>
              <PrimaryButton btnText={"View gallery"}></PrimaryButton>
            </a>
          </p>
        </div>
        <div className="card-body ">
          <h2 data-aos="zoom-in-left" className="card-title ">
          Reveal
          </h2>
          <p data-aos="zoom-in-left" className="sm:w-2/3">
          Discover the most informative blockchain news source, featuring daily articles and videos. Stay ahead with the latest updates on blockchain technology's potential and real-world applications across industries.
          </p>
          <div data-aos="zoom-in-left" className="flex gap-2 flex-wrap ">
            <a href="https://ibrahim-st.github.io/reveal-website/">
              <PrimaryButton btnText={"Live Preview"}></PrimaryButton>
            </a>
            <a href="https://github.com/Ibrahim-ST/reveal-website">
              <PrimaryButton btnText={"Client Side"}></PrimaryButton>
            </a> 
          </div>
          <div>
            <Tech               
              first={"HTML"}
              third={"Bootstrap"}
              fifth={"CSS"}
            ></Tech>
          </div>
        </div>
      </div>

      {/* Reveal modal */}
      <dialog id="reveal_modal" className="modal">
        <form
          method="dialog"
          className="modal-box min-h-full w-11/12 sm:max-w-4xl "
        >
          <h3 className="font-bold text-lg text-center mb-2">
            Reveal!
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <img className="h-auto max-w-full rounded-xl" src={rv1} alt="" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src={rv2} alt="" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src={rv3} alt="" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src={rv4} alt="" />
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

export default Reveal;

