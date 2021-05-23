import React from 'react'
import Bgimg2 from "../Assets/Experts/bgimg2.jpg"
import GoogleMap from '../GoogleMap'


function Contact() {
    return (
        <div>
            <div className="relative h-screen max-w-screen">
                <div className="absolute z-10 px-16 py-32 mx-10 my-24 ">
                    <h1 className="my-10 text-6xl font-bold text-gray-800 font-Rubik" >Contact us</h1>
                    <p className="text-xl text-gray-600 ">Home/Templates/Contact</p>
                </div>
                <div className="absolute z-0 -mt-12 max-h-4/5">
                    <img className="object-cover w-screen h-screen opacity-80" src={Bgimg2} alt="WAD'DFC"/>
                </div>
            </div>

            <div className="flex items-center mx-16 my-32 overflow-hidden max-w-screen">
                <div className="w-1/2 h-screen px-3 ">
                    <div className="w-full">
                        <h3 className="py-3 text-xl font-semibold text-gray-600 font-Rubik " style={{"color":"#7FB800"}} >Stay Connected</h3>
                        <h2 className="py-3 text-6xl font-semibold text-gray-600 font-Rubik">Get in touch</h2>
                        <h3 className="py-3 text-xl font-semibold text-gray-600 font-Rubik" style={{"color":"#7FB800"}}>Address</h3>
                        <p className="py-3 text-gray-600 font-Lato">Vivamus congue mi et <br/> nunc vehicula Street , 58</p>
                    </div>
                    <div className="relative w-full h-full max-w-full">
                        <GoogleMap/>
                    </div>

                </div>
                <div className="w-1/2 px-3">
                    <div className="flex w-full ">
                        <div className="w-full">
                            <h3 className="py-3 text-xl font-semibold text-gray-600" style={{"color":"#7FB800"}}>Phone</h3>
                            <p className="py-3 font-semibold text-gray-600 font-Lato">+844 123 456 789 <br/>+844 123 456 789</p>
                        </div>
                        <div className="w-full">
                            <h3 className="py-3 text-xl font-semibold text-gray-600" style={{"color":"#7FB800"}}>EMAIL</h3>
                            <p className="py-3 font-semibold text-gray-600 font-Lato">contact@company.com <br/>info@company.com</p>
                        </div>
                    </div>
                    <div className="w-full my-10">
                        <form action="">
                            <div className="flex ">
                            <input className="w-full px-6 py-4 mr-3 border-2 rounded-full outline-none " placeholder="Name" type="text" />
                                <input className="w-full px-6 py-4 border-2 rounded-full outline-none " placeholder="E-mail" type="text" />
                            </div>
                            <textarea className="w-full px-6 py-4 my-4 border-2 outline-none rounded-2xl " name="" placeholder="Message" id="" cols="30" rows="6"></textarea>
                            <button className="px-20 py-3 text-white transition duration-500 ease-in-out bg-green-600 rounded-full hover:bg-green-900"style={{"background":"#7FB800"}}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
