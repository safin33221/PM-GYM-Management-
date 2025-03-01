import React from 'react';

const SectionTitle = ({ title, subTitle }) => {
    return (
        <div className='text-center my-10 '>
            <p className='text-2xl '>{subTitle}</p>
            <h1 className='text-5xl font-bold'>{title}</h1>
        </div>
    );
};

export default SectionTitle;