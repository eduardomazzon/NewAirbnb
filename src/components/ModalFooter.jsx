import React from 'react'
import { MdClose } from 'react-icons/md';

const ModalFooter = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <>
      <div onClick={onClose} className="overlay bg-black/50 fixed w-[100%] h-[100%] z-[1000]">
        <div className="content w-full h-[66.69%] bg-white fixed z-[1000000] bottom-0 rounded-t-xl">
          
          <span className=" fixed top-[12.5rem] left-6 cursor-pointer"><MdClose className="w-5 h-5" /></span>

          <div className="flex w-full h-[15.2rem] items-center mt-12 mb-[4.13rem] px-20">
            <div className="w-full grid grid-cols-1 md:grid-cols-3 mx-3 space-x-3 ">

              <div className="h-[15.2rem]">
                <span className=" flex text-[#222222] font-inter font-medium text-base mb-1.5">Atendimento</span>

                <ul className="space-y-2">
                  <li><a className="text-[#222222] font-inter hover:underline" href="">Central de Ajuda</a></li>
                  <li><a className="text-[#222222] font-inter hover:underline" href="">Receber ajuda com problema de segurança</a></li>
                  <li><a className="text-[#222222] font-inter hover:underline" href="">AirCover</a></li>
                  <li><a className="text-[#222222] font-inter hover:underline" href="">Antidiscriminação</a></li>
                  <li><a className="text-[#222222] font-inter hover:underline" href="">Apoio à pessoa com deficiência</a></li>
                  <li><a className="text-[#222222] font-inter hover:underline" href="">Opções de cancelamento</a></li>
                  <li><a className="text-[#222222] font-inter hover:underline" href="">Reporte um problema no bairro</a></li>
                </ul>
              </div>
              
              <div className="h-[15.2rem]">
                <span className=" flex text-[#222222] font-inter font-medium text-base mb-1.5">Hospedagem</span>

                <ul className="space-y-2">
                  <li><a className="text-[#222222] font-inter hover:underline" href="">Anuncie seu espaço Airbnb</a></li>
                  <li><a className="text-[#222222] font-inter hover:underline" href="">AirCover para anfitriões</a></li>
                  <li><a className="text-[#222222] font-inter hover:underline" href="">Recursos para anfitriõesr</a></li>
                  <li><a className="text-[#222222] font-inter hover:underline" href="">Fórum da comunidade</a></li>
                  <li><a className="text-[#222222] font-inter hover:underline" href="">Hospedagem responsável</a></li>
                </ul>
              </div>
              
              <div className="h-[15.2rem]">
                <span className=" flex text-[#222222] font-inter font-medium text-base mb-1.5">Airbnb</span>

                <ul className="space-y-2">
                  <li><a className="text-[#222222] font-inter hover:underline" href="">Newsroom</a></li>
                  <li><a className="text-[#222222] font-inter hover:underline" href="">Novos recursos</a></li>
                  <li><a className="text-[#222222] font-inter hover:underline" href="">Carreiras</a></li>
                  <li><a className="text-[#222222] font-inter hover:underline" href="">Investidores</a></li>
                  <li><a className="text-[#222222] font-inter hover:underline" href="">Locais emergenciais Airbnb.org</a></li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ModalFooter