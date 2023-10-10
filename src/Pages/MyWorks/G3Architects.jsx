 
import React from 'react';
import G3Architect from "../../assets/g3architects.png";
import g31 from "../../assets/g31.png";
import g32 from "../../assets/g32.png";
import g33 from "../../assets/g33.png"; 
import g34 from "../../assets/g34.png"; 
import Tech from "../../Components/Tech";
import PrimaryButton from "../../Components/PrimaryButton";


const G3Architects = () => {
    return (
        <>
      <div
        data-aos="zoom-out-up"
        className="my-5 card lg:card-side bg-base-100 shadow-xl"
      >
        <div className="sm:w-1/2  px-5">
          <figure data-aos="zoom-in-down">
            <img
              src={G3Architect}
              alt="Album"
              className="rounded py-2 w-64 h-64 object-top hover:object-bottom  duration-1000 transition-all"
            />
          </figure>
          <p
            data-aos="zoom-in-down"
            className="flex justify-center my-2 hover:cursor-pointer"
          >
            <a onClick={() => window.G3Architects_modal.showModal()}>
              <PrimaryButton btnText={"View gallery"}></PrimaryButton>
            </a>
          </p>
        </div>
        <div className="card-body ">
          <h2 data-aos="zoom-in-left" className="card-title ">
          G3 Architects
          </h2>
          <p data-aos="zoom-in-left" className="sm:w-2/3">
          G3 Architects team goes the extra mile for all our clients. We provide a range of services - from custom software development to dedicated teams since 2020. 
          </p>
          <div data-aos="zoom-in-left" className="flex gap-2 flex-wrap ">
            <a href="https://ibrahim-st.github.io/g3-architects/">
              <PrimaryButton btnText={"Live Preview"}></PrimaryButton>
            </a>
            <a href="https://github.com/Ibrahim-ST/g3-architects">
              <PrimaryButton btnText={"Client Side"}></PrimaryButton>
            </a> 
          </div>
          <div>
            <Tech                
              second={"HTML"}
              fifth={"CSS"}
            ></Tech>
          </div>
        </div>
      </div>

      {/* Marvel production modal */}
      <dialog id="G3Architects_modal" className="modal">
        <form
          method="dialog"
          className="modal-box min-h-full w-11/12 sm:max-w-4xl "
        >
          <h3 className="font-bold text-lg text-center mb-2">
          G3 Architects!
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <img className="h-auto max-w-full rounded-xl" src={g31} alt="" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src={g32} alt="" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src={g33} alt="" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src={g34} alt="" />
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

export default G3Architects;

