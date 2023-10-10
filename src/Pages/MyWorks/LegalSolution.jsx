
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import legal from "../../assets/legalSolution.png";
import ls1 from "../../assets/ls1.png";
import ls2 from "../../assets/ls2.png";
import ls3 from "../../assets/ls3.png"; 
import ls4 from "../../assets/ls4.png"; 
import Tech from "../../Components/Tech";
import PrimaryButton from "../../Components/PrimaryButton";


const LegalSolution = () => {
    return (
        <>
      <div
        data-aos="zoom-out-up"
        className="my-5 card lg:card-side bg-base-100 shadow-xl"
      >
        <div className="sm:w-1/2  px-5">
          <figure data-aos="zoom-in-down">
            <img
              src={legal}
              alt="Album"
              className="rounded py-2 w-64 h-64 object-top hover:object-bottom  duration-1000 transition-all"
            />
          </figure>
          <p
            data-aos="zoom-in-down"
            className="flex justify-center my-2 hover:cursor-pointer"
          >
            <a onClick={() => window.legal_solution_modal.showModal()}>
              <PrimaryButton btnText={"View gallery"}></PrimaryButton>
            </a>
          </p>
        </div>
        <div className="card-body ">
          <h2 data-aos="zoom-in-left" className="card-title ">
          Legal Solution
          </h2>
          <p data-aos="zoom-in-left" className="sm:w-2/3">
          Legal Solutions is a dynamic law firm with a clear vision of the future. We are a firm that understands what clients need today and, equally importantly, what they will need tomorrow.  
          </p>
          <div data-aos="zoom-in-left" className="flex gap-2 flex-wrap ">
            <a href="https://ibrahim-st.github.io/legal-solution/">
              <PrimaryButton btnText={"Live Preview"}></PrimaryButton>
            </a>
            <a href="https://github.com/Ibrahim-ST/legal-solution">
              <PrimaryButton btnText={"Client Side"}></PrimaryButton>
            </a> 
          </div>
          <div>
            <Tech               
              first={"HTML"}
              third={"Tailwind"}
              fifth={"CSS"}
            ></Tech>
          </div>
        </div>
      </div>

      {/* Legal Solution modal */}
      <dialog id="legal_solution_modal" className="modal">
        <form
          method="dialog"
          className="modal-box min-h-full w-11/12 sm:max-w-4xl "
        >
          <h3 className="font-bold text-lg text-center mb-2">
            Legal Solution!
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <img className="h-auto max-w-full rounded-xl" src={ls1} alt="" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src={ls2} alt="" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src={ls3} alt="" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src={ls4} alt="" />
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

export default LegalSolution;

