import React, { useState, useEffect } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { AiFillStar } from 'react-icons/ai'
import axios from 'axios';

const Slider = () => {

    const [Products, setProducts] = useState([]);

    useEffect(() => {
        async function load(){
            const { data } = await axios.get(`https://dummyjson.com/products`);
            setProducts(data?.products);
            console.log(data?.products)
        }
        load()
    }, [])

    const slides = [
        '../../src/assets/Images/1a.jpg',
        '../../src/assets/Images/2a.jpg',
        '../../src/assets/Images/3a.jpg',
        '../../src/assets/Images/4a.jpg',
        '../../src/assets/Images/5a.jpg',
        '../../src/assets/Images/6a.jpg',
        '../../src/assets/Images/7a.jpg',
        '../../src/assets/Images/8a.jpg',
        
    ];

    const [currentIndex, setCurrentIndex] = useState(0)
  

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isFirstSlide = currentIndex === slides.length - 1;
        const newIndex = isFirstSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const ProductComponent = ({item}) => {

        const [Index, setIndex] = useState(0);

        const ChangeImage = (i) => {
            if(i > slides.length){
                setIndex(slides.length)
            }else{
                setIndex(i)

            }
        }

        return(
            <div>
                <div className="w-[18.710rem] h-[17.8rem] m-auto  relative group ">
                    <div style={{backgroundImage: `url(${slides[Index]})`}}
                        className="w-full h-full rounded-xl bg-center bg-cover duration-500">
                    </div>

                    <div className="hidden group-hover:block absolute top-[55%] translate-x-3 -translate-y-[100%]
                    left-50 text-2xl rounded-full p-2 bg-[#f0f2f1] text-black hover:bg-[#ffffff] cursor-pointer ">
                    <BsChevronCompactLeft onClick={() => ChangeImage(Index+1)} size={15} />
                    </div>
                    <div className="hidden group-hover:block absolute top-[55%] translate-x-64 -translate-y-[100%]
                    right-50 text-2xl rounded-full p-2 bg-[#f0f2f1] text-black hover:bg-[#ffffff] cursor-pointer ">
                    <BsChevronCompactRight onClick={() => ChangeImage(Index-1)} size={15} />
                    </div>
                </div> 
                <div className="text-sm font-['Raleway'] text-[#000] font-semibold my-2 mt-4">{item?.title}</div>
                <div className="text-normal font-['Raleway'] text-[#717171]">{item?.description}</div>
                <div className="text-normal font-['Raleway'] font-semibold">R${item?.price}</div>
                <div className="flex items-center space-x-2"><AiFillStar />{item?.rating}</div>
            </div>
        )
    }

  

  return (

    <>  
    <div className="w-full container-full grid grid-cols-1 md:grid-cols-4 px-10 mb-[4.5rem] gap-x-6 gap-y-10 ">
    {Products.map(item => <ProductComponent item={item} />)}
</div>
  </>           
  )
}

export default Slider