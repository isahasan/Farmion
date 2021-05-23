import React from 'react'
import Bgimg2 from "../Assets/Gallery/bgimg5.jpg"

import Porduct1 from "../Assets/Gallery/gallery1.jpg"
import Porduct2 from "../Assets/Gallery/gallery2.jpg"
import Porduct3 from "../Assets/Gallery/gallery3.jpg"
import Porduct4 from "../Assets/Gallery/gallery4.jpg"
import Porduct5 from "../Assets/Gallery/gallery5.jpg"
import Porduct6 from "../Assets/Gallery/gallery6.jpg"
import Porduct7 from "../Assets/Gallery/gallery7.jpg"
import Porduct8 from "../Assets/Gallery/gallery8.jpg"
import Porduct9 from "../Assets/Gallery/gallery9.jpg"
import Porduct10 from "../Assets/Gallery/gallery10.jpg"
import Porduct11 from "../Assets/Gallery/gallery11.jpg"
import Porduct12 from "../Assets/Gallery/gallery12.jpg"
import Porduct13 from "../Assets/Gallery/gallery13.jpg"


function Gallery() {
    return (
        <div>
            <div className="relative h-screen max-w-screen">
                <div className="absolute z-10 px-16 py-32 mx-10 my-24 ">
                    <h1 className="my-10 text-6xl font-bold text-gray-800 font-Rubik" >Gallery</h1>
                    <p className="text-xl text-gray-600">Home/Templates/Gallery</p>
                </div>
                <div className="absolute z-0 -mt-12 max-h-4/5">
                    <img className="object-cover w-screen h-screen opacity-80" src={Bgimg2} alt="WAD'DFC"/>
                </div>
            </div>
            <div className="flex flex-wrap justify-center max-w-full mx-16 my-36">
                    <div className="w-1/3 px-2 py-2 ">
                        <img className="object-cover w-full h-full"  src={Porduct1} alt=""/>
                    </div>
                    <div className="w-1/3 px-2 py-2">
                        <img className="object-cover w-full h-full" src={Porduct2} alt=""/>
                    </div>
                    <div className="w-1/3 px-2 py-2">
                        <img className="object-cover w-full h-full" src={Porduct3} alt=""/>
                    </div>
                    <div className="w-1/3 px-2 py-2">
                        <img className="object-cover w-full h-full" src={Porduct4} alt=""/>
                    </div>
                    <div className="w-1/3 px-2 py-2">
                        <img className="object-cover w-full h-full" src={Porduct5} alt=""/>
                    </div>
                    <div className="w-1/3 px-2 py-2">
                        <img className="object-cover w-full h-full" src={Porduct6} alt=""/>
                    </div>
                    <div className="w-1/3 px-2 py-2">
                        <img className="object-cover w-full h-full" src={Porduct7} alt=""/>
                    </div>
                    <div className="w-1/3 px-2 py-2">
                        <img className="object-cover w-full h-full" src={Porduct8} alt=""/>
                    </div>
                    <div className="w-1/3 px-2 py-2">
                        <img className="object-cover w-full h-full" src={Porduct9} alt=""/>
                    </div>
                    <div className="w-1/3 px-2 py-2">
                        <img className="object-cover w-full h-full" src={Porduct10} alt=""/>
                    </div>
                    <div className="w-1/3 px-2 py-2">
                        <img className="object-cover w-full h-full" src={Porduct11} alt=""/>
                    </div>
                    <div className="w-1/3 px-2 py-2">
                        <img className="object-cover w-full h-full" src={Porduct12} alt=""/>
                    </div>
                    <div className="w-1/3 px-2 py-2">
                        <img className="object-cover w-full h-full" src={Porduct13} alt=""/>
                    </div>
                </div>
            
        </div>
    )
}

export default Gallery
