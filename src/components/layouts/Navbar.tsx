"use client";
import React from "react";
import { ChevronDown } from "lucide-react";
function Navbar() {
	return (
		<nav className="flex items-center justify-between px-8 py-4 border-b sticky top-0 z-10 bg-white">
			<div className="text-xl font-bold">
				<span className="text-black">Aspirants </span>
				<span className="text-theme-primary">classes</span>
			</div>
			<div className="flex space-x-6 font-medium">
				<a href="#" className="hover:text-theme-secondary">
					home
				</a>
				<a href="#" className="hover:text-theme-secondary">
					blog
				</a>
				<div className="relative group">
					<button className="hover:text-theme-secondary flex items-end">
						courses
						<span className="group-hover:rotate-180 transition-all">
							<ChevronDown size={20}/>
						</span>
					</button>
					<div className="absolute hidden mt-2 bg-white border rounded shadow-lg group-hover:block">
						<a href="#" className="block px-4 py-2 hover:bg-gray-200">
							Course 1
						</a>
						<a href="#" className="block px-4 py-2 hover:bg-gray-200">
							Course 2
						</a>
					</div>
				</div>
				<a href="#" className="hover:text-theme-secondary">
					gallery
				</a>
			</div>
			<div className="flex items-center space-x-4">
				<button className="px-3 py-1 text-theme-secondary border border-theme-secondary rounded-xl bg-theme-secondary-light hover:text-white font-medium">
					login
				</button>
			</div>
		</nav>
	);
}

export default Navbar;
