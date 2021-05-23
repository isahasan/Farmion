import React from "react";

import Landingimg from "../Assets/images/headerimg.png";
import Backgroundimg from "../Assets/images/background.jpg";
import Orange from "../Assets/banner/orange.png";
import Meat from "../Assets/banner/meat.png";
import Salad from "../Assets/banner/salad.png";
import Vegetables1 from "../Assets/images/vegetables1.png";
import Vegetables2 from "../Assets/images/vegetables2.jpg";
import Oils from "../Assets/images/oils.jpg";

import s1 from "../Assets/slider/s1.jpg";
import s2 from "../Assets/slider/s2.jpg";
import s3 from "../Assets/slider/s3.jpg";
import s4 from "../Assets/slider/s4.jpg";
import s5 from "../Assets/slider/s5.jpg";
import s6 from "../Assets/slider/s6.jpg";
import s7 from "../Assets/slider/s7.jpg";
import s8 from "../Assets/slider/s8.jpg";

import Customer1 from "../Assets/customer/customer1.jpg";
import Customer2 from "../Assets/customer/customer2.jpg";
import Customer3 from "../Assets/customer/customer3.jpg";

import Blogs1 from "../Assets/blogs/blogs1.jpg";
import Blogs2 from "../Assets/blogs/blogs2.jpg";
import Blogs3 from "../Assets/blogs/blogs3.jpg";

import Banner1 from "../Assets/banner/banner1.jpg";
import Banner2 from "../Assets/banner/banner2.jpg";
import Banner3 from "../Assets/banner/banner3.jpg";

