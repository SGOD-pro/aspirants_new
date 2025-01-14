import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useAnimate = ({
	ref,
	animation,
	scrollTrigger = {},
}: {
	ref: React.RefObject<HTMLDivElement|null>;
	animation: gsap.TweenVars;
	scrollTrigger?: gsap.plugins.ScrollTriggerInstanceVars;
}) => {
	useGSAP(() => {
		// Handle null ref.current safely
		if (!ref.current) return;

		// Ensure TypeScript recognizes the type properly
		const elements = gsap.utils.toArray(ref.current.children) as HTMLElement[];

		elements.forEach((element) => {
			gsap.from(element, {
				...animation,
				scrollTrigger: {
					trigger: element,
					start: "top 80%",
					toggleActions: "play reverse play reverse",
					...scrollTrigger,
				},
			});
		});
		return () => ScrollTrigger.killAll();
	}, [ref, animation, scrollTrigger]);
};
