/* eslint-disable react/no-unescaped-entities */
import React from "react"; 
import { Link } from "react-router-dom";
import PrimaryButton from "../../Components/PrimaryButton";
import SectionTitle from "../../Components/SectionTitle";
import Farmhouse from "./Farmhouse";
import FourWheelers from "./FourWheelers";
import Ristorante from "./Ristorante";

const MyWorks = () => {
  return (
    <div id="works" className="max-w-5xl mx-auto my-14 overflow-hidden">
      <SectionTitle title="my works" sub={"Featuring Linkcollection of projects developed using the powerful MERN stack. Explore my past works and experience the synergy of cutting-edge technologies in action."}></SectionTitle>
      
      <section>
      <p
            data-aos="zoom-in-down"
            className="flex justify-center my-2 hover:cursor-pointer"
          >
            <Link to="/allWorks">
              <PrimaryButton btnText={"View All works"}></PrimaryButton>
            </Link>
          </p>
      </section>
      <div>
        <Farmhouse />
        <FourWheelers />
        <Ristorante />
      </div>
    </div>
  );
};

export default MyWorks;
