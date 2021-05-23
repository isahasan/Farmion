import React,{useState} from 'react'
import Bgimg2 from "../Assets/Experts/bgimg2.jpg"
import Blogs8 from "../Assets/blogs/blogs8.jpg"


import s1 from "../Assets/slider/s1.jpg"
import s2 from "../Assets/slider/s2.jpg"
import s3 from "../Assets/slider/s3.jpg"
import s4 from "../Assets/slider/s4.jpg"
import s5 from "../Assets/slider/s5.jpg"
import s6 from "../Assets/slider/s6.jpg"
import s7 from "../Assets/slider/s7.jpg"
import s8 from "../Assets/slider/s8.jpg"

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


function Faq() {
    const [active1, setActive1] = useState(false)
    const [active2, setActive2] = useState(false)
    const [active3, setActive3] = useState(false)
    const [active4, setActive4] = useState(false)

    const settings = {
        dots: true,
        infinite: true,
        speed:500,
        slidesToShow: 4,
        slidesToScroll: 1,
        cssEase: 'linear',
        autoplay:true
    };
    return (
        <div>
            <div className="relative h-screen max-w-screen">
                <div className="absolute z-10 px-16 py-32 mx-10 my-24 ">
                    <h1 className="my-10 text-6xl font-bold text-gray-800 font-Rubik" >FAQ</h1>
                    <p className="text-xl text-gray-600 ">Home/Templates/Faq</p>
                </div>
                <div className="absolute z-0 -mt-12 max-h-4/5">
                    <img className="object-cover w-screen h-screen opacity-80" src={Bgimg2} alt="WAD'DFC"/>
                </div>
            </div>
            <div className="flex max-w-full py-5 mt-36">
                <div className="w-2/3 px-10">
                    <div className="border-t border-l border-r border-gray-600">
                        <h3 onClick={()=>setActive1(!active1)} className="px-3 py-2 text-lg font-semibold text-left text-gray-600 border-b border-gray-600">Is all your produce certified organic?</h3>
                        <p className={`px-3 py-3 ${active1? " " : "hidden transform "} font-light font-Lato transition text-gray-600 duration-300 ease-in-out border-b border-gray-600   `}>Etiam semper felis metus, sit amet iaculis mi iaculis lobortis. Morbi finibus pellentesque magna sit amet convallis. Aenean quis maximus mi. Morbi lacinia metus vitae mauris laoreet, vitae interdum nisl vulputate. Integer nec vulputate mauris. In hac habitasse platea dictumst. In odio sem, ullamcorper quis velit vulputate, euismod pretium lectus.</p>

                        <h3 onClick={()=>setActive2(!active2)} className="px-3 py-2 text-lg font-semibold text-left text-gray-600 border-b border-gray-600">Is all your produce certified organic?</h3>
                        <p className={`px-3 py-3 ${active2? " " : "hidden"} border-b font-light font-Lato text-gray-600 border-gray-600 `}>Etiam semper felis metus, sit amet iaculis mi iaculis lobortis. Morbi finibus pellentesque magna sit amet convallis. Aenean quis maximus mi. Morbi lacinia metus vitae mauris laoreet, vitae interdum nisl vulputate. Integer nec vulputate mauris. In hac habitasse platea dictumst. In odio sem, ullamcorper quis velit vulputate, euismod pretium lectus.</p>

                        <h3 onClick={()=>setActive3(!active3)} className="px-3 py-2 text-lg font-semibold text-left text-gray-600 border-b border-gray-600">Is all your produce certified organic?</h3>
                        <p className={`px-3 py-3 ${active3? " " : "hidden"} border-b font-light font-Lato text-gray-600 border-gray-600 `}>Etiam semper felis metus, sit amet iaculis mi iaculis lobortis. Morbi finibus pellentesque magna sit amet convallis. Aenean quis maximus mi. Morbi lacinia metus vitae mauris laoreet, vitae interdum nisl vulputate. Integer nec vulputate mauris. In hac habitasse platea dictumst. In odio sem, ullamcorper quis velit vulputate, euismod pretium lectus.</p>

                        <h3 onClick={()=>setActive4(!active4)} className="px-3 py-2 text-lg font-semibold text-left text-gray-600 border-b border-gray-600">Is all your produce certified organic?</h3>
                        <p className={`px-3 py-3 ${active4? " " : "hidden"} border-b font-light font-Lato text-gray-600 border-gray-600 `}>Etiam semper felis metus, sit amet iaculis mi iaculis lobortis. Morbi finibus pellentesque magna sit amet convallis. Aenean quis maximus mi. Morbi lacinia metus vitae mauris laoreet, vitae interdum nisl vulputate. Integer nec vulputate mauris. In hac habitasse platea dictumst. In odio sem, ullamcorper quis velit vulputate, euismod pretium lectus.</p>
                    </div>
                </div>
                <div className="w-1/3 ">                                          
                    <div className="relative h-screen max-w-md rounded-lg mx-14 ">
                        <div className="absolute z-10 flex flex-col items-center top-24 w-sm">
                            <h2 className="mx-10 my-8 text-3xl font-bold text-center text-gray-800 font-Rubik text-semibold ">Best Offers for Restaurants</h2>
                            <button className="px-20 py-3 text-white transition duration-500 ease-in-out bg-green-600 rounded-full hover:bg-green-900" style={{"background":"#7FB800"}}>Submit</button>
                        </div>
                        <img className="absolute z-0 w-full h-2/3 opacity-60" src={Blogs8} alt=""/>
                    </div>
                </div>
            </div>

            <div className="block px-10 py-6 -mt-20 overflow-hidden mb-36 max-w-screen">
                <Slider {...settings}>
                    <img className="" src={s1} alt=""/> 
                    <img className="" src={s2} alt=""/>
                    <img className="" src={s3} alt=""/>
                    <img className="" src={s4} alt=""/>
                    <img className="" src={s5} alt=""/>
                    <img className="" src={s6} alt=""/>
                    <img className="" src={s7} alt=""/>
                    <img className="" src={s8} alt=""/>
                </Slider>
            </div>
        </div>
    )
}

export default Faq
