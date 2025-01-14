"use client";
import Image from "next/image";
import React from "react";

function CourseCard() {
	return (
		<div className="rounded-3xl p-4 bg-gray-300 w-80 flex-shrink-0">
			<div className="h-72 w-full relative">
                <div className="absolute inset-0 left-0 top-0"></div>
				<Image
					src="https://images.unsplash.com/photo-1735064812398-48f3bb6330c1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="course"
                    width={400}
					height={400}
					objectFit="cover"
					className="rounded-2xl w-full h-full object-cover"
				/>
			</div>
            <div className="h-[1px] my-5 bg-black/60 rounded"></div>
            <h3 className="font-semibold text-xl capitalize">Applied Statistics</h3>
            <button className="border-2 rounded-xl bg-theme-primary-light border-theme-primary uppercase w-full py-3 mt-4 font-medium">more details</button>
		</div>
	);
}

export default CourseCard;
