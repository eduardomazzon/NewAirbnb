
import React, { useState } from 'react'
import { MdClose } from 'react-icons/md'
import TabsCurrency from './TabsCurrency';

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div /*onClick={onClose}*/ className="overlay bg-black/50 fixed w-[100%] h-[100%] z-[1000]">
      <div  className="modalContainer ">
        <div className="modalRight">
          <div className="content ">
            <div className="w-[76%] h-[85%] flex flex-col items-center justify-center bg-[#fff] top-40 left-50 translate-x-[17%] -translate-y-[7.5rem] fixed z-[1000000] shadow-lg rounded-xl">

              <div className="container">

                <div className="w-full flex items-center h-[3.125rem] px-6 fixed top-0 mt-16">
                  <p onClick={onClose} className="closeBtn cursor-pointer fixed top-5 left-5"> <MdClose className="w-5 h-5" /></p>

                  <TabsCurrency />

                </div>
              </div>
            
            
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal