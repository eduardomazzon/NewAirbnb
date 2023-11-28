import React, { useState } from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { RiEqualizerLine } from 'react-icons/ri'

import Slider from './Slider'


const Tabs = () => {

  const [Tab, setTab] = useState(0)


  


  return (
    <>
      <div className="w-full  h-[6.125rem]  border-t fixed  bg-white z-[10] "> 
      
          
        <div onChange={(e) => setTab(e.target.value)}  className="flex items-center justify-between w-full h-[4.875rem] translate-y-5 px-10 border-neutral-300/40  whitespace-nowrap  bg-white">
          
          <div className="w-full flex ">
            <div className="w-[71.400%] h-[4.875rem] flex items-center justify-between relative overflow-hidden">

              <div className="bg-gradient-to-r from-white to-transparent w-16 h-[4.875rem]   ">
                <span className="absolute top-7 p-[0.313rem] border rounded-[50%]  bg-[#fff] border-neutral-400 cursor-pointer"> <BsChevronLeft className="w-4 h-4" /> </span>
              </div>



            
          
             <div  className="tabsbox flex gap-8 overflow-x-hidden ">

            <button onClick={() => setTab(0)} className={`pb-3 pt-4 border-b-2 solid border-transparent transition-[0.3s]  ${Tab == 0 ? 'text-black border-b-black' : ' text-[#717171] hover:border-neutral-400/40   hover:text-[#222222] opacity-70 hover:opacity-100'}`}>

            <label className="cursor-pointer" htmlFor="block">
              <span className="flex items-center justify-center">
                <div style={{backgroundImage: 'url(/src/assets/Icons-Image/1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center'}} className="w-[24px] h-[24px] "></div>
              </span>
              <span className="text-xs font-['Raleway'] font-semibold">Fazendas</span>
            </label>
          </button>

          <button onClick={() => setTab(1)} className={`pb-3 pt-4 border-b-2 solid border-transparent transition-[0.3s]  ${Tab == 1 ? 'text-black border-b-black' : ' text-[#717171] hover:border-neutral-400/40 hover:text-[#222222] opacity-70 hover:opacity-100'}`}>

            <label className="cursor-pointer" htmlFor="block">
              <span className="flex items-center justify-center">
                <div style={{backgroundImage: 'url(/src/assets/Icons-Image/2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center'}} className="w-[24px] h-[24px] "></div>
              </span>
              <span className="text-xs font-['Raleway'] font-semibold">Microcasas</span>
            </label>
          </button>

          <button onClick={() => setTab(2)} className={`pb-3 pt-4 border-b-2 solid border-transparent transition-[0.3s]  ${Tab == 2 ? 'text-black border-b-black' : ' text-[#717171] hover:border-neutral-400/40 hover:text-[#222222] opacity-70 hover:opacity-100'}`}>

            <label className="cursor-pointer" htmlFor="block">
              <span className="flex items-center justify-center">
                <div style={{backgroundImage: 'url(/src/assets/Icons-Image/3.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center'}} className="w-[24px] h-[24px] "></div>
              </span>
              <span className="text-xs font-['Raleway'] font-semibold">Parques nacionais</span>
            </label>
          </button>

          <button onClick={() => setTab(3)} className={`pb-3 pt-4 border-b-2 solid border-transparent transition-[0.3s]  ${Tab == 3 ? 'text-black border-b-black' : ' text-[#717171] hover:border-neutral-400/40 hover:text-[#222222] opacity-70 hover:opacity-100'}`}>

            <label className="cursor-pointer" htmlFor="block">
              <span className="flex items-center justify-center">
                <div style={{backgroundImage: 'url(/src/assets/Icons-Image/4.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center'}} className="w-[24px] h-[24px] "></div>
              </span>
              <span className="text-xs font-['Raleway'] font-semibold">Casas de terra</span>
            </label>
          </button>
          
          <button onClick={() => setTab(4)} className={`pb-3 pt-4 border-b-2 solid border-transparent transition-[0.3s]  ${Tab == 4 ? 'text-black border-b-black' : ' text-[#717171] hover:border-neutral-400/40 hover:text-[#222222] opacity-70 hover:opacity-100'}`}>

            <label className="cursor-pointer" htmlFor="block">
              <span className="flex items-center justify-center">
                <div style={{backgroundImage: 'url(/src/assets/Icons-Image/5.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center'}} className="w-[24px] h-[24px] "></div>
              </span>
              <span className="text-xs font-['Raleway'] font-semibold">Pianos de cauda</span>
            </label>
          </button>

          <button onClick={() => setTab(5)} className={`pb-3 pt-4 border-b-2 solid border-transparent transition-[0.3s]  ${Tab == 5 ? 'text-black border-b-black' : ' text-[#717171] hover:border-neutral-400/40 hover:text-[#222222] opacity-70 hover:opacity-100'}`}>

            <label className="cursor-pointer" htmlFor="block">
              <span className="flex items-center justify-center">
                <div style={{backgroundImage: 'url(/src/assets/Icons-Image/6.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center'}} className="w-[24px] h-[24px] "></div>
              </span>
              <span className="text-xs font-['Raleway'] font-semibold">Piscinas incríveis</span>
            </label>
          </button>
          
          <button onClick={() => setTab(6)} className={`pb-3 pt-4 border-b-2 solid border-transparent transition-[0.3s]  ${Tab == 6 ? 'text-black border-b-black' : ' text-[#717171] hover:border-neutral-400/40 hover:text-[#222222] opacity-70 hover:opacity-100'}`}>

            <label className="cursor-pointer" htmlFor="block">
              <span className="flex items-center justify-center">
                <div style={{backgroundImage: 'url(/src/assets/Icons-Image/7.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center'}} className="w-[24px] h-[24px] "></div>
              </span>
              <span className="text-xs font-['Raleway'] font-semibold">Em frente à praia</span>
            </label>
          </button>

          <button onClick={() => setTab(7)} className={`pb-3 pt-4 border-b-2 solid border-transparent transition-[0.3s]  ${Tab == 7 ? 'text-black border-b-black' : ' text-[#717171] hover:border-neutral-400/40 hover:text-[#222222] opacity-70 hover:opacity-100'}`}>

            <label className="cursor-pointer" htmlFor="block">
              <span className="flex items-center justify-center">
                <div style={{backgroundImage: 'url(/src/assets/Icons-Image/8.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center'}} className="w-[24px] h-[24px] "></div>
              </span>
              <span className="text-xs font-['Raleway'] font-semibold">No interior</span>
            </label>
          </button>

          <button onClick={() => setTab(8)} className={`pb-3 pt-4 border-b-2 solid border-transparent transition-[0.3s]  ${Tab == 8 ? 'text-black border-b-black' : ' text-[#717171] hover:border-neutral-400/40 hover:text-[#222222] opacity-70 hover:opacity-100'}`}>

            <label className="cursor-pointer" htmlFor="block">
              <span className="flex items-center justify-center">
                <div style={{backgroundImage: 'url(/src/assets/Icons-Image/9.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center'}} className="w-[24px] h-[24px] "></div>
              </span>
              <span className="text-xs font-['Raleway'] font-semibold">Chalés</span>
            </label>
          </button>

          <button onClick={() => setTab(9)} className={`pb-3 pt-4 border-b-2 solid border-transparent transition-[0.3s]  ${Tab == 9 ? 'text-black border-b-black' : ' text-[#717171] hover:border-neutral-400/40 hover:text-[#222222] opacity-70 hover:opacity-100'}`}>

            <label className="cursor-pointer" htmlFor="block">
              <span className="flex items-center justify-center">
                <div style={{backgroundImage: 'url(/src/assets/Icons-Image/10.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center'}} className="w-[24px] h-[24px] "></div>
              </span>
              <span className="text-xs font-['Raleway'] font-semibold">Pousadas</span>
            </label>
          </button>

          <button onClick={() => setTab(10)} className={`pb-3 pt-4 border-b-2 solid border-transparent transition-[0.3s]  ${Tab == 10 ? 'text-black border-b-black' : ' text-[#717171] hover:border-neutral-400/40 hover:text-[#222222] opacity-70 hover:opacity-100'}`}>

            <label className="cursor-pointer" htmlFor="block">
              <span className="flex items-center justify-center">
                <div style={{backgroundImage: 'url(/src/assets/Icons-Image/11.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center'}} className="w-[24px] h-[24px] "></div>
              </span>
              <span className="text-xs font-['Raleway'] font-semibold">Vistas íncriveis</span>
            </label>
          </button>

          <button onClick={() => setTab(11)} className={`pb-3 pt-4 border-b-2 solid border-transparent transition-[0.3s]  ${Tab == 11 ? 'text-black border-b-black' : ' text-[#717171] hover:border-neutral-400/40 hover:text-[#222222] opacity-70 hover:opacity-100'}`}>

            <label className="cursor-pointer" htmlFor="block">
              <span className="flex items-center justify-center">
                <div style={{backgroundImage: 'url(/src/assets/Icons-Image/12.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center'}} className="w-[24px] h-[24px] "></div>
              </span>
              <span className="text-xs font-['Raleway'] font-semibold">Vinhedos</span>
            </label>
          </button>

          <button onClick={() => setTab(12)} className={`pb-3 pt-4 border-b-2 solid border-transparent transition-[0.3s]  ${Tab == 12 ? 'text-black border-b-black' : ' text-[#717171] hover:border-neutral-400/40 hover:text-[#222222] opacity-70 hover:opacity-100'}`}>

            <label className="cursor-pointer" htmlFor="block">
              <span className="flex items-center justify-center">
                <div style={{backgroundImage: 'url(/src/assets/Icons-Image/13.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center'}} className="w-[24px] h-[24px] "></div>
              </span>
              <span className="text-xs font-['Raleway'] font-semibold">Tropical</span>
            </label>
          </button>

          <button onClick={() => setTab(13)} className={`pb-3 pt-4 border-b-2 solid border-transparent transition-[0.3s]  ${Tab == 13 ? 'text-black border-b-black' : ' text-[#717171] hover:border-neutral-400/40 hover:text-[#222222] opacity-70 hover:opacity-100'}`}>

            <label className="cursor-pointer" htmlFor="block">
              <span className="flex items-center justify-center">
                <div style={{backgroundImage: 'url(/src/assets/Icons-Image/14.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center'}} className="w-[24px] h-[24px] "></div>
              </span>
              <span className="text-xs font-['Raleway'] font-semibold">Casas na árvore</span>
            </label>
          </button> 

          </div>



            <div className=" bg-gradient-to-l from-[#fff] to-transparent w-16 h-[4.875rem] ">
                <span className="absolute top-7 right-0 p-[0.313rem] border rounded-[50%] z-[1000] bg-[#fff] border-neutral-400 cursor-pointer " > <BsChevronRight className="w-4 h-4" /> </span>
              </div>
            </div>
            <div className="w-[7.305rem] flex items-center">
              <span className="flex items-center w-full h-12 pl-6 ">
                <button className="flex items-center  w-full h-full border border-neutral-400/40 rounded-xl py-[0.438rem]  cursor-pointer">
                  <span className="flex items-center gap-2  px-4 pt-0.5 w-full text-xs font-medium "><RiEqualizerLine className="w-4 h-4"/> Filtros</span>
                </button>
              </span>
            </div>

            <div className="w-[15.384rem] flex items-center">
              <span className="flex items-center w-full h-12 pl-4 ">
                <button className="flex items-center justify-between w-full h-12 px-4  border border-neutral-400/40 rounded-xl text-xs font-medium " role="group">Exibir o total sem impostos

                <input type="checkbox" className=" relative appearance-none inline-block w-9 h-6 cursor-pointer rounded-full bg-[#b0b0b0] transition-all  after:absolute top-0 after:w-5 after:h-5 after:translate-x-0 after:rounded-full after:bg-[#fff] after:top-0.5 after:left-0.5 checked:bg-[#222222] checked:after:translate-x-[0.75rem]" />
                
                </button>
              </span>
            </div>
          </div>

      
        </div>
      </div>
      <div className="mt-[7.5rem]">

          {Tab === 0 && <Slider /> }
          {Tab === 1 && <Slider /> }
          {Tab === 2 && <Slider /> }
          {Tab === 3 && <Slider /> }
          {Tab === 4 && <Slider /> }
          {Tab === 5 && <Slider /> }
          {Tab === 6 && <Slider /> }
          {Tab === 7 && <Slider /> }
          {Tab === 8 && <Slider /> }
          {Tab === 9 && <Slider /> }
          {Tab === 10 && <Slider /> }
          {Tab === 11 && <Slider /> }
          {Tab === 12 && <Slider /> }
          {Tab === 13 && <Slider /> }
      </div>

    </>
  )
}

export default Tabs