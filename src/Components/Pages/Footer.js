import React from 'react'
import logo from '../Assets/logo/Logo.jpg'
import Vegetables2 from "../Assets/images/vegetables2.jpg"

function Footer() {
    return (
        <div className="relative">
        <div className="absolute z-10">
        <div className="flex px-4 max-w-screen">
            <div className="flex flex-col w-1/2 px-10 py-32 mx-1 ">
                <div className="px-8 py-8 my-6">
                    <img src={logo} alt=""/>
                </div>
                <p className="px-8 py-3 text-lg text-gray-600 font-Lato ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit sint tempore corrupti nesciunt impedit quisquam, labore ullam deleniti animi repellendus!</p>
                <div className="flex ">
                    <i style={{"color": "#0F9B0F"}} className="p-4 m-3 text-4xl fab fa-instagram"></i>
                    <i style={{"color": "#0F9B0F"}} className="p-4 m-3 text-4xl fab fa-youtube"></i>
                    <i style={{"color": "#0F9B0F"}} className="p-4 m-3 text-4xl fab fa-facebook"></i>
                    <i style={{"color": "#0F9B0F"}} className="p-4 m-3 text-4xl fab fa-linkedin"></i>
                </div>
                <p className="px-8 py-3 text-lg text-gray-600 font-Lato ">Merkulove © Farmino Template All rights reserved Copyrights 2020</p>

            </div>
            <div className="flex flex-col justify-center w-1/2 px-10 py-32 -mt-16 bg-gradient-to-b from-green-700 to-green-300 align-center rounded-t-3xl">
                <div className="px-8 py-8 my-6 text-center">
                    <h1 className="my-5 text-6xl font-bold text-gray-100 font-Rubik">Be Informed </h1>
                    <h2 className="text-3xl font-semibold text-gray-100" >Sign up for newsletter </h2>
                </div>
                <p className="px-8 py-3 text-lg text-center text-gray-100 font-Lato ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit sint tempore corrupti nesciunt impedit quisquam, labore ullam deleniti animi repellendus!</p>
                <div className="flex flex-col items-center justify-center px-8 my-8 ">
                    <input className="w-full px-6 py-4 my-3 border-2 rounded-full outline-none " placeholder="E-mail" type="text" />
                    <button className="w-1/2 px-10 py-4 text-lg font-normal transition duration-500 ease-in-out bg-yellow-500 border-2 rounded-full text-green-50 hover:bg-green-900 hover:text-white ">Submit Now</button>
                </div>
            </div>
        </div>
        </div>
    <img className="absolute top-0 z-0 w-screen opacity-30" src={Vegetables2} alt=""/>
    </div>
    )
}

export default Footer
