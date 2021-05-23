import React from 'react'
import {Link} from 'react-router-dom'
import Bgimg2 from "../Assets/Experts/bgimg2.jpg"
import Post1 from '../Assets/blogs/blogs1.jpg'
import Blogs8 from '../Assets/blogs/blogs8.jpg'


function Blog() {
    return (
        <div>
            <div className="relative h-screen max-w-screen">
                <div className="absolute z-10 px-16 py-32 mx-10 my-24 ">
                    <h1 className="my-10 text-6xl font-bold text-gray-800 font-Rubik" >Blogs</h1>
                    <p className="text-xl text-gray-600 ">Home/Templates/Blogs</p>
                </div>
                <div className="absolute z-0 -mt-12 max-h-4/5">
                    <img className="object-cover w-screen h-screen opacity-80" src={Bgimg2} alt="WAD'DFC"/>
                </div>
            </div>
            <div className="my-24 overflow-x-hidden ">
            <div className="px-6 py-8">
                <div className="container flex justify-between mx-auto">
                    <div className="w-full lg:w-8/12">
                        <div className="flex items-center justify-between">
                            <h1 className="text-xl font-bold text-gray-700 font-Rubik md:text-2xl">Post</h1>
                            <div>
                                <select className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                                    <option>Latest</option>
                                    <option>Last Week</option>
                                </select>
                            </div>
                        </div>
                        <div className="mt-6">
                            <div className="flex max-w-4xl px-10 py-6 bg-white rounded-lg shadow-md ">
                                <div className="w-1/2">
                                    <img className="w-full h-full" src={Post1} alt=""/>
                                </div>
                                <div className="w-1/2 mx-4">
                                    <div className="">
                                        <Link to="/Blog" className="text-2xl font-bold text-gray-700 hover:underline">Build
                                            Your New Idea with Laravel Freamwork.</Link>
                                        <span className="block font-light text-gray-600">Jun 1, 2020</span>
                                        <p className="mt-2 text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                            Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim
                                            reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
                                    </div>
                                    <div className="flex items-center justify-between mt-4"><Link to="/Blog"
                                            className="text-blue-500 hover:underline">Read more</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6">
                            <div className="flex max-w-4xl px-10 py-6 bg-white rounded-lg shadow-md ">
                                <div className="w-1/2">
                                    <img className="w-full h-full" src={Post1} alt=""/>
                                </div>
                                <div className="w-1/2 mx-4">
                                    <div className="">
                                        <Link to="/Blog" className="text-2xl font-bold text-gray-700 hover:underline">Build
                                            Your New Idea with Laravel Freamwork.</Link>
                                        <span className="block font-light text-gray-600">Jun 1, 2020</span>
                                        <p className="mt-2 text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                            Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim
                                            reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
                                    </div>
                                    <div className="flex items-center justify-between mt-4"><Link to="/Blog"
                                            className="text-blue-500 hover:underline">Read more</Link>
                                    </div>
                                </div>
                            </div>
                        </div><div className="mt-6">
                            <div className="flex max-w-4xl px-10 py-6 bg-white rounded-lg shadow-md ">
                                <div className="w-1/2">
                                    <img className="w-full h-full" src={Post1} alt=""/>
                                </div>
                                <div className="w-1/2 mx-4">
                                    <div className="">
                                        <Link to="/Blog" className="text-2xl font-bold text-gray-700 hover:underline">Build
                                            Your New Idea with Laravel Freamwork.</Link>
                                        <span className="block font-light text-gray-600">Jun 1, 2020</span>
                                        <p className="mt-2 text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                            Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim
                                            reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
                                    </div>
                                    <div className="flex items-center justify-between mt-4"><Link to="/Blog"
                                            className="text-blue-500 hover:underline">Read more</Link>
                                    </div>
                                </div>
                            </div>
                        </div><div className="mt-6">
                            <div className="flex max-w-4xl px-10 py-6 bg-white rounded-lg shadow-md ">
                                <div className="w-1/2">
                                    <img className="w-full h-full" src={Post1} alt=""/>
                                </div>
                                <div className="w-1/2 mx-4">
                                    <div className="">
                                        <Link to="/Blog" className="text-2xl font-bold text-gray-700 hover:underline">Build
                                            Your New Idea with Laravel Freamwork.</Link>
                                        <span className="block font-light text-gray-600">Jun 1, 2020</span>
                                        <p className="mt-2 text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                            Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim
                                            reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
                                    </div>
                                    <div className="flex items-center justify-between mt-4"><Link to="/Blog"
                                            className="text-blue-500 hover:underline">Read more</Link>
                                    </div>
                                </div>
                            </div>
                        </div><div className="mt-6">
                            <div className="flex max-w-4xl px-10 py-6 bg-white rounded-lg shadow-md ">
                                <div className="w-1/2">
                                    <img className="w-full h-full" src={Post1} alt=""/>
                                </div>
                                <div className="w-1/2 mx-4">
                                    <div className="">
                                        <Link to="/Blog" className="text-2xl font-bold text-gray-700 hover:underline">Build
                                            Your New Idea with Laravel Freamwork.</Link>
                                        <span className="block font-light text-gray-600">Jun 1, 2020</span>
                                        <p className="mt-2 text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                            Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim
                                            reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
                                    </div>
                                    <div className="flex items-center justify-between mt-4"><Link to="/Blog"
                                            className="text-blue-500 hover:underline">Read more</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8">
                            <div className="flex">
                                <Link to="/Blog" className="px-3 py-2 mx-1 font-medium text-gray-500 bg-white rounded-md cursor-not-allowed">
                                    previous
                                </Link>
                            
                                <Link to="/Blog" className="px-3 py-2 mx-1 font-medium text-gray-700 bg-white rounded-md hover:bg-blue-500 hover:text-white">
                                    1
                                </Link>
                            
                                <Link to="/Blog" className="px-3 py-2 mx-1 font-medium text-gray-700 bg-white rounded-md hover:bg-blue-500 hover:text-white">
                                    2
                                </Link>
                            
                                <Link to="/Blog" className="px-3 py-2 mx-1 font-medium text-gray-700 bg-white rounded-md hover:bg-blue-500 hover:text-white">
                                    3
                                </Link>
                            
                                <Link to="/Blog" className="px-3 py-2 mx-1 font-medium text-gray-700 bg-white rounded-md hover:bg-blue-500 hover:text-white">
                                    Next
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="hidden w-4/12 -mx-8 lg:block">

                    <div className="px-8">
                            <h1 className="mb-4 text-xl font-bold text-gray-700 font-Rubik">Categories</h1>
                            <div className="max-w-sm px-4 py-6 bg-white rounded-lg shadow-md ">
                                <ul>
                                    <li className="py-3"><Link to="/Blog" 
                                        className="py-4 mx-1 my-4 font-semibold text-gray-700 text-md hover:text-gray-600 hover:underline">
                                            Organic</Link></li>
                                    <li className="py-3"><Link to="/Blog"
                                            className="py-4 mx-1 my-4 font-semibold text-gray-700 text-md hover:text-gray-600 hover:underline">
                                            Farm</Link></li>
                                    <li className="py-3"><Link to="/Blog"
                                            className="py-4 mx-1 my-4 font-semibold text-gray-700 text-md hover:text-gray-600 hover:underline">
                                            Vegan</Link></li>
                                    <li className="py-3"><Link to="/Blog"
                                            className="py-4 mx-1 my-4 font-semibold text-gray-700 text-md hover:text-gray-600 hover:underline">
                                            Farmers</Link></li>
                                    <li className="py-4"><Link to="/Blog"
                                            className="py-4 mx-1 my-4 font-semibold text-gray-700 text-md hover:text-gray-600 hover:underline"> 
                                            Healthy</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="px-8 mt-10">
                            <h1 className="mb-4 text-xl font-bold text-gray-700 font-Rubik">Authors</h1>
                            <div className="flex flex-col max-w-sm px-6 py-4 mx-auto bg-white rounded-lg shadow-md">
                                <ul className="-mx-4">
                                    <li className="flex items-center mt-6">
                                        <img
                                            src={Post1}
                                            alt="avatar" className="object-cover w-1/3 h-16 mx-4 "/>
                                        <p className="flex flex-col w-2/3 ">
                                            <Link to="/Blog" className="my-1 text-lg font-bold leading-tight text-gray-700 hover:underline">Reasons why you should choose organic</Link>
                                            <span className="text-sm font-light text-gray-700">August 4, 2020  No Comments</span></p>
                                    </li>
                                    <li className="flex items-center mt-6">
                                        <img
                                            src={Post1}
                                            alt="avatar" className="object-cover w-1/3 h-16 mx-4 "/>
                                        <p className="flex flex-col w-2/3 ">
                                            <Link to="/Blog" className="my-1 text-lg font-bold leading-tight text-gray-700 hover:underline">Reasons why you should choose organic</Link>
                                            <span className="text-sm font-light text-gray-700">August 4, 2020  No Comments</span></p>
                                    </li>
                                    <li className="flex items-center mt-6">
                                        <img
                                            src={Post1}
                                            alt="avatar" className="object-cover w-1/3 h-16 mx-4 "/>
                                        <p className="flex flex-col w-2/3 ">
                                            <Link to="/Blog" className="my-1 text-lg font-bold leading-tight text-gray-700 hover:underline">Reasons why you should choose organic</Link>
                                            <span className="text-sm font-light text-gray-700">August 4, 2020  No Comments</span></p>
                                    </li>
                                    <li className="flex items-center mt-6">
                                        <img
                                            src={Post1}
                                            alt="avatar" className="object-cover w-1/3 h-16 mx-4 "/>
                                        <p className="flex flex-col w-2/3 ">
                                            <Link to="/Blog" className="my-1 text-lg font-bold leading-tight text-gray-700 hover:underline">Reasons why you should choose organic</Link>
                                            <span className="text-sm font-light text-gray-700">August 4, 2020  No Comments</span></p>
                                    </li>
                                </ul>
                            </div>
                        </div>
            
                        <div className="px-8 mt-10">
                            <h1 className="mb-4 text-xl font-bold text-gray-700 font-Rubik">Recent Post</h1>
                            <div className="max-w-sm px-8 py-6 mx-auto bg-white rounded-lg shadow-md">
                            <ul className="flex flex-wrap ">
                                    <li className="inline-block px-2 py-3"><Link to="/Blog" 
                                        className="py-4 mx-1 my-4 font-semibold text-gray-700 text-md hover:text-gray-600 hover:underline">
                                            Farm</Link></li>
                                    <li className="inline-block px-2 py-3"><Link to="/Blog"
                                            className="py-4 mx-1 my-4 font-semibold text-gray-700 text-md hover:text-gray-600 hover:underline">
                                            Food</Link></li>
                                    <li className="inline-block px-2 py-3"><Link to="/Blog"
                                            className="py-4 mx-1 my-4 font-semibold text-gray-700 text-md hover:text-gray-600 hover:underline"> 
                                            Vegan</Link>
                                    </li>
                                    <li className="inline-block px-2 py-3"><Link to="/Blog"
                                            className="py-4 mx-1 my-4 font-semibold text-gray-700 text-md hover:text-gray-600 hover:underline">
                                            Organic</Link></li>
                                    <li className="inline-block px-2 py-3"><Link to="/Blog"
                                            className="py-4 mx-1 my-4 font-semibold text-gray-700 text-md hover:text-gray-600 hover:underline">
                                            Foog</Link></li>
                                    <li className="inline-block px-2 py-4"><Link to="/Blog"
                                            className="py-4 mx-1 my-4 font-semibold text-gray-700 text-md hover:text-gray-600 hover:underline"> 
                                            Experts</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="px-8 mt-10">
                            
                        <div className="relative h-screen max-w-md rounded-lg ">
                            <div className="absolute z-10 flex flex-col items-center top-24 w-sm">
                                <h2 className="mx-10 my-8 text-3xl text-center text-gray-600 font-Rubik text-semibold ">Best Offers for Restaurants</h2>
                                <button className="px-20 py-3 text-white transition duration-500 ease-in-out bg-green-600 rounded-full hover:bg-green-900"style={{"background":"#7FB800"}}>Submit</button>
                            </div>
                            <img className="absolute z-0 w-full h-2/3 opacity-60" src={Blogs8} alt=""/>
                        </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Blog