import Brands1 from "../Assets/brands/brands1.png";
import Brands2 from "../Assets/brands/brands2.png";
import Brands3 from "../Assets/brands/brands3.png";
import Brands4 from "../Assets/brands/brands4.png";
import Brands5 from "../Assets/brands/brands5.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		cssEase: "linear",
		autoplay: true,
	};
	const Customers = {
		dots: true,
		infinite: true,
		speed: 2000,
		slidesToShow: 1,
		slidesToScroll: 1,
		cssEase: "linear",
		autoplay: true,
	};
	return (
		<div>
			<div className="flex overflow-hidden tracking-wide pt-44 max-w-screen font-Lato ">
				<div className="flex flex-col w-1/2 px-8 py-8 mx-3 ">
					<div className="px-4 py-8 my-6">
						<h1 className="font-bold text-gray-800 font-Rubik text-8xl">
							Eat Clean <br />
							Eat Organic{" "}
						</h1>
					</div>
					<p className="px-6 py-3 text-lg text-gray-600 font-Lato ">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit
						sint tempore corrupti nesciunt impedit quisquam, labore ullam deleniti
						animi repellendus!
					</p>
					<div className="flex justify-around my-6 ">
						<button
							className="px-20 my-5 text-xl font-bold text-white transition duration-500 ease-in-out rounded-full outline-none hover:bg-green-700"
							style={{ background: "#7FB800" }}
						>
							Read More
						</button>
						<button className="flex items-center px-4 py-4 my-3 text-gray-900 rounded-md ">
							<i className="mx-2 text-3xl text-yellow-500 far fa-play-circle"></i>Watch
							Video
						</button>
					</div>
				</div>
				<div className="relative w-1/2 mx-2">
					<img className="absolute z-10 w-11/12" src={Landingimg} alt="asdmaldnfn" />
					<img
						className="absolute z-0 w-full -top-40 -right-1/2"
						src={Backgroundimg}
						alt=""
					/>
				</div>
			</div>
			<div className="flex w-4/5 p-6 mx-12 -mt-8">
				<div className="flex p-6 mx-3 rounded-md shadow-lg ">
					<div className="w-24 mx-2 my-auto">
						<img src={Banner1} alt="" />
					</div>
					<div className="">
						<h3 className="my-3 text-2xl font-bold text-gray-800 font-Rubik">
							Naturall Food
						</h3>
						<p className=" font-Lato">Lorem ipsum dolor sit amet.</p>
					</div>
				</div>
				<div className="flex p-6 mx-3 rounded-md shadow-lg">
					<div className="w-24 mx-2 my-auto">
						<img src={Banner2} alt="" />
					</div>
					<div className="">
						<h3 className="my-3 text-2xl font-bold text-gray-800 font-Rubik">
							Naturall Food
						</h3>
						<p className=" font-Lato">Lorem ipsum dolor sit amet.</p>
					</div>
				</div>
				<div className="flex p-6 mx-3 rounded-md shadow-lg">
					<div className="w-24 mx-2 my-auto">
						<img src={Banner3} alt="" />
					</div>
					<div className="">
						<h3 className="my-3 text-2xl font-bold text-gray-800 font-Rubik">
							Naturall Food
						</h3>
						<p className="font-Lato ">Lorem ipsum dolor sit amet.</p>
					</div>
				</div>
			</div>
			<div className="flex flex-col my-20 max-w-screen">
				<div className="mx-auto my-20 text-center text-bold">
					<p
						className="p-6 m-6 text-xl font-samibold font-Lato "
						style={{ color: "#7FB800" }}
					>
						who we are
					</p>
					<h1 className="px-6 text-6xl font-bold text-gray-800 font-Rubik ">
						Few Words <br /> about farmion
					</h1>
				</div>
				<div className="flex items-center justify-center px-8 mx-4 max-w-screen">
					<div className="flex flex-col px-10 ml-32 ">
						<h2 className="my-6 text-xl text-bold ">
							Special Support and Caring Organic Farmino Agency
						</h2>
						<p className="font-Lato ">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
							dolor sit amet consectetur adipisicing elit. Facere eligendi Quam
							adipisci fuga unde provident, deserunt expedita!
						</p>
						<div className="flex items-center justify-center">
							<div className="py-6 mx-6 text-center text-green-400 border-2 border-green-200 rounded-full px-7 ">
								<i className="fas fa-check"></i>
							</div>
							<div className="px-3 my-4 ">
								<h2 className="my-2 text-xl text-bold">Natural Process</h2>
								<p className="font-Lato ">
									consectetur adipisicing elit. Cum suscipit nobis doloremque quos
									veritatis sunt?
								</p>
							</div>
						</div>
						<div className="flex items-center justify-center">
							<div className="py-6 mx-6 text-center text-yellow-500 border-2 border-yellow-400 rounded-full px-7 ">
								<i className="fas fa-check"></i>
							</div>
							<div className="px-3 my-4 ">
								<h2 className="my-2 text-xl text-bold">Natural Process</h2>
								<p className="font-Lato ">
									consectetur adipisicing elit. Cum suscipit nobis doloremque quos
									veritatis sunt?
								</p>
							</div>
						</div>
						<div className="flex items-center justify-center">
							<div className="py-6 mx-6 text-center text-green-400 border-2 border-green-400 rounded-full px-7 ">
								<i className="fas fa-check"></i>
							</div>
							<div className="px-3 my-4 ">
								<h2 className="my-2 text-xl text-bold">Natural Process</h2>
								<p className="font-Lato ">
									consectetur adipisicing elit. Cum suscipit nobis doloremque quos
									veritatis sunt?
								</p>
							</div>
						</div>
					</div>

					<div className="flex items-center ">
						<div className="flex flex-col items-center justify-center px-2 py-3 mx-3 transition duration-500 ease-in-out shadow-lg hover:bg-green-300 rounded-2xl ">
							<div className="w-20 h-20 mt-12 bg-green-600 rounded-full">
								<img className="mx-auto my-3" src={Orange} alt="dfasasdasadf" />
							</div>
							<div className="px-2 my-6 text-center ">
								<h2 className="my-3 text-2xl text-bold">Fruits Care</h2>
								<p className="font-Lato">
									Aenean eleifend rhoncus nisi, vel tincidunt eros euismod. Donec
									dignissim
								</p>
							</div>
						</div>
						<div className="flex flex-col items-center justify-center px-2 py-3 mx-3 transition duration-500 ease-in-out shadow-lg hover:bg-green-300 rounded-2xl ">
							<div className="w-20 h-20 mt-12 bg-green-600 rounded-full">
								<img className="mx-auto my-3" src={Salad} alt="dfasasdasadf" />
							</div>
							<div className="px-2 my-6 text-center ">
								<h2 className="my-3 text-2xl text-bold">Fruits Care</h2>
								<p className="font-Lato">
									Aenean eleifend rhoncus nisi, vel tincidunt eros euismod. Donec
									dignissim
								</p>
							</div>
						</div>
						<div className="flex flex-col items-center justify-center px-2 py-3 mx-3 transition duration-500 ease-in-out shadow-lg hover:bg-green-300 rounded-2xl">
							<div className="w-20 h-20 mt-12 bg-green-600 rounded-full">
								<img className="mx-auto my-3" src={Meat} alt="dfaafsdf" />
							</div>
							<div className="px-2 my-6 text-center ">
								<h2 className="my-3 text-2xl text-bold">Fruits Care</h2>
								<p className="font-Lato">
									Aenean eleifend rhoncus nisi, vel tincidunt eros euismod. Donec
									dignissim
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="h-screen max-w-screen">
				<div className="relative max-h-screen max-w-screen">
					<img className="absolute max-w-screen" src={Vegetables2} alt="" />
					<img
						className="absolute max-h-screen max-w-screen"
						src={Vegetables1}
						alt=""
					/>
					<div className="absolute max-h-screen text-center max-w-screen top-36 left-96">
						<h1
							style={{ color: "#7FB800" }}
							className="font-bold text-center text-gray-800 font-Rubik max-w-screen text-9xl "
						>
							FARMINO <br />
							<span className="text-yellow-500">ORGANIC</span>
						</h1>
						<button
							className="px-16 py-4 my-5 text-xl font-bold text-white transition duration-500 ease-in-out rounded-full outline-none hover:bg-green-700"
							style={{ background: "#7FB800" }}
						>
							About Farmino
						</button>
					</div>
				</div>
			</div>

			<div className="my-20 max-w-screen">
				<h2 className="my-6 text-center text-samibold" style={{ color: "#7FB800" }}>
					Who We are
				</h2>
				<div className="flex items-center max-w-screen ">
					<div className="w-1/2">
						<img src={Oils} alt="" />
					</div>
					<div className="w-1/2 px-2">
						<h1 className="py-2 my-2 text-6xl font-bold text-gray-800 font-Rubik">
							Special Support and Caring Farm Agency
						</h1>
						<p className="py-4 my-5 font-bold font-Lato">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
							suscipit neque similique tempora, voluptatibus delectus.
						</p>
						<div className="flex">
							<div className="flex flex-col w-1/3">
								<div className="relative px-4 py-3 box">
									<svg style={{ width: "150px", height: "150px", margin: "auto" }}>
										<circle
											style={{
												fill: "none",
												stroke: "#7FB800",
												strokeWidth: "10px",
												transform: "translate(5px,5px)",
												strokeDasharray: "440",
												strokeDashoffset: "100",
												strokeLinecap: "round",
											}}
											cx="70px"
											cy="70px"
											r="70px"
										></circle>
									</svg>
									<span className="absolute px-20 py-16 text-xl font-extrabold top-3 ">
										80%
									</span>
								</div>
								<h2 className="text-xl text-center text-bold ">Garden cart</h2>
							</div>
							<div className="flex flex-col w-1/3">
								<div className="relative px-4 py-3 box">
									<svg style={{ width: "150px", height: "150px", margin: "auto" }}>
										<circle
											style={{
												fill: "none",
												stroke: "#FAB522",
												strokeWidth: "10px",
												transform: "translate(5px,5px)",
												strokeDasharray: "440",
												strokeDashoffset: "0",
												strokeLinecap: "round",
											}}
											cx="70px"
											cy="70px"
											r="70px"
										></circle>
									</svg>
									<span className="absolute px-20 py-16 text-xl font-extrabold top-3 ">
										100%
									</span>
								</div>
								<h2 className="text-xl text-center text-bold ">Garden cart</h2>
							</div>
							<div className="flex flex-col w-1/3">
								<div className="relative px-4 py-3 box">
									<svg
										style={{
											width: "150px",
											height: "150px",
											margin: "auto",
											borderRadius: "50%",
										}}
									>
										<circle
											style={{
												fill: "none",
												stroke: "#7FB800",
												strokeWidth: "10px",
												transform: "translate(5px,5px)",
												strokeDasharray: "440",
												strokeDashoffset: "50",
												strokeLinecap: "round",
											}}
											cx="70px"
											cy="70px"
											r="70px"
										></circle>
									</svg>
									<span className="absolute px-20 py-16 text-xl font-extrabold top-3 ">
										90%
									</span>
								</div>
								<h2 className="text-xl text-center text-bold ">Garden cart</h2>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="block px-10 py-6 my-24 overflow-hidden max-w-screen">
				<Slider {...settings}>
					<img className="" src={s1} alt="" />
					<img className="" src={s2} alt="" />
					<img className="" src={s3} alt="" />
					<img className="" src={s4} alt="" />
					<img className="" src={s5} alt="" />
					<img className="" src={s6} alt="" />
					<img className="" src={s7} alt="" />
					<img className="" src={s8} alt="" />
				</Slider>
			</div>
			<div className="relative">
				<div className="relative py-8 my-20 overflow-hidden max-w-screen">
					<img
						className="absolute top-0 z-0 w-screen opacity-30"
						src={Vegetables2}
						alt=""
					/>

					<div className="w-screen">
						<div className="py-10 my-10 text-center">
							<h2 className="text-lg font-semibold" style={{ color: "#7FB800" }}>
								Testimonial{" "}
							</h2>
							<h1 className="text-6xl font-bold text-gray-800 font-Rubik">
								Our Happy <br />
								Clients Say
							</h1>
						</div>

						<div className="w-4/5 max-h-screen mx-auto ">
							<Slider {...Customers}>
								<div className="">
									<div className="flex px-3 py-5">
										<div className="inline-block h-56 w-58 ">
											<img
												className="object-cover w-full h-full rounded-full"
												src={Customer1}
												alt="asdkfpk"
											/>
										</div>
										<div className="px-7">
											<p className="font-Lato ">
												Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea pariatur
												quia similique delectus aliquid tenetur minus adipisci quis
												accusamus tempore?
											</p>
											<div className="my-5 ">
												<h2 className="font-samibold test-4xl">Samanta jeneu</h2>
												<h3 className="font-samibold test-4xl">Customer</h3>
											</div>
										</div>
									</div>
								</div>
								<div className="">
									<div className="flex px-3 py-5">
										<div className="inline-block h-56 w-58 ">
											<img
												className="object-cover w-full h-full rounded-full"
												src={Customer2}
												alt="asdkfpk"
											/>
										</div>
										<div className="px-7">
											<p className="font-Lato ">
												Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea pariatur
												quia similique delectus aliquid tenetur minus adipisci quis
												accusamus tempore?
											</p>
											<div className="my-5 ">
												<h2 className="font-samibold test-4xl">Samanta jeneu</h2>
												<h3 className="font-samibold test-4xl">Customer</h3>
											</div>
										</div>
									</div>
								</div>
								<div className="">
									<div className="flex px-3 py-5">
										<div className="inline-block h-56 w-58 ">
											<img
												className="object-cover w-full h-full rounded-full"
												src={Customer3}
												alt="asdkfpk"
											/>
										</div>
										<div className="px-7">
											<p className="font-Lato ">
												Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea pariatur
												quia similique delectus aliquid tenetur minus adipisci quis
												accusamus tempore?
											</p>
											<div className="my-5 ">
												<h2 className="font-samibold test-4xl">Samanta jeneu</h2>
												<h3 className="font-samibold test-4xl">Customer</h3>
											</div>
										</div>
									</div>
								</div>
							</Slider>
						</div>
					</div>
				</div>
			</div>

			<div className="max-w-screen mx-14 ">
				<div className="py-10 my-10">
					<h2 className="text-lg font-semibold" style={{ color: "#7FB800" }}>
						Testimonial{" "}
					</h2>
					<h1 className="text-6xl font-bold text-gray-800 font-Rubik">
						Blog Tips and <br />
						Articles To Grow
					</h1>
				</div>
				<div className="flex justify-center my-6 ">
					<div className="w-1/3 pb-4 mx-3 my-4 shadow">
						<img src={Blogs1} alt="" />
						<h2 className="py-3 text-2xl font-samibold">
							Lorem ipsum dolor sit amet.
						</h2>
						<p className="font-light font-Lato ">August 4, 2020 / No Comments</p>
					</div>
					<div className="w-1/3 pb-4 mx-3 my-4 shadow">
						<img src={Blogs2} alt="" />
						<h2 className="py-3 text-2xl font-samibold">
							Lorem ipsum dolor sit amet.
						</h2>
						<p className="font-light font-Lato ">August 4, 2020 / No Comments</p>
					</div>
					<div className="w-1/3 pb-4 mx-3 my-4 shadow">
						<img src={Blogs3} alt="" />
						<h2 className="py-3 text-2xl font-samibold">
							Lorem ipsum dolor sit amet.
						</h2>
						<p className="font-light font-Lato ">August 4, 2020 / No Comments</p>
					</div>
				</div>
			</div>
			<div className="mx-auto my-60 max-w-screen">
				<h2
					className="text-lg font-semibold text-center"
					style={{ color: "#7FB800" }}
				>
					Our Partners
				</h2>
				<div className="flex my-14 ">
					<img className="w-full px-6 mx-11" src={Brands1} alt="" />
					<img className="w-full px-6 mx-11" src={Brands2} alt="" />
					<img className="w-full px-6 mx-11" src={Brands3} alt="" />
					<img className="w-full px-6 mx-11" src={Brands4} alt="" />
					<img className="w-full px-6 mx-11" src={Brands5} alt="" />
				</div>
			</div>
		</div>
	);
}

export default Home;
