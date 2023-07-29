import React from "react";
import fa1 from "../../assets/fa1.png";
import fa2 from "../../assets/fa2.png";
import fa3 from "../../assets/fa3.png";
import fa4 from "../../assets/fa4.png";
import farmhouse from "../../assets/farmhouse.png";
import PrimaryButton from "../../Components/PrimaryButton";
import Tech from "../../Components/Tech";

const Farmhouse = () => {
  return (
    <>
      <div
        data-aos="zoom-out-up"
        className="my-5 card lg:card-side bg-base-100 shadow-xl"
      >
        <div className="sm:w-1/2  px-5">
          <figure data-aos="zoom-in-down">
            <img
              src={farmhouse}
              alt="Album"
              className="rounded py-2 w-64 h-64 object-top hover:object-bottom  duration-1000 transition-all"
            />
          </figure>
          <p
            data-aos="zoom-in-down"
            className="flex justify-center my-2 hover:cursor-pointer"
          >
            <a onClick={() => window.my_modal_1.showModal()}>
              <PrimaryButton btnText={"View gallery"}></PrimaryButton>
            </a>
          </p>
        </div>
        <div className="card-body ">
          <h2 data-aos="zoom-in-left" className="card-title ">
            Farmhouse Academy
          </h2>
          <p data-aos="zoom-in-left" className="sm:w-2/3">
            Farmhouse Academy is a website that provides information about
            football academy and offers training by various instructors and
            specialized coaches.
          </p>
          <div data-aos="zoom-in-left" className="flex gap-2 flex-wrap ">
            <a href="https://farmhouse-academy.web.app/">
              <PrimaryButton btnText={"Live Preview"}></PrimaryButton>
            </a>
            <a href="https://github.com/Ibrahim-ST/Farmhouse-Academy">
              <PrimaryButton btnText={"Client Side"}></PrimaryButton>
            </a>
            <a href="https://github.com/Ibrahim-ST/Farmhouse-Academy-server">
              <PrimaryButton btnText={"Server Side"}></PrimaryButton>
            </a>
          </div>
          <div className="flex flex-wrap">
            <Tech
              first={"React"}
              second={"JWT, AxiosSecure"}
              third={"MongoDb"}
              fourth="AOS"
              fifth={"Tailwind"}
              sixth={"Express"}
            ></Tech>
          </div>
        </div>
      </div>

      {/* farmhouse modal */}
      <dialog id="my_modal_1" className="modal">
        <form
          method="dialog"
          className="modal-box min-h-full w-11/12 sm:max-w-4xl "
        >
          <h3 className="font-bold text-lg text-center mb-2">
            Farmhouse Academy!
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <img className="h-auto max-w-full rounded-xl" src={fa1} alt="" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src={fa2} alt="" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src={fa3} alt="" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src={fa4} alt="" />
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

export default Farmhouse;
