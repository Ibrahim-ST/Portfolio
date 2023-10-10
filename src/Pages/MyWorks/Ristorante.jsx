/* eslint-disable react/no-unescaped-entities */
import React from "react";
import ristorante from "../../assets/ristorante.png";
import ri1 from "../../assets/ri1.png";
import ri2 from "../../assets/ri2.png";
import ri3 from "../../assets/ri3.png";
import ri4 from "../../assets/ri4.png";
import Tech from "../../Components/Tech";
import PrimaryButton from "../../Components/PrimaryButton";

const Ristorante = () => {
  return (
    <>
      <div
        data-aos="zoom-out-up"
        className="my-5 card lg:card-side bg-base-100 shadow-xl"
      >
        <div className="sm:w-1/2  px-5">
          <figure data-aos="zoom-in-down">
            <img
              src={ristorante}
              alt="Album"
              className="rounded py-2 w-64 h-64 object-top hover:object-bottom  duration-1000 transition-all"
            />
          </figure>
          <p
            data-aos="zoom-in-down"
            className="flex justify-center my-2 hover:cursor-pointer"
          >
            <a onClick={() => window.my_modal_3.showModal()}>
              <PrimaryButton btnText={"View gallery"}></PrimaryButton>
            </a>
          </p>
        </div>
        <div className="card-body ">
          <h2 data-aos="zoom-in-left" className="card-title ">
            Ristorante Italiano
          </h2>
          <p data-aos="zoom-in-left" className="sm:w-2/3">
            Ristorante Italiano is a website that provides information about
            italian food recipe by Italy's famous chefs with detail information
            available currently.
          </p>
          <div data-aos="zoom-in-left" className="flex gap-2 flex-wrap ">
            <a href="https://ristorante-italiano-df893.web.app/">
              <PrimaryButton btnText={"Live Preview"}></PrimaryButton>
            </a>
            <a href="https://github.com/Ibrahim-ST/Ristorante-Italiano">
              <PrimaryButton btnText={"Client Side"}></PrimaryButton>
            </a>
            <a href="https://github.com/Ibrahim-ST/Ristorante-Italiano-Server">
              <PrimaryButton btnText={"Server Side"}></PrimaryButton>
            </a>
          </div>
          <div>
            <Tech
              first={"React"}
              second={"Javascript"}
              third={"Firebase"}
              fourth="Vercel"
              fifth={"React Bootstrap"}
              sixth={"HTML/CSS"}
            ></Tech>
          </div>
        </div>
      </div>

      {/* ristorante modal */}
      <dialog id="my_modal_3" className="modal">
        <form
          method="dialog"
          className="modal-box min-h-full w-11/12 sm:max-w-4xl "
        >
          <h3 className="font-bold text-lg text-center mb-2">
            Ristorante Italiano!
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <img className="h-auto max-w-full rounded-xl" src={ri1} alt="" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src={ri2} alt="" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src={ri3} alt="" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src={ri4} alt="" />
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

export default Ristorante;
