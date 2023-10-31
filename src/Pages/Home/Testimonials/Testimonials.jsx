import React from 'react';
import Container from '../../../Components/Container/Container';
import SectionHeader from '../../../Components/SectionHeader/SectionHeader';

const Testimonials = () => {
    return (
      <div
        className="dark:bg-gray-700  pb-10 lg:pb-20"
      >
        <SectionHeader heading={'Testimonials'}></SectionHeader>
        <Container></Container>
      </div>
    );
};

export default Testimonials;