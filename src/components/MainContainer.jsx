import React, { useEffect, useState } from 'react'
import HomeContainer from './HomeContainer';
import { motion } from 'framer-motion';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import RowContainer from './RowContainer';
import { useStateValue } from '../context/StateProvider';
import CategoryContainer from './CategoryContainer';
import CartContainer from "./CartContainer";
const MainContainer = () => {
  const [{talentitems}, dispatch] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0)

  useEffect(( ) => {}, [scrollValue])
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
        <HomeContainer />
        <section className='w-full my-12'>
          <div className='w-full flex items-center justify-between'>
            <p className='text-2xl font-semibold capitalize text-headingcolor relative before:absolute before:rounded-lg 
            before:content before:w-20 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-violet-400 
            to-violet-800 transition-all ease-in-out duration-100'>
              Most Famous Gigs
            </p>
            <div className='hidden md:flex gap-3 items-center '>
              <motion.div whileTap={{ scale: 0.75 }} className='w-8 h-8 rounded-lg bg-violet-400 hover:bg-violet-700 
              items-center cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex justify-center'
              onClick={() => setScrollValue(-200)}
              >
                <MdChevronLeft className='text-lg text-white' />
              </motion.div>

              <motion.div whileTap={{ scale: 0.75 }} className='w-8 h-8 rounded-lg bg-violet-400 hover:bg-violet-700 
              items-center cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex justify-center'
              onClick={() => setScrollValue(200)}
              >
                <MdChevronRight className='text-lg text-white' />
              </motion.div>
            </div>
          </div>

          <RowContainer 
          scrollValue = {scrollValue}
          flag={true} data = {talentitems?.filter((n) => n.category === "emotional")} />
        </section>
        <CategoryContainer />
    </div>
  );
};

export default MainContainer
