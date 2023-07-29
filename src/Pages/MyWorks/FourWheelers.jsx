import React from "react";
import fw1 from "../../assets/fw1.png";
import fw2 from "../../assets/fw2.png";
import fw3 from "../../assets/fw3.png";
import fw4 from "../../assets/fw4.png";
import fourWheelers from "../../assets/fourwheelers.png";
import PrimaryButton from "../../Components/PrimaryButton";
import Tech from "../../Components/Tech";

const FourWheelers = () => {
  return (
    <>
      <div
        data-aos="zoom-out-up"
        className="my-5 card lg:card-side bg-base-100 shadow-xl"
      >
        <div className="sm:w-1/2  px-5">
          <figure data-aos="zoom-in-down">
            <img
              src={fourWheelers}
              alt="Album"
              className="rounded py-2 w-64 h-64 object-top hover:object-bottom  duration-1000 transition-all"
            />
          </figure>
          <p
            data-aos="zoom-in-down"
            className="flex justify-center my-2 hover:cursor-pointer"
          >
            <a onClick={() => window.my_modal_2.showModal()}>
              <PrimaryButton btnText={"View gallery"}></PrimaryButton>
            </a>
          </p>
        </div>
        <div className="card-body ">
          <h2 data-aos="zoom-in-left" className="card-title ">
            Four Wheelers
          </h2>
          <p data-aos="zoom-in-left" className="sm:w-2/3">
            Four Wheelers is a website that sells vehicle toys and provides
            information about the products along with a detail description about
            the product.
          </p>
          <div data-aos="zoom-in-left" className="flex gap-2 flex-wrap ">
            <a href="https://four-wheelers.web.app/">
              <PrimaryButton btnText={"Live Preview"}></PrimaryButton>
            </a>
            <a href="https://github.com/Ibrahim-ST/Four-Wheelers">
              <PrimaryButton btnText={"Client Side"}></PrimaryButton>
            </a>
            <a href="https://github.com/Ibrahim-ST/Four-wheelers-server">
              <PrimaryButton btnText={"Server Side"}></PrimaryButton>
            </a>
          </div>
          <div className="flex flex-wrap">
            <Tech
              first={"React"}
              second={"MongoDB"}
              third={"Firebase"}
              fourth="AOS Animation"
              fifth={"Tailwind"}
              sixth={"Express"}
            ></Tech>
          </div>
        </div>
      </div>

      {/* four wheelers modal */}
      <dialog id="my_modal_2" className="modal">
        <form
          method="dialog"
          className="modal-box min-h-full w-11/12 sm:max-w-4xl "
        >
          <h3 className="font-bold text-lg text-center mb-2">Four Wheelers!</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <img className="h-auto max-w-full rounded-xl" src={fw1} alt="" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src={fw2} alt="" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src={fw3} alt="" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src={fw4} alt="" />
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

export default FourWheelers;
