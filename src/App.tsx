import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
//Pictures
import avatar from "./assets/images/avatar.jpg";
import Pic1 from "./assets/images/dog-image-1.jpg";
import Pic2 from "./assets/images/dog-image-2.jpg";
import Pic3 from "./assets/images/dog-image-3.jpg";

// Icons
import { GrPrevious, GrFormNext } from "react-icons/gr";
import { FiMoreVertical } from "react-icons/fi";

function App() {
  const style = { color: "white" }

  return (
    <main className="App relative">
      <div className="relative overflow-x-hidden overflow-y-hidden">
        <div className="z-20 m-5 flex flex-col lg:flex-row justify-center items-center">
          <section className="z-10 w-11/12 sm:w-[19.5rem] md:w-[19.5rem] h-[41.5rem] shadow-lg rounded-[2.5rem] overflow-hidden bg-white">
            <div className="w-[18rem] h-[40rem] mx-auto mt-3 bg-[#F5F3F7] rounded-[1.5rem]">
              <div className="w-[18rem] h-[5rem] relative bg-gradient-to-l from-[#E942FF] to-[#8838FF] rounded-t-[1.5rem] rounded-b-lg">
                <div className="absolute w-[10rem] h-[2.5rem] bg-white rounded-[2rem] left-[4rem] -top-[1.3rem]"></div>
                <div className="flex justify-between items-center text-white font-rubik pt-6 px-3">
                  <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="15" height="15" fill="#fff">
                    <path d="M17.17,24a1,1,0,0,1-.71-.29L8.29,15.54a5,5,0,0,1,0-7.08L16.46.29a1,1,0,1,1,1.42,1.42L9.71,9.88a3,3,0,0,0,0,4.24l8.17,8.17a1,1,0,0,1,0,1.42A1,1,0,0,1,17.17,24Z"/>
                  </svg>
                    <img
                      src={avatar}
                      alt=""
                      className="w-8 h-8 ml-2 rounded-full border-2"
                    />
                    <div className="ml-2">
                      <p className="font-bold">Samuel Green</p>
                      <p className="text-xs text-[#A39DAA]">Available to Walk</p>
                    </div>
                  </div>
                  <FiMoreVertical />
                </div>
              </div>
              <p className="w-2/3 ml-3 mt-2 p-3 text-[#9241C8] text-xs font-semibold bg-[#ede5f2] rounded-xl rounded-bl-md shadow-md">
                That sounds great. I’d be happy to discuss more.
              </p>
              <p className="w-2/3 ml-3 mt-2 p-3 text-[#9241C8] text-xs font-semibold bg-[#ede5f2] rounded-xl rounded-bl-md shadow-md">
                Could you send over some pictures of your dog, please?
              </p>
              <div className="mt-3 flex flex-col items-end">
                <div className="flex justify-end">
                  <img src={Pic1} alt="" className="w-16 h-16 mr-2 rounded-xl" />
                  <img src={Pic2} alt="" className="w-16 h-16 mr-2 rounded-xl" />
                  <img src={Pic3} alt="" className="w-16 h-16 mr-2 rounded-xl" />
                </div>
                <p className="w-2/3 mr-3 mt-2 p-3 text-[#6E5D7E] text-xs bg-white rounded-xl rounded-br-md shadow-md">
                  Here are a few pictures. She’s a happy girl!
                </p>
                <p className="w-2/5 mr-3 mt-2 p-3 text-[#6E5D7E] text-xs bg-white rounded-xl rounded-br-md shadow-md">
                  Can you make it?
                </p>
              </div>
              <div>
                <p className="w-2/3 ml-3 mt-2 p-3 text-[#9241C8] text-xs font-semibold bg-[#ede5f2] rounded-xl rounded-bl-md shadow-md">
                  She looks so happy! The time we discussed works. How long shall
                  I take her out for?
                </p>
                <div className="w-4/5 ml-3 mt-2 py-2 px-4 font-rubik flex justify-between text-white bg-gradient-to-r from-[#E942FF] to-[#8838FF] rounded-2xl">
                  <div className="flex items-center">
                    <div className="w-5 h-5 border-2 border-white rounded-full"></div>
                    <p className="ml-2 text-xs">30 minute walk</p>
                  </div>
                  <p className="font-extrabold text-xl">$29</p>
                </div>
                <div className="w-4/5 ml-3 mt-2 py-2 px-4 font-rubik flex justify-between text-white bg-gradient-to-r from-[#E942FF] to-[#8838FF] rounded-2xl">
                  <div className="flex items-center">
                    <div className="w-5 h-5 border-2 border-white rounded-full"></div>
                    <p className="ml-2 text-xs">30 minute walk</p>
                  </div>
                  <p className="font-extrabold text-xl">$29</p>
                </div>
              </div>
              <div className="w-[17rem] flex justify-between items-center mt-2 mx-auto px-1 py-1 bg-white rounded-full">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="pl-3"
                />
                <svg xmlns="http://www.w3.org/2000/svg" className="bg-[#3E2753] w-9 h-9 rounded-full" id="Outline" viewBox="0 0 24 24" width="15" height="15" fill="white">
                  <path d="M15.4,9.88,10.81,5.29a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42L14,11.29a1,1,0,0,1,0,1.42L9.4,17.29a1,1,0,0,0,1.41,1.42l4.59-4.59A3,3,0,0,0,15.4,9.88Z"/>
                </svg>
              </div>
            </div>
          </section>

          <section className="font-rubik z-10 text-center lg:ml-24 lg:text-start">
            <p className="text-4xl text-[#3E2753] font-medium py-10">
              Simple booking
            </p>
            <p className="w-[20rem] lg:w-[30rem] text-[#A39DAA] leading-7 tracking-wider font-normal">
              Stay in touch with our dog walkers through the chat interface. This
              makes it easy to discuss arrangements and make bookings. Once the
              walk has been completed you can rate your walker and book again all
              through the chat.
            </p>
          </section>
        </div>
        <div className="absolute -top-44 lg:top-[-19rem] -left-36 w-[20rem] lg:w-[33rem] h-[40rem] lg:h-[60rem] rounded-[10rem] lg:rounded-[17rem] bg-gradient-to-b from-[#E942FF] to-[#8838FF]"></div>
        <div className="absolute -bottom-[22rem] lg:bottom-[-20rem] -right-36 lg:right-[-13rem] w-[20rem] lg:w-[33rem] h-[50rem] lg:h-[60rem] rounded-[10rem] lg:rounded-[17rem] bg-[#f9f4fa]"></div>
      </div>
    </main>
  );
}

export default App;
