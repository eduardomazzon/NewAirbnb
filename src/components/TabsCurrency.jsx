import React, { useState } from 'react'
import { BsCheck } from 'react-icons/bs'
import { BsTranslate } from 'react-icons/bs'


const TabsCurrency = () => {

  const [tab, setTab] = useState(0)
  return (
    <>
      <div className="w-full h-full ">
        <div onChange={(e) => setTab(e.target.value)} className="w-full flex items-center h-[3.125rem]  border-b border-neutral-400/40 ">

          <button onClick={() => setTab(0)} className={`py-3 my-1.5 mr-3 text-[0.925rem] font-medium font-['inter'] 
          ${tab == 0 ? 'border-b-2 w-auto border-[#222222] text-[#222222]' : 'text-[#717171] hover:text-[#606060]'}`}
            >Idioma e região
          </button>

          <button onClick={() => setTab(1)} className={`py-3 mx-3  text-[0.925rem] font-medium font-['inter'] 
          ${tab == 1 ? 'border-b-2 border-[#222222] text-[#222222]' : 'text-[#717171] hover:text-[#606060]'}`}
            >Moeda
          </button>


        </div>
          <div className="w-full flex items-center  mt-6 pb-6 ">
            <div className=" w-full h-[400v] relative ">
              {tab == 0 && 
              <div className=" h-[4rem]">
                <div className="w-full flex flex-col mt-6 pb-6" >
                  <span className=" flex items-center gap-2 text-base text-[#222222] font-['inter']">Tradução <BsTranslate className="w-5 h-5" /></span>
                    <div className="mt-1.5 flex text-[#717171] text-sm font-['inter']" >Traduza automaticamente as descrições e as avaliações para Português.
                      <div className=" flex items-center pl-6 -translate-y-6">
                        <input type="checkbox" className="relative appearance-none inline-block w-12 h-8 cursor-pointer rounded-full bg-[#b0b0b0] transition-all  after:absolute top-0 after:w-7 after:h-7 after:translate-x-0 after:rounded-full after:bg-[#fff] after:top-0.5 after:left-0.5 checked:bg-[#222222] checked:after:translate-x-[1rem] "/>
                      </div>
                    
                    </div>

                </div>
                    <div className="w-full mt-6 pb-6 ">
                      <h2 className="text-[#222222] font-inter text-[1.5rem] font-semibold">Idiomas e regiões sugeridos</h2>

                      <ul className="w-full flex h-[4.5rem] mt-8">
                        <li className="flex items-center w-[12.5rem] h-[4.5rem] p-2"><a className="w-full py-2.5 px-3" href="">
                          <div className="text-base text-[#222222] font-inter">Português</div>
                          <div className="text-sm text-[#717171] font-inter">Portugal</div>
                          </a></li>


                        <li className="flex items-center w-[12.5rem] h-[4.5rem] p-2"><a className="w-full py-2.5 px-3" href="">
                          <div className="text-base text-[#222222] font-inter">English</div>
                          <div className="text-sm text-[#717171] font-inter">United States</div>
                          </a></li>


                        <li className="flex items-center w-[12.5rem] h-[4.5rem] p-2"><a className="w-full py-2.5 px-3" href="">
                          <div className="text-base text-[#222222] font-inter">English</div>
                          <div className="text-sm text-[#717171] font-inter">United Kingdom</div>
                          </a></li>
                      </ul>
                    </div>
              </div> }



              {tab == 1 && 
              <div className=""></div>
                
               
              }
            </div>
          </div>
      </div>

    </>
  )
}

export default TabsCurrency