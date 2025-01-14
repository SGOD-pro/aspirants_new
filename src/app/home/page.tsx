"use client";
import Link from "next/link";
import React from "react";
import { MoveUpRight } from "lucide-react";
import CourseCard from "@/components/ui/CourseCard";
import ElitsCard from "@/components/ui/ElitsCard";
function HomePage() {
	return (
		<>
			<section className={`px-8 lg:px-14 py-16 relative font-medium`}>
				<div className="leading-none text-7xl font-bold">
					<h2 className="">Achive Excellence</h2>
					<h2 className="">
						{" "}
						with <span className="text-theme-secondary italic">Aspirants</span>
					</h2>
					<h2 className=""> Classes</h2>
				</div>
				<p className="mt-4 text-lg text-gray-600 w-1/3 min-w-80 font-semibold leading-none">
					Your premier destination for personalized educational support and
					professional guidance.
				</p>
				<Link href="#" className="links">
					view courses{" "}
					<span className="">
						<MoveUpRight size={16} />
					</span>
				</Link>

				{/* Stats Section */}
				<div className="flex mt-12 space-x-8">
					<div className="px-10 py-5 border-[3px] border-zinc-900 rounded-[2rem] shadow w-64 ">
						<div className="">
							<span className="px-2 py-1 text-theme-primary border-2 border-theme-primary bg-theme-primary-light rounded-xl text-lg">
								students
							</span>
						</div>
						<div className="mt-4 text-5xl font-medium text-black font-lexend">
							+2000
						</div>
					</div>
					<div className=" w-64 px-10 py-5 bg-theme-primary-light border-[3px] border-purple-500 rounded-[2rem] shadow">
						<div className="">
							<span className="px-2 py-1 border-2 bg-white text-slate-900 rounded-xl border-slate-900 text-lg">
								subjects
							</span>
						</div>
						<div className="mt-4 text-5xl font-medium font-lexend">+10</div>
					</div>
				</div>
			</section>

			<section className="sections">
				<div className="text-7xl font-medium leading-snug">
					<h2 className="">educational</h2>
					<div className="flex relative items-center">
						<div className="w-20 h-20 border-2 border-[#f7f7f7] rounded-full bg-slate-700">
							1
						</div>

						<div className="w-20 h-20 border-2 border-[#f7f7f7] rounded-full bg-slate-700">
							2
						</div>

						<div className="w-20 h-20 border-2 border-[#f7f7f7] rounded-full bg-slate-700">
							3
						</div>

						<div className="border-2 border-[#f7f7f7] rounded-full px-8 bg-theme-secondary-light flex items-start justify-center relative">
							<h2 className="-translate-y-3">practices</h2>
							<h2 className="hidden">practices</h2>
						</div>
					</div>
					<h2 className="">explore</h2>
				</div>
				<Link href={"#"} className="links">
					view blogs{" "}
					<span className="">
						<MoveUpRight size={16} />
					</span>
				</Link>

				<div className="mt-12 w-64 px-10 py-5 bg-theme-primary-light border-[3px] border-purple-500 rounded-[2rem] shadow">
					<div className="">
						<span className="px-2 py-1 border-2 bg-white text-slate-900 rounded-xl border-slate-900 text-lg">
							blogs
						</span>
					</div>
					<div className="mt-4 text-5xl font-medium font-lexend">+50</div>
				</div>
				{/* Right Section */}
				<div className="absolute md:w-1/2 flex items-center justify-center right-0 bottom-0">
					{/* Illustration */}
					<img
						src="/path-to-illustration.png"
						alt="Illustration"
						className="w-96"
					/>
				</div>
			</section>

			<section className="sections">
				{/* Title */}
				<h2 className="text-center text-7xl font-medium my-12 flex flex-col">
					Why Choose{" "}
					<div className="text-theme-primary flex justify-center">
						Us{" "}
						<span>
							<p className="-scale-x-100 rotate-180 translate-y-1">?</p>
						</span>
					</div>
				</h2>

				{/* Content Container */}
				<div className="flex flex-col md:flex-row items-center justify-between gap-12">
					{/* Illustration */}
					<div className="flex justify-center md:w-1/2 lg:max-w-96">
						<img
							src="/path-to-illustration.png"
							alt="Hands Illustration"
							className="w-64 md:w-80"
						/>
					</div>

					{/* Features Section */}
					<div className="flex flex-col gap-8 md:w-1/2 font-medium">
						{/* Feature 1 */}
						<div>
							<h3 className="text-3xl font-bold ">Comprehensive Curriculum</h3>
							<p className="text-gray-800">
								Our curriculum covers essential topics in depth, building strong
								foundations and preparing students for exams and future success.
							</p>
						</div>

						{/* Feature 2 */}
						<div className="text-right">
							<h3 className="text-3xl font-bold ">Personalized Attention</h3>
							<p className="text-gray-800">
								With small class sizes, we tailor instruction to each student’s
								needs, ensuring individual support for their growth and success.
							</p>
						</div>

						{/* Feature 3 */}
						<div>
							<h3 className="text-3xl font-bold">Flexible Scheduling</h3>
							<p className="text-gray-800">
								We offer online classes for parental convenience and can adjust
								batch timings to address students’ scheduling challenges.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="sections">
				<header className="flex flex-col md:flex-row items-center justify-between bg-gray-50 p-8">
					{/* Left Section */}
					<div className="text-left">
						<h1 className="text-7xl font-bold">
							Learn, <span className="text-theme-primary">Grow</span>,<br />{" "}
							Succeed
						</h1>
					</div>

					{/* Right Section */}
					<div className="mt-6 md:mt-0 flex flex-col items-start">
						<button className="px-6 py-2 bg-theme-secondary-light text-theme-secondary border-theme-secondary font-semibold rounded-2xl shadow-md transition border-2 text-lg">
							Our Courses
						</button>
						<p className="mt-4">Unlock Your Potential with Our Courses</p>
						<Link href="#explore" className="links">
							explore{" "}
							<span className="">
								<MoveUpRight size={16} />
							</span>
						</Link>
					</div>
				</header>
				<div className="mt-4">
					<button className="bg-black rounded-xl px-4 py-2 font-lexend text-lg text-white">
						New Arrivals
					</button>

					<div className=" flex flex-shrink-0 overflow-auto mt-5 gap-4">
						<CourseCard />
						<CourseCard />
						<CourseCard />
						<CourseCard />
						<CourseCard />
						<CourseCard />
						<CourseCard />
						<CourseCard />
						<CourseCard />
						<CourseCard />
					</div>
				</div>
			</section>

			

			<section className="sections">
				<h2 className="text-7xl font-semibold">Aspirants <span className="text-theme-primary">Elite's</span></h2>
				<div className=" flex flex-shrink-0 overflow-auto mt-14 gap-4">
					<ElitsCard/>
				</div>
			</section>

			<section className="sections">
				{/* Empowering Aspirations Section */}
				<div className="flex flex-col lg:flex-row items-center gap-8 p-8 bg-[#9EDBFA] rounded-3xl h-96">
					<div className="lg:w-1/2">
						<img
							src="https://via.placeholder.com/400"
							alt="Empowering Aspirations"
							className="w-full"
						/>
					</div>
					<div className="lg:w-1/2 flex flex-col gap-6 justify-center h-full">
						<h2 className="text-3xl font-bold  mb-4">
							Empowering Aspirations, Shaping Futures
						</h2>
						<p className="">
							At Aspirant Classes, we turn dreams into reality. With expert
							educators, a comprehensive curriculum, and personalized attention,
							we create an environment for students to excel academically and
							personally.
						</p>
						<p className="">
							Join us today and take the first step toward a brighter future!
						</p>
					</div>
				</div>

				{/* Contact Section */}
				<div className="mt-12 p-8">
					<h2 className="text-3xl font-bold text-gray-800 mb-6">
						Contact & Follow Us
					</h2>
					<ul className="space-y-4 text-gray-700">
						<li className="flex items-center gap-4">
							<span className="text-green-600 text-xl">
								<i className="fab fa-whatsapp"></i>
							</span>
							<a
								href="tel:+911234567890"
								className="text-blue-600 hover:underline"
							>
								+91 1234567890
							</a>
						</li>
						<li className="flex items-center gap-4">
							<span className="text-pink-600 text-xl">
								<i className="fab fa-instagram"></i>
							</span>
							<a
								href="https://instagram.com/aspirantsclasses"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-600 hover:underline"
							>
								@aspirantsclasses
							</a>
						</li>
						<li className="flex items-center gap-4">
							<span className="text-blue-600 text-xl">
								<i className="fas fa-phone"></i>
							</span>
							<a
								href="tel:+911234567890"
								className="text-blue-600 hover:underline"
							>
								+91 1234567890
							</a>
						</li>
						<li className="flex items-center gap-4">
							<span className="text-purple-600 text-xl">
								<i className="fas fa-map-marker-alt"></i>
							</span>
							<p>Rambagan, Doctors Colony</p>
						</li>
					</ul>
				</div>
			</section>
		</>
	);
}

export default HomePage;
