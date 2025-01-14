import Image from "next/image";
import React from "react";

function ElitsCard() {
	return (
		<div className="rounded-3xl p-4 bg-gray-300 w-80 flex-shrink-0">
			<div className="h-80 w-full relative mb-3">
				<div className="absolute inset-0 left-0 top-0"></div>
				<Image
					src="https://images.unsplash.com/photo-1735064812398-48f3bb6330c1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="course"
					width={400}
					height={400}
					objectFit="cover"
					className="rounded-2xl w-full h-full object-cover"
				/>
                <span className="absolute top-2 left-2 rounded-lg px-3  bg-gray-300 font-mediam font-lexend">Class 9</span>
			</div>
			<h3 className="font-semibold text-3xl capitalize">Ghost Cypher</h3>
			<div className="h-[1px] my-5 bg-black/60 rounded"></div>
			<p className="font-medium leading-none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, voluptatibus!</p>
		</div>
	);
}

export default ElitsCard;
