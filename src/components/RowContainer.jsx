import React, { useEffect, useRef } from 'react'
import { MdShoppingBasket } from 'react-icons/md';
import { motion } from 'framer-motion';

const RowContainer = ({ flag, data, scrollValue }) => {
    console.log(data);
    const rowContainer = useRef()
    useEffect(() => {
        rowContainer.current.scrollLeft += scrollValue;
    }, [scrollValue])
  return (
    <div
    ref={rowContainer}
    className={`w-full flex items-center gap-3 my-12 scroll-smooth bg-gradient-to-r from-violet-300 to-violet-600 rounded-3xl ${
        flag ? "overflow-x-scroll scrollbar-none" : "overflow-x-hidden flex-wrap"
        }`}>
            {data && data.map(item => (
                <div key={item?.id} className='w-300 h-[225px] min-w-[300px] md:w-340 md:min-w-[340px] bg-gray-100 rounded-lg p-2 my-12 backdrop-blur-lg 
                hover:drop-shadow-3xl flex flex-col items-center justify-between'>
                    <div className='w-full flex items-center justify-between'>
                        <motion.img
                        whileHover={{ scale : 1.2 }} 
                        src={item?.imageURL} 
                        alt="" 
                        className='w-40 -mt-8 rounded-3xl'
                        />
                        <motion.div whileTap={{ scale: 0.75}} className='w-8 h-8 rounded-full bg-red-600 flex items-center justify-center 
                        cursor-pointer hover:shadow-md'>
                            <MdShoppingBasket className='text-white text-lg' />
                        </motion.div>
                    </div>
            
                    <div className='w-full flex flex-col items-end justify-end'>
                        <p className='text-textColor font-semibold text-base md:text-lg'>
                            {item?.title}
                            </p>
                        <p className='mt-1 text-sm text-gray-500'>{item?.description}</p>
                        <div className='flex items-center gap-8'>
                            <p className='text-lg text-headingColor font-semibold'>
                                <span className='text-m text-red-500'>$</span> {item?.price}
                            </p>
            
            
                        </div>
                    </div>
                </div>
            ))}
       
    </div>
  );
};

export default RowContainer
