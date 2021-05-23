import React from 'react'
import Bgimg2 from "../Assets/Experts/bgimg2.jpg"
import Bgimg3 from "../Assets/Experts/bgimg3.jpg"

import Member1 from "../Assets/About/members/member1.jpg"
import Member2 from "../Assets/About/members/member2.jpg"
import Member3 from "../Assets/About/members/member3.jpg"
import Member4 from "../Assets/About/members/member4.jpg"

function Experts() {
    return (
        <div>
            <div className="relative h-screen max-w-screen">
                <div className="absolute z-10 px-16 py-32 mx-10 my-24 ">
                    <h1 className="my-10 text-6xl font-bold text-gray-800 font-Rubik" >Our Farmers</h1>
                    <p className="text-xl text-gray-600">Home/Templates/Experts</p>
                </div>
                <div className="absolute z-0 -mt-12 max-h-4/5">
                    <img className="object-cover w-screen h-screen opacity-80" src={Bgimg2} alt="WAD'DFC"/>
                </div>
            </div>

            <div className="relative w-5/6 h-screen mx-auto my-24">
                <div className="absolute z-10 top-32 left-16">
                    <h1 className="text-5xl font-semibold text-gray-600 font-Rubik " >Career in our <br/> Farmino Company</h1>
                    <button className="px-16 py-3 my-12 text-xl font-bold text-white transition duration-500 ease-in-out bg-green-500 rounded-full outline-none font-Rubik hover:bg-green-700" style={{"background":"#7FB800"}}>Read More</button>
                </div>
                <div className="absolute z-0 max-h-4/5">
                    <img className="object-cover w-screen opacity-80" src={Bgimg3} alt="WAD'DFC"/>
                </div>
            </div>

            <div className="mb-32 -mt-24 max-w-screen">
                <div className="flex flex-wrap justify-around mx-14 max-w-screen">
                        <div className="flex flex-col items-center">
                            <div className="w-full ">
                                <img className="object-cover w-full h-full rounded-full" src={Member1} alt=""/>
                            </div>
                            <div className="my-8">
                                <h2 className="text-2xl text-gray-800 font-Rubik">Elena Gilbert</h2>
                                <h3 className="text-xl italic text-yellow-500 font-Rubik ">Organic Farmer</h3>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-full ">
                                <img className="object-cover w-full h-full rounded-full" src={Member2} alt=""/>
                            </div>
                            <div className="my-8">
                                <h2 className="text-2xl text-gray-800 font-Rubik">Elena Gilbert</h2>
                                <h3 className="text-xl italic text-yellow-500 font-Rubik ">Organic Farmer</h3>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-full ">
                                <img className="object-cover w-full h-full rounded-full" src={Member3} alt=""/>
                            </div>
                            <div className="my-8">
                                <h2 className="text-2xl text-gray-800 font-Rubik">Elena Gilbert</h2>
                                <h3 className="text-xl italic text-yellow-500 font-Rubik ">Organic Farmer</h3>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-full ">
                                <img className="object-cover w-full h-full rounded-full" src={Member4} alt=""/>
                            </div>
                            <div className="my-8">
                                <h2 className="text-2xl text-gray-800 font-Rubik">Elena Gilbert</h2>
                                <h3 className="text-xl italic text-yellow-500 font-Rubik ">Organic Farmer</h3>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-full ">
                                <img className="object-cover w-full h-full rounded-full" src={Member4} alt=""/>
                            </div>
                            <div className="my-8">
                                <h2 className="text-2xl text-gray-800 font-Rubik">Elena Gilbert</h2>
                                <h3 className="text-xl italic text-yellow-500 font-Rubik ">Organic Farmer</h3>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-full ">
                                <img className="object-cover w-full h-full rounded-full" src={Member4} alt=""/>
                            </div>
                            <div className="my-8">
                                <h2 className="text-2xl text-gray-800 font-Rubik">Elena Gilbert</h2>
                                <h3 className="text-xl italic text-yellow-500 font-Rubik ">Organic Farmer</h3>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-full ">
                                <img className="object-cover w-full h-full rounded-full" src={Member4} alt=""/>
                            </div>
                            <div className="my-8">
                                <h2 className="text-2xl text-gray-800 font-Rubik">Elena Gilbert</h2>
                                <h3 className="text-xl italic text-yellow-500 font-Rubik ">Organic Farmer</h3>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-full ">
                                <img className="object-cover w-full h-full rounded-full" src={Member4} alt=""/>
                            </div>
                            <div className="my-8">
                                <h2 className="text-2xl text-gray-800 font-Rubik">Elena Gilbert</h2>
                                <h3 className="text-xl italic text-yellow-500 font-Rubik ">Organic Farmer</h3>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Experts
