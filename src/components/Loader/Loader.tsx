'use client';
import React from "react";
import { Hourglass } from "react-loader-spinner";
import classes from './Loader.module.scss';

const { loadingContainer } = classes;

const Loader = () => {
    return (
        <div className={loadingContainer}>
            <Hourglass
                visible={true}
                height="80"
                width="80"
                ariaLabel="hourglass-loading"
                wrapperStyle={{}}
                wrapperClass=""
                colors={['#306cce', '#72a1ed']} />
            <p>Loading...</p>
        </div>

    );
};

export default Loader;