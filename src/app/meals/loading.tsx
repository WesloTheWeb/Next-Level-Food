'use client';

import React from 'react';
import { Hourglass } from 'react-loader-spinner';
import classes from './loading.module.scss';

const { loadingContainer } = classes;

const Loading = ({ }) => {
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

export default Loading;

