/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from './PrimaryButton';

const ViewAll = ({title}) => {
    return (
        <>
        <section>
      <p
            data-aos="zoom-in-down"
            className="flex justify-center my-2 hover:cursor-pointer"
          >
            <Link to="/allWorks">
              <PrimaryButton btnText={title}></PrimaryButton>
            </Link>
          </p>
      </section>
        </>
    );
};

export default ViewAll;