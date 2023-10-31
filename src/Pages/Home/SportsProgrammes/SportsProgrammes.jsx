import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Container from "../../../Components/Container/Container";
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
import ProgramCard from "./ProgramCard";

const SportsProgrammes = () => {
  const [programmes,setProgrammes] = useState([]);
  const [showAllProgrammes,setShowAllProgrammes] = useState(false);

  /* fetch data from json file */
  useEffect(()=>{
    fetch('programmes.json')
      .then(res=>res.json())
      .then(data=> setProgrammes(data))
  },[])

  /* show only 6 data first */
  const visibleProgrammes= showAllProgrammes ? programmes : programmes.slice(0,6);
  const handleSeeMore =()=>{
    setShowAllProgrammes(true);
  }

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
    <div className="dark:bg-gray-800 pb:10 md:pb-20" id="programmes">
      <Container>
        <SectionHeader heading={"Our Sports Programmes"} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {visibleProgrammes.map((program, index) => (
            <motion.div
              key={program.id}
              variants={fadeInAnimation}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
            >
              <ProgramCard program={program}></ProgramCard>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          {!showAllProgrammes && (
            <button
              className="btn bg-amber-500 hover:bg-amber-600 my-8 text-white border-0"
              onClick={handleSeeMore}
            >
              See More
            </button>
          )}
        </div>
      </Container>
    </div>
  );
};

export default SportsProgrammes;
