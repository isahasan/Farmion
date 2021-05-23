import React from 'react'
import SinglePimg from '../Assets/SinglePost/SinglePost.jpg'

import s1 from "../Assets/slider/s1.jpg"
import s2 from "../Assets/slider/s2.jpg"
import s3 from "../Assets/slider/s3.jpg"
import s4 from "../Assets/slider/s4.jpg"
import s5 from "../Assets/slider/s5.jpg"


function SinglePost() {
    return (
        <div>
            <div className="max-h-screen mx-4 max-w-screen ">
                <img className=" max-w-screen" src={SinglePimg} alt=""/>
            </div>
            <div className="max-w-full px-20 mx-20 my-36">
                <p className="text-base font-medium text-gray-700 "><span className="text-green-500">Home</span> / Reasons why you should choose organic</p>
                <div className="py-8 my-6">
                        <h1 className="font-bold text-gray-600 font-Rubik text-8xl">Eat Clean <br/>Eat Organic </h1>
                </div>
                <ul className="flex justify-around w-1/2 mb-6">
                    <li className="flex " >
                        <span className="mx-1 text-green-500 "><i className="far fa-user-circle"></i></span>
                        <span className="">merkulove</span>
                    </li>
                    <li className="flex " >
                        <span className="mx-1 text-green-500"><i className="fas fa-calendar"></i></span>
                        <span className="">August 4, 2020</span>
                    </li>
                    <li className="flex " >
                        <span className="mx-1 text-green-500"><i className="far fa-comment-dots"></i></span>
                        <span className="">No Comments</span>
                    </li>
				</ul>
                <div className="max-w-full">
                    <p className="mb-2 text-base font-medium text-gray-700 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elit nibh, tincidunt eu metus eu, vestibulum posuere enim. Sed sodales, lorem eget pharetra ultrices, felis orci malesuada ipsum, eu posuere risus sem vitae augue. Phasellus sed nulla sapien. Maecenas vitae efficitur velit. Suspendisse potenti. In viverra dui nec sem condimentum venenatis. Nam quis risus vitae massa blandit placerat eu in ex. Ut ultrices orci non lorem egestas vulputate.</p>
                        <ul className="px-10 my-2">            
                            <li className="text-base text-gray-700 list-disc ">Nullam rutrum neque turpis, ac blandit tellu</li>
                            <li className="text-base text-gray-700 list-disc ">Nam pharetra, libero a suscipit</li>        
                            <li className="text-base text-gray-700 list-disc ">In ut euismod magna. Phasellus finibus hendrerit quam</li>                            
                        </ul>
                        
                        <p className="mb-2 text-base font-medium text-gray-700 "> Praesent mattis quam sed nisi molestie consectetur. Donec nec interdum ex, vitae mattis diam. Phasellus porta ornare nulla, lacinia elementum nunc aliquam sit amet. Sed ut ultrices magna. Cras semper pulvinar felis quis facilisis. Aliquam nec lacus arcu. Donec nec nunc purus. In id aliquet sem, a facilisis mauris. Morbi vitae est vel libero laoreet placerat.Sed blandit quam quis erat dignissim dapibus. Duis porttitor lectus ut nibh vestibulum, nec porta turpis volutpat. Sed felis dui, rhoncus vitae neque et, fermentum aliquet est. Nulla libero quam, tempus vitae eleifend at, fermentum aSteve Brady</p>

                        <blockquote className="p-6 text-gray-600 "> Quisque non eros id neque pulvinar aliquet vitae quis nisl. Integer cursus tempor ipsum quis tincidunt. Nam pharetra, libero a suscipit tincidunt, neque metus bibendum metus, vitae venenatis lacus urna vitae ligula. Vivamus malesuada diam sollicitudin urna rhoncus, nec egestas tortor commodo
                        <br/>
                        <span className="text-lg text-green-500 ">Steve Brady</span>
                        </blockquote>
                        <p className="mb-2 text-base font-medium text-gray-700 ">Praesent ligula nulla, aliquet sed congue quis, sollicitudin ut urna. Ut tempus, enim nec vestibulum ullamcorper, ligula risus interdum turpis, sed bibendum odio lorem in tellus. Morbi luctus porta neque nec efficitur. Nullam egestas rhoncus lectus et feugiat. Donec tincidunt bibendum sem, sit amet molestie ante elementum quis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut porttitor vitae lectus non ullamcorper. Nullam bibendum ante sit amet lectus pellentesque vehicula. Morbi viverra ex nec nibh eleifend, quis iaculis risus egestas.</p>
                        <ol className="px-10 my-2">
                            <li className="text-base text-gray-700 list-decimal ">Vivamus malesuada diam sollicitudin</li>
                            <li className="text-base text-gray-700 list-decimal ">Curabitur vestibulum, mi vel ferm</li>
                            <li className="text-base text-gray-700 list-decimal ">Euismod magna. Phasellus finibus hendrerit</li>    
                        </ol>    

                        
                       <p className="mb-2 text-base font-medium text-gray-700 " > Donec luctus ex sed diam hendrerit, et ultricies tortor efficitur. Mauris sodales ultricies lacus. Praesent aliquam, nunc ut vulputate semper, nulla leo dictum ante, nec efficitur elit est at erat. Pellentesque aliquam semper purus, eget scelerisque metus sollicitudin sit amet. Nulla tristique sagittis odio et pharetra. Etiam sem nulla, dignissim ut bibendum id, venenatis eu quam. Vivamus vitae ex vel ex varius faucibus. Phasellus varius luctus sodales. Nunc nibh enim, ultrices ac eleifend sit amet, egestas at leo.</p>

                        <p className="mb-2 text-base font-medium text-gray-700 "> Nunc eu magna vitae nisl sodales sagittis aliquet non turpis. Morbi finibus accumsan mi, quis fermentum eros imperdiet at. Vivamus suscipit mauris non nibh sagittis, ac blandit sem euismod. Ut congue erat sed aliquet rhoncus. Nam sagittis justo eget lorem imperdiet, et volutpat nibh cursus. Nulla aliquam tortor et est fringilla efficitur. Sed fermentum ex vel urna convallis lobortis. Quisque egestas leo at purus dignissim, ac egestas mi rhoncus.</p>
                </div>

                <div className="flex justify-around py-6 my-10 max-w-screen">
                    <img className="px-2 w-60 h-36" src={s1} alt=""/> 
                    <img className="px-2 w-60 h-36" src={s2} alt=""/>
                    <img className="px-2 w-60 h-36" src={s3} alt=""/>
                    <img className="px-2 w-60 h-36" src={s4} alt=""/>
                    <img className="px-2 w-60 h-36" src={s5} alt=""/>
                </div>

                <div className="flex max-w-full mx-16">
                    <div className="flex items-center w-1/2 border-r-2">
                        <i className="p-4 fa fa-arrow-left"></i>
                        <div className="p-4 font-semibold">
                            <h3 className="text-lg font-normal text-gray-600 font-Rubik">previous</h3>
                            <h3 className="text-gray-600 font-Rubik">Health Benefits of a Raw Food</h3>
                        </div>
                    </div>
                    <div className="flex items-center w-1/2">
                        <div className="p-4 font-semibold">
                            <h3 className="text-lg font-normal text-right text-gray-600 font-Rubik">Next</h3>
                            <h3 className="text-gray-600 font-Rubik">Reasons why you should choose organic</h3>
                        </div>
                        <i className="p-4 fa fa-arrow-right"></i>
                    </div>
                </div>
                <div className="py-8 my-6">
                    <h1 className="font-bold text-gray-600 font-Rubik text-8xl">Leave a Reply</h1>
                </div>
                <p className="my-16 text-base font-medium text-gray-700 ">Your email address will not be published. Required fields are marked *</p>
                <div className="w-full my-10">
                    <form action="">
                        <textarea className="w-full px-6 py-4 my-4 border-2 outline-none rounded-2xl " name="" placeholder="Message" id="" cols="30" rows="6"></textarea>
                        <input className="w-full px-6 py-4 my-4 border-2 rounded-full outline-none " placeholder="Name" type="text" />
                        <input className="w-full px-6 py-4 my-4 border-2 rounded-full outline-none " placeholder="E-mail" type="text" />
                        <input className="block p-4 my-4 border-2 " type="checkbox" value='yes' name="" id=""/>
                        <button className="px-20 py-3 text-white transition duration-500 ease-in-out bg-green-600 rounded-full hover:bg-green-900" style={{"background":"#7FB800"}}>Submit</button>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SinglePost
