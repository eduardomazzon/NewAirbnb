import React, { useState } from 'react'
import { RiGlobalLine } from 'react-icons/ri'
import { IoIosArrowUp } from 'react-icons/io'
import ModalFooter from './ModalFooter'

const Footer = () => {
  const [openModalFooter, setOpenModalFooter] = useState(false);
  
  return (
    <>
      <div className="w-full">
        <div className="hidden md:flex w-full h-12 fixed bottom-0 items-center justify-between pt-[0.815rem] pb-3.5 px-10 bg-[#fff] z-[100000]">
          <div className="flex items-center ">
            <span className="text-[#222222] text-sm">© 2023 Airbnb, Inc. </span>
              <span className="px-2">·</span>
                <a className="hover:underline text-[#222222] text-sm" href="#">Privacidade</a>
              <span className="px-2">·</span>
                <a className="hover:underline text-[#222222] text-sm" href="#">Termos</a>
              <span className="px-2">·</span>
                <a className="hover:underline text-[#222222] text-sm" href="#">Mapa do site</a>
              <span className="px-2">·</span>
                <a className="hover:underline text-[#222222] text-sm" href="#">Informações da empresa</a>
          </div>

          <div className="flex items-center gap-2">

            <button className="flex items-center gap-2" role="group"> <RiGlobalLine className="w-5 h-5" />
              <span className="text-[#222222] font-inter font-medium text-base hover:underline ">Português (BR)</span>
            </button>

            <button className="flex items-center gap-2 text-[#222222] font-inter font-medium text-base" role="group">R$
              <span className="text-[#222222] font-inter font-medium text-base hover:underline">BRL</span>
            </button>

            <button onClick={() => setOpenModalFooter(true)} className="flex items-center text-[#222222] font-inter font-medium text-base hover:underline" role="group">Atendimento e recursos
              <span><IoIosArrowUp className="w-5 h-5"/></span>
            </button>

          </div>
        </div>
      </div>

      <div className="">
        <ModalFooter open={openModalFooter} onClose={() => setOpenModalFooter(false)}  />
      </div>
    </>
  )
}

export default Footer