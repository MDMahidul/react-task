import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
import InstructorsCard from "./InstructorsCard";
import Container from "../../../Components/Container/Container";

const Instructors = () => {
  const [staffs, setStaffs] = useState([]);

  /* fetch data from json file */
  useEffect(() => {
    fetch("staffs.json")
      .then((res) => res.json())
      .then((data) => setStaffs(data));
  }, []);

  /* create framer motion varients */
  const fadeInAnimation = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.07 * index,
        duration: 0.5,
      },
    }),
  };

  return (
    <div className="dark:bg-gray-800 pb-10 lg:pb-20" id="instructors">
      <Container>
        <SectionHeader heading={"Coaching Staffs"}></SectionHeader>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:gap-10 lg:gap-7 ">
          {staffs.map((staff, index) => (
            <motion.div
              key={staff.id}
              variants={fadeInAnimation}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
            >
              <InstructorsCard staff={staff}></InstructorsCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Instructors;
