/* eslint-disable react/no-unescaped-entities */
import React from "react";  
import SectionTitle from "../../Components/SectionTitle";
import ViewAll from "../../Components/ViewAll";
import Farmhouse from "./Farmhouse";
import FourWheelers from "./FourWheelers";
import Ristorante from "./Ristorante";

const MyWorks = () => {
  return (
    <div id="works" className="max-w-5xl mx-auto my-14 overflow-hidden">
      <SectionTitle title="my works" sub={"Featuring a link collection of projects developed using the powerful MERN stack. Explore my past works and experience the synergy of cutting-edge technologies in action."}></SectionTitle>
      
      <ViewAll title={"View All Projects"} aosData={"fade-down"}/> 
      <div>
        <Farmhouse />
        <FourWheelers />
        <Ristorante />
      </div>
      <ViewAll title={"View more"} aosData={"fade-up"}/> 

    </div>
  );
};

export default MyWorks;
