import React from 'react'
import { BsHouseAdd } from 'react-icons/bs'

const Announce = () => {
  return (
    <>
    <div className="w-full h-20 flex items-center ">
        <div className="flex justify-between w-full h-12 pl-20 pr-[4.8rem]">
            <div className="flex">
                <a href="http://localhost:5173/">
                    <img className="h-7" src="../../src/assets/logo/ABNB.png" alt="" />
                </a>
            </div>

            <div className="flex items-center ">
                <span className="flex h-12 items-center text-base font-['Inter'] font-semibold text-[#222222] mr-6" role="group">Pronto para anunciar no Airbnb?</span>
                <span className="flex items-center gap-2 h-12 font-semibold text-xl p-4 rounded-lg bg-[#ff385c] text-white"><BsHouseAdd className="w-6 h-6" /> Anúncio Fácil Airbnb</span>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Announce