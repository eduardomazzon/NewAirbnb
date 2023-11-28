import React, { useRef, useState } from 'react'
import { CgSearch } from 'react-icons/cg'
import { FaSearch  } from 'react-icons/fa'
import { RiEqualizerLine } from 'react-icons/ri'
import { RiGlobalLine } from 'react-icons/ri'
import { AiOutlineClose } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaUserCircle } from 'react-icons/fa'
import Modal from './Modal'
import Footer from './Footer'

import Tabs from './Tabs'










const Menu = () => {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [searchBar, setSearchBar] = useState(false);
  const [openSearchModal, setOpenSearchModal] = useState(false);
  


  const menuRef = useRef();
  const imgRef = useRef();

  window.addEventListener('click', (e) => {
    if (e.target !== menuRef.current && e.target !== imgRef.current) {
      setOpen(false);
    }
  });

  return (
    <>
        <div className="w-full h-20 ">
          <div className="hidden md:flex bg-[#fff]  w-full h-20 px-10 items-center justify-between fixed z-[100]">
            
            <div className="w-[24.652rem] ">
              <a  href="http://localhost:5173/">
                <img className="h-9  z-[1000000000]" src="../../src/assets/logo/airbnb-logo.png" alt="Logo"  />
              </a>
            </div>

                {/* /* search bar */}

              

            <div className="w-[30.5em] flex items-center h-12 px-6  ">
              <div className="w-full flex items-center h-12 border rounded-full border-neutral-400/40 shadow hover:shadow-lg">

                <button className="w-[8.736rem] h-12 pl-1 ">
                  <div className="text-sm text-[#222222] font-['inter'] font-medium px-4 border-r border-neutral-400/40">Qualquer lugar</div>
                </button>


                <button className="w-[9.36rem] h-12 ">
                  <div className="text-sm text-[#222222] font-['inter'] font-medium  border-r border-neutral-400/40 px-3.5">Qualquer semana</div>
                </button>


                <button className="w-[9.1rem] h-12 flex items-center" >
                <div className="text-sm text-[#717171] font-['inter']  px-4" >Hóspedes?</div>
                  <button onClick={() => setOpenSearchModal(prev => !prev)}

                  className="my-[0.438rem] mr-[0.438rem] p-2.5 translate-x-1 text-white bg-[#ff385c] rounded-[50%]"><FaSearch className="w-3 h-3" /></button>
                </button>
                
              </div>
            </div>


            <div className="flex items-center justify-center w-[24.652rem] h-20">
              <div className="ml-[1.6rem] flex items-center" role="button">
                <a href="">
                  <span className="p-3 text-[#222222] text-sm font-['Inter'] font-medium rounded-full hover:bg-[#f7f7f7]">Anuncie seu espaço no Airbnb</span>
                </a>
              <button onClick={() => setOpenModal(prev => !prev)} className="modalBtn p-3 mr-2 rounded-full hover:bg-[#f7f7f7]">
              <RiGlobalLine className="w-5 h-5"/>
              </button>
              
              </div>
              
              <button ref={imgRef}
              onClick={() => setOpen(!open)}
               className="flex items-center justify-center py-2 pr-2 pl-4 border  border-neutral-400/40 rounded-full shadow hover:shadow-md relative" role="group" >
                <button >
                  <GiHamburgerMenu />
                </button>
                <button className="ml-4">
                <FaUserCircle className="w-7 h-7"/>
                </button>
              </button>

              {open &&
                <div ref={menuRef} className=" bg-[#fff] w-[23%] shadow-lg absolute top-20 right-10 rounded-lg cursor-pointer">
                  <ul >
                    <li className="hover:bg-[#f7f7f7] py-3 mt-3 text-sm font-medium font-['inter']"><a className="px-4" href="">Entrar</a></li>
                    <li className="hover:bg-[#f7f7f7] py-3 mb-3 text-sm font-normal font-['inter']"><a className="px-4" href="">Cadastrar-se</a></li>
                  </ul>
                   <hr/>
                   <ul>
                    <li className="hover:bg-[#f7f7f7] py-3 mt-3 text-sm font-normal font-['inter']"><a className="px-4" href="">Cartões de Presente</a></li>
                    <li className="hover:bg-[#f7f7f7] py-3 text-sm font-normal font-['inter']"><a className="px-4" href="">Anuncie seu espaço no Airbnb</a></li>
                    <li className="hover:bg-[#f7f7f7] py-3 mb-3 text-sm font-normal font-['inter']"><a className="px-4" href="">Central de ajuda</a></li>
                  </ul>

                </div>
              }

            </div>
          </div>
        <Modal open={openModal} onClose={() => setOpenModal(prev => !prev)} />
          <Footer />
        </div>
       <Tabs />
        







       


        
        
        
           
        



               
    </>
  )
}

export default Menu