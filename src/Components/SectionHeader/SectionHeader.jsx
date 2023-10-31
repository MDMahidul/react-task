import React from 'react';

const SectionHeader = ({heading}) => {
    return (
      <div className="font-second_font text-center md:w-4/12 mx-auto pt-20 pb-16 ">
        <h3 className="md:text-4xl text-3xl dark:text-white text-gray-900 py-4 ">
          {heading}
        </h3>
      </div>
    );
};

export default SectionHeader;