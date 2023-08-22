import React, { useEffect, useState } from 'react'
import { GiFlexibleStar } from 'react-icons/gi'
import {categories} from '../utils/data'
import { motion } from 'framer-motion'
import RowContainer from './RowContainer'
import { useStateValue } from '../context/StateProvider'

const CategoryContainer = () => {

const [filter, setFilter] = useState("Physical Talents")

const [{ talentitems}, dispatch] = useStateValue();

  return (
    <section className='w-full my-6' id='category'>
      <div className='w-full flex flex-col items-center justify-center'>
      <p className='text-2xl font-semibold capitalize text-headingcolor relative before:absolute before:rounded-lg 
            before:content before:w-20 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-violet-400 
            to-violet-800 transition-all ease-in-out duration-100 mr-auto'>
              Other Gigs
      </p>
      <div className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none">
          {categories &&
            categories.map((category) => (
              <motion.div
                whileTap={{ scale: 0.75 }}
                key={category.id}
                className={`group ${
                  filter === category.urlParamName ? "bg-violet-600" : "bg-card"
                } w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-violet-600 `}
                onClick={() => setFilter(category.urlParamName)}
              >
                <div
                  className={`w-10 h-10 rounded-full shadow-lg ${
                    filter === category.urlParamName
                      ? "bg-white"
                      : "bg-violet-600"
                  } group-hover:bg-white flex items-center justify-center`}
                >
                  <GiFlexibleStar
                    className={`${
                      filter === category.urlParamName
                        ? "text-textColor"
                        : "text-white"
                    } group-hover:text-textColor text-lg`}
                  />
                </div>
                <p
                  className={`text-sm ${
                    filter === category.urlParamName
                      ? "text-white"
                      : "text-textColor"
                  } group-hover:text-white`}
                >
                  {category.name}
                </p>
              </motion.div>
            ))}
        </div>
        <div className='w-full'>
            <RowContainer flag={false} data={talentitems?.filter(n => n.category == filter)} />
        </div>
      </div>    
    </section>
  )
}

export default CategoryContainer
