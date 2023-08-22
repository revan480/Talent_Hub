import React from "react"
import Slogan from "../img/slogan.png"
import HeroBg from "../img/heroBg.png"
import { heroData } from "../utils/data"
const HomeContainer = () => {
  return (
    <section 
        className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" 
        id="home"
    >   
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-violet-300 px-4 py-1 rounded-full">
          <p className="text-base text-violet-700 font-semibold">Best Talents</p>
          <div className="w-10 h-10 rounded-full overflow-hidden drop-shadow-x1">
          <img src={Slogan} 
          className="w-full h-full" 
          alt="slogan" />
          </div>
        </div>


        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
          Discover Your Hidden Talents: <span className="text-violet-700 text-[3rem] md:text-[5rem]">Connect, Buy, Sell</span>
        </p>

        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
        Welcome to our talent sales platform! Discover the best talent around the world and elevate your team's performance. Join now and browse our database of skilled professionals, from developers to marketers. Hire the talent you need to take your business to the next level.
        </p>

        <button type="button" className="bg-gradient-to-br from-violet-300 to-violet-700 w-full px-4 md:w-auto 
        py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100">Order Now</button>
      </div>
      <div className="py-2 flex-1 flex items-center relative ">
            <img src={HeroBg} className="ml-auto h-420 w-full lg:w-auto lg:h-650 rounded-3xl" alt="hero-bg" />
            <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-36 py-4 gap-10 flex-wrap">
                {heroData && heroData.map(n =>(
                    <div key={n.id} className=" lg:w-190 min-w-[190px] p-4 bg-cardOverlay backdrop-blur-md rounded-md flex flex-col items-center justify-center 
                    drop-shadow-lg">
                    <img src={n.imageSrc} className="w-20 lg:w-40 -mt-10 lg:-mt-20 rounded-3xl" alt="I1" />
                    <p className="text-base lg:text-xl font-semibold text-textColor mt-2">{n.name}</p>
                    <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3 text-center">
                        {n.decp}
                    </p>
                    <p className="text-xl font-semibold text-headingColor">
                        <span className="text-s text-red-600">$</span> {n.price}
                    </p>
                </div>
                ))}
            </div>
      </div>
    </section>
  )
}

export default HomeContainer
