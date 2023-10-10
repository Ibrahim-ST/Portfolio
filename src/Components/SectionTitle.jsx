import React from "react";

// eslint-disable-next-line react/prop-types
const SectionTitle = ({title, sub}) => {
  return (
    <>
    <h1 className="uppercase text-3xl font-bold text-center ">{title}</h1>
    <p className="w-2/3 mx-auto text-justify sm:text-center font-mono font-thin">{sub}</p>
    </>
  );
};

export default SectionTitle;
