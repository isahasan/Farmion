import React from 'react'
import BgImg from "../Assets/About/bgImg.jpg"
import LeftImg from "../Assets/About/leftimg.jpg"

import Porduct1 from "../Assets/About/aboutgellary/prodct1.jpg"
import Porduct2 from "../Assets/About/aboutgellary/prodct2.jpg"
import Porduct3 from "../Assets/About/aboutgellary/prodct3.jpg"
import Porduct4 from "../Assets/About/aboutgellary/prodct4.jpg"
import Porduct5 from "../Assets/About/aboutgellary/prodct5.jpg"
import Porduct6 from "../Assets/About/aboutgellary/prodct6.jpg"
import Porduct7 from "../Assets/About/aboutgellary/prodct7.jpg"
import Porduct8 from "../Assets/About/aboutgellary/prodct8.jpg"

import Member1 from "../Assets/About/members/member1.jpg"
import Member2 from "../Assets/About/members/member2.jpg"
import Member3 from "../Assets/About/members/member3.jpg"
import Member4 from "../Assets/About/members/member4.jpg"

function About() {
    return (
        <div>
            <div className="relative h-screen max-w-screen">
                <div className="absolute z-10 px-16 py-32 mx-10 my-24 ">
                    <h1 className="my-10 text-6xl font-bold text-gray-800 font-Rubik" >About Company</h1>
                    <p className="text-xl text-gray-600">Home/Templates/About</p>
                </div>
                <div className="absolute z-0 -mt-12 max-h-4/5">
                    <img className="object-cover w-screen h-screen opacity-80" src={BgImg} alt="WAD'DFC"/>
                </div>
            </div>
            <div className="flex my-24 max-w-screen ">
                <div className="flex flex-col w-1/2 px-8 mx-3 ">
                    <div className="px-4">
                        <h3 className="py-3 my-3 text-xl"style={{"color":"#7FB800"}} >About Company</h3>
                        <h1 className="text-6xl font-bold text-gray-800 font-Rubik" >Fun Facts About Farmino </h1>
                    </div>
                    <p className="px-6 py-3 text-lg font-Lato ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit sint tempore corrupti nesciunt impedit quisquam, labore ullam deleniti animi repellendus!</p>
                    <div className="flex my-6 ">
                        <button className="flex items-center p-3 text-gray-900 rounded-md ">
                        <i className="mx-2 text-3xl text-yellow-500 far fa-play-circle"></i>Watch Video</button>
                    </div>
                </div>
                <div className="w-1/2 mx-2">
                    <img className="w-11/12" src={LeftImg} alt="asdmaldnfn"/>
                </div>
            </div>
            <div className="flex justify-center max-w-screen">
                <div className="flex justify-center w-1/4 ">
                    <div className="w-24 h-24 bg-green-300 rounded-full" ></div>
                    <div className="mt-3 ">
                        <h3 className="-ml-12 text-6xl font-semibold ">1568+</h3>
                        <p className="py-3 -ml-6 text-xl">Tons of harvest</p>
                    </div>
                </div>

                <div className="flex justify-center w-1/4 ">
                    <div className="w-24 h-24 bg-green-300 rounded-full" ></div>
                    <div className="mt-3 ">
                        <h3 className="-ml-12 text-6xl font-semibold ">4968</h3>
                        <p className="py-3 -ml-6 text-xl">Units of Cattle</p>
                    </div>
                </div>

                <div className="flex justify-center w-1/4 ">
                    <div className="w-24 h-24 bg-green-300 rounded-full" ></div>
                    <div className="mt-3 ">
                        <h3 className="-ml-12 text-6xl font-semibold ">457</h3>
                        <p className="py-3 -ml-6 text-xl">Hectares of farm</p>
                    </div>
                </div>

                <div className="flex justify-center w-1/4 ">
                    <div className="w-24 h-24 bg-green-300 rounded-full" ></div>
                    <div className="mt-3 ">
                        <h3 className="-ml-12 text-6xl font-semibold ">156</h3>
                        <p className="py-3 -ml-6 text-xl">Units of technic</p>
                    </div>
                </div>
                
            </div>

            <div className="flex flex-col max-w-screen">
                <div className="py-10 my-10 text-center">
                    <h2 className="text-lg" style={{"color":"#7FB800"}}>Photo Gallery </h2>
                    <h1 className="text-6xl font-bold text-gray-800 font-Rubik">Our Products</h1>
                </div>
                <div className="flex flex-wrap w-full">
                    <div className="w-1/4 px-2 py-2 ">
                        <img className="object-cover w-full h-full"  src={Porduct1} alt=""/>
                    </div>
                    <div className="w-1/4 px-2 py-2">
                        <img className="object-cover w-full h-full" src={Porduct2} alt=""/>
                    </div>
                    <div className="w-1/4 px-2 py-2">
                        <img className="object-cover w-full h-full" src={Porduct3} alt=""/>
                    </div>
                    <div className="w-1/4 px-2 py-2">
                        <img className="object-cover w-full h-full" src={Porduct4} alt=""/>
                    </div>
                    <div className="w-1/4 px-2 py-2">
                        <img className="object-cover w-full h-full" src={Porduct5} alt=""/>
                    </div>
                    <div className="w-1/4 px-2 py-2">
                        <img className="object-cover w-full h-full" src={Porduct6} alt=""/>
                    </div>
                    <div className="w-1/4 px-2 py-2">
                        <img className="object-cover w-full h-full" src={Porduct7} alt=""/>
                    </div>
                    <div className="w-1/4 px-2 py-2">
                        <img className="object-cover w-full h-full" src={Porduct8} alt=""/>
                    </div>
                </div>
            </div>

            <div className="pl-36 max-w-screen">
                <div className="py-10 my-10 ">
                    <h2 className="py-4 text-lg " style={{"color":"#7FB800"}}>Our History </h2>
                    <h1 className="text-6xl font-bold text-gray-800 font-Rubik">We're Global<br/> Organic Food Company</h1>
                </div>
                <div className="flex">
                    <div className="w-1/4 px-4 px">
                        <div className="w-8 h-8 rounded-full" style={{"background":"#7FB800"}}></div>
                        <h3 className="py-4 text-3xl font-semibold" >1986</h3>
                        <p className="font-light font-Lato">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In eaque impedit id cum expedita perspiciatis reprehenderit illo pariatur ratione itaque?</p>
                    </div>
                    <div className="w-1/4 px-4">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full" style={{"background":"#7FB800"}}> 
                            <div className="w-4 h-4 bg-gray-100 rounded-full"></div>
                        </div>
                        <h3 className="py-4 text-3xl font-semibold" >1986</h3>
                        <p className="font-light font-Lato">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In eaque impedit id cum expedita perspiciatis reprehenderit illo pariatur ratione itaque?</p>
                    </div>
                    <div className="w-1/4 px-4">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full" style={{"background":"#7FB800"}}> 
                            <div className="w-4 h-4 bg-gray-100 rounded-full"></div>
                        </div>
                        <h3 className="py-4 text-3xl font-semibold" >1986</h3>
                        <p className="font-light font-Lato">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In eaque impedit id cum expedita perspiciatis reprehenderit illo pariatur ratione itaque?</p>
                    </div>
                    <div className="w-1/4 px-4">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full" style={{"background":"#7FB800"}}> 
                        <div className="w-4 h-4 bg-gray-100 rounded-full"></div>
                        </div>
                        <h3 className="py-4 text-3xl font-semibold">1986</h3>
                        <p className="font-light font-Lato">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In eaque impedit id cum expedita perspiciatis reprehenderit illo pariatur ratione itaque?</p>
                    </div>
                </div>

            </div>
            <div className="py-8 my-24 overflow-hidden max-w-screen ">
                <div className="py-10 my-8 text-center ">
                    <h2 className="py-4 text-lg" style={{"color":"#7FB800"}}>Our Experts </h2>
                    <h1 className="text-6xl font-bold text-gray-800 font-Rubik">Farmino Farmers</h1>
                </div>
                <div className="flex justify-around mx-14 max-w-screen">
                    <div className="flex flex-col items-center">
                        <div className="w-full ">
                            <img className="object-cover w-full h-full rounded-full" src={Member1} alt=""/>
                        </div>
                        <div className="my-8">
                            <h2 className="text-2xl">Elena Gilbert</h2>
                            <h3 className="text-xl italic">Organic Farmer</h3>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-full ">
                            <img className="object-cover w-full h-full rounded-full" src={Member2} alt=""/>
                        </div>
                        <div className="my-8">
                            <h2 className="text-2xl">Elena Gilbert</h2>
                            <h3 className="text-xl italic">Organic Farmer</h3>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-full ">
                            <img className="object-cover w-full h-full rounded-full" src={Member3} alt=""/>
                        </div>
                        <div className="my-8">
                            <h2 className="text-2xl">Elena Gilbert</h2>
                            <h3 className="text-xl italic">Organic Farmer</h3>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-full ">
                            <img className="object-cover w-full h-full rounded-full" src={Member4} alt=""/>
                        </div>
                        <div className="my-8">
                            <h2 className="text-2xl">Elena Gilbert</h2>
                            <h3 className="text-xl italic">Organic Farmer</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
