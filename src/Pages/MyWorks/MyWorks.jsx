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
      <SectionTitle title="my works" sub={"Featuring Linkcollection of projects developed using the powerful MERN stack. Explore my past works and experience the synergy of cutting-edge technologies in action."}></SectionTitle>
      
      <ViewAll title={"VIew All Projects"} />
      <div>
        <Farmhouse />
        <FourWheelers />
        <Ristorante />
      </div>
    </div>
  );
};

export default MyWorks;
