import React, { useRef } from "react";
import { useAnimate } from "@/hooks/useAnimate";

export function FadeIn({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	const ref = useRef<HTMLDivElement>(null);

	if (ref.current) {
		useAnimate({
			ref,
			animation: { opacity: 0, y: 100, duration: 0.5 },
		});
	}

	return (
		<div ref={ref} className={className}>
			{children}
		</div>
	);
}
